import { NewsArticle } from "features/NewsSlider/model/NewsArticle";

export const fixUrlsInData = (data: NewsArticle[]) => {
    return data.map(item => ({
        ...item,
        url: item.url?.replace(/\\\\u003d/g, '='),
        urlToImg: item.urlToImage?.replace(/\\\\u003d/g, '=')
    }));
};
