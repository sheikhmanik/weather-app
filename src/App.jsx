import { useContext } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import { WeatherContext } from "./components/store/WeatherContext";
import Loader from "./components/UI/Loader";

function App() {
  const { loading, currentWeather, hourlyWeather, dailyWeather } = useContext(WeatherContext);
  return (
    <div className="">
      <Header/>
      {loading ? (
        <div className="container mx-auto w-full flex items-center justify-center mt-24">
          <Loader/>
        </div>
      ) : (
        <div className="container mx-auto pt-40 sm:pt-32 px-5">
          <CurrentWeather data={currentWeather} />
          <Forecast type="hourly" title="Hourly Forecast" data={hourlyWeather} />
          <Forecast type="daily" title="21 Days Forecast" data={dailyWeather} />
        </div>
      )}
    </div>
  )
}

export default App;