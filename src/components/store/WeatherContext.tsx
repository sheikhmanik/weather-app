import { createContext, ReactNode, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../util";
import { getWeatherData } from "../api";

interface Place {
    place_id: string;
    [key: string]: any;
}

interface Weather {
    place: Place,
    setPlace: React.Dispatch<React.SetStateAction<Place>>,
    loading: boolean, 
    currentWeather: any, 
    hourlyWeather: any[], 
    dailyWeather: any[],
}

export const WeatherContext = createContext<Weather | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export interface CurrentData {
    icon: string;
    icon_num: number;
    summary: string;
    temperature: number;
    feels_like: number;
    wind_chill: number;
    dew_point: number;
    wind: {
      speed: number;
      gusts: number;
      angle: number;
      dir: string;
    };
    precipitation: {
      total: number;
      type: string;
    };
    cloud_cover: number;
    ozone: number;
    pressure: number;
    uv_index: number;
    humidity: number;
    visibility: number;
}  

interface HourlyData {
    date: string;
    weather: string;
    icon: number;
    summary: string;
    temperature: number;
    feels_like: number;
    wind_chill: number;
    dew_point: number;
    wind: {
        speed: number;
        gusts: number;
        dir: string;
        angle: number;
    };
    cloud_cover: number;
    pressure: number;
    precipitation: {
        total: number;
        type: string;
    };
    probability: {
        precipitation: number;
        storm: number;
        freeze: number;
    };
    ozone: number;
    uv_index: number;
    humidity: number;
    visibility: number;
};

export interface DailyData {
    day: string;
    weather: string;
    icon: number;
    summary: string;
    predictability: number;
    temperature: number;
    temperature_min: number;
    temperature_max: number;
    feels_like: number;
    feels_like_min: number;
    feels_like_max: number;
    wind_chill: number;
    wind_chill_min: number;
    wind_chill_max: number;
    dew_point: number;
    dew_point_min: number;
    dew_point_max: number;
    wind: {
      speed: number;
      gusts: number;
      dir: string;
      angle: number;
    };
    cloud_cover: number;
    pressure: number;
    precipitation: {
      total: number;
      type: string;
    };
    probability: {
      precipitation: number;
      storm: number;
      freeze: number;
    };
    ozone: number;
    humidity: number;
    visibility: number;
}
  

export const WeatherContextProvider = ({ children }: ContextProviderProps) => {

    const [place, setPlace] = useState<Place>(DEFAULT_PLACE);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentWeather, setCurrentWeather] = useState<CurrentData[]>([]);
    const [hourlyWeather, setHourlyWeather] = useState<HourlyData[]>([]);
    const [dailyWeather, setDailyWeather] = useState<DailyData[]>([]);


    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);
            const cw = await getWeatherData('current', place.place_id, 'auto');
            if ('current' in cw) {
                setCurrentWeather(cw.current);
            }
            const hw = await getWeatherData('hourly', place.place_id, 'auto');
            if ('hourly' in hw) {
                setHourlyWeather(hw.hourly.data);
            }
            const dw = await getWeatherData('daily', place.place_id, 'auto');
            if ('daily' in dw) {
                setDailyWeather(dw.daily.data);
            }
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