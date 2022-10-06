export type News = {
    id: string,
    category: string;
    img: string;
    title: string;
    estimatedReading: string;
}

export type State =  {
    isLoading: boolean,
    error?: string,
    data?: News[]
};

export type Action =
 | { type: 'request' }
 | { type: 'success', results: News[] }
 | { type: 'failure', error: string };
 
