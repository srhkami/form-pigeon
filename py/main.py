import time

import webview
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import os.path
from py.utils.handle_request import Response
from py.utils.handle_log import log
from py.browser.handle_element import find_element, wait_element, button_click, select_value, input_value

from py.browser.xpath import HOME, ADDRESS

DEBUG_MODE = False

driver = webdriver.Chrome()
driver.implicitly_wait(3)


class Api:
  def wait_login(self):
    """
    等待登入動作完成
    :param request: 情求的資料
    :return:
    """
    log().info('確認登入狀態...')
    try:
      user_name = find_element(driver, HOME['姓名']).text
      return Response(200, user_name).to_dict()
    except Exception as e:
      log().exception(str(e), exc_info=True)
      return Response(500, '驗證登入失敗').to_dict()

  def query_address(self, data):
    """
    查詢戶役政
    :param data: 送來的資料，包含證號、理由、要查詢範圍
    :return:
    """
    id_number = data.get('id_number')
    reason = data.get('reason')
    if not reason or not id_number:
      return Response(400, '缺少關鍵資訊').to_dict()
    driver.switch_to.new_window('tab')

    driver.get(ADDRESS['網址'])
    # todo:這邊要使用知識聯網點擊開啟，才能找到元素
    # 解開非因公查詢限制
    driver.execute_script("document.querySelector('.alertOverlay').remove();")
    driver.execute_script("document.querySelector('body').style = 'pointer-events:auto';")
    driver.execute_script("document.querySelector ('body').style = 'overflow:auto';")
    button_click(driver, ADDRESS['查詢個人戶籍鈕'])
    select_value(driver, ADDRESS['用途選項'], '8')
    select_value(driver, ADDRESS['用途輸入'], reason)
    input_value(driver, ADDRESS['統號輸入'], id_number)
    button_click(driver, ADDRESS['查詢鈕'])
    return Response(200, '查詢戶役政完畢').to_dict()


if __name__ == '__main__':
  if DEBUG_MODE:
    log().error('注意！！DEBUG模式已開啟！！')
  log().info('請耐心等待程式開啟......')
  driver.get(HOME['網址'])
  driver.execute_script("alert('先不要操作或關閉此頁面！請先回到程式畫面')")
  api = Api()
  url = os.path.join(os.getcwd(), './html/index.html') if not DEBUG_MODE else 'http://localhost:5173'
  window = webview.create_window(
    title='刑表小鴿手',
    url=url,
    js_api=api,
    min_size=(800, 500),
    maximized=True,
  )
  log().debug('程式開啟成功')
  webview.start(debug=DEBUG_MODE)
