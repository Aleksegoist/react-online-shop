import { TbTruckDelivery } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiCardExchange } from 'react-icons/gi'


const serviceData = [
    {

        icon: <TbTruckDelivery
            style={{
                fontSize: '2.8rem',
                background: 'var(--primary-color)',
                padding: '10px',
                borderRadius: '50px',
                color: '#fff',
            }}
        />,
        title: "Free Shipping",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#fdefe6",
    },
    {
        icon: <GiReturnArrow
            style={{
                fontSize: '2.8rem',
                background: 'var(--primary-color)',
                padding: '10px',
                borderRadius: '50px',
                color: '#fff',
            }} />,
        title: "Easy Returns",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#ceebe9",
    },
    {
        icon: <RiSecurePaymentLine
            style={{
                fontSize: '2.8rem',
                background: 'var(--primary-color)',
                padding: '10px',
                borderRadius: '50px',
                color: '#fff',
            }} />,
        title: "Secure Payment",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#e2f2b2",
    },
    {
        icon: <GiCardExchange
            style={{
                fontSize: '2.8rem',
                background: 'var(--primary-color)',
                padding: '10px',
                borderRadius: '50px',
                color: '#fff',
            }} />,
        title: " Back Guarantee",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#d6e5fb",
    },
];

export default serviceData;