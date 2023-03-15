import { useState } from "react"
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

type AuthUser = {
    name: string
    email: string
}

export const User = (props: AuthUser) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = (): void => {
        setUser({
            name: 'Test',
            email: 'Test@example.com'
        })
    }
    const handleLogout = (): void => {
        setUser(null)
    }
    return (
        <Box>
            <Button variant="outlined" onClick={handleLogin}>Login</Button>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            <Box>User name: {user?.name}</Box>
            <Box>User email: {user?.email} </Box>
        </Box>
    )
}