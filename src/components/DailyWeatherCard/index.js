import React from 'react'

//components
import { Surface } from 'react-native-paper'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

//utils
import { formatterDate } from '../../utils/formatterDate'
import { formatterUv } from '../../utils/formatterUv'

//Icons
import Sunrise from '../../assets/sunrise.png'
import Sunset from '../../assets/sunset.png'
import Uv from '../../assets/sun.png'
import Wind from '../../assets/wind.png'
import Humidity from '../../assets/drop.png'


const { width, height } = Dimensions.get("window")

const DailyWeatherCard = ({ data, timezone }) => {
    const { temp, feels_like, weather: [ iconData ], sunrise, sunset, dt, uvi, humidity, wind_speed } = data
    const [ city ] = timezone.split('/').slice(-1)

    console.log(iconData)
    
    return (
        <View>
            <Surface style={styles.cardContainer} elevation={4}>
                <View style={styles.dailyContent}>
                    <Text style={{fontSize: 24}}>{`${parseInt(temp)}º`}</Text>
                    <Text>{city}</Text>
                    <Text>{`Sensacion terminca ${parseInt(feels_like)}º`}</Text>
                    <Text>{`${formatterDate(dt).toLocaleDateString()}, ${formatterDate(dt).toLocaleTimeString()}`}</Text>
                </View>
                <View style={styles.dailyContent}>
                    <Image style={{...styles.img, width: 100, height: 100}} source={{uri: `https://openweathermap.org/img/w/${iconData.icon}.png`}}/>
                </View>
            </Surface>
            <Surface style={styles.cardContainer} elevation={4}>
                <View style={styles.dailyContent}>
                    <Text>Salida del Sol:</Text>
                    <Text>{formatterDate(sunrise).toLocaleTimeString()}</Text>
                    <Image style={styles.img} source={Sunrise}/>
                </View>
                <View style={styles.dailyContent}>
                    <Text>Atardecer:</Text>
                    <Text>{formatterDate(sunset).toLocaleTimeString()}</Text>
                    <Image style={styles.img} source={Sunset}/>
                </View>
            </Surface>
            <Surface style={styles.cardContainer} elevation={4}>
                <View style={styles.infoContent}>
                    <Image style={styles.img} source={Uv}/>
                    <Text>Indice Uv</Text>
                    <Text>{formatterUv(uvi)}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Image style={styles.img} source={Wind}/>
                    <Text>Viento</Text>
                    <Text>{`${wind_speed} m/s`}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Image style={styles.img} source={Humidity}/>
                    <Text>Humedad</Text>
                    <Text>{`${humidity} %`}</Text>
                </View>
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        marginVertical: 10,
        width: width - 50,
        borderRadius: 10
    },
    img: {
        marginVertical: 5,
        width: 50,
        height: 50
    },
    dailyContent: {
        marginVertical: 10,
        display: "flex",
        alignItems: "center",
        width: "50%"
    },
    infoContent: {
        marginVertical: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "33%"
    }
})

export default DailyWeatherCard
