### 用來儲存所有Xpath ###

# 知識網
HOME = {
  '網址': 'https://ssp.eportal.npa.gov.tw/portal',
  '姓名': '/html[1]/body[1]/div[1]/div[2]/div[2]/div[2]/ul[1]/li[1]/table[1]/tbody[1]/tr[1]/td[2]',
}

# 戶役政系統
ADDRESS = {
  '網址': 'https://oi2.eportal.npa.gov.tw/NM109-505Web/index.jsp',
  "因公查詢鈕": '/html[1]/body[1]/div[3]/div[1]/div[1]/button[1]',
  '查詢個人戶籍鈕': '/html[1]/body[1]/nav[1]/div[1]/ul[1]/li[10]/div[1]/ul[1]/li[1]/a[1]',
  '用途選項': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[1]/td[4]/select[1]',
  '用途輸入': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[2]/td[4]/textarea[1]',
  # 可能有錯
  '統號輸入': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[2]/td[2]/input[1]',
  '查詢鈕': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[3]/td[1]/button[1]',
}

# 戶籍詳情
ADDRESS_DETAIL = {
  '姓名': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/lable[1]',
  "生日": '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/lable[1]',
  '出生地': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[4]/lable[1]',
  '戶籍': '/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[9]/td[2]/lable[1]',
}
