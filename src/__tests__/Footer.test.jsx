import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright © 2025 - All right reserved by Rapelita/i)).toBeInTheDocument();
  });
});
