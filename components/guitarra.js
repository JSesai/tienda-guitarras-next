import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/guitarras.module.css"


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
