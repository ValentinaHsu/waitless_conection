import Image from 'next/image';

export default function Footer() {
    return(
        <footer className= "flex fixed bottom-0 content-center w-full h-[60px]" >
            <div className="flex min-w-full gap-20 justify-center place-items-center bg-footer  ">
                <button className="" id="footer_button"   >
                    <Image 
                        src="/homeicon.jpg" 
                        alt='Icono casa'
                        width={50}
                        height={50}
                    />
                </button>
                <button  className="" id="footer_button">
                    <Image 
                        src="/table.png" 
                        alt='Icono mesa'
                        width={50}
                        height={50}
                    />
                </button>
            </div>
        </footer>
    )
}