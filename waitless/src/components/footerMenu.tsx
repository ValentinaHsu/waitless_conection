import { useState } from "react";
interface Props { 
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const FooterMenu: React.FC<Props> = ({setShowPedido, setShowMenu}) => {
const handleClickVerPedido = (pedido:boolean, Menu: boolean) =>{
  setShowPedido(pedido);
  setShowMenu(Menu);
}
//poner el precio según la variable (sumar componentes)
return <footer className="w-full h-[90px] bg-background bottom-0 absolute shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
      <p className="text-white" onClick={(event) => handleClickVerPedido(true, false) }>Ver pedido</p>
    </button>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">$2.000,0</h4> 
    </div>
  </footer>;
}
export default FooterMenu;

//poner en el Onclick
//faltan variables del pedido, entre otras.
function pedidoNuevo() {
  const pedido = fetch("http://localhost:3001", {
    method: "POST", 
    body: JSON.stringify({
      idPedido: idPedido,
      nombre: nombre,
      comentarios: comentarios
    })
  })

}