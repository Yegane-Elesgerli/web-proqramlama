import React from "react";

const Weather = props => (
	<div className="weather_info">
	 {	
	 	props.city && props.country && <p className="weather_key"> Location: 
	 		<span className="weather_value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather_key"> Temperature: 
	 		<span className="weather_value"> { props.temperature }	</span>
	 	</p> 
	 }
	
	 { 	
	 	props.description && <p className="weather_key"> Conditions: 
	 		<span className="weather_value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;