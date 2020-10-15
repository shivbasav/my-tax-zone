import React from "react"
import relaxImage from "../assets/relax.jpg"
import AnnualIncomeTax from "./AnnualIncomeTax"

const Home = () => {
  return (
    <div style={{ padding: "1rem 1rem" }}>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong style={{ fontSize: "25px" }}>
                Corporate Tax and Regulatory Compliance Simplified
              </strong>{" "}
              <br />
              <p
                style={{
                  fontSize: "18px",
                  paddingTop: "10px",
                  lineHeight: "1.8",
                }}
              >
                We at My tax zone are give Services such as Assurance,
                Consulting in Income Tax, Goods and Services Tax, Corporate
                Advisory, Tax Compliance Services, Company registration,
                Investment Tax planning etc., from the last 10 years. We can
                take care of your corporate tax compliance work allowing you to
                focus on your core business. We can prepare and submit tax
                computations quickly and accurately. We are also able to offer
                you tax advisory services driven by your core business
                objectives. We can help you at a strategic business planning
                level to understand the effect your business strategies may have
                on your tax profile.
              </p>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <img
            src={relaxImage}
            alt="Image"
            width={500}
            height={150}
            mode="fit"
          />
        </div>
      </article>

      <hr />
    </div>
  )
}

export default Home
