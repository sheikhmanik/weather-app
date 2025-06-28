import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import useWeatherContext from "./store/useWeatherContext";

export default function Place() {
    const { place } = useWeatherContext();
    return (
        <div className="flex items-center justify-start gap-2 sm:gap-4 w-full sm:order-none">
            <FontAwesomeIcon icon={faLocationPin} />
            <p className="text-xs sm:text-lg font-bold">{place.name}, {place.country}</p>
        </div>
    )
}