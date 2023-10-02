import FooterMenu from "./footerMenu";
import BtnSumarRestar2 from "./btnSumarRestar2";
import { useState } from "react";


interface Props { 
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContenidoPedido:React.FC<Props> = ({setShowPedido, setShowMenu}) => {
  const handleClickArrowBack = (EstadoMenu:boolean, EstadoPedido:boolean, EstadoPedidoEnviado:boolean ) =>{
    setShowPedido(EstadoPedido);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado)
  }
  const [showPedidoEnviado, setShowPedidoEnviado] = useState(false);

  return <main>
    {showPedidoEnviado ? (
        <>
          <div className="h-screen w-screen bg-white grid items-center">
            <div className=" h-fit w-fit grid place-items-center ">
              <h3 className="text-black mx-6 text-center font-normal">Tu pedido fue enviado y está en preparación</h3>
              <button className="rounded-[40px] w-fit h-[38px] bg-btngreen mt-7 flex justify-center items-center " onClick={(event) => handleClickArrowBack(true, false, false)}>
                  <img src="BackArowWhite.svg" alt="" className="w-5 h-5 my-2 mr-1 ml-2"/>
                  <h5 className="text-white my-2 mr-2">Volver al Menu</h5>
              </button>
            </div>
          </div>
        </>
        ) : (
        <>
          <div className="h-screen w-screen pb-[7px] bg-white overflow-x-hidden no-scrollbar">
    <header className="top-0 w-full h-[67px] flex items-center justify-center bg-white drop-shadow-md relative">
      <h3 className="font-bold text-black">Pedido de tu mesa</h3>
      <button className=" absolute left-0 ml-4 h-[25px] w-[25px] " onClick={(event) => handleClickArrowBack(true, false, false)}>
        <img src="arrowBlack.svg" alt="" className="h-full w-full" />
      </button>
    </header>
    <div className="h-full w-full">
      <div className="w-full h-fit ">
        <div className=" flex mt-9">
          <div className="relative w-[100%] h-6">
            <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
          </div>
          <h4 className="text-LineaVerdePedido px-2">Gimena</h4>
          <div className="relative w-[100%] h-6">
            <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
          </div>
        </div>
        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Papa al horno</h3>
            <p className="pl-14 text-letraGris truncate">aaaaaaaaaaaaaaaaaaa</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto ">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Pastel de papa</h3>
            <p className="pl-14 text-letraGris truncate">bbbbbbbbbbbbb</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">1500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>

        {/* separadooooooor */}

        <div className=" flex mt-3">
          <div className="relative w-[100%] h-6">
            <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
          </div>
          <h4 className="text-populetter px-2">Romina</h4>
          <div className="relative w-[100%] h-6">
            <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
          </div>
        </div>
        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div className="">
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex truncate">Calabaza</h3>
            <p className="pl-14 text-letraGris truncate">aaaaaaaaaaaaaaaaaaaaa</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Milanesa</h3>
            <p className="pl-14 text-letraGris truncate">cccccccccccccccccccccc</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">20000$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
      </div>
    </div>
    <FooterMenu setShowPedido={setShowPedido} setShowMenu={setShowMenu} setShowPedidoEnviado={setShowPedidoEnviado} EstadoPedidoEnviado={true} EstadoMenu={false} EstadoPedido={true} txtBoton="Enviar Pedido" />
  </div>
        </>
        )}
    
    </main>;
}
export default ContenidoPedido;