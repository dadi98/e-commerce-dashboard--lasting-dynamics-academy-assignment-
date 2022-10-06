const news =  [   
        {
            id: 1,
            category: "E-COMMERCE",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Gm4rQLaPIJkP53jHhgq2tNWchXLn3kfXH9KKetYi&s",
            title: "How to configure the DNS to point to your VetrinaLive",
            estimatedReading: "4 min"
        },
        {
            id: 2,
            category: "E-COMMERCE",
            img: "https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU=",
            title: "How to earn money online: 7 ideas for you",
            estimatedReading: "4 min"
        },
        {
            id: 3,
            category: "MARKETING",
            img: "https://media.istockphoto.com/photos/omni-channel-technology-of-online-retail-business-picture-id1204099658?k=20&m=1204099658&s=612x612&w=0&h=s2aYy0NVF06GZtDe8kvWYYpFhSg2vFXaJ4jrJMLLsiA=",
            title: "How to earn money online: 7 ideas for you",
            estimatedReading: "4 min"
        },
        {
            id: 4,
            category: "SOCIAL",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3d64K2dV1I7uIkfniThPlSKK6l0euoKSBRRy79YW&s",
            title: "How to configure the DNS to point to your VetrinaLive",
            estimatedReading: "4 min"
        },
        
        {
            id: 5,
            category: "MARKETING",
            img: "https://previews.123rf.com/images/kaisorn/kaisorn1306/kaisorn130600090/20559844-circle-chart-related-of-e-commerce-internet-marketing-isolated-on-white-background.jpg",
            title: "How to configure the DNS to point to your VetrinaLive",
            estimatedReading: "3 min"
        }
    ]  


export default async function mockFetch(url: RequestInfo | URL ) {
    switch (url) {
        case "http://localhost:8000/news": {
            return {
                ok: true,
                status: 200,
                json: async () => news
            } as Response
        }
        
        default: {
            return {
                ok: false,
                status: 400,
                json: async () => undefined
            } as Response
        } 
     }
}