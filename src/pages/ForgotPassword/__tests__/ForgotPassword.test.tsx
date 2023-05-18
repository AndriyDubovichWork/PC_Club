import { render, screen, cleanup } from '@testing-library/react';
import ForgotPassword from '../ForgotPassword';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('ForgotPassword match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club/forgotPassword']}>
        <Routes>
          <Route path='/PC_Club/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('ForgotPassword contains fields', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/PC_Club/forgotPassword']}>
      <Routes>
        <Route path='/PC_Club/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});
