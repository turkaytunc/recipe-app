import React from "react";
import "./App.css";
import "./logo.svg";
import axios from "axios";

class App extends React.Component {
  state = {
    recipes: [],
    ing: [],
    gradient: ""
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const APP_ID = "caed25b5";
    const APP_KEY = "09a9d503749688f8a251838da8089fca";
    let query = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.gradient}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    axios.get(query).then(res => this.setState({ recipes: res.data.hits }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.getData();
    }
  };

  showIng = item => {
    let ing = item.map(item => {
      return <li className="ingredients-li">{item.text}</li>;
    });
    return <p className="ings">{ing}</p>;
  };

  showItems = () => {
    let items = this.state.recipes
      .map(recipe => recipe.recipe)
      .map(item => {
        return (
          <div className="recipe-div">
            <div className="label-img">
              <div className="item-label-div">{item.label}</div>
              <div className="img-inner-div">
                <img className="recipe-img" src={item.image}></img>
              </div>
            </div>
            <div>
              <div className="ingredients-div">
                {this.showIng(item.ingredients)}
              </div>
            </div>
          </div>
        );
      });
    return items;
  };

  render() {
    console.log(this.state.gradient);
    return (
      <div className="App">
        <div className="app-second-div">
          <input
            className="input-box"
            type="text"
            name="gradient"
            value={this.state.gradient}
            onChange={event => this.handleChange(event)}
            placeholder="Please enter ingredients.."
            onKeyPress={this.handleKeyPress}
          />
          <button className="submit-button" onClick={this.getData}>
            Get Recipe
          </button>
          <div>{this.showItems()}</div>
        </div>
      </div>
    );
  }
}

export default App;
