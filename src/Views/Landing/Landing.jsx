import { Link } from "react-router-dom";
import style from './Landing.module.css';

const Landing = () => {
    return(
        <div className={style.container}>
            <div className={style.box}><h1>ENTER</h1></div>
            <Link to='/home'><button className={style.btn}></button></Link>
        </div>
    )
}

export default Landing;