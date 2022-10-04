import { ButtonBase } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useReducer, useState } from "react";
import { imageList } from "../constants/constants";
import MobileAppCard from "../components/MobileAppCard";
import DashboardCard from "../components/reusable/DashboardCard";
import Extension from "../components/reusable/Extension";
import NewsCard from "../components/reusable/NewsCard";
import Header from "../components/Header";
import { HeaderBox, MainBox } from "../components/styled/box";

type News = {
    id: string,
    category: string;
    img: string;
    title: string;
    estimatedReading: string;
}

type State =  {
    isLoading: boolean,
    error?: string,
    data?: News[]
};

type Action =
 | { type: 'request' }
 | { type: 'success', results: News[] }
 | { type: 'failure', error: string };


function reducer( state: State, action: Action){
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

function Dashboard(): JSX.Element {

    const [state, dispatch] = useReducer(reducer, initialState)
    //console.log( 'timiti',state)

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
                console.log(1)
                let message = '';
                if (error instanceof Error) message = error.message;
                else message = String(error);
                console.log(message)
                dispatch({
                    type: "failure",
                    error: message
                }) 
            }
            return data;
        }

        fetchNews<News[]>("http://localhost:8000/news").then(data => {
            data &&
            dispatch({
                type: 'success',
                results: data
            })    
        });
    }, [])

    return ( 
        <>  
            <HeaderBox>
                <Header />             
            </HeaderBox>
            <MainBox>
                <Grid container columnSpacing="24px">       
                    <Grid item  xs={8}>
                        <Grid container spacing={'24px'}>
                            <Grid item xs={6}>
                                <DashboardCard title="Visitors" link="Do you want more visits? Contact us!">
                                    <Typography variant="body1" height="79px" display="flex" alignItems="center">
                                        1824
                                    </Typography>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={6} >
                                <DashboardCard title="Orders" link="10 free tips to increase your sales">
                                    <Box display='flex' flexDirection="column" gap="12px" width="100%">
                                        <Box display="flex">
                                            <Typography variant="h3" flexGrow={1} color="secondary.main">Orders received:</Typography>
                                            <Typography variant="h3" color="primary.main" fontWeight="600">156</Typography>
                                        </Box>
                                        <Box display="flex">
                                            <Typography variant="h3" flexGrow={1} color="secondary.main">Earnings:</Typography>
                                            <Typography variant="h3" color="primary.main" fontWeight="600">€ 1893,24</Typography>
                                        </Box>
                                    </Box>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={6} >
                                <MobileAppCard/>
                            </Grid>
                            <Grid item xs={6}>
                                <DashboardCard title="Extensions Marketplace" link="Discover all extensions">
                                    
                                        <ImageList cols={3} gap={50} 
                                                sx={{my: 0, width: "100%", 
                                                    "&::-webkit-scrollbar": {display: 'none',}
                                                    }}>
                                            {imageList.map(extension =>
                                                <Extension key={extension.title} extension={extension}/>
                                            )}
                                        </ImageList>
                                    
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="Latest news" link="Visit our blog">
                                    <Grid container columnSpacing={2.5} rowSpacing={4} paddingTop="22px">
                                        { state.isLoading && 
                                            <Backdrop 
                                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                open
                                            >
                                                <CircularProgress color="inherit" />
                                            </Backdrop>
                                        }
                                        { state.error && 
                                        <>
                                            <Typography variant="h2"> {state.error}</Typography>
                                            
                                            </>
                                        }
                                        { state.data && state.data.map((news, index) => 
                                            <NewsCard key={index} news={news}/>
                                        )}

                                    </Grid>
                                </DashboardCard>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item  xs={4}>
                        <Grid container rowSpacing={'24px'} >
                            <Grid item xs={12} >
                                <DashboardCard title="Configure your shop" link="Complete the setup!">
                                    <Typography variant="h1" color="warning.main"> 
                                        45% 
                                        <Typography variant="h4">Completed</Typography> 
                                    </Typography>
                                    <Typography variant="body2" color="primary.main">
                                        Complete all the steps to have a complete shop to best present to your customers. 
                                    </Typography>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="logo" link="Write a review on Trustpilot">
                                    <Typography variant="body2">
                                        Show us your love by leaving a 
                                        <Typography variant="inherit" display="inline" color="success.main"> positive </Typography>  
                                        review on trust pilot and receive the extension 
                                        of 
                                        <Typography variant="inherit" fontWeight="700" display="inline" color="inherit"> 
                                            {' '}50 additional products
                                        </Typography>
                                    </Typography>
                                    
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="Invite friend" link="start inviting friends!">
                                    <Typography variant="body2">
                                        <Typography variant="inherit" display="inline" fontWeight="700" color="success.main">
                                            Receive 50 products{' '}
                                        </Typography> 
                                        by inviting a friend who subscribes to a plan. Your friend will receive 
                                        a 30% discount coupon valid for any plan.
                                    </Typography>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="Customer support" link=" ">
                                    <Box display="flex" alignItems="center" gap="22px">
                                        <Avatar src="/images/dashboard/simone-badge.jpg" />
                                        <Typography variant="h4" fontWeight={'400'}>Simone is here to help you.</Typography>
                                    </Box>
                                    <ButtonBase  sx={{bgcolor: "primary.light", color: "white", padding: '15px 52px',
                                                    boxShadow: '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)',
                                                    borderRadius: '5px'}}>
                                        <Typography variant="h5" fontFamily="Source Sans Pro">
                                            Contact us
                                        </Typography>
                                    </ButtonBase>
                                    
                                </DashboardCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainBox>
        </>
    );
}

export default Dashboard;