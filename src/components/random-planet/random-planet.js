import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet});
  };
  
  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet: {id, population, rotationPeriod, diameter, name}} = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>Population: </span>
              <span className="term">{population}</span>
            </li>
            <li className="list-group-item">
              <span>Rotation period: </span>
              <span className="term">{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span>Diameter: </span>
              <span className="term">{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
