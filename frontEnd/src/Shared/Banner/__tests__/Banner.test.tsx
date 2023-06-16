import { render, screen, cleanup } from '@testing-library/react';
import Banner from '../Banner';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Banner match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club/']}>
        <Routes>
          <Route path='/PC_Club/' element={<Banner />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Banner contains text', () => {
  render(
    <MemoryRouter initialEntries={['/PC_Club/']}>
      <Routes>
        <Route path='/PC_Club/' element={<Banner />} />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByText('Save big with our cheap PC Club')
  ).toBeInTheDocument();
});
