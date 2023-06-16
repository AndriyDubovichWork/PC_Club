import { render, screen, cleanup } from '@testing-library/react';
import ScrollTop from '../ScrollTop';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('ScrollTop contains arrow img', () => {
  render(<ScrollTop />);

  expect(screen.getByTestId('KeyboardArrowUpIcon')).toBeInTheDocument();
});
