import { useState } from "react"
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

type LoginProps = {
    loggedin: boolean
}

export const LoggedIn = (props: LoginProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = (): void => {
        setIsLoggedIn(true)
    }
    const handleLogout = (): void => {
        setIsLoggedIn(false)
    }
    return (
        <Box>
            <Button variant="outlined" onClick={handleLogin}>Login</Button>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            <div>User is now {isLoggedIn ? 'logged in state' : 'logged out state'}</div>
        </Box>
    )
}