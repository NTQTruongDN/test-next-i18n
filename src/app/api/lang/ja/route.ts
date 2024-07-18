import {NextResponse} from 'next/server';

export function GET() {
  return NextResponse.json({
    Index: {
      title: 'ホームページ',
      loggedIn: '{username}としてログインしました',
      loggedOut: 'ログアウトしました。',
      login: 'ログイン',
      logout: 'ログアウト',
      secret: 'ログインしたユーザー用の秘密のページ'
    },
    LocaleLayout: {
      title: 'Auth.js を使用した next-intl の例'
    },
    Login: {
      title: 'ログイン',
      username: 'ユーザー名',
      password: 'パスワード',
      submit: 'ログイン',
      error:
        '{error、select、CredentialsSignin {Invalid username or password} other {Unknown error}}'
    },
    LocaleSwitcher: {
      switchLocale:
        '{locale、select、ja {Japanese} en {English} other {Unknown} に切り替える'
    },
    Secret: {
      title: '秘密のページ',
      description: 'このページはログインしたユーザーのみ表示されます。'
    }
  });
}
