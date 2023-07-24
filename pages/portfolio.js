import React from 'react'
import PortfolioBanner from './component/PortfolioBanner'
import Navbar from './component/Navbar'
import PortfolioBottomBox from './component/PortfolioBottomBox'
import img1 from '../pages/assests/portfolioImage/1.png'
import img2 from '../pages/assests/portfolioImage/2.png'
import img3 from '../pages/assests/portfolioImage/3.png'
import img4 from '../pages/assests/portfolioImage/4.png'
import img5 from '../pages/assests/portfolioImage/5.png'
import img6 from '../pages/assests/portfolioImage/6.png'
import img7 from '../pages/assests/portfolioImage/7.png'
import img8 from '../pages/assests/portfolioImage/8.png'
import img9 from '../pages/assests/portfolioImage/9.png'
import img10 from '../pages/assests/portfolioImage/10.png'
import img11 from '../pages/assests/portfolioImage/11.png'
// import img12 from '../pages/assests/portfolioImage/12.png'
// import img from '../pages/assests/portfolioImage/1.png'
import Image from 'next/image'
export default function portfolio() {
    return (
        <div id="po">
            <Navbar />
            <PortfolioBanner />
            <div className='grid-container  mt-5 pt-4'>
                
                <Image src={img1} width={673} height={449} />
                <Image src={img2} width={673} height={449} />
                <Image src={img3} width={673} height={449} />
                <Image src={img4} width={673} height={449} />
                <Image src={img5} width={673} height={449} />
                <Image src={img6} width={673} height={449} />
                <Image src={img5} width={673} height={449} />
                <Image src={img7} width={673} height={449} />
                <Image src={img8} width={673} height={449} />
                <Image src={img9} width={673} height={449} />
                <Image src={img10} width={673} height={449} />
                <Image src={img11} width={673} height={449} />
                {/* <Image src={img12} width={673} height={449} /> */}


            </div>
        </div>
    )
}
