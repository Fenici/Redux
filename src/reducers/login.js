const login = (state = {status:'no_logging_in'}, action) => {
  switch (action.type) {
 
    case 'LOGGING_IN':
      return { ...state, status: 'logging_in' };

    case 'LOGGING_OUT':
      return { ...state, status: 'logg_out' };

    default:
      return state;
  }
};

export default login;
