import React from "react"

const Home = () => {
  return (
    <div style={{ padding: "1rem 1rem" }}>
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <div className="level">
              <div class="tile is-parent is-6">
                <p class="title">Thirteen</p>
                <p class="subtitle">Subtitle</p>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </div>

              <div class="level-right">
                <figure class="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/256x256.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent ">
          <article class="tile is-child box">
            <p class="title">Middle box</p>
            <p class="subtitle">With an image</p>

            <img src="https://bulma.io/images/placeholders/640x480.png" />
          </article>
          <article class="tile is-child notification is-info">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">sfsgfgfd</div>
          </article>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Three</p>
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">One</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Two</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Three</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
