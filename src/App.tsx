import {useState} from 'react'
import './App.css'
import {Toaster} from "react-hot-toast";
import Nav from "./component/Layout/Nav.tsx";
import Step1CaseInfo from "./component/Main/Step1CaseInfo.tsx";
import type {TCaseInfo, TQueryTarget, TStep} from "./utils/types.ts";
import Step2QueryTarget from "./component/Main/Step2QueryTarget.tsx";

function App() {

  const [step, setStep] = useState<TStep>(1); // 步驟
  const [caseInfo, setCaseInfo] = useState<TCaseInfo|null>(null);
  const [queryTarget, setQueryTarget] = useState<TQueryTarget|null>(null);

  return (
    <>
      <Nav/>
      <main className='flex flex-col justify-center items-center mt-3'>
        <progress className="progress w-96 mb-2" value={step} max={3}></progress>
        {step === 1 &&
          <Step1CaseInfo setStep={setStep} setData={setCaseInfo}/>
        }
        {step === 2 &&
          <Step2QueryTarget setStep={setStep} caseInfo={caseInfo} setData={setQueryTarget}/>
        }
      </main>
      {/*<Footer/>*/}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
