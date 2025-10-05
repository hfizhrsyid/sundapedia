import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders Masagi brand', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
});
