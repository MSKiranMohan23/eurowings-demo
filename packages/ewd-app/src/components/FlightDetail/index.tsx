import React from "react";
import { getCityDetail } from "./../../utils/helper";
import "./FlightDetail.scss";

interface Props {
  data: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    seatAvailability: string;
    price: {
      amount: string;
      currency: string;
    };
    offerType: string;
    uuid: string;
  };
}

const DataComponent: React.FC<Props> = ({ data }) => {
  const orginDetail = getCityDetail(data.origin);
  const destinationDetail = getCityDetail(data.destination);

  return (
    <div className="flightData">
      <div className="flightData__origin">
        Departure :{" "}
        {typeof orginDetail.city !== "undefined" ? orginDetail.city : ""}{" "}
        {data.origin},{" "}
        {typeof orginDetail.country !== "undefined" ? orginDetail.country : ""}
      </div>
      <div className="flightData__destination">
        Destination:{" "}
        {typeof destinationDetail.city !== "undefined"
          ? destinationDetail.city
          : ""}{" "}
        {data.destination},{" "}
        {typeof destinationDetail.country !== "undefined"
          ? destinationDetail.country
          : ""}
      </div>
      <div className="flightData__departure-date">{data.departureDate}</div>
      <div className="flightData__return-date">{data.returnDate}</div>
      <div className="flightData__seat-availability">
        {data.seatAvailability}
      </div>
      <div className="flightData__price">
        {data.price.amount} {data.price.currency}
      </div>
      <div className="flightData__offer-type">{data.offerType}</div>
    </div>
  );
};

export default DataComponent;
