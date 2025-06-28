import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export default function useWeatherContext() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("Some problem in the weather context..")
    } else {
        return context;
    }
}