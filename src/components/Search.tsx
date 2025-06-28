import { ChangeEvent, useState } from "react";
import { searchPlaces } from "./api";
import useWeatherContext from "./store/useWeatherContext";
import { Place } from "./types/WeatherDataType";

export default function Search() {

    const { setPlace } = useWeatherContext();

    const [text, setText] = useState("");
    const [searchResults, setSearchResults] = useState<Place[]>([]);

    async function onSearch(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
        const data = await searchPlaces(text);
        setSearchResults(data);
    }

    function selectPlace(place: Place) {
        setPlace(place);
        setSearchResults([]);
        setText("");
    }

    return (
        <div className="w-full">
            <input
                type="text" 
                placeholder="Search city"
                value={text}
                onChange={onSearch}
                className="input relative border-1 sm:border-2 dark:border-white rounded-4xl w-full"
            />
            {searchResults.length > 0 && text.trim() !== "" &&
                <div className="absolute w-auto h-[300px] overflow-scroll bg-gray-800">
                    {
                        searchResults.map((place) => (
                            <li 
                                key={place.place_id} 
                                onClick={() => selectPlace(place)}
                                className="cursor-pointer border-b p-3 hover:bg-gray-700"
                            >
                                {place.name}, {place.country}
                            </li>
                        ))
                    }
                </div>
            }
        </div>
    )
}