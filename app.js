import React from "react";
import ReactDOM from "react-dom/client" ;



const heading2 = (
    <h2>hey</h2>
)
        
// Functional component - NEW - is just a js function 
        
const HeaderComponent = ()=>{
    return (<div>
        <h2>hi all</h2>
    </div>)
}

const HeaderComponent2 = () => {
    console.log("working properly"); // This logs to the console
    return (
      <div>
        { console.log(10)}
        <HeaderComponent/>
        <h1 id="title">hi there</h1>
      </div>
    );
  };
 
            
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2 />)
console.log("working properly");