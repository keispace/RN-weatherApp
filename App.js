import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './src/weather';

const API_KEY = '4824725be9719f18d682b51ea554e80b';
export default class App extends Component {
	state = {
		isLoaded: false,
    error: null,
    temperature:null,
    name:null,
	};

	_getWeather = (lat, long) => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
			.then(res => res.json())
      .then(json => 
        this.setState({...this.state, temperature: json.main.temp, name:json.weather[0].main, isLoaded:true}))
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				this._getWeather(coords.latitude, coords.longitude);
			},
			err => {
				this.setState({ ...this.state, err: err });
			}
		);
	}
	render() {
		const { isLoaded, err, temperature, name} = this.state;
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				{isLoaded
					? <Weather temperature={temperature} name={name} />
					: //로딩 View
						<View style={styles.loading}>
							<Text style={styles.loadingText}>Getting the fucking weather</Text>
							{err
								? <Text style={styles.errText}>
										{err}
									</Text>
								: null}
						</View>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	errText: {
		color: 'red',
		marginBottom: 40,
		paddingLeft: 25,
	},
	loading: {
		flex: 1,
		backgroundColor: '#fdf6aa',
		justifyContent: 'flex-end',
	},
	loadingText: {
		fontSize: 30,
		marginBottom: 24,
		paddingLeft: 25,
	},
});
