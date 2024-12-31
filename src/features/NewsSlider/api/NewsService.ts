import axios, { AxiosResponse } from "axios";
import { apiKey } from "../const/config";

export class NewsService {
    static async getAll(): Promise<AxiosResponse> {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        return response;
    }
}