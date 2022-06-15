import React from 'react'

//components
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Surface } from 'react-native-paper'

//utils
import { formatterDate } from '../../utils/formatterDate'

//icons
import humidity from '../../assets/drop.png'

const  { width } = Dimensions.get("window")


const WeaklyWeatherCard = ({ data }) => {
    const weeklyData = data.slice(0, 6);

    return (
        <Surface style={styles.cardContainer} elevation={4}>
            { weeklyData && weeklyData.map((item) => (
                <View key={item.dt} style={styles.itemContainer}>
                    <View style={styles.title}><Text>{formatterDate(item.dt).toLocaleDateString()}</Text></View>
                    <View style={styles.humidity}><Image style={styles.iconHumidity} source={humidity}/><Text>{`${item.humidity}%`}</Text></View>
                    <View style={styles.weather}><Image style={styles.iconWeather} source={{uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`}}/><Text>{`${parseInt(item.temp.max)}º / ${parseInt(item.temp.min)}º`}</Text></View>
                </View>
            ))}
        </Surface>
    )
}

export default WeaklyWeatherCard

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        width: width - 50,
        borderRadius: 10
    },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5,
    },
    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "20%"
    },
    humidity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "30%"
    },
    weather: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    iconHumidity: {
        width: 10,
        height: 10,
        marginHorizontal: 10
    },
    iconWeather: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    }
})
