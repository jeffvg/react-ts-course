import { useReducer } from "react";
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

type CounterState = {
    count: number
}

type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

// useReduer hook

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Box>
            <Button variant="outlined" onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </Button>
            <Button variant="outlined" onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </Button>
            <Box>
                Count: {state.count}
            </Box>
        </Box>
    )
}