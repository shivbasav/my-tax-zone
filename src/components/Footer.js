import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="footer">
      <div className="is-flex-direction-row">
        <div style={{ paddingBottom: "1rem" }}>
          <Link to="/">
            <strong style={{ color: "black", fontSize: "18px" }}>Home</strong>
          </Link>
        </div>

        <div>
          <Link to="/IncomeTax/">
            <strong style={{ color: "black", fontSize: "18px" }}>
              Income Tax
            </strong>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
