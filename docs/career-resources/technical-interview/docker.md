---
sidebar_position: 3
---

# Docker

Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-sufficient units that encapsulate an application and its dependencies, ensuring consistent behavior across different environments. Docker provides tools and a runtime environment for building, distributing, and running these containers.

Key components and concepts of Docker include:

1. **Container:** A container is a standalone, executable software package that includes everything needed to run an application, including the code, runtime, libraries, and system tools. Containers are isolated from each other and the underlying infrastructure, allowing them to run consistently across various environments.

2. **Docker Engine:** The Docker Engine is the core runtime component responsible for building, running, and managing containers. It includes a server daemon, a REST API for interacting with the engine, and a command-line interface (CLI) for user interactions.

3. **Docker Image:** An image is a lightweight, read-only template used to create containers. Images are built from a set of instructions defined in a Dockerfile, which specifies the base image, application code, dependencies, and configuration. Images can be versioned and shared through container registries.

4. **Dockerfile:** A Dockerfile is a script containing instructions for building a Docker image. It specifies the base image, sets up the environment, copies files, and configures the container. Dockerfiles provide a repeatable and automated way to build consistent images.

5. **Container Registry:** A container registry is a repository for storing and distributing Docker images. Popular container registries include Docker Hub, Google Container Registry, and Amazon Elastic Container Registry (ECR). Users can push and pull images from these registries to share and distribute their containers.

6. **Docker Compose:** Docker Compose is a tool for defining and running multi-container applications. It uses a YAML file to describe the services, networks, and volumes required for an application, allowing users to define complex architectures and manage multiple containers as a single application.

7. **Orchestration:** Docker can be integrated with orchestration tools like Kubernetes and Docker Swarm to manage and scale containerized applications across a cluster of machines. Orchestration tools automate tasks such as deployment, scaling, load balancing, and service discovery.

Benefits of using Docker include:

- **Portability:** Containers can run consistently across different environments, from development to production, reducing the "it works on my machine" problem.

- **Isolation:** Containers encapsulate applications and dependencies, providing isolation from the underlying system and other containers.

- **Efficiency:** Containers share the host operating system's kernel and use resources more efficiently than virtual machines.

- **Rapid Deployment:** Containers can be started quickly, enabling rapid application deployment and scaling.

Docker has become a widely adopted technology in the software development and DevOps communities, streamlining the application lifecycle and improving collaboration between development and operations teams.

# **Containers vs. virtual machines**

A [virtual machine](https://www.cloudflare.com/learning/cloud/what-is-a-virtual-machine/) is a piece of software that imitates a complete computer system. It is isolated from the rest of the machine that hosts it and behaves as if it were the only operating system on it, including having its own kernel. Virtual machines are another common way of hosting multiple environments on one server, but they use a lot more processing power than containers.

# Docker Image Vs Docker Container:

Docker images are instructions, while Docker containers are templates. Docker containers are the instances of Docker images, either running or stopped.

## Serverless

Serverless applications are broken up into functions, and hosted by a third-party vendor who charges the application developer only based on the amount of time each function runs.

Serverless computing is a method of providing backend services on an as-used basis. Servers are still used, but a company that gets backend services from a serverless vendor is charged based on usage, not a fixed amount of bandwidth or number of servers.

## Serverless Vs Containers

Serverless computing and containers are both architectures that reduce overhead for cloud-hosted web applications, but they differ in several important ways. Containers are more lightweight than virtual machines, but serverless deployments are even more lightweight and scale more easily than container-based architectures.

'Serverless' computing actually runs on servers, but it is up to the serverless vendor to provision server space as it is needed by the application; no specific machines are assigned for a given function or application. On the other hand, each container lives on one machine at a time and uses the operating system of that machine, though they can be moved easily to a different machine if desired.

# Common Docker Commands:
Docker provides a rich set of commands to manage containers, images, volumes, networks, and other aspects of Docker environments. Here are some common Docker commands:

1. **docker run**: This command creates and starts a container from an image.
   Example: `docker run nginx`

2. **docker ps**: Lists running containers.
   Example: `docker ps`

3. **docker ps -a**: Lists all containers, including stopped ones.
   Example: `docker ps -a`

4. **docker stop**: Stops a running container.
   Example: `docker stop <container_id or container_name>`

5. **docker start**: Starts a stopped container.
   Example: `docker start <container_id or container_name>`

6. **docker restart**: Restarts a running or stopped container.
   Example: `docker restart <container_id or container_name>`

7. **docker rm**: Removes one or more containers.
   Example: `docker rm <container_id or container_name>`

8. **docker rmi**: Removes one or more images.
   Example: `docker rmi <image_id or image_name>`

9. **docker pull**: Pulls an image from a registry.
   Example: `docker pull nginx`

10. **docker build**: Builds an image from a Dockerfile.
    Example: `docker build -t my_image .`

    Breaking down this command: The `-t` flag tags your image with a name. (my_image in this case). And the `.` lets Docker know where it can find the Dockerfile.

12. **docker exec**: Runs a command in a running container.
    Example: `docker exec -it <container_id or container_name> bash`

13. **docker logs**: Fetches logs of a container.
    Example: `docker logs <container_id or container_name>`

14. **docker network ls**: Lists Docker networks.
    Example: `docker network ls`

15. **docker volume ls**: Lists Docker volumes.
    Example: `docker volume ls`

16. **docker-compose**: Manages multi-container Docker applications. (Requires Docker Compose)
    Example: `docker-compose up`

These are just a few examples of commonly used Docker commands. Docker provides a wide range of commands and options to manage various aspects of containers and images in a Docker environment. You can use `docker --help` to get a list of all available commands or refer to the Docker documentation for more detailed information.

# More Question:

1. How could Docker improve your team's software development workflow?

2. What challenges could Docker help solve when collaborating across environments? 

3. How might containers improve compute resource utilization over VMs?

4. What role do registries play in enabling Docker's benefits?

5. How could you use Docker for both dev and production deployments?

# More Resources:
* https://github.com/arkhangelsk/Learning-Grid/wiki/Docker-:-The-Basics

