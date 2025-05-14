import type {Response, TQueryTarget} from "./utils/types.ts";

export {};

/* 自訂的全局類別，用來定義API接口格式 */
declare global {
  interface Window {
    pywebview: {
      api: {
        wait_login(): Promise<Response<null>>,
        query_start(data: TQueryTarget): Promise<Response<null>>,
      };
    }
  }
}