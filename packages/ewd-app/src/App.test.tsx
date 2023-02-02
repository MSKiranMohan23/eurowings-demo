import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import App from './App';
import Search from './components/Search';
import Button from './uiComponents/Button';
import FlightListing from './components/FlightListing';
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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/eurowings/i);
  expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup);

describe('Search field testing', () => {
  it('display Origin options', () => {
    const { getByTestId, queryByText, getByText } = render(
      <Search />
    );

    fireEvent.type(getByTestId('origin-input'),'L')
    expect(screen.getByText(/London/i)).toBeVisible();
    
  });
});

describe('Search field testing', () => {
  it('display Destination options', () => {
    const { getByTestId, queryByText, getByText } = render(
      <Search />
    );

    fireEvent.type(getByTestId('destination-input'),'V')
    expect(screen.getByText(/Venice/i)).toBeVisible();
    
  });
});

describe('Testing Search Button',()=>{
  it('Check Search for Flight Button',() => {
    const searchFunction = jest.fn();
    const { getByTestId, queryByText, getByText } = render(
      <Button onClick={searchFunction} label="Click Me" addClass='test'/>
    );
    fireEvent.click(screen.getByRole("button"))
    expect(searchFunction).toHaveBeenCalled();
  });
});
