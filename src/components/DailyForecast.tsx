import { DailyData } from "./types/WeatherDataType";

interface DailyWeatherProps {
    data: DailyData;
}

export default function DailyForecast({ data }: DailyWeatherProps) {

    const { day, icon, temperature_min, temperature_max, precipitation } = data;

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
        }).format(new Date(day).setMinutes(0)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date(day).setMinutes(0))
    }

    if (weather_date.day === now_date.day) {
        weather_date.day = 'Today'
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="flex items-center justify-center h-7 text-xs">{weather_date.day}</p>
            <div className="flex flex-col items-center justify-center gap-2 py-3 border-2 w-[150px] rounded-xl">
                <img src={`/weather_icons/set04/big/${icon}.png`} draggable="false" />
                <p>{Math.round(temperature_max)} °C</p>
                <p>{Math.round(temperature_min)} °C</p>
                <p>{Math.round(precipitation.total)} mm/h</p>
            </div>
        </div>
    )
}