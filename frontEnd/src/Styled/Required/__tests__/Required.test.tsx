import { render, screen, cleanup } from '@testing-library/react';
import Required from '../Required';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Required match snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/PC_Club/']}>
        <Routes>
          <Route path='/PC_Club/' element={<Required text='hi' />} />
        </Routes>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Required contains text', () => {
  render(
    <MemoryRouter initialEntries={['/PC_Club/']}>
      <Routes>
        <Route path='/PC_Club/' element={<Required text='hi' />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('hi')).toBeInTheDocument();
});
