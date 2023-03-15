import OutlinedInput from '@mui/material/OutlinedInput';

type InputProps2 = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input2 = ({value, handleChange}: InputProps2) => {
    return <OutlinedInput size='small' type='text' value={value} onChange={handleChange} />
}