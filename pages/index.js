import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import Post from "@/components/post";
import Curso from "@/components/curso";
import styles from "@/styles/grid.module.css";

//fn que recibe datos de la fn getStaticProps de abajo y lista guitarras, cursos y posts en la pantalla de inicio 
export default function Home({guitarras, posts, curso}) {
  //  console.log(curso)
  // console.log(posts)
  //se retorna un fragmet con todo lo que hay que listar
  return (
  <>
    <Layout
    title={'Inicio'}
    description={'Tienda de guitarras, blog de musica y más'}
    >

    <main className="contenedor">
      <h1 className="heading">Nuestra colección</h1>
      <div className={styles.grid}>
        {/* mostramos guitarras iterando con map sobre el arreglo que se ha recibido via props, pasamos el key para no tener errores con el id de la guitarra y pasamos todos los datos del elemento actual que se esta recorriendo, esto hara que se muestren tantos componentes como se reciban y seran unicos cada uno */}
        {guitarras?.map(guitarra =>(
          <Guitarra 
          key={guitarra.id_guitarra}
          guitarra={guitarra}
          />
        ))}

      </div>
    </main>
    
    {/* mostramos curso que se ha recibido via props, no es necesario pasar key porque solo es un elemento y pasamos los datos via props, esto hara que se muestre */ }
    <Curso
      curso={curso}
    />
    
    <section className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.grid}>
        {/* mostramos posts iterando con map sobre el arreglo que se ha recibido via props, pasamos el key para no tener errores, con el id del post y pasamos todos los datos del elemento actual que se esta recorriendo, esto hara que se muestren tantos componentes como se reciban y seran unicos cada uno */}
        {posts?.map( post=>(
          <Post 
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </section>
    
    </Layout>
  </>
  )
}


//como no hay roting dinamico no es necesario usar getstaticpaths; esta fn que hace consulta a API llama las guitarras y los posts
export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlPosts = `${process.env.API_URL}/posts`;
  const urlCurso = `${process.env.API_URL}/curso`;
  // se hace uso de Promise.all  para poder hacer fetch a 2 url 
  const [resGuitarras, resPosts, resCurso] = await Promise.all([fetch(urlGuitarras), fetch(urlPosts), fetch(urlCurso)]);

  const [guitarras, posts, curso] = await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);
  // console.log(guitarras);
  // console.log(posts);
  //retorna con props los datos obtenidos
  return{
    props:{
      guitarras,
      posts, 
      curso
    }
  }
}