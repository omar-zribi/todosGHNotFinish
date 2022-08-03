import { Add } from "./typeAction"



export const handleAdd = (newTodos)=>{
    return{
        type:Add,
        payload:newTodos,
    }
}