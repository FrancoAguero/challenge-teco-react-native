import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_WEATHER_FETCH, GET_WEATHER_SUCCESS, LOADING_WEATHER_FETCH } from '../types'

const apiKey = "034aa1ceccabf926ba49bc880c5d6c39"

async function weatherFetch ({ lat = "", lon = "" }) {
	return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`)
		.then((response) => response.json())
		.catch((error) => console.error(error))
}

function* workGetWeatherFetch (action) {
	yield put({ type: LOADING_WEATHER_FETCH, payload: true })
	const weather = yield call(weatherFetch, action.payload)
	yield put({ type: GET_WEATHER_SUCCESS, payload: weather })
	yield put({ type: LOADING_WEATHER_FETCH, payload: false })
}


function* rootSaga () {
	yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch);
}


export default rootSaga;
