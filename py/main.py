import json
import webview
import os.path
from handle_request import Response
from handle_log import log
from selenium import webdriver

DEBUG_MODE = True
driver = webdriver.Chrome()


class Api:
  def wait_login(self):
    """
    等待登入動作完成
    :param request: 情求的資料
    :return:
    """
    log().info('確認登入狀態...')
    # todo:這裡要判斷是否已經登入成功
    title = driver.title
    return Response(200, title).to_dict()

  def query_start(self, data):
    """
    開始查詢指定目標
    :param data: 送來的資料，包含證號、理由、要查詢範圍
    :return:
    """
    return Response(200, 'OK').to_dict()


if __name__ == '__main__':
  if DEBUG_MODE:
    log().error('注意！！DEBUG模式已開啟！！')
  driver.get('https://www.google.com/')
  log().info('請耐心等待程式開啟......')
  api = Api()
  url = os.path.join(os.getcwd(), './web/index.html') if not DEBUG_MODE else 'http://localhost:5173'
  window = webview.create_window(
    title='刑表小鴿手',
    url=url,
    js_api=api,
    min_size=(800, 500),
    maximized=True,
  )
  log().debug('程式開啟成功')
  webview.start(debug=DEBUG_MODE)
