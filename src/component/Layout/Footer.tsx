

/* 底端欄 */
export default function Footer() {

  return (
    <div className='sticky bottom-0 bg-base-100 border-t-2 flex justify-between py-2 px-2 z-20'>
      <button className='btn btn-sm btn-primary mx-2' >新增圖片</button>
      <button className='btn btn-sm btn-success mx-2'>輸出檔案</button>
    </div>
  )
}