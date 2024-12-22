import { NavLink } from "react-router-dom"



const Home = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      
      <div>
        <h1 className="text-5xl font-bold">Hello there!</h1>
        <p className="py-6 text-4xl">
          Welcome to our site where you can keep your contacts
            </p>
            <NavLink to="/contacts">
              <button className="btn btn-primary">Get Started</button>
              </NavLink>
      </div>
    </div>
  </div>
    )
  }
  
  export default Home