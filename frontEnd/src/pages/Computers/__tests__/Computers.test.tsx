import { render, screen, cleanup } from '@testing-library/react';
import Computers from '../Computers';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Computers contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/PC_Club/computers']}>
      <Routes>
        <Route path='/PC_Club/computers' element={<Computers />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
