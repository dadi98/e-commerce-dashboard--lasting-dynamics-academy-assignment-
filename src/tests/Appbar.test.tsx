import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event';
import { catalogueMenu, marketingMenu, menu } from '../constants/constants';
import Collapse from '@mui/material/Collapse';
import CollapsedList from '../components/reusable/CollapsedList';
import DrawerNavItem from '../components/reusable/DrawerNavItem';
import { theme } from '../constants/customTheme';
import { ThemeProvider } from '@mui/material/styles';
import { ContextTypes, GlobalContext } from '../App';
import Appbar from '../components/AppBar';

describe('Appbar', () => {
    
    test('display the appropriate name of the page', async () => {

        const { rerender } = render(
            <BrowserRouter>
                <Appbar clicked="Dashboard" onClick={jest.fn()}/>
            </BrowserRouter>
        );
        expect(screen.getByRole('heading')).toHaveTextContent("Dashboard");

        [...menu, ...catalogueMenu, ...marketingMenu].slice(1).forEach((item) =>{
            rerender(
                <BrowserRouter>
                    <Appbar clicked={item} onClick={jest.fn()}/>
                </BrowserRouter>
            );
            expect(screen.getByRole('heading')).toHaveTextContent(item);
        })
        
    });

});