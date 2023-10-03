import { useState } from "react";

type btnSumarRestarProps = {
    x?: number;
    y?: number;
}

const btnSumarRestar2: React.FC=()=>{
  const [cantidad, setCantidad] = useState(1);
  const handleClickSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleClickRestar = () => { 
    if(cantidad>1){
      setCantidad(cantidad - 1);
    }
  };
  return  <div className="border-solid border-2 border-[#252525]  rounded-2xl  flex items-center justify-between h-[38px] w-[89px]">
  <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center my-2 ml-1" onClick={handleClickRestar}>-</button> {/*8 de arriba, 4 del margin y 20 entre otros botones*/}
  <p className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center">{cantidad}</p>
  <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center mr-1" onClick={handleClickSumar}>+</button>
</div>
}
export default btnSumarRestar2