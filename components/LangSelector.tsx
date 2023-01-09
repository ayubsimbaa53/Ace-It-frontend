import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RadioGroup } from '@headlessui/react';

export default function LangSelector(props: { className: string, lang: string, setLang: (lang: 'en' | 'es' | 'fr') => void }) {
    const availableLangs = [
        {
            lang: 'en',
            label: 'English',
        }, 
        {
            lang: 'es',
            label: 'Spanish',
        }, 
        {
            lang: 'fr',
            label: 'French',
        }, 
    ]
    return (
        <div className={'flex flex-row items-center ' + props.className}>
            <p className='mr-2 text-sm text-gray-500'>Select language</p>
            <RadioGroup value={props.lang} onChange={props.setLang} className="flex flex-row space-x-2">
                {
                    availableLangs.map(lang => (
                        <RadioGroup.Option className="cursor-pointer" value={lang.lang} key={lang.lang}>
                            {({checked}) => (
                                <div className={
                                    `flex flex-row items-center border px-2 py-1 hover:border-green-500 transition-all duration-200 ${checked ? 'border-green-500' : 'border-gray-200'}`}>
                                    {checked && <FontAwesomeIcon className='w-4 text-green-500 mr-1' icon={faCheckCircle}></FontAwesomeIcon>}
                                    <span className='text-gray-500'>{lang.label}</span>
                                </div>
                            )}
                        </RadioGroup.Option>
                        ))
                }
            </RadioGroup>
        </div>
        
    )
}