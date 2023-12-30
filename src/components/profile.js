import { useEffect, useState } from "react"

const Profile = ()=>{
    let [count,setCount] = useState("hii");


    useEffect(()=>{
        const  timer = setInterval(()=>{
            console.log("timer");
        },1000)

        return () => {
            clearInterval(timer);
          };
    },[])
    // useEffect(() => {
    //     console.log('Component mounted');
    //     const timer = setInterval(() => {
    //       console.log('timer');
    //     }, 1000);
      
    //     return () => {
    //       console.log('Component will unmount');
    //       clearInterval(timer);
    //     };
    //   }, []);
    return (
        <>
            <h2>This is Profile part of the About</h2>
            <p>{count}</p>
            <button  onClick={()=>{
                setCount(2)
            }}>
                click
            </button>
        </>
    )
}

export default Profile