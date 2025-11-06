export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
  TIMEOUT: 10000,
  MAX_RETRIES: 2,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export class NetworkError extends Error {
  constructor(
    message: string = "Sem conexão com a internet. Verifique sua rede e tente novamente."
  ) {
    super(message);
    this.name = "NetworkError";
  }
}

export class TimeoutError extends Error {
  constructor(
    message: string = "A requisição demorou muito tempo. Tente novamente."
  ) {
    super(message);
    this.name = "TimeoutError";
  }
}

export class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout: number = TMDB_CONFIG.TIMEOUT
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      throw new TimeoutError();
    }

    if (
      error.message === "Network request failed" ||
      error.message.includes("Failed to fetch")
    ) {
      throw new NetworkError();
    }

    throw error;
  }
};

const fetchWithRetry = async (
  url: string,
  options: RequestInit = {},
  retries: number = TMDB_CONFIG.MAX_RETRIES
): Promise<Response> => {
  let lastError: Error;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, options);
      return response;
    } catch (error: any) {
      lastError = error;

      if (error instanceof NetworkError || error instanceof TimeoutError) {
        if (attempt < retries) {
          await new Promise((resolve) =>
            setTimeout(resolve, Math.pow(2, attempt) * 1000)
          );
          continue;
        }
      }

      throw error;
    }
  }

  throw lastError!;
};

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = "Erro ao buscar dados. Tente novamente.";

    switch (response.status) {
      case 401:
        errorMessage = "Chave de API inválida. Verifique suas configurações.";
        break;
      case 404:
        errorMessage = "Conteúdo não encontrado.";
        break;
      case 429:
        errorMessage =
          "Muitas requisições. Aguarde um momento e tente novamente.";
        break;
      case 500:
      case 502:
      case 503:
        errorMessage =
          "Serviço temporariamente indisponível. Tente novamente em alguns instantes.";
        break;
    }

    throw new APIError(errorMessage, response.status);
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Erro ao processar resposta do servidor.");
  }
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  try {
    const endpoint = query
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
          query
        )}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetchWithRetry(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    const data = await handleResponse(response);
    return data.results || [];
  } catch (error) {
    if (
      error instanceof NetworkError ||
      error instanceof TimeoutError ||
      error instanceof APIError
    ) {
      throw error;
    }

    console.error("Erro ao buscar filmes:", error);
    throw new Error("Erro inesperado ao buscar filmes. Tente novamente.");
  }
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetchWithRetry(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    const data = await handleResponse(response);
    return data;
  } catch (error) {
    if (
      error instanceof NetworkError ||
      error instanceof TimeoutError ||
      error instanceof APIError
    ) {
      throw error;
    }

    console.error("Erro ao buscar detalhes do filme:", error);
    throw new Error(
      "Erro inesperado ao buscar detalhes do filme. Tente novamente."
    );
  }
};
