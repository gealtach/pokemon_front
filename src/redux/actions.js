import axios from 'axios';

export const getPokemon = () => {
    return async (dispatch) => {
        let json = await axios('/pokemons');
        console.log(json)
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        });
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const types = await axios('/types');
            const data = types.data;

            return dispatch({
                type: 'GETALLTYPES',
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

export const getPokeByName = (name) => {
    return async (dispatch) => {
        try {
            const pokeName = await axios(`/pokemons/?name=${name}`);
            const poke = pokeName.data;
            console.log(poke)
            if(!poke.length){
                alert('Pokemon Not Found')
            }
            

            return dispatch({
                type: 'SEARCHED',
                payload: poke
            })
        } catch (error) {
            return error;
        }
    }
}

export const postPokemon = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/pokemons', payload);
            return dispatch({
                type: 'CREATE_POKEMON',
                payload: response.data
            })
        } catch (error) {
            return error;
        }
    }
}

export const pokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios(`/pokemons/${id}`);
            const data = response.data;

            return dispatch({
                type: 'GETPOKEMONDETAIL',
                payload: [data]
            })
        } catch (error) {
            return error;
        }
    }
}
export const setDetail = () => {
    return {
        type: 'SETDETAIL'
    }
}

export const createdPokemon = (payload) => {
    return {
        type: 'FILTER_BY_CREATE',
        payload
    }
} 

export const filterByType = (payload) => {
    return {
        type: 'TYPE_FILTERED',
        payload
    }
}

export const filterByCreator = (payload) => {
    return {
        type: 'CREATED_FILTER',
        payload
    }
}

export const orderName = (payload) => {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}
export const orderAtk = (payload) => {
    return {
        type: 'ORDER_BY_ATK',
        payload
    }
}