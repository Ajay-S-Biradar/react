import React from "react"

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            count:0,
            count2:3
        }
    }
    componentDidMount(){
        console.log("componentDidMount");       
        this.timerr = setInterval(()=>{
            console.log("hii");
        },1000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentDidUnmount");
        clearInterval(this.timerr)
    }
    render(){
        console.log("render");
        const {count2} = this.state
        return (
            <>
            <h4>this is Profile Class</h4>
            <h4>{this.props.name}</h4>
            <p>{this.state.count}hey</p>
            <p>{count2}hey</p>
            <button onClick={()=>{
                this.setState({
                    count:3
                })
            }}>click</button>
            </>
        )
    }
}

export default ProfileClass;