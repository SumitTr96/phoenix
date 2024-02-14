import { Link } from "react-router-dom"
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notFound_container">
        <h2>Page not Found</h2>
        <Link to="/" className="btn" />
      </div>
    </section>
  )
}

export default NotFound