import React from 'react';
import FormToastify1 from './Component/Form/FormToastify1';




// import UserContextProvider from "./Context/UserContextProvider"
// import ContextDemo from './Component/ContextDemo';
// import Calculator from './Component/Task/Calculator';
// import PseudoGame from './Component/Task/PseudoGame';
// import FormValidation from './Component/Form/FormValidation';
// import FormToastify from './Component/Form/FormToastify';





function App() {
 
  // const [num1, setNum1] = useState(100);
  // const [num2, setNum2] = useState(1000)

  // useEffect(() => {
  //   setNum1(200)
  //   console.log("Use Effect")
  //   }, [num1])
   

    //  const name = "Sumi";
    // const age = 22;
    // const color="blue";

    // const [name, setName] = useState("sumi")
    // const [age, setAge] = useState(22)
    // const [color, setColor] = useState("blue")
    
  return (

    <>
      {/* <h1>{num1}</h1>
      <button onClick={()=>{setNum1((curr)=> curr+1)}}>click</button>
      <h1>{num2}</h1>
      <button onClick={()=>{setNum2((curr)=> curr+1)}}>click</button> */}
<div>
   {/* <Calculator/> */}
   {/* <PseudoGame/> */}
   {/* <FormValidation/> */}
   {/* <FormToastify/> */}
   <FormToastify1/>
</div>
      
    </>


  // <UserContext.Provider value={{age, name, color, setAge, setColor, setName}}  >
  //   {/* <h1>Hello My friend {name}</h1> */}
 
  //   <DemoFile/>
  // </UserContext.Provider>

    // <UserContextProvider>
    //     <ContextDemo/>
    // </UserContextProvider>
  )
}

export default App
