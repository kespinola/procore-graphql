export const constants = {
  APP_INIT: 'APP_INIT',
  CONNECT_CLIENT: 'CONNECT_CLIENT',
};

export const actions = {
  init: () => ({ type: constants.APP_INIT }),
  connectClient: () => ({ type: constants.CONNECT_CLIENT }),
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.APP_INIT:
      console.log('app init reducer');
      return state;
    case constants.CONNECT_CLIENT:
      console.log('app connect client reducer');
      return state;
    default:
      return state;

  }
};
