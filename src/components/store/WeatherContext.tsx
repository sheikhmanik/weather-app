import { createContext, ReactNode, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../util";
import { getWeatherData } from "../api";

interface Weather {
    place: {},
    setPlace: () => void, 
    loading: boolean, 
    currentWeather: {}, 
    hourlyWeather: string, 
    dailyWeather: string,
}

export const WeatherContext = createContext<Weather | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const WeatherContextProvider = ({ children }: ContextProviderProps) => {

    const [place, setPlace] = useState<{}>(DEFAULT_PLACE);
    const [loading, setLoading] = useState(false);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyWeather, setHourlyWeather] = useState([]);
    const [dailyWeather, setDailyWeather] = useState([]);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);
            const cw = await getWeatherData('current', place.place_id, 'auto');
            setCurrentWeather(cw.current)
            const hw = await getWeatherData('hourly', place.place_id, 'auto');
            setHourlyWeather(hw.hourly.data)
            const dw = await getWeatherData('daily', place.place_id, 'auto');
            setDailyWeather(dw.daily.data)
            setLoading(false);
        }
        _getWeatherData();
    }, [place])

    return (
        <WeatherContext value={{ place, setPlace, loading, currentWeather, hourlyWeather, dailyWeather }}>
            { children }
        </WeatherContext>
    )
}