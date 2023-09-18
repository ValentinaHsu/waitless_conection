import { useState } from "react";
interface Props {
  titulo: string;
  descripcion: string;
  precio: string;
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;

}
export interface Order {
  name: string;
  description: string;
  price: string;
}
const FooterPopUp: React.FC<Props> = ({ titulo, descripcion, precio, setShowPopUP, setShowMenu }) => {
  const [cantidad, setCantidad] = useState(0);
  const [pedido, setPedido] = useState<Order[]>([]);
  const handleClickSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleClickRestar = () => {
    if (cantidad >= 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handlePedido = () => {
    addPedido(titulo, descripcion, precio);
    console.log(pedido);
    setShowPopUP(false);
    setShowMenu(true);
  }

  const addPedido = (name: string, description: string, price: string) => {
    const NuevoPedido: Order[] = [...pedido, { name, description, price }];
    setPedido(pedido => [...pedido, { name, description, price }]);
  }

  const calcularSubtotal = () => {
    const subtotal = pedido.reduce((total, item) => total + parseFloat(item.price), 0);
    return subtotal.toFixed(2);
  };

  return <footer className="w-full h-[90px] bg-background bottom-0 absolute shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[89px]" onClick={handlePedido}>
      <p className="text-white" >Agregar</p>
    </button>
    <div className="border-solid border-2 border-[#252525] absolute rounded-2xl right-0 flex items-center justify-between mr-[126px] h-[38px] w-[89px]">
      <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center my-2 ml-1" onClick={handleClickRestar}>-</button> {/*8 de arriba, 4 del margin y 20 entre otros botones*/}
      <p className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center">{cantidad}</p>
      <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center mr-1" onClick={handleClickSumar}>+</button>
    </div>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">
        ${calcularSubtotal()}
      </h4>
    </div>
  </footer>;
}
export default FooterPopUp;