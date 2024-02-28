import { Fragment, useEffect, useRef, useState } from "react";

const cardsArr = ["/assets/images/HOC1.jpg","/assets/images/HOC2.jpg","/assets/images/HOC3.jpg","/assets/images/HOC4.jpg","/assets/images/HOC5.jpg","/assets/images/HOC6.jpg","/assets/images/HOC7.jpg","/assets/images/HOC8.jpg","/assets/images/HOC9.jpg","/assets/images/HOC10.jpg"]

export default function Cardholder(){
    const [activeIndex, setActiveIndex] = useState(null)
    const galleryRef = useRef(null)
    function toggleActiveIndex(index){
        setActiveIndex(index === activeIndex ? null : index);
    }
    function handleClickOutside(event){
        if (galleryRef.current && !galleryRef.current.contains(event.target)) {
            setActiveIndex(null); 
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return(
        <Fragment>
            <section className="mt-8 w-[100%]">
                <div>
                    <div className="grid grid-cols-2 gap-x-32 gap-y-12 w-[100%] p-4 px-80 items-center">
                    {cardsArr.map((card, index) => (
                            <div ref={galleryRef} key={index} className="flex bg-gray-200 max-w-[440px] p-4 rounded-md">
                                {/* <img key={index} src={card} alt="lol" className="min-w-[400px] min-h-[620px]"/> */}
                                <img
                                    src={card}
                                    alt={`Card ${index}`}
                                    className={`transition-transform duration-500 ease-in-out ${index === activeIndex ? 'scale-125' : 'scale-100'}`}
                                    onClick={() => toggleActiveIndex(index)}
                                    style={{ minWidth: '400px', minHeight: '620px' }}
                                />

                            </div>    
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}