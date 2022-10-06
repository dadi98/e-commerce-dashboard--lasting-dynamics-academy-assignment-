import { useEffect, useReducer } from "react";
import { News, State, Action } from "../types/dashboard"

function reducer( _state: State, action: Action){
    switch (action.type) {
        case 'request':
          return ({isLoading: true })
        case 'success':
          return ({isLoading: false, data: action.results })
        case 'failure':
          return ({ isLoading: false, error: action.error })
      }
}

const initialState = {
    isLoading: false,
}

export const useGetData = (endPoint: string) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchNews<T>( requestUrl: RequestInfo): Promise<T> {
            dispatch({
                type: 'request'
            })

            let data;

            try {
                const response = await fetch(requestUrl)
                
                if (!response.ok) {
                    throw new Error("something went wrong!")
                }
                data = await response.json();
            } catch (error) {
                let message = '';
                if (error instanceof Error) message = error.message;
                else message = String(error);
                //console.log(message)
                dispatch({
                    type: "failure",
                    error: message
                }) 
            }
            return data;
        }

        fetchNews<News[]>(`http://localhost:8000/${endPoint}`).then(data => {
            data &&
            dispatch({
                type: 'success',
                results: data
            })    
        });
    }, [])

    return state;
}