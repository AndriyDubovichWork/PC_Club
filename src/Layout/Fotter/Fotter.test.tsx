import { render, screen } from '@testing-library/react';
import Fotter from './Fotter';

test('renders the Fotter', () => {
  render(<Fotter />);
  expect(screen.getByText('PC CLUB'));
});
