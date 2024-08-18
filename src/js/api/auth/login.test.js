// src/js/api/auth/login.test.js

import { login } from './login';
import { save, load } from '../../storage/index';
import { isLoggedIn, profile } from './state';

jest.mock('../../storage/index', () => ({
  save: jest.fn(),
  load: jest.fn(),
  remove: jest.fn(),
}));

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should store a token and profile when provided with valid user credentials', async () => {
    load.mockReturnValue(null);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            accessToken: 'fake-token',
            username: 'testuser',
            email: 'testuser@noroff.no',
          }),
      })
    );

    const profileData = await login('testuser@noroff.no', 'password123');

    expect(save).toHaveBeenCalledWith('token', 'fake-token');
    expect(save).toHaveBeenCalledWith('profile', {
      username: 'testuser',
      email: 'testuser@noroff.no',
    });

    expect(profileData).toEqual({
      username: 'testuser',
      email: 'testuser@noroff.no',
    });

    load.mockImplementation((key) => {
      if (key === 'token') return 'fake-token';
      if (key === 'profile')
        return { username: 'testuser', email: 'testuser@noroff.no' };
      return null;
    });

    expect(isLoggedIn()).toBe(true);
    expect(profile()).toEqual({
      username: 'testuser',
      email: 'testuser@noroff.no',
    });
  });

  it('should throw an error when login fails', async () => {
    load.mockReturnValue(null);

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    await expect(login('invalid@noroff.no', 'wrongpassword')).rejects.toThrow(
      'Unauthorized'
    );
  });
});
