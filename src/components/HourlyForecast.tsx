import { HourlyData } from "./types/WeatherDataType";

interface HourlyWeatherProps {
    data: HourlyData;
}

export default function HourlyForecast({ data }: HourlyWeatherProps) {

    const { date, icon, temperature, wind, precipitation } = data;

    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date().setMinutes(0)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date().setMinutes(0))
    }

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date(date).setMinutes(0)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date(date).setMinutes(0))
    }

    if (weather_date.day === now_date.day && weather_date.time === now_date.time) {
        weather_date.day = 'Today';
    } else if (weather_date.time === "12:00 AM" && weather_date.day !== now_date.day) {
        weather_date.day = weather_date.day;
    } else {
        weather_date.day = '';
    }
    

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="flex items-center justify-center h-7 text-xs">{weather_date.day}</p>
            <div className="flex flex-col items-center justify-center gap-2 py-3 border-2 w-[150px] rounded-xl">
                <p className="time">{weather_date.time}</p>
                <img src={`/weather_icons/set04/big/${icon}.png`} draggable="false" />
                <p>{Math.round(temperature)} °C</p>
                <p>{Math.round(wind.speed)} mph</p>
                <p>{precipitation.total} mm/h</p>
            </div>

        </div>
    )
}