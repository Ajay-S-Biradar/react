import { Outlet } from "react-router-dom"

const About = ()=>{
    return (<div className="about">
        <h2>this is about page</h2>
        <Outlet />
    </div>)
}

export default About