import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders Sundapedia brand', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    // Or check for a menu item, e.g. "Kamus"
    expect(screen.getAllByText(/Kamus/i)[0]).toBeInTheDocument();
  });
});
