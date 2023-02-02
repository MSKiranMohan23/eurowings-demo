import React from "react";
import FlightDetail from "./../FlightDetail";
import uuid from 'react-uuid';
import "./Flightlist.scss";

interface FlightData {
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
}

interface Props {
  data: FlightData[];
}

const FlightListing: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((flight) => (
        <div key={`${flight.uuid}-${Date.now()}-${uuid()}`} className="flightlist" data-testid="flightlist">
          <FlightDetail data={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightListing;
