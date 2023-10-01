
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
import Guitarra from "@/components/guitarra"
import styles from "@/styles/grid.module.css"

export default function Tienda({guitarras}) {
  //console.log(guitarras);
  return (
    <div>
        <Layout
            title={'Tienda'}
            description={'Tienda virtual, venta de guitarras, instrumentos guitar LA'}
        >

            <main className="contenedor">
              <h1 className="heading">Nuestra colección</h1>
              <div className={styles.grid}>
              {guitarras?.map( guitarra =>(

                <Guitarra 
                  key={guitarra.id_guitarra}
                  guitarra={guitarra}
                />

              ))}

              </div>
             
            </main>
            
        </Layout>
    </div>
  )
}

//funcion que se ejecuta cada que se consulta la pagina y retorna props con el valor de las guitarras
export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const guitarras = await respuesta.json();
 
  return{
    props:{
      guitarras
    }
  }
}
// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
//   const guitarras = await respuesta.json();
 
//   return{
//     props:{
//       guitarras
//     }
//   }
// }