# DevOps Project — Ayushi Tiwari

## Live URLs
- Application: http://13.206.248.150:3000
- Prometheus: http://13.206.248.150:9090
- Grafana: http://13.206.248.150:3001

## Architecture
Node.js App → Docker → AWS EC2 → MongoDB
Prometheus + Grafana Monitoring Stack

## Features Implemented
✅ Node.js Application with REST APIs
✅ Dockerized Application
✅ CI/CD Pipeline — GitHub Actions
✅ MongoDB deployed on AWS EC2
✅ Automated Backup — Daily cron job
✅ Prometheus Monitoring — All targets UP
✅ Grafana Dashboards — CPU, Memory, Disk
✅ Email Alerting — Configured and tested

## Tech Stack
- Node.js, Express.js
- MongoDB
- Docker
- GitHub Actions
- AWS EC2
- Prometheus
- Grafana

## CI/CD Pipeline
Push to main → Tests run → Docker build → Deploy

## Monitoring
- CPU Usage Dashboard
- Memory Usage Dashboard  
- Disk Usage Dashboard
- Email alerts on threshold breach

## Setup Instructions
1. Clone repo
2. npm install
3. Configure .env
4. docker-compose up --build
