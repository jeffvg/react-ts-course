import Button from '@mui/material/Button';

type Button2Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button2 = ({handleClick}: Button2Props) => {
    return <Button variant="outlined" onClick={event =>handleClick(event, 1)}>Click</Button>
}