//este archivo es una plantila que usaremos para todas las paginas
import Head from "next/head" //componente head es la cabecera donde van los metadatos 
//importamos componentes
import Header from "./header" //componente que es la cabeza de la pagina
import Footer from "./footer" //componente que es el pir de la pagina
export default function Layout({children, title, description}) {
  return (
    <>  
        {/* renderiza con los props que le llegan la info de los props */}
        <Head> 
            <title>{`Guitar LA - ${title}`}</title>
            <meta name="description" content={description}></meta>
        </Head>
        {/* es el header de la pagina, lo construimos como componente */}
        <Header>

        </Header>
        {/* children es lo que se renderiza y cambia dependiendo de lo que se ponga en la pagina donde se emplea el componente */}
        {children}
        
        {/* es el footer, lo construimos como componente  */}
        <Footer>

        </Footer>
      
    </>
  )
}

