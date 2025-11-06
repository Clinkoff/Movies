import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("movies.db");

let isInitialized = false;

const initDatabase = () => {
  if (isInitialized) return;

  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        poster_path TEXT,
        backdrop_path TEXT,
        overview TEXT,
        release_date TEXT,
        vote_average REAL,
        vote_count INTEGER,
        popularity REAL,
        genre_ids TEXT,
        original_language TEXT,
        original_title TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    isInitialized = true;
    console.log("✅ Banco de dados inicializado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error);
    throw error;
  }
};

initDatabase();

export { initDatabase };

export const saveMovies = (movies: Movie[]) => {
  try {
    db.withTransactionSync(() => {
      const statement = db.prepareSync(`
        INSERT OR REPLACE INTO movies
        (id, title, poster_path, backdrop_path, overview, release_date,
         vote_average, vote_count, popularity, genre_ids, original_language, original_title)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      movies.forEach((movie) => {
        statement.executeSync([
          movie.id,
          movie.title,
          movie.poster_path || "",
          movie.backdrop_path || "",
          movie.overview || "",
          movie.release_date || "",
          movie.vote_average || 0,
          movie.vote_count || 0,
          movie.popularity || 0,
          JSON.stringify(movie.genre_ids || []),
          movie.original_language || "",
          movie.original_title || "",
        ]);
      });
    });
  } catch (error) {
    console.error("L Erro ao salvar filmes:", error);
  }
};

export const getMovies = (): Movie[] => {
  try {
    const result = db.getAllSync(
      "SELECT * FROM movies ORDER BY popularity DESC"
    );

    const movies: Movie[] = result.map((row: any) => ({
      id: row.id,
      title: row.title,
      poster_path: row.poster_path,
      backdrop_path: row.backdrop_path,
      overview: row.overview,
      release_date: row.release_date,
      vote_average: row.vote_average,
      vote_count: row.vote_count,
      popularity: row.popularity,
      genre_ids: JSON.parse(row.genre_ids || "[]"),
      original_language: row.original_language,
      original_title: row.original_title,
      adult: false,
      video: false,
    }));

    console.log(`${movies.length} filme(s) carregado(s) do cache!`);
    return movies;
  } catch (error) {
    console.error("L Erro ao buscar filmes do cache:", error);
    return [];
  }
};

export const clearMovies = () => {
  try {
    db.execSync("DELETE FROM movies");
    console.log("Cache de filmes limpo");
  } catch (error) {
    console.error("L Erro ao limpar cache:", error);
  }
};

export const getMoviesCount = (): number => {
  try {
    const result = db.getFirstSync<{ count: number }>(
      "SELECT COUNT(*) as count FROM movies"
    );
    return result?.count || 0;
  } catch (error) {
    console.error("L Erro ao contar filmes:", error);
    return 0;
  }
};
