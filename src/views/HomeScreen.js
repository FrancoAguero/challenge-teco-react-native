//React
import React, { useEffect } from 'react'

//Components
import { StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native'
import SelectChip from '../components/SelectChip'

//Utils
import { useSelector, useDispatch } from 'react-redux'
import { useLocations } from '../hooks/useLocation'
import { getWeatherFetch } from '../reduxStore/actions/weatherActions'
import DailyWeatherCard from '../components/DailyWeatherCard'
import WeeklyWeatherCard from '../components/WeeklyWeatherCard'


const Home = () => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.weatherReducer)
  const [ { lat, lon }, allLocationsCoords ] = useLocations()

  useEffect(() => {
    if(data.length === 0 && lat ) {
      dispatch(getWeatherFetch({
        lat,
        lon
      }))
    }
  }, [lat])

  useEffect(() => {
  }, [data, allLocationsCoords]);

  return (
    <ScrollView>
      <SelectChip data={allLocationsCoords} />
      <View style={styles.container}>
        { !loading ? 
          <View>
            <DailyWeatherCard timezone={data.timezone} data={data?.current}/>
            <WeeklyWeatherCard data={data?.daily}/>
          </View>
          : 
          <ActivityIndicator 
          size={ 50 }
          color="#CECECE"
          />
        }
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 10
  }
})
