import HTMLFlipBook from 'react-pageflip';

const cardsArr = "/assets/images/HOC1.jpg"
export default function Flipbook(props) {
    return (
        <>
        <div className='flex flex-col'>
            <h1 className="flex mx-auto text-[26px] md:text-[42px] mt-10 self-center font-BNPPSansBold font-semibold">BITÁCORA</h1>
            <HTMLFlipBook width={400} height={500} className='flex mx-auto' style={{ width: '600px', height: '700px' }}>
                <div className="demoPage bg-orange-200 border-l border-t border-b border-black rounded-md">
                    Page 1
                </div>
                <div className="demoPage bg-orange-200 border border-black rounded-md">Page 2</div>
                <div className="demoPage bg-orange-200 border-l border-t border-b border-black rounded-md">Page 3</div>
                <div className="demoPage bg-orange-200 border border-black rounded-md">Page 4</div>
                <div className="demoPage bg-orange-200 border border-black rounded-md">Page 5</div>
                <div className="demoPage bg-orange-200 border border-black rounded-md">Page 6</div>
            </HTMLFlipBook>
        </div>
        </>
    );
}
