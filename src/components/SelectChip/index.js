import React, { useEffect } from 'react'

//redux
import { useDispatch } from 'react-redux'
import { getWeatherFetch } from '../../reduxStore/actions/weatherActions'

//Components
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { Chip } from 'react-native-paper'

const { width } = Dimensions.get("window")

const SelectChip = ({ data }) => {
    const dispatch = useDispatch()

    const handleSelectorChipLocation = (item) => {
        const { lat, lon } = item
        dispatch(getWeatherFetch({
            lat,
            lon
        }))
    }

    useEffect(() => {
    }, [data]);
    
    return (
        <View style={styles.chipContainer}>
            {
                data.length !== 0 && data.map((item) =>  (
                    <Chip key={item.id} style={styles.chip} onPress={() => handleSelectorChipLocation(item)}>
                        <Text style={{color: "#fff", fontSize: 13}}>{ item.name }</Text>
                    </Chip>
                ))
            }
        </View>
    )
}

export default SelectChip


const styles = StyleSheet.create({
    chipContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: width 
    },
    chip: {
        width: "40%",
        marginTop: 5,
        backgroundColor: "#123",
        color: "#fff"
    }
})

