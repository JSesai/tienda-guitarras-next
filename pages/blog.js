// PAGINA DE BLOG
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
export default function Blog() {
  return (
    <div>
        <Layout
            title={'Blog'}
            description={'Nuestro blog de musica, venta de guitarras'}
        >

            <h1>Desde BLog</h1>
            
        </Layout>
    </div>
  )
}