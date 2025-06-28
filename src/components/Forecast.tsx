import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { DailyData, HourlyData } from "./types/WeatherDataType";

type ForecastProps = 
    | { title: string, type: "hourly", data: HourlyData[] }
    | { title: string, type: "daily", data: DailyData[] }


export default function Forecast({ title, type, data }: ForecastProps) {
    return (
        <div className="pt-10">
            <p className="text-2xl">{title}</p>
            <div className="flex items-center overflow-x-auto gap-3">
                {
                    type === "daily"
                    ? data.map((daily) => (
                        <div>
                            <DailyForecast data={daily} />
                        </div>
                    ))
                    : data.map((hourly) => (
                        <div>
                            <HourlyForecast data={hourly} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}