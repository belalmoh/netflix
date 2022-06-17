import { useState } from 'react';

const useWindowOnScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return { isScrolled }
};

export default useWindowOnScroll;