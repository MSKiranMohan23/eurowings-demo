import React, { useState, useEffect } from "react";

import AutoSuggest from "../../uiComponents/AutoSuggest";
import Button from "../../uiComponents/Button";
import FlightListing from "../FlightListing";
import { apiHandler } from "../../apiHandler";
import { searchFlights, getCities } from "../../utils/helper";

import "./Search.scss";

const Search = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [allFlight, setallFlight] = useState<[]>([]);
  const [flightList, setflightList] = useState<[]>([]);
  const [originCity, setOriginCity] = useState<any[]>([]);
  const [destinationCity, setDestinationCity] = useState<any[]>([]);
  useEffect(() => {
    setOriginCity(getCities());
    setDestinationCity(getCities());
  }, []);

  useEffect(() => {
    const newPromise = new Promise((resolve, reject) => {
      const getPosts = apiHandler(
        "get",
        "http://localhost:8000/flight-listing",
        "posts"
      );

      if (getPosts !== null) {
        //setPosts(getPosts);
        resolve(getPosts);
      } else {
        reject("Error while retrieving");
      }
    });
    newPromise.then(
      (res: any) => {
        const resData: [] = res.data ? res.data : [];

        setflightList(resData);
        setallFlight(resData);
      },
      (Err: any) => {
        console.log( Err);
      }
    );
  }, []);

  useEffect(() => {
    searchResult();
  }, [origin, destination]);

  const searchResult = () => {
    let filteredData = allFlight;
    const oCity =
      origin.split(":").length === 2 ? origin.split(":")[1].trim() : "";
    const dCity =
      destination.split(":").length === 2
        ? destination.split(":")[1].trim()
        : "";
    filteredData = searchFlights(allFlight, oCity, dCity);

    setflightList(filteredData);
  };
  return (
    <div>
      <div className="">
        <div className="searchFields">
          <div className="container">
            <div className="container__left-div">
              <AutoSuggest
                placeholder="Origin"
                suggestions={originCity}
                onChange={setOrigin}
                data_testid={"origin-input"}
              ></AutoSuggest>
            </div>
            <div className="container__right-div">
              <AutoSuggest
                placeholder="Destination"
                suggestions={destinationCity}
                onChange={setDestination}
                data_testid={"destination-input"}
              ></AutoSuggest>
            </div>
          </div>
          <div className="container">
            <div className="container__buttonContainer">
              <Button
                label="Search for flight"
                addClass="container__button"
                onClick={searchResult}
              />
            </div>
          </div>

          <div className="container">
            <div className="container__displayText">
            Displaying the listing{" "}
            {origin ? `flights from ${origin}` : "of all flights"}
            {destination ? ` to ${destination}` : ""}
            </div>
          </div>
          
        </div>
      </div>
      <div className="container-listing">
        {flightList.length ? (
          <FlightListing data={flightList} />
        ) : (
          "There are no flights available"
        )}
      </div>
    </div>
  );
};

export default Search;
