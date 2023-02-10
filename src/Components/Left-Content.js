import React from "react";
import ButtonBold from "./Button-bold";
import ButtonLight from "./Button-light";
const LeftContent = () => {
  return (
    <>
      <section className="section-a">
        <div className="section-b">
          <div className="row">
            <div className="col left">
              <h6 className="sub-head">Calendly for Teams</h6>
              <h1 className="heading">Smarter scheduling for teams</h1>
              <div className="para for-button">
                <p className="para-1">
                  Whether your team’s performance is measured by sales revenue,
                  recruiting pipeline, or customer retention, scheduling
                  automation enables your team to hit goals faster.
                </p>

                <div className="button-container button-fix">
                  <ButtonBold name="Start for free" />
                  <ButtonLight name="Contact Sales" />
                </div>
              </div>
            </div>
            <div className="col wh-100">
              <div className="wh-a">
                <div className="image-wrapper-a img-block">
                  <img
                    style={{
                      objectFit: "contain",
                      opacity: 1,
                    }}
                    src="https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1375&amp;h=1115&amp;q=50&amp;fm=png"
                    srcset="https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=750&amp;h=608&amp;q=50&amp;fm=png 750w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1080&amp;h=876&amp;q=50&amp;fm=png 1080w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1366&amp;h=1108&amp;q=50&amp;fm=png 1366w,
https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1375&amp;h=1115&amp;q=50&amp;fm=png 1375w"
                    alt="Smarter scheduling for teams"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LeftContent;
