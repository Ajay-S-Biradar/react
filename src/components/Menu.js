const menu = (x)=>{
    return (
        <li className="MenuItem" key={x.id} >
            {x.name}
        </li>
    )
}

export default menu;