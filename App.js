import "./App.css"
import {useState} from "react"
function App() {
    const vd=[
      {name:"Monkey",old:2},
      {name:"Dog",old:3},
    ]
    const [list,setList]=useState(()=>{
      let listLocal;
      if(localStorage.getItem("list")){
        listLocal=JSON.parse(localStorage.getItem("list"));
      }
      else{
        listLocal=vd;
      }
      return listLocal;
    })
    
    const [username,setName]=useState("");
    const getUserName=(e)=>{
      setName(e.target.value);
    }
    const [userold,setOld]=useState("");
    const getUserOld=(e)=>{
      setOld(e.target.value);
    }
    let change=()=>{
      setList((pre)=>{
        const newList=[...pre,{name:username,old:userold}];
        localStorage.setItem("list",JSON.stringify(newList));
        return newList;
      })
    }
    const [newList,setNewList]=useState(()=>{
      const listLocal=JSON.parse(localStorage.getItem("list"));
      return listLocal;
    })
  return (
      <div>
        <input type="text" placeholder="name" onChange={getUserName}></input>
        <input type="text" placeholder="old" onChange={getUserOld}></input>
        <button type="submit" onClick={change}></button>
         <ul>
          {
            list.map((st,key)=>{
              return <li>{st.name} {st.old}</li>
            })
          }
         </ul>
      </div>    
  );
}
export default App;