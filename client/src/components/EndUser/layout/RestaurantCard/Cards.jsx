import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Cards.scss";

const Cards = () => {
  const restaurants = [
    {
      _id: 1,
      name: "Peshwarain",
      logo: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/248949455_288291039817770_2660049426429740520_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4QtzF07wsjQAX9unmlk&_nc_ht=scontent.fdac14-1.fna&oh=00_AfD5Z_lwjToJzk8E8q7uoPIlKtt7c9_ngubljjrSqc4xWw&oe=64CCACB3",
    },
    {
      _id: 2,
      name: "Takeout",
      logo: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/311487350_5532609633499227_4053894813936561650_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TrTmS7zf42cAX_OqG-w&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBrrvnbqHwGMrtmlkgxqmL6Rx59Abna6APhzY8yARme5Q&oe=64CD906E",
    },
    {
      _id: 3,
      name: "Bella Italia",
      logo: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/268918748_393225255928545_5929329907298528132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CMpWX0TXo3YAX8_8wac&_nc_oc=AQnfxtHlNnE9d6zeqRaYcJswAgbdjKxt7SUKIMwey02I18FovBj-M5fvprP0e0xbNAg&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAh3PRRZtg7a5rC5riLVHgi5RYofOwN3jv4KffuMGx8TQ&oe=64CDEA1D",
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h3 className="first-text">Featured Restaurants</h3>
      <div className="row">
        {restaurants.map((restaurant) => (
          <div className="col-md-4">
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
