import styles from "@/styles/curso.module.css"

//fn que ayuda a mostrar el curso con datos del curso recibidos por props
export default function Curso({curso}) {
    const {nombre, descripcion, imagen} = curso[0]; //extraccion de datos 
    // console.log(nombre);
  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso{
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .70)), url(${imagen})
            }
        `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
            <h2 className="heading">{nombre}</h2>
            <p>{descripcion}</p>
        </div>
      </div>
    </section>
  )
}
