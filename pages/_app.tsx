import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ApiContext from '../context/ApiContext';
import { Layout } from '../components/Layout';
import { useState } from 'react';

function GPTDemostratorApp({ Component, pageProps }: AppProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <ApiContext.Provider value={{password, setPassword, isLoading, setIsLoading}}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ApiContext.Provider>
    )
}

export default GPTDemostratorApp
