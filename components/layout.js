//este archivo es una plantila que usaremos para todas las paginas
import Head from "next/head" //componente head es la cabecera donde van los metadatos 
//importamos componentes
import Header from "./header" //componente que es la cabeza de la pagina
import Footer from "./footer" //componente que es el pir de la pagina

//Layout es la plantilla que se usa en next para reutilizar codigo y mostrala en todas las paginas que vayamos creando aunque tambien te se pueden agregar layouts solo para ciertas paginas lo que lo hace ideal para barras laterale
//tiene un head que renderiza el title y description si asi lo deseas, ideal para el CEO; tiene header para la navegacion superior, en children renderiza lo que se retorne en las paginas que se usen este componente y fotter para el pie de pagina
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

