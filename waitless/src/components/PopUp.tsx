import HeaderPlato  from "./headerPlato";
import { acompañamientos } from "./acompañamientos";
import  FooterPopUp  from "./footerPopUp";
import { useState } from "react";
import { MenuTypes } from "@/pages";

interface Props {
  combinedArray: MenuTypes[][]; 
  arrayUsed: number; 
  keyPlato: number; 
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<Props> = ({combinedArray, arrayUsed, keyPlato, setShowPopUP, setShowMenu}) => {
  const [rotation, setRotation] = useState(false);
  const handleClickRotation = () => {
    setRotation(!rotation);
  };

  return <div className="h-screen w-screen pb-[7px] bg-background_popup overflow-x-hidden no-scrollbar">
   <HeaderPlato url={combinedArray[arrayUsed][keyPlato].image} setShowPopUP={setShowPopUP} setShowMenu={setShowMenu}/>
    <div className="w-screen h-fit pb-4 bg-background overflow-scroll drop-shadow-md">
      <h4 className="text pt-4 px-4 text-black">
        {combinedArray[arrayUsed][keyPlato].name}
      </h4>
      <p className="text pt-1 px-4 text-populetter leading-snug ">
        {combinedArray[arrayUsed][keyPlato].description}
      </p>
      <p className="text-black px-4 pt-1 font-bold">{combinedArray[arrayUsed][keyPlato].price}$</p>
    </div>
    <div className="w-screen h-fit pb-4 bg-background overflow-scroll mt-2 relative drop-shadow-md">
      <h4 className="text-black pt-4 px-4 w-fit">Guarnicion</h4>
      <button
        style={{ transform: `rotate(${rotation ? "180deg" : "0deg"})` }}
        className={"h-[16px] w-[16px] absolute top-4 right-7 transform focus:rotate-0 transition-transform"}
        onClick={handleClickRotation}
      >
        <img src="arrow-up.svg" alt="" />
      </button>
      <h6 className="text-populetter pb-4 px-4 font-normal">
        Elija 1 opción
      </h6>
      {rotation ? (
        acompañamientos()

      ) : (
        <></>
      )}
    </div>
    <div className="w-screen h-fit pb-4 mb-24 bg-background overflow-scroll mt-2 relative drop-shadow-md">
      <h4 className="text-black px-4 pt-4 pb-3">¿Tenes alguna especificacion?</h4>
      <div className="flex h-full w-full justify-center">
        <input type="text" className="w-[90%] h-20 bg-input text-black px-4 pb-4" placeholder="Especificaciones..." />
      </div>
    </div>

    <FooterPopUp titulo={combinedArray[arrayUsed][keyPlato].image} descripcion={combinedArray[arrayUsed][keyPlato].description} precio={combinedArray[arrayUsed][keyPlato].price}setShowPopUP={setShowPopUP} setShowMenu={setShowMenu}/>
  </div>;
}
export default PopUp
