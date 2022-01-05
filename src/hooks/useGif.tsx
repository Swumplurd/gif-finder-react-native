import { useEffect, useState } from "react";
import giphy from "../api/giphy";
import { Datum, GiphyResponse } from "../interfaces/gifInterface";

interface gifDetails {
    isLoading: boolean,
    gifs: Datum[]
}

export const useGif = (gifName: string) => {
    const [state, setState] = useState<gifDetails>({
        isLoading: true,
        gifs: []
    })

    const getGifs = async() => {
        const gifInfo = giphy.get<GiphyResponse>('/search', {
            params: {
                api_key: 'bILFjNhufxvvXqmrTdh59d3zRKqkgyRI',
                limit: 5,
                q: gifName
            }
        });

        const [infoRes] = await Promise.all([gifInfo])
        setState({
            isLoading: false,
            gifs: infoRes.data.data
        })
    }

    useEffect(() => {
        getGifs()
    }, [])

    return {
        ...state
    }
}
