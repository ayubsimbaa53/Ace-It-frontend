import { createContext } from 'react';

const ApiContext = createContext({
    password: '', 
    setPassword: (password:string) => {},
    isLoading: false,
    setIsLoading: (isLoading: boolean) => {}
});

export default ApiContext;
