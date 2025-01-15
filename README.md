# Shortify - URL Shortener

Shortify is a full-stack web application that allows users to shorten long URLs, track their performance, and customize them for easy sharing. Built using **Spring Boot** for the backend and **React** for the frontend, Shortify provides a seamless and intuitive experience for users to manage their links.

## Features

- **URL Shortening**: Easily shorten long URLs with just a click.
- **Analytics Dashboard**: Monitor link performance with detailed statistics like clicks, geographical data, and referral sources.
- **Customizable Links**: Customize shortened URLs to make them more memorable and branded.
- **High Availability**: Fast and reliable URL redirects with minimal downtime.
- **Secure**: All shortened URLs are protected with advanced encryption.

## Technologies

- **Backend**: Spring Boot 3, Java 21, Spring JPA, PostgreSQL
- **Frontend**: React, Tailwind CSS, React Router, React Icons
- **Database**: PostgreSQL
- **Deployment**: Docker (for containerization), Netlify (for hosting)
- **API Documentation**: Swagger (for backend APIs)

## Prerequisites

- JDK 21 or higher for running the Spring Boot backend.
- Node.js and npm/yarn for building and running the React frontend.
- PostgreSQL database for local or cloud-based deployment.
- Docker (optional, for containerized environment).

## Installation

### Backend (Spring Boot)

1. Clone the repository:

   ```bash
   git clone https://github.com/sksangam/url-shortner.git
   cd url-shortner/backend
   ```

2. Configure the database connection in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/shortify
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Build and run the application:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the backend API URL in .env:

   ```bash
   REACT_APP_API_URL=http://localhost:8080/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```
