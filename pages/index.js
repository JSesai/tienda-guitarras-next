import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css";

//fn que recibe datos de la fn getStaticProps de abajo
export default function Home({guitarras, posts}) {
   console.log(guitarras)
  // console.log(posts)
  return (
  <>
    <Layout
    title={'Inicio'}
    description={'Tienda de guitarras, blog de musica y más'}
    >

    <main className="contenedor">
      <h1 className="heading">Nuestra colección</h1>
      <div className={styles.grid}>
        {guitarras?.map(guitarra =>(
          <Guitarra 
          key={guitarra.id}
          guitarra={guitarra}
          />
        ))}

      </div>
    </main>

    <section className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.grid}>
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
  // se hace uso de Promise.all  para poder hacer fetch a 2 url 
  const [resGuitarras, resPosts] = await Promise.all([fetch(urlGuitarras), fetch(urlPosts)]);

  const [guitarras, posts] = await Promise.all([resGuitarras.json(), resPosts.json()]);
  // console.log(guitarras);
  // console.log(posts);
  //retorna con props los datos obtenidos
  return{
    props:{
      guitarras,
      posts
    }
  }
}