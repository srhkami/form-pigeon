import type {TStep} from "../../utils/types.ts";
import {FaCircleArrowRight} from "react-icons/fa6";
import {type Dispatch, type SetStateAction} from "react";
import {MdNumbers} from "react-icons/md";
import {FaShareAlt} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";


type Props = {
  setStep: Dispatch<SetStateAction<TStep>>
}

/* 第零步：介紹畫面 */
export default function Step0Intro({setStep}: Props) {

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        {/*<h2 className="card-title">第一步：登入知識聯網</h2>*/}
        <div className='alert flex flex-col mt-1'>
          <div className='text-lg font-bold'>免責聲明</div>
          <p className='text-start indent-7'>
            本程式功能，僅為替代使用者在瀏覽器中輸入、點擊的行為，改以自動化流程進行；所有在知識聯網中的查詢操作，均會自動帶入查詢理由，有跡可循。
          </p>
          <p className='text-start indent-7'>
            本程式使用 Python + React 編寫而成，除自動檢測更新功能外，其餘功能均不連網，不涉及任何上傳資訊至網際網路的功能。
          </p>
          <p className='text-start indent-7 underline'>
            如您對上列事項有任何顧慮，請立即關閉並刪除此軟體，否則均視為您已詳閱並同意本聲明。
          </p>
        </div>
        <div className='divider my-1'></div>
        <div className='grid grid-cols-5 gap-2 font-bold text-gray-300'>
          <div className='flex justify-start items-center'>
            <BsFillPersonLinesFill className='mr-2'/>
            作者
          </div>
          <div className='col-span-2 text-start'>
            蔡智楷 C.K.SAI
            <br/>
            <span className='text-xs'>嘉義縣警察局民雄分局</span>
          </div>
          <div className='col-span-2 flex'>
            <a className='btn btn-info btn-sm btn-soft ml-auto' href="https://trafficpigeon.com/feedback/web"
               target='_blank'>聯繫作者</a>
          </div>
          <div className='flex justify-start items-center'>
            <MdNumbers className='mr-2'/>
            版本
          </div>
          <div className='col-span-2 text-start flex items-center'>
            留空
          </div>
          <div className='col-span-2 flex'>
            <a className='btn btn-info btn-sm btn-soft ml-auto' target='_blank'
               href='https://drive.google.com/drive/folders/1VRCiQbSn09LS3aWd4mgw_Eczls9wJsRm?usp=drive_link'>
              檢查新版
            </a>
          </div>
          <div className='col-span-5 flex justify-start items-center mt-2'>
            <FaShareAlt className='mr-2'/>
            本軟體分享於
            <a className='link link-info ml-1' href="https://trafficpigeon.com/"
               target='_blank'>交通鴿手</a>
          </div>
        </div>
        <div className='flex justify-end mt-1'>
          <button className='btn btn-sm btn-success ' onClick={() => setStep(1)}>
            讓我們開始
            <FaCircleArrowRight/>
          </button>
        </div>
      </div>
    </div>
  )
}