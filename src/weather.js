import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:['#00C6FB', '#005BEA'],
        title:'비가 내린다고 한다',
        subTitle:'자세한 정보는 그냥 밖을 보자',
        icon:'weather-rainy',
    },
    Clear: {
        colors:['#FEF253', '#FF7300'],
        title:'맑음',
        subTitle:'눈아파',
        icon:'weather-sunny',
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title:'폭풍우',
        subTitle:'시공의 폭풍 하쉴?',
        icon:'weather-lightning-rainy',
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title:'흐림',
        subTitle:'날씨는 흐림 내 기분은 구림',
        icon:'weather-cloudy',
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title:'눈',
        subTitle:'Do you want to build a snowman?',
        icon:'weather-snowy',
    },
    Drizzle: {
        colors:['#89F7FE', '#66A6FF'],
        title:'이슬비',
        subTitle:'비는 빈데 미묘하네',
        icon:'weather-rainy', 
    },
    Haze: {
        colors:['#89F7FE', '#66A6FF'],
        title:'안개',
        subTitle:"안개꼈단다",
        icon:'weather-fog',
    },
   
}
const Weather = ({name, temperature}) => {
    //name='Haze'
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
