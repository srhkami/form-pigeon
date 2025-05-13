export type TStep = 1 | 2 | 3;

export type TCaseInfo = {
  reason: string, //查詢事由
  id_number: string, //身分證字號
  car_number?: string, //車牌號碼
  // violation?: string, //違反內容
}

export type TQueryTarget = {
  isHousehold?: boolean, //戶役政查詢
  // isHouseholdPrint:boolean, //戶役政列印,
  isDriverLicense?: boolean, //駕籍查詢
  // isDriverLicensePrint:boolean, //駕籍查詢列印
  isCarLicense?: boolean, //車籍查詢
  // isCarLicensePrint:boolean, //車籍查詢列印
  isCriminalRecord?: boolean, //前科查詢
  // isCriminalRecordPrint:boolean, //前科查詢列印
}

/* 嫌疑人詳情 */
export type TSuspectDetail = {
  name?: string,
  birthday?: Date,
  address?: string,
  sex?:'男'|'女',
}


