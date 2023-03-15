import React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
    Divider,
} from '@mui/material';
import { Greet } from './components/Greet'
import MenuIcon from '@mui/icons-material/Menu';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './Status';
import { Heading } from './components/Heading';
import { Award } from './components/Award';
import { Button1 } from './components/Button';
import { Button2 } from './components/Button2';
import { Input1 } from './components/Input';
import { Container } from './components/Container';
import { Input2 } from './components/Input2';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { Counter2 } from './components/state/Counter2';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomButton2 } from './components/html/Button2';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/text'
// import { styled } from '@mui/material/styles';

export const App = (): JSX.Element => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const personName = {
        first: 'Chuck',
        last: 'Wayne',
    }
    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne',
        },
        {
            first: 'Clark',
            last: 'Kent',
        },
        {
            first: 'Ben',
            last: 'West',
        },
    ]

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh', position: 'relative' }}>
            <AppBar position={'fixed'}>
                <Toolbar sx={{ px: 2 }}>
                    <IconButton color={'inherit'} edge={'start'} style={{ marginRight: theme.spacing(3) }} size="large">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={'h6'} color={'white'}>
                        React Typescript
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    p: `${theme.spacing(8)} ${theme.spacing(3)}`,
                }}
            >
                <Box style={{ maxWidth: 1300, margin: '0 auto' }}>
                    <Box style={{ textAlign: 'center' }}>
                        <Box>
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Greet component (user & count props){' '}
                            </Typography>
                            <Greet
                                name='User'
                                messageCount={20}
                            />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Person component (first & last props){' '}
                            </Typography>
                            <Person name={personName} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                PersonList component (array objects first & last props){' '}
                            </Typography>
                            <PersonList names={nameList} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Status component ( props used with unoin of string literals){' '}
                            </Typography>
                            <Status status='success' />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Heading component ( children props on react component){' '}
                            </Typography>
                            <Heading>Placeholder text</Heading>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Award & Heading component ( children prop on React.ReactNode){' '}
                            </Typography>
                            <Award>
                                <Heading>Award goes to you</Heading>
                            </Award>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Button component ( handleClick event prop  ){' '}
                            </Typography>
                            <Button1 handleClick={() => {
                                console.log('Button Clicked')
                            }} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Button2 component ( handleClick event component prop & MouseEvent  ){' '}
                            </Typography>
                            <Button2 handleClick={(event, id) => {
                                console.log('Button Clicked', event, id)
                            }} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Input component ( onChange event on input element ){' '}
                            </Typography>
                            <Input1 value=' ' handleChange={(event) => console.log(event)} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Input component ( onChange event on input element props destructured ){' '}
                            </Typography>
                            <Input2 value=' ' handleChange={(event) => console.log(event)} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Container styles component ( React prop CSSProperties ){' '}
                            </Typography>
                            <Container styles={{ border: '1px solid white', padding: '1rem' }} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Login component useState & conditionally render text (login props boolean isLoggedIn){' '}
                            </Typography>
                            <LoggedIn loggedin={false} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                User component useState future value (useState AuthUser | null){' '}
                            </Typography>
                            <User name={''} email={''} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Counter component useReducer{' '}
                            </Typography>
                            <Counter />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Counter2 useReducer discriminated unions with type template literals{' '}
                            </Typography>
                            <Counter2 />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                useRef hook set focus on InputElement when component mounts{' '}
                            </Typography>
                            <DomRef />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Mutable useRef hook{' '}
                            </Typography>
                            <MutableRef />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Component prop as React.ComponentType{' '}
                            </Typography>
                            <Private isLoggedIn={true} component={Profile} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                List generic props any type with key index {' '}
                            </Typography>
                            <List
                                items={['Frank', 'William', 'Thomas']}
                                onClick={(item) => console.log(item)}
                            />
                            <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Restricting component props {' '}
                            </Typography>
                            <RandomNumber value={10} isPositive />
                            <RandomNumber value={9} isNegative />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Component Template Literals and Exclude {' '}
                            </Typography>
                            <Toast position='center' />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Wrapping HTML Elements {' '}
                            </Typography>
                            <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
                                Primary Button
                            </CustomButton>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Wrapping HTML Elements Omit restrict children type on React.ComponentProps {' '}
                            </Typography>
                            <CustomButton2 variant='primary' onClick={() => console.log('Clicked')}>
                                Primary Button
                            </CustomButton2>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                CustomComponent extract component props from a different component within source{' '}
                            </Typography>
                            <CustomComponent name='User' messageCount={20} />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant={sm ? 'h6' : 'h5'} paragraph>
                                Polymorphic Text Component React.ElementType{' '}
                            </Typography>
                            <Text as='h1' size='lg'>
                                Heading
                            </Text>
                            <Text as='p' size='md'>
                                Paragraph
                            </Text>
                            <Text as='label' htmlFor='someId' size='sm' color='secondary'>
                                Label
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};
