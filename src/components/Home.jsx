import  { useState } from 'react'

import { addTask,remove,edit } from '../store/todo'
import { useDispatch, useSelector } from 'react-redux'

import { BiEdit } from 'react-icons/bi';
import{RiDeleteBin5Fill} from 'react-icons/ri';

import './Home.css'

const Home = () => {

    const { data} = useSelector(state=>state.todo)

    const [input,setInput] = useState("")

    const dispatch = useDispatch ()


    const addHandle = ()=> {


        dispatch(addTask({name:input}))
        

        setInput("")

    }

    const deleteHandle= (id) =>{
  console.log("id in delete handle",id)
      
       dispatch(remove({id:id}))
    }

    const editHandle = (id) =>{

      const editData = data.filter((e) => e.id == id)
      console.log("the editdata",editData[0].name)   

       if (editData) {
        
      

         
        const newName = prompt('Enter the new task ', editData[0].name);
        
        console.log("NEW ITMES", editData[0].id)
        
        if (newName) {

          dispatch(edit({ id: editData[0].id, name: newName }));

           window.alert("content updated successfully")

        }
      }

      
                                 
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
               <div style={{fontSize:"25px"}} className='todo_icon'>

              <BiEdit onClick={()=>editHandle(itm.id)}   />

              <RiDeleteBin5Fill onClick={()=>deleteHandle(itm.id)}  />
              

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




