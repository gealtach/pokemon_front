import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon, getAllTypes, filterByType, filterByCreator, orderName, orderAtk } from '../../redux/actions';
import Card from '../../components/Card/Card';
import Paginado from '../../components/Paginado/Paginado';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);
    const allTypes = useSelector((state) => state.types);

    const [orden, setOrden] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(12);
    const indexLastPoke = currentPage * pokePerPage;
    const indexFirstPoke = indexLastPoke - pokePerPage;
    
    console.log(orden, setPokePerPage);

    const currentPoke = allPokemons.slice(indexFirstPoke, indexLastPoke);



    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        dispatch(getPokemon());
        dispatch(getAllTypes());
    },[dispatch]);

    const handlerTypeFilter = (e) => {
        dispatch(filterByType(e.target.value));
    }
    const handlerCreatorFilter = (e) => {
        dispatch(filterByCreator(e.target.value));
    }
    const handlerNameOrder = (e) => {
        dispatch(orderName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);

    }

    const handlerAtk = (e) => {
        dispatch(orderAtk(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    const handlerAllPokemons = (e) =>{
        e.preventDefault();
        dispatch(getPokemon());
    }

    return(
        <div className={style.container}>
            <SearchBar paginado={paginado} />
            <button onClick={handlerAllPokemons}>All Pokemons</button>
            <select onChange={(e) => handlerTypeFilter(e)}>
                <option value='all'>All Types</option>
                    {
                       allTypes.map((type) => (<option key={type.name} value={type.name} >{type.name}</option>))
                    }
            </select>
            <select onChange={(e) => handlerCreatorFilter(e)}>
                <option value="all">All</option>
                <option value="api">Original</option>
                <option value="db">Created</option>
            </select>
            <select onChange={(e) => handlerNameOrder(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={(e) => handlerAtk(e)}>
                <option value="+ATK">+ATK</option>
                <option value="-ATK">-ATK</option>
            </select>

            <Paginado pokePerPage={pokePerPage} allPokemons={allPokemons.length} paginado={paginado} />
                <div className={style.cardContainer}>
                    {currentPoke?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Card key={el.id} image={el.image} name={el.name} id={el.id} type={el.types} />
                            </div>
                        )
                    })}
                </div>
            
        </div>
    )
}

export default Home;