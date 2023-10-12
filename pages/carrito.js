import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/carrito.module.css"

//carrito de compras contiene los datos de los articulos que fueron agregados 
export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    // console.log(carrito);
    const [total, setTotal] = useState(0)
    //calcular total y setear el state
    // const actTotal = carrito.reduce((aux,item) =>aux+(item.cantidad*item.valor),0);
    useEffect(()=>{
        const calculoTotal = carrito.reduce((aux,item) =>aux+(item.cantidad*item.valor),0)
        setTotal(calculoTotal)
    },[carrito])
  return (
    
    <Layout
    title="carrito de compras"
    >
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'carrito vacio' : (carrito.map(articulo=>(
                        <div key={articulo.id} className={styles.producto}>
                            <div>
                                <Image width={50} height={100} src={articulo.imagen} alt={`imagen de ${articulo.nombre}`} />
                            </div>
                            <div>
                                <p className={styles.nombre}> {articulo.nombre} </p>
                                <div className={styles.cantidad}>
                                    <p>Cantidad:</p>
                                    <select className={styles.select} value={articulo.cantidad} onChange={e => actualizarCantidad({
                                        id:articulo.id,
                                        cantidad: e.target.value
                                    })} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <p className={styles.precio}>$<span>{articulo.valor}</span></p>
                                <p className={styles.subtotal}>Subtotal $<span>{articulo.valor * articulo.cantidad}</span></p>

                            </div>
                            <button className={styles.eliminar} type="button" onClick={() => eliminarProducto(articulo.id)}>X</button>

                        </div>
                    )))}
                </div>
                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p> {`Total a pagar: $ ${total}`}</p>
                </aside>
            </div>
        </main>

    </Layout>
    
  )
}
