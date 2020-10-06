import React from "react"
import relaxImage from "../assets/relax.jpg"

const Home = () => {
  return (
    <div style={{ padding: "1rem 1rem" }}>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              <br />
              We at My tax zone are give Services such as Assurance, Consulting
              in Income Tax, Goods and Services Tax, Corporate Advisory, Tax
              Compliance Services, Company registration, Investment Tax planning
              etc., from the last 10 years.
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
            width={300}
            height={300}
            mode="fit"
          />
        </div>
      </article>
    </div>
  )
}

export default Home
