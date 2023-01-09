import type { NextPage } from 'next'


import IngubuHeader from '../components/IngubuHeader'

import PasswordInstructions from '../components/PasswordInstructions'
import { useApi } from '../hooks/useApi'

const Home: NextPage = () => {
  const {password, setPassword, passwordIsValid} = useApi()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <main className='flex lg:flex-row lg:w-3/4 flex-col w-full p-16'>
        <div className='w-full lg:pr-16 mb-8 lg:mb-0 relative mt-16'>
          <IngubuHeader
            title="Ace-It Blog Content Generator"
            subtitle="with artificial intelligence"
          ></IngubuHeader>
          <p className='mt-8 text-gray-500'>The next demostrator shows a service that generate full blog content based on user input by an artificial inteligent agent trained with tourism  data.</p>
          <div className='mt-12'>
            <input className='text-sm w-full p-2 border-b mb-6 text-gray-500  outline-none focus:border-green-500 mt-8' value={password} placeholder="Insert Password" onInput={handleInput} />
            <PasswordInstructions isPasswordValid={passwordIsValid}></PasswordInstructions>
          </div>
        </div>
        {/* <div className='w-full flex'>
          
        </div> */}
      </main>
    </>
  )
}

export default Home
