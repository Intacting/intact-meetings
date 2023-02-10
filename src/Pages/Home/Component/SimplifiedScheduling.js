import React from "react";
import Image1 from "../../../assets/Image/EBay_logo.svg";
import Image2 from "../../../assets/Image/Zenefits.svg";
import Image3 from "../../../assets/Image/Compass.svg";
import Image4 from "../../../assets/Image/Twilio.svg";
import Image5 from "../../../assets/Image/Dropbox.svg";
const SimplifiedSchedule = ()=>{
    return(<>
        <section className="simplified">
            <div className = "simplified-a simplified-b">
            <h2 className="simplified-heading">
            Simplified scheduling for more than 
            <span className="CSnXO ahead">10,000,000 </span>
            users worldwide
            </h2>
            <div className="simplified-c">
            <div className="row-simplified">
                <div className=" sam-img">
                    <img className = "simplified-img" src={Image1} alt="img"></img>
                </div>
                <div className="">
                    <img className = "simplified-img" src={Image2} alt="img"></img>
                </div>
                <div className="">
                    <img className = "simplified-img" src={Image3} alt="img"></img>
                </div>
                <div className="">
                    <img className = "simplified-img" src={Image4} alt="img"></img>
                </div>
                <div className="">
                    <img className = "simplified-img" src={Image5} alt="img"></img>
                </div>
            </div></div>
            </div>
        </section>
      </>)
}
export default SimplifiedSchedule;