import { Inter } from "next/font/google";
import { type } from "os";
import { useEffect, useState } from "react";
import ScrollBar from "../components/scrollbar";
import HeaderMenu from "../components/headerMenu";
import PopUp from "../components/PopUp";
import FooterMenu from "../components/footerMenu";
import ContenidoPedido  from "../components/ContenidoPedido";
import { useQuery } from '@tanstack/react-query';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { llamarTodoMenu, llamarComida, crearComida, actualizarComida, borrarComida,  } from '../../../nodejs/fetch';
import axios from "axios";

export interface MenuTypes {
  idFood: number;
  category: string;
  price: string;
  name: string;
  description: string;
  image: string;
}

const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}></QueryClientProvider>

const inter = Inter({ subsets: ["latin"] });



export default function Menu() {
  const [menu, setMenu] = useState<MenuTypes[]>([]);

  const separateMenuItemsByCategory = (menuItems: MenuTypes[]): MenuTypes[][] => {
    let platoEntrada: MenuTypes[] = [];
    let platoPrincipal: MenuTypes[] = [];
    let platoPostre: MenuTypes[] = [];

    //console.log(menuItems);

    const entradas = menuItems.filter((item) => item.category === "entrada");
    const principales = menuItems.filter((item) => item.category === "plato principal");
    const postres = menuItems.filter((item) => item.category === "postre");

    return [entradas, principales, postres];
  };
  const combinedArray = separateMenuItemsByCategory(menu);
  //console.log(combinedArray);
  /*
    for (let i = 0; i < menu.length; i++) {  
      platoEntrada = menu.filter((plato) => {
      return plato[i].category === "Entrada";
      });
      platoPrincipal = menu.filter((plato) => {
      return plato[i].category === "Principal";
      });
      platoPostre = menu.filter((plato) => {
      return plato[i].category === "Postre";
      });
    }
    let combinedArray = [platoEntrada, platoPrincipal, platoPostre];
    console.log(combinedArray);
    */

  // const combinedArray = [platoEntrada, platoPrincipal, platoPostre];
  /*
  for (let i = 0; i < combinedArray.length; i++) {
    const currentPlato = combinedArray[i];
  }  
*/

  const getAllMenus = async () => {
    try {
      await axios.get("http://localhost:3001/menu").then((response) => {
        console.log(response)
        response.data !== [] ? setMenu(response.data.data) : setMenu([])
      }).catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getAllMenus();
  }, [])

  const MaxLength = (description: string, MaxCharcters: number): string => {
    if (description.length <= MaxCharcters) {
      return description;
    }
    let descrptionShort = description.substring(0, MaxCharcters);
    const LastSpace = descrptionShort.lastIndexOf(" ");

    if (LastSpace !== -1) {
      descrptionShort = descrptionShort.substring(0, LastSpace);
    } else {
      return descrptionShort;
    }

    return descrptionShort + " ...";
  };

  const [showPopUP, setShowPopUP] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showPedido, setShowPedido] = useState(false);
  const [keyPlato, setKeyPlato] = useState(0);
  const [arrayUsed, setarrayUsed] = useState(0);


  const handleclick = (key: number, estado: boolean, array: number) => {
    setShowPopUP(estado);
    setShowMenu(!estado)
    setKeyPlato(key);
    setarrayUsed(array);
  };

  const handleClickArrowBack = (pedido: boolean, Menu: boolean) => {
    setShowPedido(pedido);
    setShowMenu(Menu);
    
  }

  return (

    <main className="">
      <div className="h-screen w-screen pb-[7px] bg-background overflow-x-hidden no-scrollbar" id="general">
        {showPopUP ? (
          <PopUp
            combinedArray={combinedArray}
            arrayUsed={arrayUsed}
            keyPlato={keyPlato}
            setShowPopUP={setShowPopUP}
            setShowMenu={setShowMenu}
          ></PopUp>
        ) : (<></>)}
        {showMenu ? (
          <>
            <HeaderMenu />
            <ScrollBar />

            <h3 className="text-black text mt-4 ml-4" id="entradas">
              Entradas
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]" id="div1">
              {combinedArray[0].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 0)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida.image}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    >
                    </img>
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida.name}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida.description, 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-black text mt-4 ml-4" id="principales" >
              Platos principales
            </h3>

            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[1].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 1)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida.image}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida.name}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida.description, 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-black text mt-4 ml-4" id="postres">
              Postres
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[2].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 2)}
                  className="container m-2 h-fit content-center pb-28"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida.image}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida.name}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida.description, 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <FooterMenu setShowPedido={setShowPedido} setShowMenu={setShowMenu} setShowPedidoEnviado={setShowMenu} EstadoPedidoEnviado={false} EstadoPedido={true} EstadoMenu={false} txtBoton="Ver Pedido"/>
          </>
        ) : (<></>)}
        {showPedido ? (
          <>
             <ContenidoPedido setShowMenu={setShowMenu} setShowPedido={setShowPedido} />
          </>
        ) : (<></>)}
      </div>
    </main>
  );
}
