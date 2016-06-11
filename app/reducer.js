
export const constants = {
  init: 'APP_INIT',
  foo: 'APP_FOO',
};

export const actions = {
  foo: () => ({ type: constants.foo }),
  init: () => ({ type: constants.init }),
};


const initialState = { foo: 'bar' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.foo:
      return state;
    case constants.init:
      return state;
      break;
    default:
      return state;

  }
};
