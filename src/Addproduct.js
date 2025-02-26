import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
// import ForgotPassword from './ForgotPassword';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function Addproduct(props) {
  const [titleError, setTitleError] = React.useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = React.useState('');
  const [quantityError, setQuantityError] = React.useState(false);
  const [quantityErrorMessage, setQuantityErrorMessage] = React.useState('');
  const [amountError, setAmountError] = React.useState(false);
  const [amountErrorMessage, setAmountErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if ( titleError|| descriptionError||quantityError || amountError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      description: data.get('description'),
      quantity: data.get('quantity'),
      amount: data.get('amount'),
    });
  };

   const validateInputs = () => {
    // const title = document.getElementById('title');
    // const description= document.getElementById('description');
    // const quantity = document.getElementById('quantity');
    // const amount = document.getElementById('amount');


     let isValid = true;

  //    if (!title.value || !/\S+@\S+\.\S+/.test(title.value)) {
  //     setTitleError(true);
  //    setTitleErrorMessage('Please enter a title.');
  //     isValid = false;
  //    } else {
  //     setTitleError(false);
  //    setTitleErrorMessage('');
  //   }

  //   if (!description.value || description.value.length < 6) {
  //     setDescriptionError(true);
  //     setDescriptionErrorMessage('description must be at least 6 characters long.');
  //     isValid = false;
  //   } else {
  //     setDescriptionError(false);
  //     setDescriptionErrorMessage('');
  //   }
  //   if (!quantity.value || quantity.value) {
  //     setQuantityError(true);
  //     setQuantityErrorMessage('');
  //     isValid = false;
  //   } else {
  //     setQuantityError(false);
  //     setQuantityErrorMessage('');
  //   }
  //    if (!amount.value || amount.value) {
  //     setAmountError(true);
  //      setAmountErrorMessage('');
  //      isValid = false;
  //    } else {
  //     setAmountError(false);
  //     setAmountErrorMessage('');
  // }

    return isValid;
   };

  return (
   /* <AppTheme {...props}>*/
   <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Add product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 1,
            }}
          >
             <FormControl>
              <FormLabel htmlFor="Title">Title</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="Title"
                type="Title"
                name="Title"
                placeholder="Enter Title"
                autoComplete="Title"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Description">Description</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="Description"
                type="Description"
                name="Description"
                placeholder="Description"
                autoComplete="Description"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="Quantity">Quantity</FormLabel>
              <TextField
                // error={emailError}
                // helperText={emailErrorMessage}
                id="Quantity"
                type="Quantity"
                name="Quantity"
                placeholder="Quantity"
                autoComplete="Quantity"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Amount">Amount</FormLabel>
              <TextField
                // error={passwordError}
                // helperText={passwordErrorMessage}
                name="amount"
                placeholder="amount"
                type="amount"
                id="password"
                autoComplete="amount"
                autoFocus
                required
                fullWidth
                variant="outlined"
                // color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            {/* <FormControlLabel */}
              {/* control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              ADD
            </Button>
            {/* <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              
            </Link>  */}
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook */}
            {/* </Button> */}
            
          </Box>
        </Card>
      </SignInContainer>
      </>
   /* </AppTheme>*/
  );
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   