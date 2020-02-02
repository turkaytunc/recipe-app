import React from "react";
import "./App.css";
import "./logo.svg";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
    // this.showRecipe = this.showRecipe.bind(this);
  }
  componentDidMount() {
    const key = "banana";
    const APP_ID = "caed25b5";
    const APP_KEY = "09a9d503749688f8a251838da8089fca";
    let query = `https://api.edamam.com/search?q=${key}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    axios.get(query).then(res => this.setState({ recipes: res.data.hits }));
  }

  render() {
    let items = this.state.recipes
      .map(recipe => recipe.recipe)
      .map(item => {
        return (
          <div>
            <div>{item.label}</div>
            <img src={item.image}></img>
          </div>
        );
      });
    console.log(this.state.recipes.map(recipe => recipe.recipe));
    return <div className="App">{items}</div>;
  }
}

export default App;
