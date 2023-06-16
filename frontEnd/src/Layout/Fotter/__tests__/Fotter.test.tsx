import { render, screen, cleanup } from '@testing-library/react';
import Fotter from '../Fotter';
import renderer from 'react-test-renderer';
afterEach(() => {
  cleanup();
});

test('Fotter match snapshot', () => {
  const tree = renderer.create(<Fotter />).toJSON();
  expect(tree).toMatchSnapshot();
});
