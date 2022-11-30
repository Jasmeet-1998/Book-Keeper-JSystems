<p align="center"> <i><u><b> Tech. Stack Breakdown </b></u></i></p>

<br />

<p align="center">
    <img src="./abstractedSystemSketch-2022-10-24-1009.png" width="500px" height="250px" />
</p>

---

1. Book-Keeper UI

- Nextjs
- chakra UI

2. Backend [t3 stack]

- typescript
- trpc
- prisma "postgreSQL" [supabase](https://supabase.com/docs/guides/integrations/prisma) for cloud hosting the postgres instance with prisma

Misc:

- QR Code Based Authenticator

---

> ## Frontend (UI)

```bash

#new project
yarn create next-app --typescript

```

> Dependencies

```bash

"dependencies": {
    "@chakra-ui/react": "^2.3.6",
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@prisma/client": "^4.5.0",
    "@tanstack/react-query": "^4.14.3",
    "@trpc/client": "^10.0.0-proxy-beta.26",
    "@trpc/next": "^10.0.0-proxy-beta.26",
    "@trpc/react": "^9.27.4",
    "@trpc/react-query": "^10.0.0-proxy-beta.26",
    "@trpc/server": "^10.0.0-proxy-beta.26",
    "chart.js": "^3.9.1",
    "framer-motion": "^7.6.2",
    "next": "12.3.1",
    "next-auth": "^4.16.2",
    "react": "18.2.0",
    "react-chartjs-2": "^4.3.1",
    "react-dom": "18.2.0",
    "react-icons": "^4.6.0",
    "react-query": "^3.39.2",
    "zod": "^3.19.1"
  }

```

> ## Misc Resources Links

> Frontend

- [UI-react-icons](https://react-icons.github.io/react-icons/icons?name=ai)

- user dashboard inspired from [ui design](https://dribbble.com/shots/15640240/attachments/7432009?mode=media)

- user settings inspired from [ui design](https://dribbble.com/shots/17219601-Integrations-settings-page-Untitled-UI?utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Integrations%20settings%20page%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Integrations%20settings%20page%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share)
- billing section inspired from [ui design](https://dribbble.com/shots/18060542-Billing)

- [chakra-themes/colors](https://chakra-ui.com/docs/styled-system/theme)

- [react-charts](https://react-chartjs-2.js.org/) [examples] (https://react-chartjs-2.js.org/examples/line-chart)

- for AnimatePresence when [filter props](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

- [framer-book](https://framerbook.com/animation/example-animations/35-swipe-to-delete/)

- account sub-section settings

        Current Plan, Last Accessed IP & Date  Logs  ||
        update plan, Report Bug, delete account ||

- My Contacts Page [ui design](https://dribbble.com/shots/15221832-Nara-Medics-Contact-Management-Page)

---

> Backend

- [Supabase](https://app.supabase.com/) cloud hosting postgresql db instance specifically

- [prisma](https://www.prisma.io/docs/concepts/components/prisma-schema)

  https://www.prisma.io/docs/concepts/components/prisma-schema/data-model

  https://www.prisma.io/docs/concepts/overview/what-is-prisma/data-modeling#:~:text=Using%20Prisma%20Client%20and%20Prisma%20Migrate,-When%20using%20Prisma&text=Manually%20change%20your%20application%20models,Prisma%20Client%20is%20automatically%20generated)

                # after installing prisma depend & defining first basic in schema.prisma
                npx prisma init
                npx prisma generate

                # use until the schema is not definate & after each alteration
                npx prisma db push

                # on finalization
                npx prisma migrate dev

                # to run prisma studio locally
                npx prisma studio

- zod https://blog.logrocket.com/schema-validation-typescript-zod/#composing-complex-schema-objects

- trpc

            # ------procedures--------
            each procedures corresponds to an endpoint like in rest API

            # each procedure can be
            - query
               or
            - mutation

            # each procedure can have input with validation and any package third party of # home brew could be used to validate inputs

            # renaming symbols at client that make cascaded updates throughout the server as well
            select a word and press F2 and type the new name and enter

            # @@@ example @@@
            before
            trpc.hello
            after
            trpc.greetings

---

> 🎈 To do 👇 Dev Logs [branch labels]: DatedFrom: 15-11-2022

1.  setup/nextAuth & OauthSignIn with session data barebones managment

```bash

=============== Task List ================

- [x] setup & wire up login page. https://next-auth.js.org/providers/google go to -> https://console.developers.google.com/apis/credentials -> create new project -> create credentials selecting the newly created project -> Oauth Client ID & select web application
add redirect uri http://localhost:3000/api/auth/callback/google & use client ID & secret to configure provider in nextjs provider section

- [x] email server setup for magic email login, and dispatching
emails to users https://my.sendinblue.com/dashboard or https://www.siteground.com/kb/gmail-smtp-server/

- [x] sort prisma+supabase+nextjs integration, maintain session data inside postgresql hosted DB ref: https://next-auth.js.org/adapters/supabase

        API URL and Keys
        Go to the Settings page in the Dashboard.
        Click API in the sidebar.
        Find your API URL , anon , and service_role keys on this page.

- [x] templating dispatched emails, https://www.npmjs.com/package/handlebars, https://www.litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design

        # IMPORTANT, for html content over email use port 465 to serve html over TLS in smtp , port 587 wont work
        https://forum.gitlab.com/t/smtp-fail-to-send-email-due-to-ssl-wrong-version-number/33008/2

- [ ] welcome email for new user signup when they login directly via sign in email magic link next-auth events https://next-auth.js.org/configuration/events



============ Resources =============

- [init nextjs](https://next-auth.js.org/configuration/initialization#advanced-initialization)

https://next-auth.js.org/configuration/options

- Nextjs Auth https://next-auth.js.org/configuration/providers/oauth

- [magic email link sign in](https://next-auth.js.org/configuration/providers/email)

```

---

> 2. tweaks/signup-and-schema

```bash

- [ ] redirect user to settings page if they dont have username, phone number set yet as
this means that the user directly signed in via mail magic link or Oauth sign in and it created user in our DB.

- [ ] sort/patch/update schema for contact, cards, user

```

---

> 3. misc/patches

```bash

- [ ] make the data dynamic at frontend for all pages, pulling data from trpc-prisma-supabase and display it on frontend for each user.

```

---

> 4. setup/logging

```bash

- [ ] [logging & error & performance reports](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)

  [sentrynpm](https://www.npmjs.com/package/@sentry/nextjs)
  [sentrydocs](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

```