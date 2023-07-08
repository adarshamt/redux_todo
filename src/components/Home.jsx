import  { useState } from 'react'

import { addTask,remove } from '../store/todo'
import { useDispatch, useSelector } from 'react-redux'

import './Home.css'

const Home = () => {

    const { data} = useSelector(state=>state.todo)

    const [input,setInput] = useState("")

    const dispatch = useDispatch ()


    const addHandle = ()=> {


        dispatch(addTask({id:Date.now(),name:input}))
        

        setInput("")

    }

    const deleteHandle= (id) =>{
  console.log("id in delete handle",id)
      
       dispatch(remove({id:id}))
    }



  return (

    <div className="App">
    <div className='maindiv'>

        <div className='headingtodo'>
             <h2>To do</h2>


        </div>

        <div className='inputab'>
            <input className='todoinput' type='text ' value={input}
        onChange={(e)=>setInput(e.target.value)} placeholder='What to do..?' />
          
             
           <button onClick={addHandle} > + </button>

         </div>

         {data.map((itm,index)=>{
            
        
          

          return(



            <div className='todos' key={index+1}>



              <div  className='todo'>

               <h2>{itm.name}</h2>
               <div className='todo_icon'>
              
              <button onClick={()=>deleteHandle(itm.id) }> - </button> 
              </div>
              </div>
          </div>
          )

        })
      }
          




    </div>
</div>
 
  )
}






export default Home




