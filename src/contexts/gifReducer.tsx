import { GifState } from "./GifContext";

type AuthAction = 
    | {type: 'setGifName', payload: string}

export const gifReducer = (state: GifState, action: AuthAction ): GifState => {

    switch (action.type) {
        case 'setGifName':
            return {
                ...state,
                nameGif: action.payload
            }
        default:
            return state;
    }

}