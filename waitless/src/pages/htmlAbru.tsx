import { QueryClientProvider, QueryClient, useQueryClient } from '@tanstack/react-query'
import { llamarTodoMenu, llamarComida, crearComida, actualizarComida, borrarComida } from '../../../backend/routes/apiFetch'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface MenuTypes {
  idFood: number
  category: string
  name: string
  description: string
}

const Abru = () => {
  const [menu, setMenu] = useState<MenuTypes[]>([])
  // const allMenu = useQuery({
  //   queryKey: ['todoMenu'], queryFn: async () => {
  //     const response = await fetch("http://localhost:3001/", {
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((response) => console.log(response.json()))
  //   }
  // })
  //const menuFood = useQuery({ queryKey: ['menuComida'], queryFn: getFoodWithPrisma })
  //const nuevoPedido = useQuery({ queryKey: ['creadoComida'], queryFn: createFoodWithPrisma })
  //const noPedido = useQuery({ queryKey: ['borradoComida'], queryFn: deleteFoodWithPrisma })
  //const cambioComida = useQuery({ queryKey: ['actualizadoComida'], queryFn: updateFoodWithPrisma })


  const getAllMenus = async () => {
    try {
      await axios.get("http://localhost:3001/menu").then((response) => {
        response.data !== [] ? setMenu(response.data.data) : []
      }).catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  getAllMenus()

  useEffect(() => {
    console.log(menu)
  }, [menu])

  return (
    <div>
      <ul>
        {
          Array.isArray(menu) ? (
            menu.map((item, index) => {
              return (
                <li key={index} className="">
                  <h2>{item.name}</h2>
                  <strong>{item.category}</strong>
                  <p>
                    {item.description}
                  </p>
                </li>
              )
            })
          ) : "ESTA VACIO"
        }
      </ul>
    </div>
  );
}

export default Abru
