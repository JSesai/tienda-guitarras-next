// PAGINA DE NOSOTROS
import Image from "next/image"
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
import styles from "@/styles/nosotros.module.css"
export default function Nosotros() {
  return (
    <div>
      <Layout
          title={'Nosotros'}
          description={'Sobre nosotros, guitarLA, tienda de guitarras'}
      >

      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, justo et gravida pellentesque, metus ex mollis metus, in commodo urna urna id ligula. Praesent fringilla at libero sit amet pretium. Sed tempor sollicitudin faucibus. Vivamus ultrices nisl sem, quis vehicula ipsum rhoncus a. Praesent felis magna, finibus rhoncus ultrices sit amet, vulputate et massa.        
            </p>
            <p>
              Quisque pulvinar elit tellus, et porttitor dui lobortis id. Mauris mollis nec mi ut tristique. Quisque eleifend purus faucibus, aliquet lorem vulputate, interdum tellus. Nunc lobortis enim quam, sed venenatis justo pharetra sit amet. Aliquam sodales sodales massa, eu pretium tellus interdum vitae. Ut aliquam justo in nibh blandit malesuada.
            </p>
          </div>
        </div>
      </main>
          
      </Layout>
    </div>
  )
}


