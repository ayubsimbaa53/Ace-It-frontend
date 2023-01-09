import { NextPage } from 'next';


import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';

import { StepCount } from '../components/StepCount';
import StepTopicInput from '../components/StepTopicInput';
import StepTitleSelect from '../components/StepTitleSelect';
import StepContentGeneration from '../components/StepContentGeneration';

import LangSelector from '../components/LangSelector';
import { RegenerateButton } from '../components/RegenerateButton';

export interface GeneratorConfigurationStep {
    index: number;
    title: string;
    
}

const StartPage: NextPage = () => {
    const {generate, isLoading, setIsLoading} = useApi()
    const [lang, setLang] = useState<'en' | 'es' | 'fr'>('en');
    
    const [userPrompt, setUserPrompt] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('')
    const [suggestedTitles, setSuggestedTitles] = useState(['']);
    const [blogSections, setBlogSections] = useState(['']);
    const [blogSectionContent, setBlogSectionContent] = useState(['']);
    const [currentStep, setStep] = useState(1);

    const steps: GeneratorConfigurationStep[] = [
        {
            index: 1,
            title: "Write a topic",
        
        },
        {
            index: 2,
            title: "Select a title",
        
        },
        {
            index: 3,
            title: "Generate content",
        
        },
    ]

    const generateTitles = async (prompt: string): Promise<void> => {
        setIsLoading(true)
        const response = await generate('blogTopic', prompt, lang);
        const suggestedTitles = response.split("<br>").filter(x => x.length > 10)
        setSuggestedTitles(suggestedTitles)
        setSelectedTitle(suggestedTitles[0])

        setStep(2)
        setIsLoading(false)
    }

    const generateBlogSections = async (articleTitle: string): Promise<string[]> => {
        const response = await generate('blogSection', articleTitle, lang);
        return response.split("<br>").filter(x => x.length > 10)
       
    }

    const generateSectionContent = async (articleTitle: string, sectionTitle: string[]) => {
            const responses = sectionTitle.map((x) => generate('blogExpander', articleTitle + ' ' + x, lang))
            const responseTexts = await Promise.all(responses)
            console.log(responseTexts)
            return responseTexts.map(x => `${x.replaceAll('<br>', '\n\n').split('.').slice(0, -1).filter(x => x.length > 4).join('.')}.`)
    }

    const generateBlogContent = async (articleTitle: string): Promise<void> => {
        setIsLoading(true)
        const sections = await generateBlogSections(articleTitle);
        const sectionContent = await generateSectionContent(articleTitle, sections);
        setBlogSections(sections);
        setBlogSectionContent(sectionContent);
        setStep(3)
        setIsLoading(false)
    }

    return (
        <>
        <div className={`
            top-0 left-0 right-0 bottom-0
            fixed pointer-events-none w-full h-full bg-white bg-opacity-95 z-50 flex items-center justify-center transition-all
            ${isLoading ? 'opacity-100' : 'opacity-0'}
            `}>
            <div className='w-2/12'>
              
            </div>
        </div>
        <main className='lg:w-3/4 w-full p-8 flex flex-col items-center pt-24'>
            <StepCount currentStep={currentStep} steps={steps} setStep={setStep}></StepCount>
            
            <div className='lg:w-5/12 md:w-6/12'>
                               
            </div>

            {currentStep === 1 && <LangSelector className="mt-8 mb-16" lang={lang} setLang={setLang}></LangSelector>}
            
            
            <div className='flex items-center w-full lg:w-8/12'>
                <div className='flex-1 pl-8'>
                    {currentStep === 1 && <StepTopicInput 
                        isLoading={isLoading}
                        userPrompt={userPrompt}
                        setUserPrompt={setUserPrompt}
                        onNext={generateTitles}
                        />
                    }

                    {currentStep === 2 &&  <>
                        <StepTitleSelect
                        suggestedTitles={suggestedTitles}
                        selectedTitle={selectedTitle}
                        setSelectedTitle={setSelectedTitle}
                        onNext={generateBlogContent}
                        />

                        <div className='flex items-center justify-center mt-8'>
                            <button onClick={()=>generateTitles(userPrompt)}>
                                <RegenerateButton></RegenerateButton>
                            </button>
                        </div>

                    </>
                    }

                    {currentStep === 3 && <>
                        <StepContentGeneration
                        blogSections={blogSections}
                        blogSectionContent={blogSectionContent}
                        title={selectedTitle}/>

                        <div className='flex items-center justify-center mt-8'>
                            <button onClick={() => generateBlogContent(selectedTitle)}>
                                <RegenerateButton></RegenerateButton>
                            </button>
                        </div>
                    </>
                    }
                    
                </div>
            </div>
        </main>
        
        </>
        
    )
}

export default StartPage