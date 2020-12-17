import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import "./PageThree.css"

class PageThree extends Component{
  state = {
    notEdible : [],
  }
  // "https://trefle.io/api/v1/plants?token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA"
componentDidMount(){
  fetch("https://trefle.io/api/v1/plants?token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&")
  .then(res => res.json())
  .then(data => 
    this.setState({
      notEdible: data.data
    })
    )
}

render(){
  return(
    <div>
      <Navbar />
      <h1 className="titleNot">Not Edible</h1>
      {
      this.state.notEdible.map((names, index) =>
      <div key={index}>
        <h2 className="nameNot">{names.common_name}</h2>
        <img className="imgNot" src={names.image_url} alt={names.scientific_name}></img>
      </div>
      )}
      <Footer />
    </div>
  )
}

}










export default PageThree