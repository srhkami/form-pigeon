from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from py.utils.handle_log import log
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



### 處理有關網頁元素的函數 ###

def find_element(driver, xpath, id=None):
  """
  尋找元素
  :param driver: 瀏覽器
  :param xpath: 絕對路徑
  :param id:
  :return:
  """
  if id:
    element = driver.find_element(By.ID, id)
  else:
    element = driver.find_element(By.XPATH, xpath)
  return element


def wait_element(driver, xpath, time=10):
  try:
    element = WebDriverWait(driver, time).until(
      EC.presence_of_element_located((By.XPATH, xpath))
    )
    return element
  except Exception as e:
    log().exception(f'找不到元素，{str(e)}')


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
