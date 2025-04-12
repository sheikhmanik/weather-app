import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "./store/WeatherContext";

export default function Place() {
    const { place } = useContext(WeatherContext);
    return (
        <div className="flex items-center justify-start gap-2 sm:gap-4 w-full sm:order-none">
            <FontAwesomeIcon icon={faLocationPin} />
            <p className="text-xs sm:text-lg font-bold">{place.name}, {place.country}</p>
        </div>
    )
}