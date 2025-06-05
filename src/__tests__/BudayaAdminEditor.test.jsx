jest.mock('../firebase', () => ({ db: {} }));

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BudayaAdminEditor from '../pages/admin/dashboard/BudayaAdminEditor';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  getDocs: jest.fn(() => Promise.resolve({ docs: [] })),
  setDoc: jest.fn(() => Promise.resolve()),
  deleteDoc: jest.fn(() => Promise.resolve()),
  doc: jest.fn(),
}));
jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(),
  ref: jest.fn(),
  uploadBytes: jest.fn(() => Promise.resolve()),
  getDownloadURL: jest.fn(() => Promise.resolve('mock-url')),
}));

// Mock window.confirm
beforeAll(() => {
  window.confirm = jest.fn(() => true);
});

describe('BudayaAdminEditor', () => {
  it('renders add new budaya form', async () => {
    render(<BudayaAdminEditor />);
    await waitFor(() => expect(screen.getByPlaceholderText('Title')).toBeInTheDocument());
    expect(screen.getByPlaceholderText('Slug')).toBeInTheDocument();
  });

  it('can add a new budaya entry', async () => {
    render(<BudayaAdminEditor />);
    await waitFor(() => expect(screen.getByPlaceholderText('Title')).toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Budaya' } });
    fireEvent.change(screen.getByPlaceholderText('Slug'), { target: { value: 'test-budaya' } });
    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => {
      expect(screen.getByText('Test Budaya')).toBeInTheDocument();
    });
  });
});
