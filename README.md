# AiGenvo — Next.js + Headless WordPress

> **"We Don't Sell Systems. We Sell Results."**

This is the full-stack repository for the AiGenvo website. It features a Next.js 14 frontend, a Headless WordPress backend (served via Docker), and a complete local development environment.

## 🚀 Teach Stack

- **Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS v4, Framer Motion, Three.js
- **Backend:** WordPress (Headless), WPGraphQL, ACF
- **Database:** MariaDB
- **Cache:** Redis
- **Infrastructure:** Docker Compose, Nginx

## 🛠️ Local Development Setup

### 1. Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Git

### 2. Quick Start
```bash
# Clone the repository
git clone https://github.com/your-org/aigenvo.git
cd aigenvo

# Frontend Setup
cd frontend
npm install
cd ..

# Environment Configuration
cp .env.example .env
# Edit .env if needed (default values work for local dev)

# Start Backend Services (WordPress, DB, Redis, Nginx)
docker compose up -d

# Start Frontend (Dev Mode)
cd frontend
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).
The WordPress Admin will be available at [http://localhost:8080/wp-admin](http://localhost:8080/wp-admin).

### 3. WordPress Configuration (First Run)
1. Go to [http://localhost:8080/wp-admin](http://localhost:8080/wp-admin) and complete the installation.
2. Activate the following plugins (already downloaded to `wp-content/plugins`):
   - **WPGraphQL**
   - **Advanced Custom Fields**
   - **WPGraphQL for ACF**
   - **Yoast SEO**
   - **Redis Object Cache**
3. **Configure Redis:**
   - Go to Settings > Redis and click "Enable Object Cache".
4. **Configure Permalinks:**
   - Go to Settings > Permalinks and set to "Post name".
5. **Set Homepage:**
   - Create a page "Home" and set it as static homepage in Settings > Reading.
6. **ACF Setup:**
   - Import field groups (if available) or create "Services", "Industries", "FAQ" types.
   - Ensure "Show in GraphQL" is enabled for all field groups.

## 🚢 Deployment (Coolify)

This project is designed to be deployed on Coolify using Docker Compose.

1. **Create a new Service** in Coolify -> Docker Compose.
2. **Configuration:**
   - Copy the contents of `docker-compose.prod.yml` (and merge with `docker-compose.yml` if needed, or use the provided production structure).
   - Ensure volumes `wordpress_data`, `mariadb_data`, `redis_data` are persistent.
3. **Environment Variables:**
   - Add all variables from `.env.example` to Coolify's Environment Variables section.
   - **Critical:** Set `NEXT_PUBLIC_WORDPRESS_API_URL` to your production WordPress URL (e.g., `https://api.aigenvo.com/graphql`).
4. **Builds:**
   - Coolify will build the `nextjs` service using the `frontend/Dockerfile`.
   - WordPress will use the standard image or build from `wordpress/Dockerfile` if configured.

## 📂 Project Structure

```
aigenvo/
├── frontend/           # Next.js Application
│   ├── app/            # App Router pages
│   ├── components/     # UI, Sections, 3D
│   ├── lib/            # Utilities & GraphQL
│   └── public/         # Static assets
├── wordpress/          # WordPress Configuration
│   ├── wp-content/     # Themes & Plugins (Volume mapped)
│   └── Dockerfile      # Custom WP image
├── nginx/              # Nginx Config for Reverse Proxy
├── docker-compose.yml  # Dev Docker Compose
└── setup_plugins.sh    # Script to download WP plugins
```

## 🎨 Design System
- **Colors:** Dark Luxury (`#080A0F`), Electric Cyan (`#00D4FF`), Muted Gold (`#C9A84C`)
- **Fonts:** Syne (Display), Outfit (Body), JetBrains Mono (Code)

---
© AiGenvo. All rights reserved.
