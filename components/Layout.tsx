import { NextPage } from 'next'
import Head from 'next/head'

// import Navbar from "../components/Navbar"


export const Layout: NextPage = ({ children }) => {
    return (
        <>
            <Head>
            <title>ACE-IT - Blog Content Generator</title>
            <meta name="description" content="An application that generates blog posts through artificial intelligence agents" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            </Head>
            {/* <Navbar /> */}
            <div className='block min-h-{100vh} w-full'>
                <div className='w-full flex items-start md:items-center md:justify-center'>
                    {children}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
            
        </>
    )
}