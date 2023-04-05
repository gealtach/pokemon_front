import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../../redux/actions";
import style from './SearchBar.module.css';

 const SearchBar = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');

    const handlerInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokeByName(name));
    }

    return(
        <div className={style.container}>
            <input className={style.sBInp} type="text" placeholder="Search" onChange={(e) => handlerInput(e)} />
            <button className={style.sBtn} type="submit" onClick={(e) => handlerSubmit(e)} >Search</button>
        </div>
    )
}

export default SearchBar;