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
};

export interface HourlyData {
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

export interface Place {
    place_id: string;
    name: string;
    country: string;
};