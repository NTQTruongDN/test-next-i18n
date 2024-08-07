import {NextResponse} from 'next/server';

export function GET() {
  return NextResponse.json({
    Index: {
      title: 'Home',
      loggedIn: 'Logged in as {username}',
      loggedOut: 'You are logged out.',
      login: 'Login',
      logout: 'Logout',
      secret: 'Secret page for logged in users'
    },
    LocaleLayout: {
      title: 'next-intl with Auth.js example'
    },
    Login: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      submit: 'Login',
      error:
        '{error, select, CredentialsSignin {Invalid username or password} other {Unknown error}}'
    },
    LocaleSwitcher: {
      switchLocale:
        'Switch to {locale, select, ja {Japanese} en {English} other {Unknown}}'
    },
    Secret: {
      title: 'Secret page',
      description: 'This page is only visible for logged in users.'
    }
  });
}
