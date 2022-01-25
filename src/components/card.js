// the api key is: ea97938a5ef66faa48c939d30a08769e
import React, { useState } from 'react';







const Parent = () => {
	// we will determine the states of weather that will change like(weather state, wind speed, humidity and temperature)
	const [city, setCity] = useState('');
	const [iconSrc, setIconSrc] = useState('');
	const [weather, setWeather] = useState('');
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState(null);
	const [maxTemp, setMaxTemp] = useState(null);
	const [visibility, setVisibility] = useState(null);
	const [windSpeed, setWindSpeed] = useState(null);
	const [iconSrc2, setIconSrc2] = useState('');
	const [windDeg, setWindDeg] = useState(null);
	// the function to fetch the API
	  const ApiCall = () => {
			let apiKey = 'ea97938a5ef66faa48c939d30a08769e'; 
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			  // there will be a condition here to check if there is an input value
				setIconSrc(data.weather[0].icon);
				console.log(iconSrc);
				document.getElementById('status-icon').innerHTML = 
				`<img src='http://openweathermap.org/img/w/${iconSrc}.png' alt='current-weather-icon' > `;
				setWeather(data.weather[0].description);
				console.log(weather);
				setTemp(((data.main.temp - 32) * 5 / 9).toFixed(2));
				console.log(temp);
        setMinTemp(data.main.temp_min);
				console.log(minTemp);
				setMaxTemp(data.main.temp_max);
				console.log(maxTemp);
        if(visibility){
					setVisibility(data.visibility);
					console.log(visibility);
				} else {
					setVisibility(data.visibility);
				}
				setWindSpeed(data.wind.speed);
				console.log(windSpeed);
				// don't forget the second icon state here
				
				setWindDeg(data.wind.deg);
				console.log(windDeg);
				// this is the dayCalc process

				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
				var date = new Date();
				var day = date.getDay();
				var curDay = days[day].slice(0, 3);
				var currentDay = document.getElementById('current-day');
				currentDay.innerHTML = curDay;

			})

		}
	const DayCalc = () => {
		
	}
	// the form to submit the city starts here
	const Form = () => {
		return (
			<form className='form'>
				<input type='text' name='city' className='input' id='city-input' placeholder='insert city name'></input>
				<button type='submit' 
				        className='sub-btn' 
								id='submit'
								>submit</button>
			</form>
		)
	}
	// the card that shows starts here
	const Card = () => {
		return (
			<div className='card'>	
				<div className='status-info1'>
					<div className='city-div' id='city'>
						<i className='fas fa-map-marker-alt'></i>
						<span className='city'>

						</span>
					</div>
					<div className='weather-status'>
						<div className='status'>
							<span className='status-icon' id='status-icon'>

							</span>
							<span className='weather'>
                  {weather}
							</span>
						</div>
						<div className='temperature'>
							<span className='temp-avg'>
								  {temp}
							</span>
							<span className='max-min-temp'>
								{`${minTemp} / ${maxTemp}`}
							</span>
						</div>
						<div className='state-speed'>
              <span className='visibility'>
								{visibility}
							</span>
							<span className='wind-speed'>
								{windSpeed}
							</span>
						</div>
					</div>
				</div>
				<div className='status-info2'>
					<div className='day' id='current-day'>
             
					</div>
					<div className='icon'>
            {/* the icon here isn't added yet */}
					</div>
					<div className='temperature2'>
              {windDeg}
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className='parent'>
			{ApiCall()}
			<Form />
			<Card />

		</div>
	)
}

export default Parent;