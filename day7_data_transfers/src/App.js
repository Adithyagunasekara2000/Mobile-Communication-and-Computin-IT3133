import {useState} from 'react'
import Childcom from './Childcom'

function App(){
    const[childname,setChildname]=useState("default");

    const receivename=(name)=>{
        setChildname(name);
    }
return (
<>
<h1>Hi Im the react parent</h1>
<Childcom setFun={receivename}/>
<p>parent:My child said:{childname}</p>

</>
);
}

export default App;