import React from 'react';
import { Box } from '@mui/material';

type GreetProps = {
    name: string
    messageCount?: number
}

export const Greet = ({name, messageCount}: GreetProps) => {
    return (
        <Box>
            <h1>
                Welcome {name} you have {messageCount} unread messages
            </h1>
        </Box>
    )
}