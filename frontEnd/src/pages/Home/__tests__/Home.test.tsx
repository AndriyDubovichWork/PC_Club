import { render, screen, cleanup } from '@testing-library/react';
import Home from '../Home';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Home contains main tag', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/PC_Club']}>
      <Routes>
        <Route path='/PC_Club' element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByRole('main')).toBeInTheDocument();
});
