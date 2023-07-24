import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Box from './component/Box'
import marqueeimg from "../pages/assests/yellowdiv.gif"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <div className='d-flex flex-column'>
        <Navbar />
        <Banner />
        <div className='d-flex flex-column gap-4 align-items-center text-center '>
          <span style={{ fontSize: "34px", fontWeight: "600", letterSpacing: "1.7px" }}>
            I'AM SPECIALIZED IN
          </span>
          <br />
          <span className='text-cneter' style={{ width: "1300px", lineHeight: "171.687%", fontSize: "34px", fontWeight: "500", letterSpacing: "1.7px", }}>
            Committed and energetic professional Designer with 2+ years experience in Graphic design, 3d design, Digital illustration and UI/UX
          </span>
        </div>

        <div className='d-flex flex-row justify-content-center yellowdiv mt-5'>
          <Image src={marqueeimg} />
        </div>
        <Box imgclassName={"box1"} heading1="Lead UI/UX Designer" heading2="UI/UX Designer" heading3="As the first designer at there, i built the websites, redesign softwares and help to find creative ways to solve UX problems and communicate design ideas and prototypes to developers." />
        <Box imgclassName={"box2"} heading1="3D Designer" heading2="3D Designer" heading3="Welcome to my 3D World. I invite you to explore my 3D world to get a better understanding of my specialties, techniques and professional experience. What you will find below is a combination of commissioned work." />
        <Box imgclassName={"box3"} heading1="Digital Artist" heading2="Digital illustrations" heading3="I am on a never-ending journey to find new ways to innovate and add extra depth to my work. Explore my updated Digital Illustration Portfolio to discover my influences and inspiration behind some of my proudest accomplishments." />
        <Box imgclassName={"box4"} heading1="Graphic Design" heading2="Graphic Design" heading3="Welcome to my portfolio. I am thrilled you’ve come to visit my showcase of work that I’ve compiled over the years, which includes a combination of collaborations, commissioned work and personal projects. Take a look and feel free to get in touch if you’d like to discuss potential opportunities to work together." />
      </div>
    </>
  )
}
