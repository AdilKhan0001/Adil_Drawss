import React from 'react'
import Image from 'next/image'
import adilImg from "../assests/adilpic.png"


export default function Banner() {
    return (
        <div className='row bannerMainclass'>
            <div className='col-8'>
                <div className='d-flex flex-column banner-text  gap-3'>
                    <span style={{ fontSize: "96px", fontWeight: "750", lineHeight: "132.187%", letterSpacing: "2.88px", fontStyle: "normal" }}>
                        ADIL AYUB KHAN
                    </span>
                    <span style={{ fontSize: "50px", fontWeight: "400", lineHeight: "normal", letterSpacing: "2.5px", fontStyle: "normal" }}>
                        UI/UX - GRAPHICS - 3D DESIGNER
                    </span>
                    <span style={{width:"720px", fontSize: "28px", fontWeight: "400", lineHeight: "normal",  fontStyle: "normal" }}>
                       
                        Hey, i am UI/UX Graphics and 3D Designer in love with designs taking the use of my experience and skills to meet higher targets.
                    </span>
                </div>
            </div>
            <div className='col-4'>
                <Image src={adilImg} width={699} height={900} />
            </div>
        </div>
    )
}
