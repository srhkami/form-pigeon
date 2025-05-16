import {useState} from 'react'
import './App.css'
import {Toaster} from "react-hot-toast";
import Nav from "./component/Layout/Nav.tsx";
import Step2Input from "./component/Main/Step2Input.tsx";
import type {TQueryTarget, TStep} from "./utils/types.ts";
import Step1User from "./component/Main/Step1User.tsx";
import Step0Intro from "./component/Main/Step0Intro.tsx";

function App() {

  const [step, setStep] = useState<TStep>(0); // 步驟
  const [queryTarget, setQueryTarget] = useState<TQueryTarget | null>(null);

  return (
    <>
      <Nav/>
      <main className='flex flex-col justify-center items-center mt-3'>
        <progress className="progress w-96 mb-2" value={step} max={4}></progress>
        {step === 0 &&
          <Step0Intro setStep={setStep}/>
        }
        {step === 1 &&
          <Step1User setStep={setStep}/>
        }
        {step === 2 &&
          <Step2Input setStep={setStep} setData={setQueryTarget}/>
        }
        {/*{step === 3 &&*/}
        {/*  <Step3QueryTarget setStep={setStep} queryTarget={queryTarget} setData={setQueryTarget}/>*/}
        {/*}*/}
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
