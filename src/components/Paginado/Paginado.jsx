import style from './Paginado.module.css';

const Paginado = ({pokePerPage, allPokemons, paginado}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(allPokemons/pokePerPage); i++){
        pageNumber.push(i);
    }

    return(
        <nav>
            <ul className={style.paginado}>
                { pageNumber && 
                    pageNumber.map(number =>(
                        <button onClick={()=>paginado(number)} className={style.number} key={number}>
                            {number}
                        </button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;