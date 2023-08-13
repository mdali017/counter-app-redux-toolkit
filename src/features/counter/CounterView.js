import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    // const count = useSelector((state) => console.log(state))
    const count = useSelector((state) => state.counter.count)
    // console.log(count)

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {dispatch(increment())}}>increment</button>
            <button onClick={() => {dispatch(reset())}}>Reset</button>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <button onClick={() => {dispatch(increaseByAmount(5))}}>incrementBy5</button>
        </div>
    );
};

export default CounterView;