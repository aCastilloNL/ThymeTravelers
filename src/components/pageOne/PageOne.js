// import Navbar from "./../navbar/Navbar";
// import Footer from "./../footer/Footer";
import React, { Component } from 'react';
import './PageOne.css'

/* WHEN YOU NEED DATA OF API CALL FOR api.something WHEN YOU NEED DATA FROM CONTEXT CALL value.something */

const ediblePlants = 'https://trefle.io/api/v1/plants?&token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&filter[edible]=true';

const apiCaller = url => fetch(url).then(result => result.json())

class PageOne extends Component {

  state = {
    ediblePlant: []
  }

  componentDidMount() {
    apiCaller(ediblePlants)
      .then(data =>
        this.setState({
          ediblePlant: data.data
        })
      )
  }

  render() {
    return (
      <div>
        <h1>Edible Plants</h1>
        <div className='flexContainer'>
          {
            this.state.ediblePlant.map((iterator, index) =>
              <div className='plantContainer' key={index}>
                <h3>{iterator.common_name}</h3>
                  <img id='pageOneImage' src={iterator.image_url} alt={iterator.scientific_name}></img>
              </div>
            )
          }
        </div>
      </div>
    )
  }

}

export default PageOne;
