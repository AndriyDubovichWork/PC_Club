import { render, screen, cleanup } from '@testing-library/react';
import BookPC from '../BookPC';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('BookPC contains tags', () => {
  render(
    <MemoryRouter initialEntries={['/PC_Club/']}>
      <Routes>
        <Route path='/PC_Club/' element={<BookPC />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Book PC')).toBeInTheDocument();

  expect(screen.getByText('Select Date')).toBeInTheDocument();
  expect(screen.getByText('GPU')).toBeInTheDocument();
  expect(screen.getByText('CPU')).toBeInTheDocument();
  expect(screen.getByText('From')).toBeInTheDocument();
  expect(screen.getByText('Until')).toBeInTheDocument();

  expect(screen.getByText('Book')).toBeInTheDocument();
});
