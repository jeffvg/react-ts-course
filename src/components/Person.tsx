import React from 'react';
import { Box } from '@mui/material';
import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
    return (
    <Box>
        <h1>
        {props.name.first} {props.name.last}
        </h1>
    </Box>
    )
}