// PAGINA DE NOSOTROS
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
import ListadoGuitarras from "@/components/listado-guitarras"
export default function Tienda() {
  return (
    <div>
        <Layout
            title={'Tienda'}
            description={'Tienda virtual, venta de guitarras, instrumentos guitar LA'}
        >

            <main className="contenedor">
              <h1 className="heading">Nuestra colección</h1>
              <ListadoGuitarras 
              
              
              />
             
            </main>
            
        </Layout>
    </div>
  )
}