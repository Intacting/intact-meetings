import React from "react";
import { Link } from "react-router-dom";
const CollectPayments = () => {
  return (
    <>
      <div>
        <div className="form-box">
          <form>
            <div className="form-box-a">
              <div className="form-box-c">
                <div>
                  <i
                    class="fa-regular fa-credit-card"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div className="form-box-d none">
                  <div style={{ fontSize: "16px", color: "black" }}>
                    Collect Payments
                  </div>
                  <div className="form-box-e">
                    <span>no payment method</span>
                  </div>
                </div>
              </div>
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collect-payments"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collect-payments"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">
                      Save & Close
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <div className="data-range-form data-range-form-a">
                <div className="mb-20">
                  <div
                    className="in-cancel-policy1 col-md-6"
                    style={{ display: "block" }}
                  >
                    To collect payments, visit your{" "}
                    <Link>Integrations page</Link> and choose your preferred
                    provider.
                  </div>
                </div>
                <div className="mb-20">
                  <div
                    className="in-cancel-policy1 col-md-6"
                    style={{ display: "block" }}
                  >
                    <Link>Upgrade your subscription</Link> to collect payments
                    for this event.
                  </div>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    id="payment1"
                    checked
                  />
                  <label class="form-check-label">
                  Do not collect payments for this event
                  </label>
                </div>
                <div class="form-check disabled">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    id="payment2"
                    disabled
                  />
                  <label class="form-check-label">
                  Accept payments with Stripe
                  </label>
                </div>
                <div class="form-check disabled">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    id="payment3"
                    disabled
                  />
                  <label class="form-check-label">
                  Accept payments with PayPal
                  </label>
                </div>
              </div>
            </div>
            <div className="form-box-last">
              <div className="form-box-f">
                <button
                  className="add-one-on-one-share"
                  style={{ float: "left" }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collect-payments"
                >
                  Cancel
                </button>
                <button
                  className="toptaber-right-button toptaber-right-button-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collect-payments"
                >
                  <div className="toptaber-right-button-a">
                    <span className="toptaber-right-button-plus">Save & Close</span>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CollectPayments;
