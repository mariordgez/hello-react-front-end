import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingReducer';

const Greeting = () => {
  const { status, message } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchGreeting());
    }
  }, [status]);

  const loadGreeting = (load = '') => (
    <div className={`container ${load}`}>
      {load !== '' && (
        <div>
          <h1>Welcome to React-Rails!</h1>
          <h2>{greeting.content}</h2>
        </div>
      )}
    </div>
  );

  return <div>{status !== 'ready' ? loadGreeting() : loadGreeting('load')}</div>;
};

export default Greeting;
