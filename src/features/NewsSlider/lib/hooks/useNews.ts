import { useQuery } from '@tanstack/react-query';
import { NewsService } from 'features/NewsSlider/api/NewsService';
import { NewsResponse } from 'features/NewsSlider/model/NewsResponse';
import { fixUrlsInData } from '../helpers/fixUrl';
import { parseDescription } from '../helpers/parseDescription';


export const useNews = () => {
    const { data, isLoading, error } = useQuery<NewsResponse>({
        queryKey: ['news'],
        queryFn: async () => {
            const response = await NewsService.getAll();
            return response.data;
        },
        refetchOnWindowFocus: false
    });

    const articles = data?.articles.map((article) => ({
        ...article,
        description: parseDescription(article.description),
    })) || [];

    const validArticles = fixUrlsInData(articles);

    return { validArticles, isLoading, error };
};