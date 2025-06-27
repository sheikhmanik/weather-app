import { faDroplet, faWind, faSun, faCloud, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CurrentWeather({ data }) {
    
  const {
    icon_num,
    summary,
    temperature,
    feels_like,
    wind,
    precipitation,
    cloud_cover,
    uv_index,
    humidity,
    visibility
  } = data;

  const otherInfoWidgets = [
    {
      id: 0,
      icon: faDroplet,
      name: 'Precipitation',
      value: Math.round(precipitation?.total),
      unit: "in/h",
    },
    {
      id: 1,
      icon: faWind,
      name: 'Wind',
      value: Math.round(wind?.speed),
      unit: "mph",
    },
    {
      id: 2,
      icon: faDroplet,
      name: 'Humidity',
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: faSun,
      name: 'UV index',
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: faCloud,
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: faEye,
      name: 'Visibility',
      value: Math.round(visibility),
      unit: "mi",
    },
  ];

    return (
      <div className="flex flex-col sm:flex-row items-center justify-around gap-5">
        <div className="flex flex-col justify-start h-[220px] w-full sm:w-1/3 rounded-2xl gap-2 border-1 sm:border-2 p-5">
            <img src={`/weather_icons/set04/big/${icon_num}.png`} className="w-16 h-16" draggable="false" />
            <p className=" text-3xl">{Math.round(temperature)} °C</p>
            <p>feels like {Math.round(feels_like)} °C</p>
            <p>{summary}</p>
        </div>
        <div className="h-auto min-h-[220px] w-full max-w-[375px] flex items-center justify-evenly flex-wrap rounded-2xl gap-2 border-1 sm:border-2 p-5">
            {otherInfoWidgets.map(({ id, icon, name, value, unit }) =>
                <div key={id} className="flex flex-col items-center justify-start">
                    <div className="flex items-center justify-start gap-2">
                        <div className=" rounded-full bg-black dark:bg-white"></div>
                        
                        <FontAwesomeIcon icon={icon} />

                        <p className="">{value} {unit}</p>
                    </div>
                    <p className="text-xl">{name}</p>
                </div>
            )}
        </div>
      </div>
    )
}