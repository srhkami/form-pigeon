import type {TStep} from "../../utils/types.ts";
import {FaCircleArrowRight} from "react-icons/fa6";
import {type Dispatch, type SetStateAction} from "react";
import toast from "react-hot-toast";

type Props = {
  setStep: Dispatch<SetStateAction<TStep>>
}

/* 第一步：輸入使用者資料 */
export default function Step1User({setStep}: Props) {

  const handleCheckLogin = () => {
    window.pywebview.api.wait_login()
      .then(res =>{
        if(res.status === 200){
          toast.success('已成功登入，姓名：' + res.message);
          setStep(2);
        }else{
          toast.error(res.message);
        }
      })
  }

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">第一步：登入知識聯網</h2>
        <div className='alert flex flex-col'>
          <div>請在本程式彈出的Chrome視窗內，登入知識聯網，成功後回到程式進行下一步</div>
          {/*<button className='btn btn-sm btn-soft btn-primary w-full' onClick={handleLogin}>檢查登入</button>*/}
        </div>
        <div className='flex justify-end mt-1'>
          <button className='btn btn-sm btn-success' onClick={handleCheckLogin}>
            下一步
            <FaCircleArrowRight/>
          </button>
        </div>
      </div>
    </div>
  )
}