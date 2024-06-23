import "./register.scss";
import Netflix from "../../assets/NetflixLogo.png";
function Register() {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Netflix} alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies , TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart yur membership
        </p>
        <div className="input">
          <input type="email" placeholder="email address" />
          <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
