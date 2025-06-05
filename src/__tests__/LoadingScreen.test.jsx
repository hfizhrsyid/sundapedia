import { render, screen } from '@testing-library/react';
import LoadingScreen from '../components/LoadingScreen';

describe('LoadingScreen', () => {
  it('renders loading dots', () => {
    render(<LoadingScreen height=" h-96" />);
    expect(screen.getByText((content, element) => element.className.includes('loading-dots'))).toBeInTheDocument();
  });
});