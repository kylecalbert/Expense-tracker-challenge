import React, { useState } from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormError {
  usernameError: string;
  passwordError: string;
}

interface LoginProps {
  onFormSubmit: (loginData: LoginFormData) => void;
}

function Login({ onFormSubmit }: LoginProps) {
  const navigate = useNavigate();

  const [loginData, setloginData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const [loginError, setloginError] = useState<LoginFormError>({
    usernameError: '',
    passwordError: '',
  });

  const { username, password } = loginData;
  const { usernameError, passwordError } = loginError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setloginError({
        ...loginError,
        usernameError: username ? '' : 'Username is required',
        passwordError: password ? '' : 'Password is required',
      });
      return false;
    }

    onFormSubmit(loginData);
    navigate('/tracker');
  };

  return (
    <Container
      style={{
        paddingTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2} style={{ width: 300 }}>
          <TextField
            label="Username"
            error={usernameError ? true : false}
            helperText={usernameError}
            inputProps={{ 'data-testid': 'username-textfield' }}
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => {
              if (usernameError) {
                setloginData({
                  ...loginData,
                  username: e.target.value,
                });
                setloginError({
                  ...loginError,
                  usernameError: '',
                });
              } else {
                setloginData({ ...loginData, username: e.target.value });
              }
            }}
          />

          <TextField
            error={passwordError ? true : false}
            helperText={passwordError}
            label="Password"
            type="password"
            margin="normal"
            inputProps={{ 'data-testid': 'password-textfield' }}
            variant="outlined"
            value={password}
            onChange={(e) => {
              if (passwordError) {
                setloginData({
                  ...loginData,
                  password: e.target.value,
                });
                setloginError({
                  ...loginError,
                  passwordError: '',
                });
              } else {
                setloginData({ ...loginData, password: e.target.value });
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            data-testid="submit-button"
          >
            Submit
          </Button>

          <Button
            style={{ marginTop: 10 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Create Account
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

export default Login;
