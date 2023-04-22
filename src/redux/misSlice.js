import { createSlice } from "@reduxjs/toolkit";


export const origenSlice = createSlice({
    name:"unValor", // este nombre identifica el slice.
    initialState:{miNombre:"Martin"},//un estado inicial.
    reducers:{    // aqui es donde se pasa una funcion, y el action es lo que recibe para modificar el estado
        guardarMiNombre: (state , action) =>{
            state.miNombre = action.payload;
        }
    }
})

export const sumarPuntuacionSlice = createSlice({
    name:"valorPuntuacion",
    initialState:{puntos:0},
    reducers:{
       aumentarPuntaje:(state)=>{ //aca como se va a incrementar el numero no hace falta el action ya que la accion se hace aqui, el estado es igual al estado mas uno.
          state.puntos = state.puntos + 1;
       }
    }
})

export const counterSlice = createSlice({
    name:"counter",
    initialState:{counterP:0},
    reducers:{
        addPuntos:(state)=>{
            state.counterP = state.counterP + 1 
        },
        restaPuntos:(state)=>{
            if(state.counterP > 0){
                state.counterP = state.counterP - 1
            }
            
        }
    }
})


export const { guardarMiNombre } = origenSlice.actions; 
export const { aumentarPuntaje } = sumarPuntuacionSlice.actions;
export const { addPuntos } = counterSlice.actions;
export const { restaPuntos } = counterSlice.actions;
