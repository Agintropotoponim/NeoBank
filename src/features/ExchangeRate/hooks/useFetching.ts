import { useState } from "react";

interface FetchingHook<T> {
  fetchFn: () => Promise<T | undefined>;
  isLoading: boolean;
  errorMessage: string | null;
}

export const useFetching = <T,>(callback: () => Promise<T>): FetchingHook<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchFn = async (): Promise<T | undefined> => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const result = await callback();
      return result;
    } catch (err) {
      const errors = err as Error;
      setErrorMessage(errors.message);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchFn, isLoading, errorMessage };
};