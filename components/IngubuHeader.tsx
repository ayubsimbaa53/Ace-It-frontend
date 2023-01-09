// import Logo from './Logo'
import Title from './Title'
import Subtitle from './Subtitle'

export default function IngubuHeader(props: { title: string, subtitle: string }) {
    return (
        <>
            <div className='w-20 mb-10'>
                {/* <Logo></Logo> */}
            </div>
            <Title text={props.title}></Title>
            <Subtitle text={props.subtitle}></Subtitle>
        </>
    )
}