type StepContentGenerationProps = {
    title: string
    blogSections: string[],
    blogSectionContent: string[]
}

export default function StepContentGeneration({title, blogSections, blogSectionContent}: StepContentGenerationProps) {
   
    
    return (
        <>
            <h2 className='text-3xl mb-2'>{title}</h2>
            <h3 className='text-xs text-gray-600 mb-4'>A blog post redacted by <span className='text-green-500'>Ace-It</span> at {new Intl.DateTimeFormat('es-ES').format(Date.now())}</h3>
            {blogSections.map((section, index) => (
                <div key={`article${index}`}>
                    <h4 className='text-green-500 text-xl font-bold mt-8 mb-4'>{section}</h4>
                    <div>{blogSectionContent[index]}</div>
                </div>

            ))}
        </>
    )

}