import Image from "next/image";
import styles from "@/styles/guitarras.module.css"
import Layout from "@/components/layout";
import { useState } from "react";

//fn de next del lado del cliente al cargar recibe props que se envian de getSercersideProps
export default function Producto({guitarra, agregarCarrito}) {
    const [cantidad, setCantidad] = useState(0); 
    const {id_guitarra, nombre, descripcion, valor, imagen} = guitarra[0];
    // console.log(nombre);  
    // console.log(cantidad);
    const handleSubmit = e =>{
      e.preventDefault();
      if(cantidad <1 ){
        alert("Ingrese una cantidad >0");
        return;
      }
      //construir objeto 
      const guitarraSeleccionada = {
        id: id_guitarra,
        imagen,
        nombre,
        valor,
        cantidad
      }
      // console.log(guitarraSeleccionada);
      //pasar objeto al carrito
      agregarCarrito(guitarraSeleccionada);

    }


  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen} width={250} height={100} alt={`imagen de guitarra ${nombre}`} />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${valor}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">cantidad:</label>
            <select onChange={e=> setCantidad(parseInt(e.target.value))} id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

//para hacer rutas dinamicas se usa getStaticPaths ya que no es necesario consultar la api cada que se consulte la pagina. Primero se obtiene todos las guitarras de la api  y se guardan en paths para despues poder retornarlas hacia getStaticProps
export async function getStaticPaths() {
  // console.log(datos.query.id_guitarra);
  const resp = await fetch(`${process.env.API_URL}/guitarras`)
  const data = await resp.json();
  // console.log(data); 
  const paths = data.map(guitarra =>({
    params: {
      id_guitarra : guitarra.id_guitarra
    }
  }));
  // console.log(paths);
  return{
    paths,
    fallback: false
  }
}
//fn de next que se ejecuta en el servidor permite consultar datos que se pasan en la url y son tomados con params accediendo al id para poder hacer el fetch de la guitarra seleccionada 
export async function getStaticProps({params:{id_guitarra}}) {
   console.log(id_guitarra);
   const resp = await fetch(`${process.env.API_URL}/guitarras/${id_guitarra}`);
   const guitarra = await resp.json();
    // console.log(guitarra); 
  return{
    props:{
      guitarra

    }
  }
}
// //fn de next que se ejecuta en el servidor permite consultar datos que se cargan en la url y los recibe de manera automatica 
// export async function getServerSideProps(datos) {
//   // console.log(datos.query.id_guitarra);
//    const resp = await fetch(`${process.env.API_URL}/guitarras/${datos.query.id_guitarra}`)
//    const guitarra = await resp.json();
//     // console.log(guitarra); 
//   return{
//     props:{
//       guitarra

//     }
//   }
// }