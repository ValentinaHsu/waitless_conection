// export function headerPlato(url: string, setShowPopUP:React.Dispatch<React.SetStateAction<boolean>>, setShowMenu:React.Dispatch<React.SetStateAction<boolean>>) 

interface a {
  url: string;
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderPopUp: React.FC<a> = ({url, setShowPopUP, setShowMenu}) => {
  const HandleClick = () =>{
    setShowPopUP(false);
    setShowMenu(true);

  }
  return <header className="flex w-screen top-0  h-[204px] overflow-hidden items-center">
    <div className=" h-fit w-fit relative  " id="FotoComida">
      <img
        src={url} 
        alt=""
        className="h-[100%] w-[100%] "
      >
      </img>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-gradient-to-b from-black opacity-[0.55]" />
      <button onClick={HandleClick} className="absolute h-[25px] w-[25px] top-[50%] mt-[-24%] ml-2 z-20">
        <img src="arrowWhite.svg" alt="" /></button>
    </div>
  </header>;
  
}
export default HeaderPopUp;