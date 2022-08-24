// import React, {useState, useEffect} from 'react'

// function Counter(props) {
//     const { user } = props;
//     const [counterValue, setCounterValue] = useState(0)
//     const [name, setName] = useState("Rahul")
//     const reset = () => {
//         setCounterValue(0);
//         setName("Rahul");
// }
// // useEffect(() => {
// //     setTimeout(() => {
// //         setCounterValue((counterValue) => counterValue + 1);
// //     }, 1000);
// //   });
   
//   return (
//     <div className='demo' >
//         <h3>{`Hello ${name}`}</h3>
//         <p>{user}</p>
//         <p>{counterValue}</p>
//         <button onClick={()=>setCounterValue(counterValue+1)}>count ++</button>
//         <button onClick={reset}>reset</button>
//         <button onClick={()=>setName("Prerna")}>Change Name</button>
//     </div>
//   )
// }

// export default Counter


import React , {useState} from 'react'

function Counter() {
  const[text,settext] = useState("")
  const[listItems,setlistItems] = useState([])
  
  
  const onHandleChange =(event)=>{
    //console.log("event", event.target.value)
    settext(event.target.value)
  }

  const handleSubmit = () =>{
    setTimeout(() => {
    setlistItems(text)
    
      console.log("listItems", listItems)
    }, 1000);
    
  }
 
  return(<>
    <label htmlFor="name">Fruits Name : </label>
    <input type="text" placeholder="enter fruits name" onChange={onHandleChange} value={text} id='name' />
    <br /><br />
    <button id='btn' onClick={handleSubmit}>submit fruits</button>
    <h4>Fruits Are : {settext} </h4>
    </>
  )
}
export default Counter