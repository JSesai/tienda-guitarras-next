import Image from "next/image"; //fn de next para optimizar imagenes
import Link from "next/link"; //fn de next para poder navegar entre las rutas
import styles from "@/styles/guitarras.module.css" //exportacion de modulos de css 

// COMPONENTE QUE CONSTRUYE LAS GUITARRAS, RECIBE VIA PROPS LOS DATOS A RENDERIZAR 
export default function Guitarra({guitarra}) {
  const {nombre, valor, imagen, descripcion, id_guitarra} = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image src={imagen} width={250} height={100} alt={`imagen de guitarra ${nombre}`} 
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${valor}</p>
        <Link href={`guitarras/${id_guitarra}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}
