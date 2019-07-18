import React from "react";
// import "../../App.scss";
import { Link, NavLink } from "react-router-dom";



const MarketingPage = () => {
  return (
    <div className="marketing-container">
      <div className="navBarContainer">
    <div className="margin">
    {/* <img src={logo} alt="Logo" style={{cursor: 'pointer'}} onClick={() => {
          window.location=`${takeMeHome}`
        }}/> */}
        <div className="calendrTitleContainer">
        <h1 className="calendrTitle">Rate My Mentor</h1>
        </div>
      <div className="nav-buttons">
        <NavLink activeClassName="navbuttonLink" className="navbutton" to="/login">Login</NavLink>
      </div>
    </div>
    </div>
      <header>
        <div className="header-content">
          <h1>Find the perfect mentor for your business!</h1>
          <p>
            Starting a business is challenging! Help ease the growing pains by finding a mentor. 
          </p>
            <Link to="/login">
            <button className="marketingButton">Sign Up</button>
          </Link>
        </div>
      </header>

      <div className="middle-section">
        <div className="middle-top">
          <div className="card">
            <h2>Find the perfect mentor that fits YOUR needs.</h2>
            <p>
              With Rate My Mentor, you can sift through mentors based on experience, ratings, reviews, expertise in different fields, etc.
              Take the guessing game out of finding a mentor and sign up today! 
            </p>
          </div>
          
          <img
            className="placeholder iphoneX"
            // src={iphonex}
            alt="something random"
          />
        </div>

        <div className="middle-section-top">
          <h2>Membership pricing</h2>
          <div className="card-container">
            <div className="card">
              <h4>Basic Membership</h4>
              <h5> Free </h5>
              <p>
                  Ability to see mentors cards
              </p>
              <p>
                  Includes all main features
              </p>
              <p>
                Get to know Rate My Mentor risk-free
              </p>
              <Link to="/login">
                <button className="marketingButton">Sign Up Now </button>
              </Link>
            </div>

            <div className="card premium">
              <h4>Premium Membership</h4>
              <h5>$9.99</h5>
                <p>
                  Ability to view mentors profile pages 
                </p>
                <p>
                    Includes all main features
                </p>
                <p>
                  something
                </p>
              <Link to="/login">
                <button className="marketingButton">Sign Up Now </button>
              </Link>
            </div>

          </div>
        </div>

        <div className="middle-section-bottom">
          <img
            className="placeholder desktop"
            // src={desktop}
            alt="something random"
          />
          <div className="card">
            <h2> more stuff </h2>
            <p>
              more stuff
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div>
          <h2> Give Rate My Mentor a try</h2>
          <p>
            Try Rate My Mentor now for FREE! You won't be disappointed!
          </p>
          <Link to="/login">
            <button className="marketingButton">Sign Up </button>
          </Link>
        </div>
      </div>

      <footer>
        <h5>&copy; Rate My Mentor</h5>
      </footer>
    </div>
  );
};

export default MarketingPage;
