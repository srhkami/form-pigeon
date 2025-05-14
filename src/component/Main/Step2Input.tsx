import type {TQueryTarget, TStep} from "../../utils/types.ts";
import type {Dispatch, SetStateAction} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";
import {FaCircleArrowRight} from "react-icons/fa6";

type Props = {
  setStep: Dispatch<SetStateAction<TStep>>,
  setData: Dispatch<SetStateAction<TQueryTarget | null>>,
}

/* 第二步：輸入查詢基本資訊*/
export default function Step2Input({setStep, setData}: Props) {

  const {register,watch, handleSubmit, formState: {errors}} = useForm<TQueryTarget>();

  const [car_number] = watch(['car_number'])

  const onSubmit: SubmitHandler<TQueryTarget> = (formData) => {
    setData(formData);
    // todo: 這裡要給後端資料，調用瀏覽器開始查詢

    setStep(3);
  }

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">第二步：輸入查詢基本資訊</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">案件資料</legend>

            <label className="label">查詢事由*</label>
            <input type="text" className="input input-sm" {...register('reason', {
              required: '務必需入查詢事由',
              minLength: {value: 6, message: '字數過少難以應對稽核，請多打一點'}
            })}/>
            {errors.reason && <span className='text-xs text-error text-start'>{errors.reason.message}</span>}


            <label className="label">查詢對象證號*</label>
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

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">查詢選項</legend>
            <div className='grid grid-cols-2'>
              <div className='mr-auto'>
                <label className="label">
                  <input type="checkbox" defaultChecked disabled className="checkbox" {...register('isHousehold')}/>
                  查詢戶役政
                </label>
                {errors.isHousehold &&
                  <span className='text-xs text-error text-start'>{errors.isHousehold.message}</span>}
              </div>
              <div className='mr-auto'>
                <label className="label">
                  <input type="checkbox" className="checkbox" {...register('isDriverLicense')}/>
                  查詢駕籍狀態
                </label>
                {errors.isDriverLicense &&
                  <span className='text-xs text-error text-start'>{errors.isDriverLicense.message}</span>}
              </div>
              <div className='mr-auto mt-5'>
                <label className="label">
                  <input type="checkbox" className="checkbox" {...register('isCarLicense')}
                         disabled={!car_number}/>
                  查詢車籍狀態
                </label>
                {errors.isCarLicense &&
                  <span className='text-xs text-error text-start'>{errors.isCarLicense.message}</span>}
              </div>
              <div className='mr-auto mt-5'>
                <label className="label">
                  <input type="checkbox" className="checkbox" {...register('isCriminalRecord')}/>
                  查詢刑案資料
                </label>
                {errors.isCriminalRecord &&
                  <span className='text-xs text-error text-start'>{errors.isCriminalRecord.message}</span>}
              </div>
            </div>
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