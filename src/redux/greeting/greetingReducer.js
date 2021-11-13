import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_GREETING_FULFILLED = 'hello-rails-react/GET_GREETING/fulfilled';

const fetchAPI = async () => {
  const URL = 'http://127.0.0.1:4000/v1/greetings';
  const request = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const response = await request.json();
  return response;
};

const initialState = {
  status: 'default',
  message: {},
};

export const fetchGreeting = createAsyncThunk(
  'hello-rails-react/GET_GREETING',
  async () => {
    const message = await fetchAPI();
    return message;
  },
);

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_FULFILLED:
      return {
        status: 'ready',
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
