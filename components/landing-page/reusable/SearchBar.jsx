import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import { withRouter } from "react-router-dom";
import React, { Component, useState } from "react";
import {
  Div,
  InnerDiv,
  MainImg,
  Logo,
  Search,
  City,
  CardContainer,
  Card,
  CardImg
} from "../../AllStyledComponents";

const SearchBar = () => {
  const [places, setPlaces] = useState([]);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleInputChange = (props) => {
    console.log(props.target.defaultValue);
    axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${props.target.defaultValue}.json`,
      params: {
        access_token:
          "pk.eyJ1IjoidGlndGhvciIsImEiOiJja210YTkwYWgwcHZ3MnFwOWZkbHhwbGhkIn0.R3tCE4PMaa2Vjp8ndBfPrg",
      },
    })
      .then((res) => {
        setData(res.data.features);

        getLocation(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocation = (data) => {
    data.map((item, i) => {
      if (i === 0) {
        let long = item.center[0];
        let lat = item.center[1];
        let temp = item.place_name.split(", ");
        let area = temp[0];
        temp.shift();
        let place_name = temp.join(", ");

        const Coordinates = {
          lat,
          long,
          area,
          place_name,
        };
        return localStorage.setItem("Coordinates", JSON.stringify(Coordinates));
      }
    });
  };

  const goTo = ({ history }) => {
    return history.push("/Restaurants");
  };
  return (
    <div className="container">
      <Search className="bg-white border-transparent shadow-lg rounded-3xl row">
        <div className="text-center border-transparent col-10 align-self-center">
          <div className="border-transparent row">
            <Autocomplete
              className="ml-2 mr-0 text-left col-lg-9 col-md-8 col-sm-8 form-control-plaintext form-control-lg text-muted font-weight-bold"
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={data.map((place) => place.place_name)}
              renderInput={(params) => (
                <TextField
                  className="text-left border-transparent form-control-plaintext form-control-lg text-muted font-weight-bold"
                  id="outlined-helperText"
                  placeholder="Enter Your delivery location"
                  onChange={(value) => {
                    return handleInputChange(value);
                  }}
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  fullWidth
                  style={{
                    fontSize: "20px",
                  }}
                />
              )}
            />
           <button
          type="button"
          className="text-center text-orange-500 bg-black rounded-2xl col-2 btn btn-lg"
          onClick={() => {
            return goTo();
          }}
          >
              START ORDERING
            </button>
          </div>
        </div>
        
      </Search>
    </div>
  );
};

export default SearchBar;
