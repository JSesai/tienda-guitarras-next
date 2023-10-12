import Image from "next/image"; //fn de next que sirve para colocar imagenes con buen rendimiento
import Link from "next/link"; //fn de next que sirve para navegabilidad
import styles from "@/styles/blog.module.css" //usamos modulos de css para estilizar 
import { formatearFecha } from "@/utils/helpers.js"; //importa fn que ayuda a formatear fecha

//FN que es un post con la imagen nombre contenido y fecha de publicacion del post
export default function Post({post}) {
    // console.log(post);
    const {id,imagen, nombre, contenido, date} = post; //extracion de datos de lo que llega via props
  return (
    <article>
      <Image src={imagen} width={400} height={200} alt={`Imagen de ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.fecha}>{formatearFecha(date)}</p>
        <p className={styles.resumen}>{contenido}</p>
        {/* enlace que redirecciona a pagina con informacion del post mas detallada, lo hace de manera dinamica enviando a la carpeta blog y ahi esta un archivo en el cual se muestra la info, este archivo es nombrado de forma particular para que next sepa que se trata de una ruta dinamica entre corchetes va el nombre -> [cualquier_nombre].js y cuando se redirecciona se carga la info de la variable que pasas en la url la recuperas con ese nombre ejmeplo {"cualquier_nombre": "tuVariable" } */}
        <Link href={`/blog/${id}`} className={styles.enlace}> Leer Post </Link>
      </div>
    </article>
  )
}
