// import { useContext } from "react";
// import { MovieContext } from "../../Context";
// import { XCircleIcon } from "@heroicons/react/24/solid";
// import "./DetallePelicula.css";

// function DetallePelicula() {
//   const context = useContext(MovieContext);

//   console.log(MovieContext.Consumer, 100)

//   const handleClose = () => {
//     context.cerrarDetallePelicula();
//   };

//   return (
//     <aside
//       className={`${
//         context.isDetallePeliculaOpen ? "flex" : "hidden"
//       } detalle-pelicula flex-col fixed right-0 border border-black rounded-lg  bg-white`}
//       style={{
//         width: "380px",
//         height: "600px",
//         margin: "20px",
//         overflowY: "scroll",
//       }}
//     >
//       <div className="flex justify-between items-center p-6">
//         <h2 className="font-medium text-xl">Detalle de la película</h2>
//         <div onClick={handleClose}>
//           <XCircleIcon className="h-8 w-8 text-black-500 cursor-pointer" />
//         </div>
//       </div>
//       {/* Aquí puedes mostrar los detalles de la película */}
//     </aside>
//   );
// }

// export default DetallePelicula;

import { XCircleIcon } from "@heroicons/react/24/solid";
import './DetallePelicula.css'
import { useContext } from "react";
import { MovieContext } from "../../Context";

function DetallePelicula(){
    const context = useContext(MovieContext)
    return(
        <aside 
        className='detalle-pelicula flex-col fixed bg-white right-0 border border-black rounded-lg'
        style={{
            width: "380px",
            height: "600px",
            margin: "20px",
            overflowY: "scroll",
          }}> 
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>Detalle de la pelicula</h2>
                <div>
                    <XCircleIcon className="h-8 w-8 text-black-500 cursor-pointer"></XCircleIcon>
                </div>
            </div>

        </aside>
    )
}

export default DetallePelicula

