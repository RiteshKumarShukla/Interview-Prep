import {Link, NavLink} from "react-router-dom";

export default function Navbar(){
    const links=[{path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/contacts",title:"Contacts"},
    {path:"/users",title:"Users"},]
    return (
        <div style ={{display:"flex", alignItems:"center", justifyContent:'space-around'}}>
            {/* <Link to="home">Home</Link>
            <Link to ="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/users">Users</Link> */}
{links.map((link)=>(
    <NavLink to={link.path} key={link.path}>{link.title}</NavLink>
))}
        </div>
    )
}