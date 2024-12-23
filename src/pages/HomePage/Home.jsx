import { NavLink } from "react-router-dom"

const Home = () => {
      return (
          <div>
              <h2>Dear Visitor</h2>
              <p>
              Welcome to our service where you can keep and manage your phone contacts
              </p>
              <NavLink to="/contacts">
                  <button>LETS START</button>
              </NavLink>  
          </div>
         
      )
  }
  
  export default Home