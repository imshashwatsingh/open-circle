export const initialAuthState = {
  user: null,
  loading: true,
  error: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case 'CLEAR_STATE':
      return initialAuthState;
    default:
      return state;
  }
};
