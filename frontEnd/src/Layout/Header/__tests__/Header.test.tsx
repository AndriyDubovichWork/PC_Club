import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Header match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club']}>
        <Routes>
          <Route path='/PC_Club' element={<Header />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Header contains logo', () => {
  render(
    <MemoryRouter initialEntries={['/PC_Club']}>
      <Routes>
        <Route path='/PC_Club' element={<Header />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('CLUB')).toBeInTheDocument();
});
