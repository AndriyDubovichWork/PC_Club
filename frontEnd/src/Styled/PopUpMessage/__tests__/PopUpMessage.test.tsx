import { render, screen, cleanup } from '@testing-library/react';
import PopUpMessage from '../PopUpMessage';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('PopUpMessage contains text', () => {
  render(
    <MemoryRouter initialEntries={['/PC_Club/']}>
      <Routes>
        <Route
          path='/PC_Club/'
          element={
            <PopUpMessage
              text={'hi'}
              isSnackbarOpen={true}
              setIsSnackbarOpen={() => {}}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('hi')).toBeInTheDocument();
});
