import React from "react";
/* global google */


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  async handlePlaceChanged(){
    const place = await this.autocomplete.getPlace();
    this.props.setDataWeather(place);
  }

  render() {
    return (
        <input className="form-control" ref={this.autocompleteInput}  id="autocomplete" placeholder="Ingrese el Lugar"
         type="text"></input>
    );
  }
}

export default SearchBar;