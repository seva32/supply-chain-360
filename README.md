# SupplyChain360

## Tech Stack

Frontend: React, Vite, Zustand.

3D Library: Three.js with React Three Fiber.

Charts: Chart.js for data visualizations.

Backend: NestJS with WebSockets for real-time updates.

Database: PostgreSQL with Prisma.

Authentication: OTP and JWT auth, RBAC.

Deployment: Docker, Nginx, and Cloudflare for security.

## Features

1. Interactive Dashboards

Real-time shipment tracking.

Predictive analytics for delivery times.

Performance insights with Chart.js (bar, line, and pie charts).

2. 3D Supply Chain Visualization

A 3D globe showing live shipment routes (React Three Fiber).

Warehouse and fleet management with animated 3D models.

Interactive 3D product inventory for logistics optimization.

3. Real-Time Updates

WebSockets for live shipment updates.

Alerts when shipments are delayed.

4. User Management

Roles & permissions (Admin, Manager, Viewer).

Secure authentication.

5. Reports & Exports

Generate PDF & Excel reports for business insights.

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

## C/P

```bash
docker compose --f docker-compose.dev.yml up -d
yarn run prisma:migrate --name init_supply_chain
export $(grep -v '^#' .env.local | xargs) && docker exec -it "$POSTGRES_HOST_DEV" psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"
```

# Notes

In windows work in WSL only.