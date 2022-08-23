import React, {useState, useEffect} from 'react'

function Counter(props) {
    const { user } = props;
    const [counterValue, setCounterValue] = useState(0)
    const [name, setName] = useState("Rahul")
    const reset = () => {
        setCounterValue(0);
        setName("Rahul");
}
// useEffect(() => {
//     setTimeout(() => {
//         setCounterValue((counterValue) => counterValue + 1);
//     }, 1000);
//   });
  
  return (
    <div className='demo' >
        <h3>{`Hello ${name}`}</h3>
        <p>{user}</p>
        <p>{counterValue}</p>
        <button onClick={()=>setCounterValue(counterValue+1)}>count ++</button>
        <button onClick={reset}>reset</button>
        <button onClick={()=>setName("Prerna")}>Change Name</button>
    </div>
  )
}

export default Counter
