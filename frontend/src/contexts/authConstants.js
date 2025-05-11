export const AUTH_ACTIONS = {
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_STATE: 'CLEAR_STATE'
};

export const AUTH_ERRORS = {
  NOT_AUTHENTICATED: 'User is not authenticated',
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_IN_USE: 'Email already in use',
  WEAK_PASSWORD: 'Password should be at least 6 characters',
  GENERIC_ERROR: 'An error occurred. Please try again'
};