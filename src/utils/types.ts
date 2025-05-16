export type Response<T> = {
  status: number,
  message: string,
  data: T,
}

export type TStep = 0 | 1 | 2 | 3 | 4;

export type TQueryTarget = {
  reason: string, //查詢事由
  id_number: string, //身分證字號
  car_number?: string, //車牌號碼
  isHousehold: boolean, //戶役政查詢
  // isHouseholdPrint:boolean, //戶役政列印,
  isDriverLicense?: boolean, //駕籍查詢
  // isDriverLicensePrint:boolean, //駕籍查詢列印
  isCarLicense?: boolean, //車籍查詢
  // isCarLicensePrint:boolean, //車籍查詢列印
  isCriminalRecord?: boolean, //前科查詢
  // isCriminalRecordPrint:boolean, //前科查詢列印
  isHeadshot?: boolean, //大頭照
}

/* 嫌疑人詳情 */
export type TSuspectDetail = {
  name: string,
  sex: '男' | '女',
  birthday: Date,
  id_number: string,
  address: string, //戶籍地
  residence?: string, //現住地
  birth_place: string, //出生地
}

/* 案件詳情 */
export  type TCaseDetail = {
  charge: string, //罪名
  article: string, //所犯法條
  arrest_time: string, // 逮捕時間
  arrest_place: string, // 逮捕地點
  family?: string, // 親友
  // lawyer?: string, //律師
  // transfer_unit?: string, // 移送單位
  // exhibit?:string, // 證物
}

/* 單位詳情 */
export type TUnitDetial = {
  undertaker: string, // 承辦人
  unit_first: string,
  unit_second: string,
  unit_third: string,
  tel: string,
}

