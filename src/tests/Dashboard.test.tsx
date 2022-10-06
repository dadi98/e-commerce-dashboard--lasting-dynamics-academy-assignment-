import { act, render, renderHook, screen } from '@testing-library/react';

import { BrowserRouter } from "react-router-dom"
import { useGetData } from '../functions/fetchData';

import Dashboard from '../pages/Dashboard';
import mockFetch from './mockFetch';

describe('Dashboard', () => {
    beforeEach(() => jest.spyOn(window, "fetch").mockImplementation(mockFetch))
    
    test('display news data after being fetched or error msg if request failed', async () => {
         
        const { rerender } = render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );

        expect(await screen.findAllByTestId('news-item')).toHaveLength(5);
        /*--  uncomment the code below to test for failed requests*/        
        //expect(await screen.findByTestId('error-msg')).toBeInTheDocument();
        //expect(await screen.findByTestId('error-msg')).toHaveTextContent('something went wrong!');
        
    });

});