import { AxiosError } from "axios";
import { useState } from "react";

type FetchingHook = [() => Promise<void>, boolean, string | null];

export const useFetching = (callback: () => Promise<void>): FetchingHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetch = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
        const errors = err as Error | AxiosError;
        setErrorMessage(errors.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetch, isLoading, errorMessage];
};
