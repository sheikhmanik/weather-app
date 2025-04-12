import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Forecast({ title, type, data }) {
    return (
        <div className="pt-10">
            <p className="text-2xl">{title}</p>
            <div className="flex items-center overflow-x-auto gap-3">
                {data.map((singleData) => (
                    <div key={singleData.date || singleData.day} className="flex gap-7">
                        {
                            type === 'hourly'
                            ? <HourlyForecast data={singleData} />
                            : <DailyForecast data={singleData} />
                        }
                    </div>
                ))}
            </div>

        </div>
    )
}