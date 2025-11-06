import { useEffect, useState } from "react";
import { APIError, NetworkError, TimeoutError } from "./api";
import { getMovies, saveMovies } from "./database";

// Interface para informações detalhadas do erro
export interface ErrorInfo {
  message: string;
  type: "network" | "timeout" | "api" | "unknown";
  statusCode?: number;
  fromCache?: boolean;
}

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch?: boolean
): {
  data: T | null;
  loading: boolean;
  error: ErrorInfo | null;
  isFromCache: boolean;
  refetch: () => Promise<void>;
  reset: () => void;
};

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch: boolean | undefined,
  initialData: T
): {
  data: T;
  loading: boolean;
  error: ErrorInfo | null;
  isFromCache: boolean;
  refetch: () => Promise<void>;
  reset: () => void;
};

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch: boolean = true,
  initialData?: T
) {
  const [data, setData] = useState<T | null>(initialData ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorInfo | null>(null);
  const [isFromCache, setIsFromCache] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const cachedMovies = getMovies();
      if (cachedMovies.length > 0) {
        setData(cachedMovies as T);
        setIsFromCache(true);
      }

      const result = await fetchFunction();
      setData(result);
      setIsFromCache(false);

      if (Array.isArray(result) && result.length > 0) {
        saveMovies(result as Movie[]);
      }
    } catch (err: any) {
      let errorInfo: ErrorInfo;

      if (err instanceof NetworkError) {
        errorInfo = {
          message: err.message,
          type: "network",
        };

        const cachedMovies = getMovies();
        if (cachedMovies.length > 0) {
          setData(cachedMovies as T);
          setIsFromCache(true);
          errorInfo.message = "Modo offline: exibindo filmes salvos";
          errorInfo.fromCache = true;
        }
      } else if (err instanceof TimeoutError) {
        errorInfo = {
          message: err.message,
          type: "timeout",
        };
      } else if (err instanceof APIError) {
        errorInfo = {
          message: err.message,
          type: "api",
          statusCode: err.statusCode,
        };
      } else {
        errorInfo = {
          message: err?.message || "Erro desconhecido. Tente novamente.",
          type: "unknown",
        };
      }

      setError(errorInfo);
      console.error("Erro no useFetch:", errorInfo);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(initialData ?? null);
    setError(null);
    setLoading(false);
    setIsFromCache(false);
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return {
    data: data as any,
    loading,
    error,
    isFromCache,
    refetch: fetchData,
    reset,
  };
}
