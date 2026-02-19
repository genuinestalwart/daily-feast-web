# Daily Feast | Web

> Production-ready frontend for a modern food delivery platform, focused on performance, accessibility, and seamless user experience.

## Technologies Used

- Nuxt
- TypeScript
- Auth0

## Run Locally

1. Clone the project and install dependencies:

    ```bash
    git clone https://github.com/genuinestalwart/daily-feast-web.git
    cd daily-feast-web
    npm i
    ```

2. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    # Set the environment to "development" or "production"
    NODE_ENV="development"
    NUXT_AUTH0_APP_BASE_URL="your_app_base_url" # localhost and hosted frontend url
    NUXT_AUTH0_CLIENT_ID="your_auth0_client_id"
    NUXT_AUTH0_CLIENT_SECRET="your_auth0_client_secret"
    NUXT_AUTH0_DOMAIN="your_auth0_domain"
    NUXT_AUTH0_IDENTIFIER="your_auth0_identifier"
    NUXT_AUTH0_SESSION_SECRET="your_auth0_session_secret" # create your own
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Important Commands

- Customize the `.prettierrc` file and run this to apply changes:

    ```bash
    npm run format
    ```
