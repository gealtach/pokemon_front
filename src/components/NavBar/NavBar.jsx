import { Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.container}>
            <Link to='/home'><button className={style.btn}>Home</button></Link>
            <Link to='/form'><button className={style.btn}>Create your Pokemon</button></Link>
            <Link to='/'><button className={style.btn}>Exit</button></Link>
        </div>
    )
}

export default NavBar;