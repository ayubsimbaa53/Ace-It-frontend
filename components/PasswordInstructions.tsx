import { NextComponentType } from 'next';
import Link from 'next/link';


export default function PasswordInstructions({isPasswordValid}: {isPasswordValid: boolean}) {
    return (
        <>
        {
            isPasswordValid ? (<Link href="/start"><a className='text-white bg-green-500 p-2 px-4 rounded-sm'>Start Demostration</a></Link>)
            :(<label className='text-md text-gray-500 mb-4 block'></label>)
        }
        </>
    )
}