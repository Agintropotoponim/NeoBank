import axios, { AxiosResponse } from "axios";
import { apiKey } from "../const/config";

export class ConverterService {
    static async getAll(baseCurrency: string): Promise<AxiosResponse> {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
        return response;
    }
}