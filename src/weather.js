import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:['#00C6FB', '#005BEA'],
        title:'Raining like a MF',
        subTitle:'For more info look outside',
        icon:'weather-rainy',
    },
    Clear: {
        colors:['#FEF253', '#FF7300'],
        title:'Sunny as Fuck',
        subTitle:'Go get your ass burnt',
        icon:'weather-sunny',
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title:'Thunderstorm in the house!',
        subTitle:'Actually outside of the house',
        icon:'weather-lightning-rainy',
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title:'Clouds',
        subTitle:'I know, fucking boring',
        icon:'weather-cloudy',
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title:'Cold as balls',
        subTitle:'Do you want to build a snowman? Fuck no.',
        icon:'weather-snowy',
    },
    Drizzle: {
        colors:['#89F7FE', '#66A6FF'],
        title:'Drizzle',
        subTitle:'Is like rain, but gay',
        icon:'weather-rainy',
    },
    Haze: {
        colors:['#89F7FE', '#66A6FF'],
        title:'Haze',
        subTitle:"Don't know yat that is",
        icon:'weather-fog',
    },
   
}
const Weather = ({name, temperature}) => {
    name='Haze'
	return <LinearGradient colors={weatherCases[name].colors} style={styles.container} >
            <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={weatherCases[name].icon}/>
            <Text style={styles.temp}>{Math.floor(temperature-273.15)}º</Text>
            </View>

            <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[name].title}</Text>
            <Text style={styles.subTitle}>{weatherCases[name].subTitle}</Text>
            </View>
        </LinearGradient>;
}

export default Weather;
Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 48,
        //backgroundColor: 'transparent',
        color: "white",
        marginTop: 10,
    },
    lower:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        //backgroundColor: 'transparent',
        color: "white",
        marginBottom: 10,
        fontWeight: '100',
    },
    subTitle: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: "white",
        marginBottom: 24,
    },
});
