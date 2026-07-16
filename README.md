# Mini API Gateway

A production-inspired API Gateway built using **Node.js** and **Express** to demonstrate core backend architecture concepts such as reverse proxy routing, centralized authentication, rate limiting, fault tolerance, and observability.

---

## 🚀 Features

### ✅ Completed

- Reverse Proxy Routing
- Multiple Microservices
- API Gateway

### 🚧 In Progress

- JWT Authentication
- Redis Rate Limiting
- Circuit Breaker
- Logging
- Health Endpoint
- Metrics Endpoint
- Docker Compose
- GitHub Actions CI
- Load Testing

---

## 🏗️ Architecture

```
                Client
                   |
                   |
            API Gateway
           (Port 3000)
             /      \
            /        \
 User Service     Product Service
   (4001)             (4002)
```

---

## Tech Stack

- Node.js
- Express
- http-proxy-middleware

---

## Folder Structure

```
mini-api-gateway
│
├── gateway
├── user-service
├── product-service
```

---

## Progress

- ✅ Phase 0 — Setup
- ✅ Phase 1 — Reverse Proxy
- ⏳ Phase 2 — JWT Authentication
- ⏳ Phase 3 — Rate Limiting
- ⏳ Phase 4 — Circuit Breaker
- ⏳ Phase 5 — Observability
- ⏳ Phase 6 — Docker & CI

---

## Author

Ritesh Puri