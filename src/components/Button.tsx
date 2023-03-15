import Button from '@mui/material/Button';

type ButtonProps = {
    handleClick: () => void
}

export const Button1 = ({handleClick}: ButtonProps) => {
    return <Button variant="outlined" onClick={handleClick}>Click</Button>
}