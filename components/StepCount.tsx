import { GeneratorConfigurationStep } from '../pages/start'

export function StepCount({steps, currentStep, setStep}: {steps: GeneratorConfigurationStep[], currentStep:number, setStep: (step: number) => void}) {
    return <ul className='grid grid-cols-3 gap-2'>
                    {steps.map((step) => (
                        <button
                        key={step.index}
                        className='
                        flex 
                        flex-col 
                        items-center
                        cursor-pointer
                        text-gray-400
                        disabled:opacity-50
                        disabled:pointer-events-none
                        group
                        hover:text-green-500
                        transition-all
                        '
                        onClick={() => setStep(step.index)}
                        disabled={currentStep<step.index}
                        >
                            <span className={`
                            flex 
                            items-center 
                            aspect-square 
                            rounded-full 
                            justify-center 
                            text-white 
                            w-20 
                            mb-4
                            group-hover:bg-green-500
                            transition-all
                            
                            ${step.index === currentStep ? 'bg-green-500' : 'bg-gray-300'}
                            `}>{step.index}</span> 
                            {step.title}</button>))}
                </ul>
}