import React from "react";
import axios from "axios";
import BasicTextFields from "./components/Input";
import ImageGallery from "./components/ImageGallery";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
    };
  }
  // ! Seacrh for images from Api
  getImage = async (value) => {
    const API_KEY = `LQg2XVhn0O5l7W8suA7rh-PIhrNa79eV1lBWd4C5eLw`;
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: API_KEY,
        per_page: "30",
        query: value,
      },
    });
    console.log(res.data.results);
    this.setState({ imageData: res.data.results });
  };
  // ! GEtting Search VAlue
  searchValue = (value) => {
    this.getImage(value);
  };

  render() {
    return (
      <div className="App">
        <BasicTextFields handler={this.searchValue} />
        {this.state.imageData && <ImageGallery data={this.state.imageData} />}
      </div>
    );
  }
}

export default App;
