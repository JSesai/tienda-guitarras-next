import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers.js";


export default function Post({post}) {
    console.log(post);
    const {id,imagen, nombre, contenido, date} = post;
  return (
    <article>
      <Image src={imagen} width={400} height={200} alt={`Imagen de ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.fecha}>{formatearFecha(date)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${id}`} className={styles.enlace}> Leer Post </Link>
      </div>
    </article>
  )
}
