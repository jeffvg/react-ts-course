import OutlinedInput from '@mui/material/OutlinedInput';

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input1 = ({value, handleChange}: InputProps) => {
    return <OutlinedInput size='small' type='text' value={value} onChange={handleChange} />
}