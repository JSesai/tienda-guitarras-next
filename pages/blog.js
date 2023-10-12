// PAGINA DE BLOG
import Layout from "@/components/layout" //componente que es la plantilla para todas las paginas lo que pasemos como children lo renderiza
import Post from "@/components/post";
import styles from "@/styles/grid.module.css"

export default function Blog({posts}) {
  // console.log(posts);
  return (
    <div>
        <Layout
            title={'Blog'}
            description={'Nuestro blog de musica, venta de guitarras'}
        >

          <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
              {/* mostramos posts iterando con map sobre el arreglo que se ha recibido via props, pasamos el key para no tener errores, con el id del post y pasamos todos los datos del elemento actual que se esta recorriendo, esto hara que se muestren tantos componentes como se reciban y seran unicos cada uno */}
              {posts?.map( post=>(
                <Post 
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </main>
            
        </Layout>
    </div>
  )
}

//fn de next que se ejecuta en el servidor permite consultar datos que se pasan en la url y son tomados con params accediendo al id para poder hacer el fetch de la guitarra seleccionada 
export async function getStaticProps() {
  
  const resp = await fetch(`${process.env.API_URL}/posts`);
  const posts = await resp.json();
   // console.log(guitarra); 
 return{
   props:{
     posts

   }
 }
}