import { ButtonBase } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { imageList } from "../constants/constants";
import MobileAppCard from "../components/MobileAppCard";
import DashboardCard from "../components/reusable/DashboardCard";
import Extension from "../components/reusable/Extension";
import NewsCard from "../components/reusable/NewsCard";
import Header from "../components/Header";
import { CustomerSupport, HeaderBox, MainBox } from "../components/styled/box";
import { useGetData } from "../functions/fetchData";
import { VisitorsText } from "../components/styled/typography";
import { backdropStyles, contactButton, errorStyles, extensionsList, orders } from "../styles/dashboard";

function Dashboard(): JSX.Element {

    const { data, isLoading, error } = useGetData("news");

    return ( 
        <>  
            <HeaderBox>
                <Header />             
            </HeaderBox>
            <MainBox>
                <Grid container columnSpacing="24px">       
                    <Grid item  xs={8}>
                        <Grid container spacing="24px">
                            <Grid item xs={6}>
                                <DashboardCard title="Visitors" link="Do you want more visits? Contact us!">
                                    <VisitorsText variant="body1" >
                                        1824
                                    </VisitorsText>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={6} >
                                <DashboardCard title="Orders" link="10 free tips to increase your sales">
                                    <Box sx={orders}>
                                        <Box display="flex">
                                            <Typography variant="h3" flexGrow={1} color="secondary.main">
                                                Orders received:
                                            </Typography>
                                            <Typography variant="h3" color="primary.main" fontWeight="600">
                                                156
                                            </Typography>
                                        </Box>
                                        <Box display="flex">
                                            <Typography variant="h3" flexGrow={1} color="secondary.main">
                                                Earnings:
                                            </Typography>
                                            <Typography variant="h3" color="primary.main" fontWeight="600">
                                                € 1893,24
                                            </Typography>
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
                                            sx={extensionsList}
                                    >
                                        {imageList.map(extension =>
                                            <Extension key={extension.title} extension={extension}/>
                                        )}
                                    </ImageList>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="Latest news" link="Visit our blog">
                                    <Grid container columnSpacing={2.5} rowSpacing={4} paddingTop="22px">
                                        { isLoading && 
                                        <Grid item paddingTop="22px">
                                            <Backdrop 
                                                
                                                sx={backdropStyles}
                                                open
                                            >
                                                <CircularProgress color="inherit" />
                                            </Backdrop>
                                        </Grid>
                                        }
                                        { error && 
                                        <Grid item xs={12} sx={errorStyles}>
                                            <Typography variant="h2" data-testid={'error-msg'}> {error}</Typography>
                                        </Grid>
                                        }
                                        { data && data.map((news, index) => 
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
                                        <Typography variant="h4" component="div">Completed</Typography> 
                                    </Typography>
                                    <Typography variant="body2" color="primary.main">
                                        Complete all the steps to have a complete shop to best present to your customers. 
                                    </Typography>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="logo" link="Write a review on Trustpilot">
                                    <Typography variant="body2" component="div">
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
                                    <Typography variant="body2" component="div">
                                        <Typography 
                                            variant="inherit" 
                                            display="inline" 
                                            fontWeight="700" 
                                            color="success.main"
                                        >
                                            Receive 50 products{' '}
                                        </Typography> 
                                        by inviting a friend who subscribes to a plan. Your friend will receive 
                                        a 30% discount coupon valid for any plan.
                                    </Typography>
                                </DashboardCard>
                            </Grid>
                            <Grid item xs={12} >
                                <DashboardCard title="Customer support" link="">
                                    <CustomerSupport>
                                        <Avatar src="/images/dashboard/simone-badge.jpg" />
                                        <Typography variant="h4" fontWeight='400'>
                                            Simone is here to help you.
                                        </Typography>
                                    </CustomerSupport>
                                    <ButtonBase  sx={contactButton}>
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