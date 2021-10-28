import { useState } from 'react'
import Counter from './Counter'
import Emptm from './Emptm'
function App() {

  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
    // count=count+1;
    console.log(count)
  }
  let obj = {
    title:'new obj',
    count
  }
  let emp=
    [{Name:'Anfique',Age:'18'},
    {Name:'Anfique2',Age:'212'},
    {Name:'Anfique3',Age:'213'}

  ]
  

  return (
    <div>
      <button onClick={addCount}>Button</button>
      <Counter title='1st Tester:' count={count}> </Counter>
      <Counter title='2nd Tester:' count={count}> </Counter>
      <Counter {...obj}/>

      {
        emp.map((obj,index)=>{
               return(
                 <Emptm key={index} {...obj}/>
               )
        })
      }
      
    </div>

    
  );
}


export default App;