
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
import Guitarra from "@/components/guitarra" //importamos el componente de guitarra 
import styles from "@/styles/grid.module.css" //importamos el modulo grid de css 

//PAGINA DE GUITARRAS QUE MUESTRA LAS GUITARRAS A PARTIR DE LA COLECCION DE DATOS CON NUN FETCH A MI API CONSTRUIDA CON FLYGHT EN PHP

//recibe los datos de guitarras via props
export default function Tienda({guitarras}) {
  // console.log(guitarras);
  
  return (
    <div>
        {/* layout es la plantilla de la app y lo que pasa como children se renderiza y lo que pasa como props lo toma para meta datos  */}
        <Layout
            title={'Tienda'}
            description={'Tienda virtual, venta de guitarras, instrumentos guitar LA'}
        >

            <main className="contenedor">
              <h1 className="heading">Nuestra colección</h1>
              <div className={styles.grid}>
                {/* mapeamos sobre los datos recibidos para construir los componentes por cada objeto recibido, tomamos el id y lo pasomos como key y pasamos el objeto completo tambien como props para que se puedan extraer en el componente al que se lo estamos pasando y contruya el componente con los datos recibidos */}
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
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const respuesta = await fetch(`https://juliosesai.tech/api-Guitarras/guitarras`);
  const guitarras = await respuesta.json();
 
  return{
    props:{
      guitarras
    }
  }
}
//fn que se ejecuta una sola vez y no se actualiza hasta que se haga un nuevo build
// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
//   const guitarras = await respuesta.json();
 
//   return{
//     props:{
//       guitarras
//     }
//   }
// }