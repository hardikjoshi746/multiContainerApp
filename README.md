# Multi-Container Application

This repository hosts a robust multi-container application that demonstrates scalable deployment using Docker and AWS cloud services. The application integrates multiple services such as Redis, Postgres, and others, showcasing modern DevOps practices and CI/CD automation.

## Overview
The project is designed to highlight the power of containerization and cloud deployment. It is a scalable, fault-tolerant web application with automated build and deployment processes, leveraging AWS services for optimal performance and reliability.

## Key Features
- **Multi-Container Architecture**: Dockerized services, including application server, Redis, and Postgres.
- **CI/CD Pipeline**: Fully automated using Travis CI for continuous integration and deployment.
- **Cloud Deployment**: Hosted on AWS Elastic Beanstalk with AWS Elastic Cache and RDS Postgres for efficient caching and database management.
- **Scalability**: Easily scalable with Elastic Beanstalk's built-in configurations.
- **High Performance**: Redis caching ensures quick data access and improved response times.

## Tech Stack
- **Frontend**: React 
- **Backend**: Node.js/Express
- **Database**: PostgreSQL (RDS Postgres on AWS)
- **Caching**: Redis (AWS Elastic Cache)
- **Containerization**: Docker
- **CI/CD**: Travis CI
- **Cloud Services**: AWS Elastic Beanstalk, AWS Elastic Cache, RDS Postgres

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Docker
- AWS CLI (configured with proper credentials)
- Travis CI account (for CI/CD configuration)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/hardikjoshi746/multiContainerApp.git
   cd multiContainerApp
   ```
2. Build Docker containers:
   ```bash
   docker-compose build
   ```
3. Start the application:
   ```bash
   docker-compose up
   ```
4. Access the application locally at `http://localhost:3000` (or another port specified in the `docker-compose.yml`).

## Deployment
The application is configured for deployment on AWS using Elastic Beanstalk:
1. Create an Elastic Beanstalk application and environment.
2. Push the Dockerized application to AWS Elastic Beanstalk.
3. Set up AWS Elastic Cache for Redis and RDS Postgres as per the environment's needs.

## CI/CD Pipeline
The repository uses Travis CI for CI/CD:
1. Configure `.travis.yml` for build, test, and deployment stages.
2. Ensure Travis CI is linked to your GitHub repository.
3. Monitor automated builds and deployments via the Travis CI dashboard.
