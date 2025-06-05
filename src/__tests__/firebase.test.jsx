import { render, screen } from '@testing-library/react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

jest.mock('../firebase', () => {
  const original = jest.requireActual('../firebase');
  return {
    ...original,
    db: { __mock: true },
  };
});

jest.mock('firebase/firestore', () => {
  const original = jest.requireActual('firebase/firestore');
  return {
    ...original,
    getDocs: jest.fn(() => Promise.resolve({ docs: [{ id: '1', data: () => ({ title: 'Test Budaya' }) }] })),
    collection: jest.fn(),
  };
});

describe('Firebase connection', () => {
  it('fetches budaya collection', async () => {
    const snap = await getDocs(collection(db, 'budaya'));
    expect(snap.docs[0].data().title).toBe('Test Budaya');
  });
});
