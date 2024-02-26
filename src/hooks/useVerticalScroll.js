import { useEffect, useState } from "react";

export default function useVerticalScroll(){
    const [scrollY, setScrollY] = useState(window.scrollY)
    useEffect(() => {
        function handleScroll(){
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return scrollY
}