import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ApiContext from '../context/ApiContext';

export const useApi = () => {
    const context = useContext(ApiContext)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const login = async (password: string) => {
        if (password.length !== 77) {
            return false
        }
        try {
            const response = await fetch(baseUrl + '/login', {
                method: 'POST',
                headers: {'Authorization': 'Basic ' + Buffer.from('admin:' + password).toString('base64')}
            })
            const text = await response.text()
            return text === "True";
        }
        catch (err) {
            return false
        }
    }

    const generate = async (endpoint:'blogTopic'|'blogSection'|'blogExpander', prompt: string, lang: 'es'|'en'|'fr'): Promise<string> => {
        const response = await fetch(baseUrl + '/' + endpoint.toLowerCase(), {
            method: 'POST',
            headers: {'Authorization': 'Basic ' + Buffer.from('admin:' + context.password).toString('base64')},
            body: JSON.stringify({prompt, lang})
        })
        const text = await response.text()

        return text
    }

    useEffect(() => {
        login(context.password).then(valid => {
            setPasswordIsValid(valid)
            if (!valid) { Router.push('/') }
        })
    }, [context.password, context.isLoading])

    return {
        password: context.password,
        setPassword: context.setPassword,
        passwordIsValid,
        generate,
        isLoading: context.isLoading,
        setIsLoading: context.setIsLoading
    }
    
};