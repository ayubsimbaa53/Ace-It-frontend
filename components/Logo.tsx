import Image from 'next/image'
import logo from '../public/cropped-logo-ingubu-1.png'

export default function Logo() {
    return (
        <Image src={logo} alt="Ingubu Logotype" layout="intrinsic" />
    )
}