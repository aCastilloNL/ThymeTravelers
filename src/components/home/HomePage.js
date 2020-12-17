// import Navbar from "./../navbar/Navbar";
// import Footer from "./../footer/Footer";
import './Homepage.css';

const HomePage = (props) => (
  <section className="homepage--section">
    <h1>Back to Nature !</h1>
    <h2>Find the plants you need, to stay alive...</h2>
    <button className="homepage--btn" onClick={props.action}>Take a look</button>
    {/* <Navbar />
    <h1>I AM THE BEAUTIFUL HOMEPAGE</h1>
    <Footer /> */}
  </section>
)

export default HomePage;
