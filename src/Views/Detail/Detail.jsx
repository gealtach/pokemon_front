import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pokemonDetail, setDetail } from "../../redux/actions";
import style from './Detail.module.css';

const Detail = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.detail);
    console.log(poke)

    useEffect(() => {
        dispatch(pokemonDetail(params.id));
    }, [dispatch, params.id]);

    useEffect(() => {
        return () => {
            dispatch(setDetail());
        }
    }, [dispatch]);


    return(
        <div>
            {
                poke.length > 0 ? (
                    <div className={style.container}>
                        <h1 className={style.name}>{poke[0].name}</h1>
                        <img className={style.logo} src={poke[0].image} alt={`Pokemon ${poke[0].name}`} />
                        <h3 className={style.id}>ID: {poke[0].id}</h3>
                            <h3>Stats:</h3>
                        <div className={style.stats}>
                            <p className={style.hp}>HP:{poke[0].hp}</p>
                            <p className={style.atk}>ATK: {poke[0].attack}</p>
                            <p className={style.def}>DEF: {poke[0].defense}</p>
                            <p className={style.sp}>SPEED: {poke[0].speed}</p>
                            <p className={style.hg}>HEIGHT:  {poke[0].height}</p>
                            <p className={style.wg}>WEIGHT:  {poke[0].weight}</p>
                            {poke[0].types?.map((element) => (<span key={element}>{element.toUpperCase()}</span>))}
                        </div>
                    </div>                    
                )
                : <div>
                    <h2 className={style.loading}>Loading...</h2>
                </div>
            }
            <Link to='/home'><button className={style.backBtn}>Back</button></Link>
        </div>
    )
}

export default Detail;