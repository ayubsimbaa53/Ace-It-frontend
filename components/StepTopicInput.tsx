import { useState } from 'react'
import { useApi } from '../hooks/useApi'
import { IngubuApi } from '../services/ingubuApi'
// import Logo from './Logo'

type StepTopicInputProps = {   
    setUserPrompt: (userPrompt: string) => void
    userPrompt: string,
    isLoading: boolean,
    onNext: (userPrompt: string) => void
}

export default function StepTopicInput({onNext, setUserPrompt, userPrompt, isLoading}: StepTopicInputProps) {
    
    
    

    function handleOnInput(e: any): void {
        setUserPrompt(e.target.value)
    }

    function handleOnNext(): void {
        onNext(userPrompt);
    }

    function handleOnKeyEnter(e: any): void {
        if (e.key === 'Enter') {
            handleOnNext();
        }
    }

    return (
        <>
        <div className='flex'>
            <div className='w-16 mr-8'>
                {/* <Logo/> */}
            </div>
            <div className='flex-1'>
                <p>About what do you want to write today?</p>
                <div className='flex md:flex-row flex-col'>
                    <input className='text-xl flex-1 w-full p-2 border-b border-green-500 outline-none focus:border-green-500 md:mr-8 mb-4 md:mb-0' 
                    value={userPrompt} onInput={handleOnInput} onKeyDown={handleOnKeyEnter}
                    placeholder="Write the prompt here" />
                    <button className='text-white bg-green-500 p-2 px-4 rounded-sm disabled:opacity-10' onClick={handleOnNext} disabled={isLoading}>Next</button>
                </div>
            </div>
        </div>
        </>
    )
}