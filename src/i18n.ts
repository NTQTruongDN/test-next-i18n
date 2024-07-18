import {getRequestConfig} from 'next-intl/server';

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

export default getRequestConfig(async ({locale}) => {
  const messages = await fetch(
    BASE_URL + `/api/lang/${locale}`
  );
  return {
    messages: await messages.json()
  };
});
