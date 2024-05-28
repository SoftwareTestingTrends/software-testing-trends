---
sidebar_position: 2
title: 'Understanding Web Architecture'
metaTitle: 'Understanding Web Architecture'
metaDescription: 'Understanding Web Architecture'
---

## HTTPs, Certificate Authority, Self-signed Certificate

- [How does HTTPS works? What's a CA? What's a self-signed Certificate?](https://www.youtube.com/watch?v=T4Df5_cojAs)

## What is a Web Server?

### Resources:

- [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [What Is a Web Server?](https://www.nginx.com/resources/glossary/web-server/)

## Serverless

- [What is serverless computing?](https://www.cloudflare.com/learning/serverless/what-is-serverless/)
- [Serverless computing vs. containers](https://www.cloudflare.com/learning/serverless/serverless-vs-containers/)

## Microservices

### Monolith

- Monolith - Everything is togather; Individual components are hard to upgrade or scale
- Codebase lives on the same server & usually in same repository.

### Non-Monolith (MicroService)

- Isolated components that are divided by responsibility
- Independent scaling of the components
- Standardized interface (API) so any service can use it
- Can be independently developed by different teams

### Resources:
- [NewRelic: What is microservices?](https://blog.newrelic.com/technology/microservices-what-they-are-why-to-use-them/)

## Communication & Firewalls

### Communication

- Services usually have one, or a few ports open
- Usually they restrict who can talk to them
- Encryption is not necessary INSIDE the cluster

### Firewall

- Firewall filters for:
  - Request origin (domain or IP)
  - Port used
  - content (exploits, sql injection)
  - Frequency (DDoS / throttling)

### Resources:
- [Cloudflare: What is a Firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)

## Caching

### Types of caching:

#### Client Side

- Browser cache
- Service worker/ Single Page Apps (SPAs)

#### Network

- DNS cache
- Content Delivery Network
- HTTP cache (Varnish)

#### Server Cache

- Object cache
- Database cache

### Resources:

- [Cloudflare documentation on caching](https://www.cloudflare.com/learning/cdn/what-is-caching/)
- [AWS Documentation on caching](https://aws.amazon.com/caching/)
