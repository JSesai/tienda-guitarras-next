//PAGINA CON ROUTING DINAMICO QUE SIRVE PARA MOSTRAR EL POST QUE SE HAYA CLICKEADO, RECIBE UN QUERY POR URL Y CON ESE DATO SE HACE CONSULTA A LA API CON EL ID DEL POST SELECCIONADO, LA MANERA EN QUE SE NOMBRA EL ARCHIVO [id_blog].js ES COMO APARECE EL QUERY ES DECIR si seleccionas un post ejemplo tiene id 3 se pasa el id con el query id_blog : 3 y asi de manera dinamica
import Image from "next/image";
import styles from "@/styles/blog.module.css"
import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers";


export default function BlogId({post}) {
    // console.log(post[0]);
    const {nombre, imagen, date, contenido} = post[0];
  return (
    <Layout
    title={nombre}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen} width={800} height={200} alt={`Imagen de ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.fecha}>{formatearFecha(date)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}

// //fn de next que se ejecuta en el servidor permite consultar datos que se cargan en la url y los recibe de manera automatica
export async function getServerSideProps(datos) {
    //console.log(datos);
   const resp = await fetch(`${process.env.API_URL}/posts/${datos.query.id_blog}`)
   const post = await resp.json();
    // console.log(post); 
  return{
    props:{
      post

    }
  }
}
