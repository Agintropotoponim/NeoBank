export interface IRate {
    [key: string]: number;
}

export interface IRateResponse {
    conversion_rates: IRate;
} 