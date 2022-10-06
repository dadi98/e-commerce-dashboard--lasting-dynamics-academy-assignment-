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

describe('Nav Item', () => {

    const customRender = (ui: JSX.Element, providerProps: ContextTypes) => {
        return render(
          <GlobalContext.Provider value={{...providerProps}}>{ui}</GlobalContext.Provider>
        )
      }
    
    const component  = (ui: JSX.Element, providerProps: ContextTypes) => {
        return (
          <GlobalContext.Provider value={{...providerProps}}>{ui}</GlobalContext.Provider>
        )
      }
    
    
    test('display clicked item with appropriate styles', async () => {

        const {rerender} = customRender( 
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <DrawerNavItem text={'Orders'} open={true} />
                </BrowserRouter>
            </ThemeProvider> , {clicked: "Dashboard", onClick: jest.fn()}
        );
        
        expect(screen.getByRole('listitem')).toHaveStyle({color: theme.palette.primary.main})
        expect(screen.getByTestId('rectangle')).toHaveStyle({'background-color': theme.palette.primary.light,
                                                            opacity: 0})
       
        rerender(component(<ThemeProvider theme={theme}>
            <BrowserRouter>
                <DrawerNavItem text={'Orders'} open={true} />
            </BrowserRouter>
        </ThemeProvider> , {clicked: 'Orders', onClick: jest.fn()}))

        expect(screen.getByRole('listitem')).toHaveStyle({color: theme.palette.primary.light})
        expect(screen.getByTestId('list-item-content')).toHaveStyle({'background-color': '#F7F7F7'})
        expect(screen.getByTestId('rectangle')).toHaveStyle({'background-color': theme.palette.primary.light,
                                                            opacity: 1})


    });

});