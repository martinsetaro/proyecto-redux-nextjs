import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./misSlice";
import { sumarPuntuacionSlice } from "./misSlice";
import { counterSlice } from "./misSlice";



export default configureStore({

    reducer:{
        unValor:origenSlice.reducer, // ese origen slide es la importacion de arriba, esta porcionado para que no haya mucho codigo.
        sumarPuntuacion:sumarPuntuacionSlice.reducer,
        counter:counterSlice.reducer
       
    }

})

