interface WeatherCodeIcon {
    code: number;
    label: string;
    icon: string;
}
interface Position {
    coords: {
        latitude: number;
        longitude: number;
    };
}
interface GeolocationError {
    code: number;
    message: string;
}
interface BatteryManager {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    addEventListener(event: string, listener: () => void): void;
}
interface NavigatorGeolocation {
    getCurrentPosition(success: (position: Position) => void, error: (error: GeolocationError) => void, options?: GeolocationPositionOptions): void;
}
interface NavigatorWithBattery extends Navigator {
    getBattery?: () => Promise<BatteryManager>;
}
declare class Weather {
    private latitude;
    private longitude;
    private iconArray;
    constructor(latitude: number, longitude: number);
    ConsultApi(): Promise<void>;
}
type Language = {
    error: string;
};
declare const spanish: Language;
declare const english: Language;
declare const languageTexts: {
    es: Language;
    en: Language;
};
type LangCode = keyof typeof languageTexts;
declare const now: Date;
declare function getLanguage(): LangCode;
declare const currentLanguage: "en" | "es";
declare function ChangeDate(): void;
interface GeolocationPositionOptions {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}
declare function ChangeWeather(): void;
declare function GetBattery(): void;
declare function ChangeBatteryLevels(battery: BatteryManager): void;
