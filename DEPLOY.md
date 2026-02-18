# Deploying Aigenvo to Coolify

This guide explains how to deploy the Aigenvo WordPress site to your self-hosted Coolify instance.

## Prerequisites

- A running Coolify instance.
- This repository connected to your Coolify source (GitHub/GitLab/etc).

## Step-by-Step Deployment

1.  **Create a New Service**
    - Go to your Coolify dashboard.
    - Select your Project and Environment.
    - Click **+ New Resource**.
    - Select **Git Repository** (or **Public Repository** if open source).
    - Choose this repository.

2.  **Configuration**
    - **Build Pack**: select `Docker Compose`.
    - **Docker Compose File**: By default Coolify looks for `docker-compose.yml`. You must change this to `docker-compose.prod.yml`.
      - *Note: If Coolify strictly requires `docker-compose.yml`, you may need to rename it or copy the contents of `prod` into the main file in the UI editor.*
    - **Base Directory**: `/` (default).

3.  **Environment Variables**
    - Go to the **Environment Variables** tab in Coolify.
    - Add the following keys and your secure values:

    ```env
    DB_NAME=aigenvo
    DB_USER=aigenvo_user
    DB_PASSWORD=your_secure_password
    DB_ROOT_PASSWORD=your_secure_root_password
    WP_URL=https://your-coolify-domain.com
    ```

    > **Important**: `WP_URL` must match the domain you configure in Coolify completely (including `https://`).

4.  **Domains**
    - Go to the **Settings** or **General** tab.
    - Set your **Domains** (e.g., `https://aigenvo.com`).
    - Save.

5.  **Deploy**
    - Click **Deploy**.
    - Watch the logs. The `db` service should start first, followed by `wordpress`.

## Persistence

- **Database**: Stored in the `db_data` volume. Configuration survives restarts.
- **Uploads**: Images and media are stored in the `wordpress_uploads` volume.
- **Plugins**: Plugins installed via the WP Admin dashboard are stored in `wordpress_plugins`.
- **Themes**: The `aigenvo-theme` is mounted from the Git repository (`./wp-content/themes`).
  - **Updates**: To update the theme, push changes to Git and click "Redeploy" in Coolify.

## Troubleshooting

- **Database Connection Error**: Check that `DB_PASSWORD` matches in both `db` and `wordpress` variables.
- **Theme Not Showing**: Ensure the directory structure in Git matches `./wp-content/themes`.
- **Permissions**: If uploads fail, you may need to run a command in the container to fix ownership: `chown -R www-data:www-data /var/www/html/wp-content/uploads`.
