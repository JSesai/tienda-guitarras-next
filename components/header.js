import Image from "next/image" //componente de next que mejora el rendimiento en el uso de imagenes
import Link from "next/link" //link permite hacer hacer navegacion con buen performance, no recarga la pagina 
import { useRouter } from "next/router"
import styles from "@/styles/header.module.css" //importamos el modulo de stylos para este componente, para usar las clases se accede al objeto.clase 
//componenente que es el header 
export default function Header() {  
    const router =useRouter(); //fn de next que nos permite accederal pathname 
    
  return (
    <header className={styles.header}> 
      <div className={`contenedor ${styles.barra}`}>
      {/* para que pueda utilizarse la imagen se agrega el .src */}
        <Link href="/">
            <Image src="/img/logo.svg" width={300} height={40} alt='imagen logo'/> 
        </Link>
        <nav className={styles.navegacion}>
            {/* enlaces con componenete link que se representa como <a></a> y con la ruta que nos da useRoter accedemos a la propiedad pathname para conocer la ruta actual */}
            <Link href={"/"} className={router.pathname === '/' ? styles.active : ''}>
                inicio
            </Link>

            <Link href={"/nosotros"} className={router.pathname === '/nosotros' ? styles.active : ''}>
                nosotros                
            </Link>

            <Link href={"/tienda"} className={router.pathname === '/tienda' ? styles.active : ''}>
            tienda             
            </Link>
            
            <Link href={"/blog"} className={router.pathname === '/blog' ? styles.active : ''}>
                blog
            </Link>

        </nav>
      </div>
    </header>
  )
}

