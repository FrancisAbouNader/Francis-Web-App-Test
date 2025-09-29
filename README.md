Registration App

This project consists of a Laravel backend and a React frontend for handling user registrations.
Both projects are stored in a single GitHub repository for easy setup and management.

Backend (Laravel)
What was done

Implemented the full registration feature as described in the documentation.

Configured .env (only .env.example is committed for best practices).

Used MySQL as the database.

Adjusted the APP_URL to make image paths work properly (Valet is used in development).

Setup Instructions

Duplicate the .env.example file and rename it to .env.

Update the .env file with your database credentials and correct APP_URL.

Run the following commands:

composer install
php artisan key:generate
php artisan migrate
php artisan serve


Make sure CORS is properly configured if the frontend is on a different domain.

Frontend (React)
What was done

Created a RegistrationForm page.

Implemented logic using a custom useRegistration hook.

Used Yup for form validation.

Used Axios for API calls.

Added Tailwind CSS for basic styling.

.env.example is included — update it with your backend URL for API calls.

Setup Instructions

Duplicate the .env.example file and rename it to .env.

Add your backend URL in the .env file, for example:

VITE_API_URL=http://localhost:8000


Install dependencies and start the development server:

npm install
npm run dev

Notes

The backend and frontend are in one repository.

You only need to adjust the .env files for both projects to get started.

The design is intentionally simple for clarity and testing.
