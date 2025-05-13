import type {TCaseInfo, TStep} from "../../utils/types.ts";
import type {Dispatch, SetStateAction} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";
import {FaCircleArrowRight} from "react-icons/fa6";


type Props = {
  setStep: Dispatch<SetStateAction<TStep>>,
  setData: Dispatch<SetStateAction<TCaseInfo | null>>,
}
/* 第一步：輸入案件資料*/
export default function Step1CaseInfo({setStep, setData}: Props) {

  const {register, handleSubmit, formState: {errors}} = useForm<TCaseInfo>();

  const onSubmit: SubmitHandler<TCaseInfo> = (formData) => {
    setData(formData);
    setStep(2);
  }

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">第一步：輸入案件基本資料</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">案件資料</legend>

            <label className="label">查詢事由*</label>
            <input type="text" className="input input-sm" {...register('reason', {
              required: '務必需入查詢事由',
              minLength: {value: 6, message: '字數過少難以應對稽核，請多打一點'}
            })}/>
            {errors.reason && <span className='text-xs text-error text-start'>{errors.reason.message}</span>}


            <label className="label">嫌疑人證號*</label>
            <input type="text" className="input input-sm" {...register('id_number', {
              required: '此欄位必填',
              pattern: {value: /^[A-Z][12][0-9]{8}$/, message: '格式不符'},
            })}/>
            {errors.id_number && <span className='text-xs text-error text-start'>{errors.id_number.message}</span>}

            <label className="label">車牌號碼</label>
            <input type="text" className="input input-sm"
                   placeholder='如您要查詢車籍，請輸入此欄' {...register('car_number', {
              minLength: {value: 5, message: '字數過少'},
              maxLength: {value: 8, message: '字數過多'},
            })}/>
            {errors.car_number && <span className='text-xs text-error text-start'>{errors.car_number.message}</span>}

            {/*<label className="label">違反法條</label>*/}
            {/*<input type="text" className="input input-sm"*/}
            {/*       placeholder='如您要查詢前科，請輸入此欄' {...register('violation')}/>*/}
            {/*{errors.violation && <span className='text-xs text-error text-start'>{errors.violation.message}</span>}*/}

          </fieldset>
          <div className='flex justify-end mt-3'>
            <button className='btn btn-sm btn-success'>
              下一步
              <FaCircleArrowRight/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}