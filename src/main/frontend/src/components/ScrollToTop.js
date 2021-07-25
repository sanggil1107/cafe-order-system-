import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // window.onbeforeunload = () => {
        //     alert('dd');
        // };
        if (window.onbeforeunload) {
            console.log("2");
        }
        console.log('scroll');
        window.scrollTo(0, 0);
    }, []);

    return null;
}
