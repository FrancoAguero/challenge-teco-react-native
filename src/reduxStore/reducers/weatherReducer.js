import { GET_WEATHER_SUCCESS, LOADING_WEATHER_FETCH } from '../types'

const initialState = {
	data: [],
	loading: true
}

const weatherReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case GET_WEATHER_SUCCESS:
			return {
				...state,
				data: action.payload
			}
		case LOADING_WEATHER_FETCH:
			return {
				...state,
				loading: action.payload
			}
		default:
			return state
	}
};

export default weatherReducer
