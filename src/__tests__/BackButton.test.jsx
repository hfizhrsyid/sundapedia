import { render } from '@testing-library/react';
import BackButton from '../components/BackButton';
import { BrowserRouter } from 'react-router-dom';

describe('BackButton', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );
  });
});
