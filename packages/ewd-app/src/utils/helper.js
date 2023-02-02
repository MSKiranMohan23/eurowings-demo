/**
 * Utility functions to carry out certain tasks
 */

import { countries } from "./citisList.ts";
/**
 * Function: getCityDetail
 * @param {*} cityCode 
 * @returns : Country name, City full name and the flightCode based on the code passed to it
 * 
 */
export const getCityDetail = (cityCode) => {
  const filteredData = countries.reduce(
    (acc, country) => [
      ...acc,
      ...country.cities
        .filter((city) => city.flightCode.startsWith(cityCode))
        .map((city) => ({
          country: country.country,
          city: city.city,
          flightCode: city.flightCode,
        })),
    ],
    []
  );
  return filteredData.length? filteredData[0]:[];
};

/**
 * Function: searchFlights
 * @param {*} arra 
 * @param {*} origin 
 * @param {*} destination 
 * @returns 
 */
export const searchFlights = (arra, origin = '', destination = '') => {
  //const filteredData = arra.filter((flight) => flight[key] === city);
  const filteredData = arra.filter(
    flight => (origin === '' || flight.origin === origin) && 
    (destination === '' || flight.destination === destination)
  );
  return filteredData;
};

/**
 * Function : getCities
 * Purpose : To get all the City details for the filters in the format => CityName: Flightcode
 * @returns 
 */
export const getCities = () => {
  const cities = [];

  countries.forEach((country) => {
    country.cities.forEach((city) => {
      cities.push(`${city.city}: ${city.flightCode}`);
    });
  });
  return cities
};