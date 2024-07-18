import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const messages = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + `/api/lang/${locale}`
  );
  return {
    messages: await messages.json()
  };
});
