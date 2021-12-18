import React, { useState } from "react";

import "./styles.css";

var FoodDirectionary = {
  "🍨": "Ice Cream",

  "🍫": "Chocolate Bar",

  "🎂": "Birthday Cake",

  "🍵": "Teacup Without Handle",

  "🍸": "Cocktail Glass",

  "🍹": "Tropical Drink ",

  "🍕": "Pizza",

  "🍔": "Hamburger",

  "🍟": "French Fries",

  "🍝": "Spaghetti",

  "🍛": "Curry and Rice",

  "🍱": "Bento Box",

  "🍣": "Sushi",

  "🍙": "Rice Ball",

  "🍘": "Rice Cracker",

  "🍚": "Cooked Rice",

  "🍞": "Bread",

  "🍮": "Custrad",

  "🍎": "Red apple",

  "🍧": "Shaved ice",

  "🍯": "Honey pot",

  "🍪": "Cookie",

  "🍦": "Soft Ice Cream"
};
var foodsWeKnow = Object.keys(FoodDirectionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;

    var meaning = FoodDirectionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function foodsClickHandler(foods) {
    var meaning = FoodDirectionary[foods];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside outt! </h1>

      <input
        onChange={foodInputHandler}
        style={{ height: "2rem", width: "60%", padding: "0.5rem" }}
      />
      <h3> We know food </h3>

      <h2>{meaning} </h2>

      {foodsWeKnow.map(function (foods) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => foodsClickHandler(foods)}
            key={foods}
          >
            {""}
            {foods} {""}
          </span>
        );
      })}
    </div>
  );
}
