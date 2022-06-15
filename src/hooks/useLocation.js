import React, { useState, useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'



export const useLocations = () => {
  const [userCoords, setUserCoords] = useState({
    id: 1,
    name: "Ubicacion Actual",
    lat: null,
    lon: null,
    checked: false
  })

  const [allLocationsCoords, setAllLocationsCoords] = useState([])

  useEffect(() => {
    getCurrentLocation()
      .then((response) => {
        console.log(response)
        setUserCoords((prevState) => ({
          ...prevState,
          ...response
        }))
      })
  }, [])

  useEffect(() => {
    if(userCoords.lat)
      setAllLocationsCoords([
        userCoords,
        {
          id: 2,
          name: "Brasil - Sao Paulo",
          lat: "-23.562522",
          lon: "-46.640364",
          checked: false
        },
        {
          id: 3,
          name: "Uruguay - Montevideo",
          lat: "-34.869123",
          lon: "-56.164491",
          checked: false
        },
        {
          id: 4,
          name: "Chile - Santiago de Chile",
          lat: "-33.475591",
          lon: "-70.653851",
          checked: false
        },
        {
          id: 5,
          name: "España - Madrid",
          lat: "40.415538",
          lon: "-3.701716",
          checked: false
        },
        {
          id: 6,
          name: "Portugal - Lisboa",
          lat: "38.725298",
          lon: "-9.149952",
          checked: false
        },
      ])
  }, [userCoords]);


  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(({ coords }) => {
        resolve({
          lat: coords.latitude,
          lon: coords.longitude
        })
      },
      (error) => reject({ error }), { enableHighAccuracy: true })
    })
  } 

  return [
    userCoords,
    allLocationsCoords,
    setAllLocationsCoords
  ]
}
