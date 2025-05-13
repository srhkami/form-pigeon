import type {Dispatch, SetStateAction} from "react";
import type {TCaseInfo, TQueryTarget, TStep} from "../../utils/types.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import {FaCircleArrowRight} from "react-icons/fa6";

type Props = {
  setStep: Dispatch<SetStateAction<TStep>>,
  caseInfo: TCaseInfo | null,
  setData: Dispatch<SetStateAction<TQueryTarget | null>>,
}

/* 第二步：輸入選項 */
export default function Step2QueryTarget({setStep, caseInfo, setData}: Props) {

  const {register, handleSubmit, formState: {errors}} = useForm<TQueryTarget>();

  const onSubmit: SubmitHandler<TQueryTarget> = (formData) => {
    setData(formData);
    setStep(3);
  }

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">第二步：選擇要查詢的項目</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                         disabled={caseInfo?.car_number === undefined}/>
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