
const initialState = {
    allPokemons: [],
    pokemons: [],
    types: [],
    change: [],
    detail: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload,
                change: action.payload,
            }

        case 'GETALLTYPES':
            return {
                ...state,
                types: action.payload
            };

        case 'CREATE_POKEMON':
            return {
                ...state
            };

        case 'GETPOKEMONDETAIL':
            return {
                    ...state,
                    detail: [...action.payload]
            };

        case 'SETDETAIL':
            return {
                ...state,
                detail: []
            }

        
        case 'TYPE_FILTERED':
            const poke = state.pokemons;
            const filteredTypes = action.payload === 'all' ?
                poke : poke.filter((pokemon) => pokemon.types.includes(action.payload));
            return {
                ...state,
                allPokemons: filteredTypes,
                change: filteredTypes
            };

        case 'CREATED_FILTER':
            const pokeCreated = state.pokemons;
            let filteredCreator = action.payload === 'db' ?
                pokeCreated.filter((el) => el.created === true):
                pokeCreated.filter((el) => el.created === false);

            if(action.payload === 'all') filteredCreator = pokeCreated;
            return {
                ...state,
                allPokemons: filteredCreator
            };

        case 'ORDER_BY_NAME':
            let order = action.payload === 'asc' ?
                state.allPokemons.sort((a,b) => {
                    if(a.name > b.name) return 1;
                    if(b.name > a.name) return -1;
                    return 0;
                }) :
                state.allPokemons.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    if(b.name > a.name) return 1;
                    return 0;
                })
            return{
                ...state,
                allPokemons: order
            };

        case 'ORDER_BY_ATK':
            let atkOrder = action.payload === '-ATK' ?
                state.allPokemons.sort((a,b) => {
                    if(a.attack > b.attack) return 1;
                    if(b.attack > a.attack) return -1;
                    return 0;
                }) :
                state.allPokemons.sort((a,b) => {
                    if(a.attack > b.attack) return -1;
                    if(b.attack > a.attack) return 1;
                    return 0;
                })
            return{
                ...state,
                allPokemons: atkOrder
            };

        case 'SEARCHED':
            return{
                ...state,
                allPokemons: action.payload
            }

        default :
            return state
    }
}

export default rootReducer;