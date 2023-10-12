import { useEffect, useState } from 'react'
import '@/styles/globals.css'



export default function App({ Component, pageProps }) {
  //ejecucion del codigo unicamente del lado del cliente; comprueba que exista window, si existe parsea y asiga el valor de LS pero si es null este valor asigna un arreglo vacio, si window es undefined asigna []vacio 
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? []  : []; //Obtenemos el valor del carrito que se encuentre en LS es una api del lado del cliente usamos un ternario para no caer en error al recargar la pagina
  // console.log(carritoLS)
  const [carrito, setCarrito] =  useState(carritoLS);
  
  //para evitar el error de hidratacion debemos de mostrar el componente cuando todo halla cargado, utilizamos pagina lista como bandera
  const [paginaLista, setPaginaLista] = useState(false);
  //usamos un efect para que cuando este lista la pag cambie a true y utilizarlo el el return de abajo
  useEffect(()=>{
    setPaginaLista(true);
  },[])

  // guardamos en LS el carrotp pasamos el nombre de la variable como se guardara y el string, por eso convertimos el arreglo 
  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito) )
  },[carrito])
  
  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = guitarra => {
  const carritoActualizado = carrito.map( guitarraState => {
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = parseInt( guitarra.cantidad )
    } 
    return guitarraState
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}
//si pagina lista es true retorna el componente caso contrario es null
  return paginaLista ? <Component {...pageProps}
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  eliminarProducto={eliminarProducto}
  actualizarCantidad={actualizarCantidad}

  /> : null
}
