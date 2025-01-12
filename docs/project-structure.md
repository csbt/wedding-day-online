# Project Structure

This project contains two primary components: **frontend** and **backend**. Both are organized to ensure scalability and maintainability.

## Frontend Structure

- **frontend/**: Contains all Next.js-based client-side code.
  - **app/**: Represents the Next.js routing system (replacing `pages/`).
  - **src/**: Contains the main source code.
    - **components/**: Reusable UI components such as buttons, modals, and cards.
    - **features/**: State management and feature-based modules (e.g., authentication, wedding details).
    - **hooks/**: Custom React hooks for reusable logic.
    - **utils/**: Utility functions such as formatters and API handlers.
    - **styles/**: Global and component-specific styles, using TailwindCSS.
    - **public/**: Static assets like images, fonts, and icons.
  - **lib/**: Shadcn UI components and utilities.

## Backend Structure

- **backend/**: NestJS server code.
  - **entities/**: Contains TypeORM database entities for PostgreSQL. This folder is placed outside of `src` to facilitate migration configuration and ensure ease of database management.
  - **config/**: Configuration files for environment variables, database, and third-party services.
  - **src/**
    - **modules/**: Feature-based modules, with each module containing its controllers, services, and other related logic (e.g., `AuthModule`, `UserModule`).
    - **middlewares/**: Custom Express middleware for validation or logging.
    - **main.ts**: Application entry point, bootstrapping the NestJS server.

## Documentation and Configuration

- **docs/**: Documentation files for developers.

## Example Files

- **frontend/app/page.tsx**: The main landing page for the application.
- **backend/src/modules/user/user.controller.ts**: Handles user-related API requests.
- **backend/entities/user.entity.ts**: Represents the User table in PostgreSQL.

This structure is designed to maximize reusability and maintain clear separation of concerns across the project.
