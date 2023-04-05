import { Link, useHistory } from 'react-router-dom';
import { getAllTypes, postPokemon } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Form.module.css';
import { validate } from './validate';
import defaultimg from '../../img/default.png'

const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector(state => state.allPokemons); 
    const names = pokemons.map((element) => element.name);
    

    const [input, setInput] = useState({
        name: '', hp: '', speed: '', height: '', attack: '', weight: '', defense: '', types: [], image: ''
    });
    const [error, setError] = useState({}); 
    const [disabled, setDisabled] = useState(true);
 
    useEffect(() => {
        input.types.length > 2 || input.types.length === 0 || error.name || names.includes(input.name) ? setDisabled(true) : setDisabled(false) 
    }, [input.name, input.types.length, error.name, names]);

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) 
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value
            }))         
    }

    const handlerCheckBox = (e) => {
        if (e.target.checked) {

            setInput({
                ...input,
                types: [...input.types, e.target.value]
            }) 
        } 
        if (!e.target.checked) {
            input.types.splice(input.types.indexOf(e.target.value), 1) 
            setInput({
                ...input
            }) 
        } 
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();

        if(error.image) input.image = defaultimg;
        if(error.speed) input.speed = ' UNK';
        if(error.height) input.height = ' UNK';
        if(error.attack) input.attack = ' UNK';
        if(error.weight) input.weight = ' UNK';
        if(error.defense) input.defense = ' UNK'; 
        if(error.hp) input.hp = ' UNK';      

        dispatch(postPokemon(input));
        setInput({
            name: '', hp: '', speed: '', height: '', attack: '', weight: '', defense: '', types: [], image: ''
        });

        history.push('/home');
    }

    return(
        <div>
            <div className={style.btnContainer}>
                <Link className={style.backBtn} to='/home'><button>Back</button></Link>
            </div>
            <h1 className={style.fH1}>Crea tu Pokemon</h1>
            <form className={style.formBox} onSubmit={handlerSubmit}> 
                <div className={style.divBox}>
                <div className={style.row}>
                    <label>Name:  </label>
                    <input type="text" value={input.name} name='name' onChange={handleChange} />
                    {error.name && (<span className={style.errorSpan}>{error.name}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Health Points:  </label>
                    <input type="text" value={input.hp} name='hp' onChange={handleChange} />
                    {error.hp && (<span className={style.errorSpan}>{error.hp}</span>)} 
                </div>
                <div className={style.row}> 
                    <label>Speed:  </label>
                    <input type="text" value={input.speed} name='speed' onChange={handleChange} />
                    {error.speed && (<span className={style.errorSpan}>{error.speed}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Height:  </label>
                    <input type="text" value={input.height} name='height' onChange={handleChange} />
                    {error.height && (<span className={style.errorSpan}>{error.height}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Attack:  </label>
                    <input type="text" value={input.attack} name='attack' onChange={handleChange} />
                    {error.attack && (<span className={style.errorSpan}>{error.attack}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Weight:  </label>
                    <input type="text" value={input.weight} name='weight' onChange={handleChange} />
                    {error.weight && (<span className={style.errorSpan}>{error.weight}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Defense:  </label>
                    <input type="text" value={input.defense} name='defense' onChange={handleChange} />
                    {error.defense && (<span className={style.errorSpan}>{error.defense}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Image:  </label>
                    <input type="text" value={input.image} name='image' onChange={handleChange} />
                    {error.image && (<span className={style.errorSpan}>{error.image}</span>)}
                </div>
                </div>
                
                <div className={style.types}>
                    {types?.map((element) => {
                                return (
                                    <div key={element.idSearch}>
                                        <label htmlFor="types">{element.name}</label>
                                        <input type="checkbox" name={element.name} value={element.idSearch} className={style.inpBox} onChange={handlerCheckBox} />
                                    </div>
                                )
                    })}
                </div>
                {input.types.length > 2 || input.types.length === 0 ? (
                            <h3><span className={style.errorSpan}>Min One and Max Two Types!!</span></h3>
                        ) : null}
                
                <button className={style.subBtn} type='submit' disabled={disabled}>Create Pokemon</button>
            </form> 
        </div>
    )
}

export default Form;