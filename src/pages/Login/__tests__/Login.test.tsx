import { render, screen, cleanup } from '@testing-library/react';
import Login from '../Login';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Login match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club/login']}>
        <Routes>
          <Route path='/PC_Club/login' element={<Login />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Login contains fields', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/PC_Club/login']}>
      <Routes>
        <Route path='/PC_Club/login' element={<Login />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
});
