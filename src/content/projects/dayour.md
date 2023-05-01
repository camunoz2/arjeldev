---
title: "Dayour"
subtitle: "Zen-minimalist day planner for the busy hipster."
slug: "dayourapp"
publishDate: "11 Sep 2022"
summary: "A TODO app with a twist, it divides the day in 4 moments, it has persistent data and is user binded trought google OAuth, it has protected routes, and its database is in a REDIS list trought upstash. It has some nice Rive animations"
cardColor: "#aa5b8f"
projectLink: "https://dayour-app.vercel.app/"
githubLink: "https://github.com/camunoz2/dayour.app"
usedStack: ["NextJs", "Next-Auth", "Tanstack-Query", "Redis"]
featuredImage: "/images/projects/dayour/featured.webp"
portraitProjectImage: "/images/projects/dayour/portrait.webp"
landscapeProjectImages:
  [
    "/images/projects/dayour/landscape1.webp",
    "/images/projects/dayour/landscape2.webp",
  ]
---

# Dayour.app

### I know you are there, simple man of the XX century.

Dayourapp is a TODO app with a twist, it divides the day in 4 moments, it has persistent data and is user binded trought google login, it has protected routes, and its database is in a REDIS list trought upstash.

## ¿What are the use cases of my webapp?

Maybe no one, and maybe there is better alternatives in the market, but this is my first fullstack webapp and i love it. This is a finished product, and it has animations with RIVE when a response is back from the server, this make for a great experiment in UX/UI. The animation featured in this webapp was made by me in the Rive platform.

This webapp was made with Next, and it was the first time that i used this platform after Gatsby, i was used to the static websites generators for its stability, security and developer experience, but this framework is top notch in all those venues. This framework allowed me to write better code trought the full adoption of Typescript, and i think im not going back to Js in a long time. Typescript show me the difference between writing to a input handler and changing its state trough code > `ChangeEventHandler<HTMLInputElement>` Vs `Dispatch<SetStateAction<State>>`

In this project was the first time i used [Next-Auth](https://next-auth.js.org) and not only that, but i also write my first crontibution ever on github to that repo, an achievement that i'm proud of.

## Development

The Auth is delegated to [NextAuth](https://next-auth.js.org/), with two providers (Google y Github). Makin this is simple, first you must create the file `\[...nextauth].ts` on `/api/auth`. and write this:

```ts
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
```

Then, create the route `\_app.tsx` in the same folder as `index.tsx`. This file helps on layout persistence and keeping state between pages, beign a perfect place for our Provider and keep the state of our user in check.

```tsx
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

const queryClient = new QueryClient();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
```

In this project i'm using react-query, a library for data fetching, data revalidation and cache.

The Auth process consist of Authorization and Authentication, for the authorization part, we can use useEffect and check if our user is authenticated.

```ts
useEffect(() => {
  if (status === "unauthenticated") {
    router.push("/");
  }
}, [status]);

if (typeof window !== undefined && loading) return null;
```

The status object comes from NextAuth API with other 2 states ('authenticated', 'loading'). In this case, if the user is not authenticated, we send it to ('/') The code with the window, is for preventing a flash of content.

Now we have ready the Auth process.

## CRUD

I used Redis KV (Key, value) database with [Upstash](https://upstash.com/) free tier.

I created 3 API routes: one for add items, another for get items, and one for delete items. For adding items:

```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/redisClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const value = req.body.todoText;
  const user = req.body.user;
  const index = req.body.todoIndex;

  const key = user + ":" + index;

  const push = await redis.lpush(key, value);

  res.status(200).end();
};
```

For getting items:

```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/redisClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.body.user;
  const listIndex = req.body.listIndex;

  const morningList = user + ":" + listIndex;

  const list = await redis.lrange(morningList, 0, 10);
  res.status(200).json(list);
};
```

And for delete the object:

```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/redisClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const value = req.body.todoText;
  const user = req.body.user;
  const index = req.body.todoIndex;

  const key = user + ":" + index;

  await redis.lrem(key, 1, value);

  res.status(200).end();
};
```

This elements interact with the Redis database trought, push, lrange and lrem, commands found on the [redis docs](https://redis.io/commands/)

The we just call this API routes in our app. In my case, i sed the Fetch API for the request and react-query for fetching data.

You can check more details in my [repo](https://github.com/camunoz2/dayour.app).
Feel free to reach me on twitter at [@arjeldev](https://twitter.com/arjeldev)
Cheers!
