import { render, screen, cleanup } from '@testing-library/react';
import Register from '../Register';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Register match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club/register']}>
        <Routes>
          <Route path='/PC_Club/register' element={<Register />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Register contains fields', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/PC_Club/register']}>
      <Routes>
        <Route path='/PC_Club/register' element={<Register />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
});
