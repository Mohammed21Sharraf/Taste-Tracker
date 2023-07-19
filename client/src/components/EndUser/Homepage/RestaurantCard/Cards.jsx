import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';
import "./Cards.scss";
import res1 from '../../../../img/restaurant1.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-column align-items-center">
                <h3 className="first-text">Featured Restaurants</h3>
                <div className="row">
                    <div className="col-md-4">
                        <RestaurantCard imgsrc={res1} title="Restaurant 1" />
                    </div>
                    <div className="col-md-4">
                        <RestaurantCard imgsrc={res1} title="Restaurant 2" />
                    </div>
                    <div className="col-md-4">
                        <RestaurantCard imgsrc={res1} title="Restaurant 3" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Cards;
