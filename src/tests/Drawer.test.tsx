import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event';
import { catalogueMenu, marketingMenu, menu } from '../constants/constants';
import Collapse from '@mui/material/Collapse';
import CollapsedList from '../components/reusable/CollapsedList';

describe('Sidebar', () => {
    test('render sidebar and display app logo and selec shop', async () => {
        render( 
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        );

        expect(screen.getByTestId('sidebar-select')).toBeInTheDocument();
        expect(screen.getByAltText('logo')).toBeInTheDocument();

        const openSidebarButton = screen.getByTestId('sidebar-button');

        await userEvent.click(openSidebarButton)
        await userEvent.click(openSidebarButton)
        await userEvent.click(openSidebarButton)
        await userEvent.click(openSidebarButton)
        
        expect(screen.getByTestId('sidebar-select')).toBeInTheDocument();
        expect(screen.getByAltText('logo')).toBeInTheDocument();

    });

    test('render sidebar and see app logo and selec shop disappear when toggle button clicked', async () => {
        render( 
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        );
        
        expect(screen.getByTestId('sidebar-select')).toBeInTheDocument();
        expect(screen.getByAltText('logo')).toBeInTheDocument();

        const openSidebarButton = screen.getByTestId('sidebar-button');

        await userEvent.click(openSidebarButton)
        await userEvent.click(openSidebarButton)
        await userEvent.click(openSidebarButton)

        expect(screen.queryByTestId('sidebar-select')).toBeNull();
        expect(screen.queryByAltText('logo')).toBeNull();

    });

    describe('Sidebar nav items', ()=>{
        //initial state:
        const open = true;
        const collapsed =  {
                Catalogue:  false, 
                Marketing:  false,
        }

        test('display nav items', async () => {
            render( 
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            );
            
            render( 
                <BrowserRouter>
                    <Collapse in={open && collapsed.Catalogue}>
                        <CollapsedList text='Catalogue'/>
                    </Collapse>
                </BrowserRouter>
            )

            render( 
                <BrowserRouter>
                    <Collapse in={open && collapsed.Marketing}>
                        <CollapsedList text='Marketing'/>
                    </Collapse>
                </BrowserRouter>
            )
            
            
            expect(screen.getAllByRole('listitem'))
                            .toHaveLength([ ...menu].length);
        });

        test('clicking on collapsables', async () => {
            render( 
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            );
            
            render(
                <BrowserRouter>
                    <Collapse in={open && collapsed.Catalogue}>
                        <CollapsedList text='Catalogue'/>
                    </Collapse>
                </BrowserRouter>
            )

            render(
                <BrowserRouter>
                    <Collapse in={open && collapsed.Marketing}>
                        <CollapsedList text='Marketing'/>
                    </Collapse>
                </BrowserRouter>
            )
            
            screen.getAllByTestId('nav-item').forEach(item => 
                    userEvent.click(item)
                )
            
            expect(screen.getAllByRole('listitem'))
                            .toHaveLength([...menu, ...catalogueMenu, ...marketingMenu ].length);
        });
    });
});