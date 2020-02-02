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
    this.yeniFunc();
  }

  yeniFunc = () => {
    const APP_ID = "caed25b5";
    const APP_KEY = "09a9d503749688f8a251838da8089fca";
    let query = `https://api.edamam.com/search?q=${this.state.gradient}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    axios.get(query).then(res => this.setState({ recipes: res.data.hits }));
  };

  showIng = item => {
    let ing = item.map(item => {
      return <p>{item.text}</p>;
    });
    return <p className="ingredients-p">{ing}</p>;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  showItems = () => {
    let items = this.state.recipes
      .map(recipe => recipe.recipe)
      .map(item => {
        return (
          <div className="recipe-div">
            <div>
              <div>{item.label}</div>
              <img className="recipe-img" src={item.image}></img>
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
        <div></div>
        <div>
          <input
            style={{ width: "240px" }}
            type="text"
            name="gradient"
            value={this.state.gradient}
            onChange={event => this.handleChange(event)}
            placeholder="Malzeme ismi giriniz..(Ingilizce)"
          />
          <button onClick={this.yeniFunc}>Submit</button>
          <div>{this.showItems()}</div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
