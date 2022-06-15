import { GET_WEATHER_FETCH } from '../types'

export const getWeatherFetch = (apiParams) => ({
	type: GET_WEATHER_FETCH,
	payload: apiParams
})
