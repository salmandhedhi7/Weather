import "./weatherwidget.css";

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="card">
            City Name: {weatherData?.name}
            <br />
            Country: {weatherData?.sys?.country}
            <br />
            temperature: {weatherData?.main?.temp}°C
            <br />
            Humidity: {weatherData?.main?.humidity}
            <br />
            Wind Speed: {weatherData?.wind?.speed}
            <br />
            Weather: {weatherData?.weather[0]?.description}
            
        </div>
    );
};

export default WeatherCard;