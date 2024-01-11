"use client"
import api from "@/utils/api"
import { useEffect, useState } from 'react'
import Link from "@/hooks/Link"

export default function Home() {
  const [lists, setItems]: Array<any> = useState();

  useEffect(() => {
    api.get("/").then((res) => {
      setItems(res.data.lists);
    }).catch((error) => {
      console.log(error);
      return
    })
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <section className="flex flex-col gap-5 p-2">
        {lists &&
          lists.map((list: any) => (
            <div className="flex flex-col border-2 rounded p-2 gap-2" key={list._id}>
              <div className="flex justify-between">
                <h1>
                  {list.listTitle}
                </h1>
                <ul className="flex gap-4">
                  <li>
                    <Link href={'#'} >Editar</Link>
                  </li>
                  <li>
                    <Link href={'#'} >Excluir</Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                {
                  list.theme.map((item: any, i: number) => (
                    <div id="card" className="border-2 rounded p-2" key={i}>
                      <p>Nome: {item.title}</p>
                      <p>Tipo: {item.type}</p>
                      <p>
                        {item.type && /^[m/M]/.test(item.type) || /^[l/L]/.test(item.type)
                          ? `Capitulo: ${item.chapter}`
                          : `Episódio: ${item.chapter}`
                        }
                      </p>
                      {item.season &&
                        item.season !== 0
                        ? (<p>Temporada: {item.season}</p>)
                        : ''
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
        {!lists &&
          <h1 className="font-bold self-center">Você não possui nenhuma lista cadastrada no momento.</h1>
        }
      </section>
    </main >
  )
}
