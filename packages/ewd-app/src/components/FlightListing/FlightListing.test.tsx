import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlightListing from './index';
// A=> FRA B=>FCO C=>HAM
const mockData = [
  {
    'origin': 'FRA',
    'destination': 'FCO',
    'departureDate': '2023-04-13',
    'returnDate': '2023-04-14',
    'seatAvailability': '7',
    'price': {
        'amount': '128.26',
        'currency': 'EUR'
    },
    'offerType': 'amadeusBestPrice',
    'uuid': 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af'
},
{
    'origin': 'FRA',
    'destination': 'HAM',
    'departureDate': '2023-02-15',
    'returnDate': '2023-02-16',
    'seatAvailability': '10',
    'price': {
        'amount': '118.56',
        'currency': 'EUR'
    },
    'offerType': 'amadeusBestPrice',
    'uuid': 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af'
},
{
    'origin': 'FCO',
    'destination': 'HAM',
    'departureDate': '2023-02-17',
    'returnDate': '2023-02-18',
    'seatAvailability': '8',
    'price': {
        'amount': '108.00',
        'currency': 'EUR'
    },
    'offerType': 'amadeusBestPrice',
    'uuid': 'SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af'
}
];

afterEach(cleanup);

describe('Flight listing Component', () => {
  it('displays all flight list', () => {
    const { getByTestId, queryByText, getByText } = render(
      <FlightListing data={mockData} />
    );
    expect(screen.findByText('FRA'));
  });
});

describe('Check the count of Flight listing', () => {
    it('displays all flight list', () => {
      const { getByTestId, queryByText, getByText } = render(
        <FlightListing data={mockData} />
      );
      expect(screen.getAllByTestId('flightlist').length).toEqual(3);
    });
  });
