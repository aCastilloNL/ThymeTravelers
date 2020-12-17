import styled from "styled-components"
import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import banner from "./banner.jpg"

const BannerImg = styled.div`
width:100vw;
height: 30vh;
background: url(${banner})
`

const PageOne = () => (
  <>
    <Navbar />
    <BannerImg/>
    <Footer />
  </>
);

export default PageOne;
