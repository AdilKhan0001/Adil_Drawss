import Image from "next/image";
import monitoricon from "../assests/portfoliobannerimg.png"
export default function PortfolioBanner() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center bannerimage pt-5" >
      <div className="d-flex flex-column">
        <div className="d-flex flex-row gap-5">
          <Image src={monitoricon} width={120} height={130} className="pt-4" />
          <div className="d-flex flex-column gap-5">
            <span className="portfoliobannerheding">UI/UX Designer</span>
            <div className="d-flex flex-row gap-5">
              <div className="d-flex flex-column gap-3">
                <span className="headingbanner">SUMMARY</span>
                <p className="contentbanner" style={{width:"560px"}}>Creating design and requirements gathering of existing workflow, daily task and environment to clearly understand the user mental model. Design android applications and web design. interact closely with development teams to provide the best technical solutions to meet products requirements. Created graphics elements, illustrations and webpages.</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <span className="headingbanner">RESPONSIBILITIES</span>
                <p className="contentbanner" style={{width:"100px"}}>UI Design
                  UX Research
                  Design Elements
                  Web Design
                  App Design
                  Prototype</p>
              </div>

            </div>

          </div>
        </div>
        {/* <div className="d-flex flex-row gap-5">
          <span>cdsvdvdfv</span>
          <span>cdsvdvdfv</span>
        </div> */}
      </div>
    </div>
  )
}
