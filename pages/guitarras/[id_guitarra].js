import { useRouter } from "next/router" //fn de next que nos permite hacer uso de la informacion de la url 

export default function Producto() {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      id_guitarra
    </div>
  )
}
