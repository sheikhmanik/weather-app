import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import Loader from "./components/UI/Loader";
import useWeatherContext from "./components/store/useWeatherContext";

function App() {
  const { loading, currentWeather, hourlyWeather, dailyWeather } = useWeatherContext();
  return (
    <div className="mb-16">
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