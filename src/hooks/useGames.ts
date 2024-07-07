import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    const controlloer = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controlloer.signal})
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return; 
        setError(error.message)}
        );

      return () => controlloer.abort();
  }, []);

  return {games, error};
  }

  export default useGames;