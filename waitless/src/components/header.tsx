import Image from 'next/image';

export default function Header() {
    return(
        <header className="flex w-screen top-0 bg-opacity-100 h-[140px] bg-center overflow-hidden">
            <div className='overflow-hidden h-fit w-fit'>
                <img src="/SolomiaFotoEntrada.jpeg" alt="" className="justify-center"/>
            </div>
        </header>
    )
}