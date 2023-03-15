import { useReducer } from "react";
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

type CounterState = {
    count: number
}

// discriminated unions with type template literals
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

// useReduer hook with reset no payload

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
            case 'reset':
                return initialState
        default:
            return state
    }
}

export const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Box>
            <Button variant="outlined" onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </Button>
            <Button variant="outlined" onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </Button>
            <Button variant="outlined" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
            <Box>
                Count: {state.count}
            </Box>
        </Box>
    )
}