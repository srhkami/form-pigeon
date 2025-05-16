from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from ..handle_log import log


### 處理有關網頁元素的函數 ###

def find_element(driver, xpath):
  """
  尋找元素
  :param driver: 瀏覽器
  :param xpath: 絕對路徑
  :return:
  """
  element = driver.find_element(By.XPATH, xpath)
  return element


def button_click(driver, xpath):
  element = find_element(driver, xpath)
  element.click()


def select_value(driver, xpath, value: str):
  """
  選擇選項
  :param driver:
  :param xpath:
  :param value: 選項值，為文字
  :return:
  """
  element = find_element(driver, xpath)
  try:
    select = Select(element)
    select.select_by_value(value)
  except Exception as e:
    log().error(str(e), exc_info=True)
    raise TypeError('選擇選項失敗')


def input_value(driver, xpath, value: str):
  element = find_element(driver, xpath)
  try:
    element.clear()
    element.send_keys(value)
  except Exception as e:
    log().error(str(e), exc_info=True)
    raise TypeError('輸入文字失敗')
