---
sidebar_position: 15
---

# Terminologies
## Application Programming Interface

**API:**  
An API, or Application Programming Interface, is a set of rules and tools that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable the integration of different software systems, allowing them to work together seamlessly.

**Rest API:**  
A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services. It uses standard HTTP methods (such as GET, POST, PUT, DELETE) and follows a stateless, resource-based architecture. REST APIs enable communication and data exchange between different software systems over the internet.

**Web Service**   
A web service is a software system designed to enable communication and data exchange between different applications over a network, typically the internet. It uses standard protocols such as HTTP or HTTPS to facilitate the exchange of structured data, often in the form of XML or JSON. Web services allow disparate systems to interact with each other, making it easier to integrate and share data between different software applications.

When an API follows the principles of REST and communicates over the internet using the HTTP/HTTPS protocol, it's commonly referred to as a RESTful web service."

It's worth noting that there are other types of web services that may not strictly adhere to REST principles, such as SOAP (Simple Object Access Protocol) web services. These can also use HTTP, but they have a different structure and set of conventions compared to RESTful services.

Example:
Weather API:

Description: An API that provides weather information based on location.
Endpoint: GET /weather?city=example
Response: JSON data containing temperature, humidity, and other weather details.

**XHR**   
XHR stands for "XMLHttpRequest," and it is a web technology that allows web browsers to make asynchronous requests to a web server. XMLHttpRequest is a part of the web browser's JavaScript API and is commonly used to fetch or send data to a server without requiring a full page reload.

Originally, XMLHttpRequest was designed for working with XML data, as the name suggests. However, over time, it has become a widely used mechanism for handling various types of data, including JSON and plain text. As a result, the term "XHR" is often used more broadly to refer to any kind of asynchronous HTTP request made by a web browser.

Developers use XHR to build more dynamic and interactive web applications by fetching data in the background and updating parts of a webpage without requiring a full page reload. With the advent of modern web technologies, such as the Fetch API, XHR is still relevant but has been largely replaced or supplemented by these newer, more powerful alternatives.

**Aggregator Website**   
An aggregator website is a platform or service that collects and displays information from various sources in a centralized location. It gathers data or content from multiple websites, applications, or feeds, and presents it to users in a unified and organized manner. Aggregator websites are commonly used to provide users with a convenient way to access diverse content, such as news articles, blog posts, product listings, or other types of information, without having to visit multiple individual sources. Examples of aggregator websites include news aggregators, job boards, and comparison shopping sites.

## Software Development Techniques

**DDD**

DDD is an approach to software development that emphasizes understanding and modeling the business domain. It provides a set of principles and patterns for designing complex software systems that reflect the real-world domain they are meant to serve.

DDD focuses on creating a shared understanding of the domain among developers and domain experts. It introduces concepts such as aggregates, entities, value objects, and bounded contexts to model the domain effectively.

DDD stands for Domain-Driven Design, and it is an approach to software development that focuses on creating a shared understanding of the domain within a development team and aligning the software design with the business domain. DDD was introduced by Eric Evans in his book "Domain-Driven Design: Tackling Complexity in the Heart of Software."

Key principles and concepts in Domain-Driven Design include:

- **Ubiquitous Language**: DDD encourages the use of a common language or "ubiquitous language" that is shared between domain experts (non-technical stakeholders) and developers. This helps in creating a shared understanding of the domain and its complexities.
- **Bounded Context**: The concept of bounded contexts involves defining explicit boundaries within which a particular model or set of terms is valid. Different parts of a system may have different models that are suitable for their specific contexts.
- **Entities and Value Objects**: DDD distinguishes between entities and value objects. Entities are objects with a distinct identity that runs through time and different states. Value objects, on the other hand, are objects that describe a characteristic of the domain but don't have a distinct identity.
- **Aggregates**: Aggregates are clusters of related entities and value objects treated as a single unit. They have a root, which is an entity that acts as the entry point to the aggregate, ensuring consistency and encapsulation.
- **Repositories**: Repositories provide a mechanism for accessing and persisting aggregates. They abstract away the details of data storage and retrieval.
- **Services**: DDD introduces the concept of services, which are stateless, domain-specific operations that don't naturally fit into entities or value objects.
- **Domain Events**: Domain events represent significant state changes within the system and are used to trigger reactions or processes.

Domain-Driven Design is particularly useful for complex software projects where understanding the business domain is crucial. It helps bridge the communication gap between technical and non-technical stakeholders, leading to better software design and implementation aligned with business goals.

**TDD (Test-Driven Development)**   
TDD is a software development methodology where tests are written before the actual code is implemented. The development cycle in TDD typically follows the pattern of writing a failing test, implementing the minimal code to make the test pass, and then refactoring the code as needed.
TDD helps ensure that the code meets the specified requirements and remains maintainable over time. It provides a continuous feedback loop that can catch issues early in the development process.

**BDD (Behavior-Driven Development)**   
BDD is an extension of TDD that focuses on collaboration between developers, testers, and non-technical stakeholders. BDD uses a natural language format for writing tests, making them more accessible to non-developers.
BDD scenarios are often written in a Given-When-Then format, describing the expected behavior of the system. BDD tools can then execute these scenarios and verify whether the system behaves as expected.

## CI/CD - Docker - GitHub Action - Cloud Platforms
**CI/CD**:   
CI/CD, or Continuous Integration and Continuous Delivery, is a set of practices in software development that automate the process of building, testing, and deploying code changes. Continuous Integration involves automatically integrating code changes from multiple contributors regularly, checking for errors early on. Continuous Delivery ensures that these integrated code changes are automatically and reliably delivered to production, making the software development and release process more efficient, consistent, and reliable.

**Continuous Delivery VS Continuous Deployment**:   
Continuous Delivery (CD): In Continuous Delivery, the automated process ensures that code changes are always in a deployable state. However, the deployment to production is not automatic. Human intervention is typically required to decide when and if to push the changes to the production environment.

Continuous Deployment (CD): Continuous Deployment takes the automation a step further. In this approach, every code change that passes automated tests is automatically deployed to the production environment without manual intervention. Continuous Deployment aims for a fully automated end-to-end process, minimizing the time between writing code and making it available to users.

In summary, Continuous Delivery automates the process up to the staging or pre-production environment, with a manual decision point for production deployment. Continuous Deployment extends this automation to automatically deploy changes to the production environment without manual intervention. The choice between the two depends on the organization's risk tolerance and the need for human oversight in the production release process.

**Continuous Testing:**    
Continuous testing is basically running a repeatable set of tests whenever we make a commit to the code repository.

Contineous Testing Challenges:

Some common challenges include:

Scalability issues - we do not want running end-to-end tests to be a bottleneck in the CI/CD pipeline. We desire fast execution and the ability to run tests in parallel. Selecting the right tool and framework is essential.
Test data management - creating and maintaining multiple dataset versions for different environments and tests is challenging.
Testing scope - as the product grows, so does the number of tests. Running tests may take hours, and so quick feedback isn't achieved. On the other hand, if you run only a subset of the test, then we may be compromising on the product quality. So choosing the right test and the right number of tests is essential.

**DevOps**:   
The term DevOps is a compound of "development" and "operations". - Microsoft

DevOps is the union of people, process & technology to continually provide value to customers.

Dev is used as a shorthand for developers and includes all the people involved in developing the product, so that includes QA engineers as well.

And Ops is a blanket term for system engineers, system administrators, operation staff, release engineers, DBAs, network engineers, security professionals and various other sub-disciplines.

**Docker**:    
Docker is a platform for developing, shipping, and running applications in containers - lightweight, portable workspaces isolated from each other and the host system. Key components include Docker daemon, client, registries, images, and containers. Benefits include faster delivery, scalable deployments, and higher density workloads.

Top 3 Key Points:

1. Containers package apps with dependencies to run lightweight, portable workspaces isolated from host and each other.

2. Client-server architecture with daemon doing heavy lifting of build, run, distribute containers.

3. Images are read-only templates for creating containers - build from Dockerfiles, stored in registries.

**Container Vs Image**:    
**Container:**
A container is a running instance of a Docker image. It encapsulates an application along with its dependencies, runtime, and system libraries in an isolated environment.
Containers provide a lightweight, portable, and consistent runtime environment, allowing applications to run consistently across different environments.
Containers are isolated from the host system and from other containers, ensuring that applications have a consistent environment regardless of the underlying infrastructure.

**Image:**
An image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.
Images serve as a template for creating containers. They are read-only and can be shared, stored, and versioned.
When you run a container, you are essentially starting an instance of the corresponding image, and any changes made to the running container (e.g., file modifications, new processes) are isolated to that specific instance.
In summary, an image is a static, unchangeable snapshot of an application and its dependencies, while a container is a running instance of that image with a writable layer on top, allowing it to be modified during runtime. Containers provide a lightweight and consistent runtime environment for applications, making them easy to deploy and manage across different environments.

**Package**:   
When you generate a package, it often refers to creating a container image. This container image is a portable and executable package that contains your application code, its dependencies, runtime, libraries, and other necessary components.

The process usually involves creating a Dockerfile that describes how to build the image. The Dockerfile includes instructions on copying files, installing dependencies, and configuring the runtime environment. When you build the image using a tool like Docker, it produces a package in the form of an immutable image.

Once you have the container image, you can deploy it by running instances of it, and those running instances are called containers. Containers are lightweight, isolated environments that execute your application in a consistent manner, regardless of the underlying infrastructure. They encapsulate the dependencies and runtime, providing a predictable environment for your application to run.

In summary, the container image is the packaged form of your application, and when you deploy and run it, you're creating containers from that image. Containers offer benefits such as consistency, portability, and scalability, making them a popular choice for deploying and managing applications in various environments.

**Kubernetes**:    
Kubernetes is a container orchestration platform that helps automate the deployment, scaling, and management of containerized applications.

**Ingress:**    
"Ingress" typically refers to Ingress Controllers and Ingress Resources in the context of Kubernetes. Ingress in Kubernetes provides HTTP and HTTPS routing to services based on rules defined in Ingress Resources.

Here's a breakdown of the key concepts:

Ingress Controller: An Ingress Controller is a component in the Kubernetes cluster that manages external access to services. It typically acts as a reverse proxy, handling external requests and directing them to the appropriate services within the cluster. In Azure Kubernetes Service (AKS), you might use an Ingress Controller like Nginx, Traefik, or another supported controller.

Ingress Resource: An Ingress Resource is a Kubernetes resource that defines how external HTTP/S traffic should be processed and routed to services within the cluster. It specifies rules for routing based on hostnames, paths, etc. The Ingress Controller uses these rules to configure the external access.

In the context of containerized applications on Microsoft Azure, you might use Ingress to expose your services to the internet, manage SSL termination, and route traffic based on defined rules.

For example, you could define an Ingress Resource that routes traffic based on the hostname or URL path to different services within your AKS cluster.

**Orchestration**:    
Orchestration: Imagine you have many containers running different parts of your application. Orchestration is like conducting an orchestra; it's the coordination and management of all these containers so they play in harmony.

**Jenkins**:    
Jenkins – From Wikipedia

Jenkins is an open-source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.

**GitHub Action**:    
GitHub Actions is a feature on the GitHub platform that helps automate various tasks in the software development process. It allows you to define workflows—sequences of steps or actions—that run automatically in response to events like code pushes, pull requests, or issue creations. These workflows can include tasks such as running tests, building and deploying applications, and performing other custom actions. GitHub Actions helps streamline and enhance the software development lifecycle by automating repetitive tasks, improving collaboration among team members, and ensuring consistent and reliable processes in your projects.

**GitHub Actions – From GitHub Blog**
GitHub Actions now makes it easier to automate how you build, test, and deploy your projects on any platform, including Linux, macOS, and Windows. Run your workflows in a container or in a virtual machine.

**What is a workflow?**
A workflow is a configurable automated process that will run one or more jobs.

**What is an event?**
An event is a specific activity in the repository that's triggerable for a run. And an event can also be triggered from outside the repository. For example, an API call.

**What is a job? What are steps?**
A job is a set of steps in a workflow that are executed on the same runner. So, each step is either a shell script that will be executed or an action that will be run.
And steps are always executed in order, but they can be dependent on each other.

**What is an action?**
An action is a custom application for the GitHub Action platform that performs a complex but frequently repeated task.
Actions are the building blocks that empower your workflow.
Actions are individual tasks that you can combine to empower the jobs.

**What is a runner?**
A runner is a server that runs your workflow whenever it's triggered, each runner can run a single job at the same time.
A runner is a virtual machine (or any computer with a supported operating system) that runs the steps in a job.
Workflows are defined as .yml or .yaml file that are store in .github/workflows

Other tasks possible with GitHub Actions:
* You can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

**Azure**:    
Azure is a cloud computing service provided by Microsoft for building, testing, deploying, and managing applications.

**Azure DevOps:**    
Azure DevOps is a suite of services provided by Azure to plan smarter, collaborate better, and ship faster.

Azure DevOps provides several tools that cover the entire application lifecycle and enables DevOps capabilities.

Hers are the services that are part of Azure DevOps:

Azure Boards - to plan and track work, code defects and issues using Kanban and Scrum methods
Azure Repos - for source control of your code using Git repositories or TFVC (Team Foundation Version Control)
Azure Pipelines - provide build and release services to support continuous integration and delivery of your applications
Azure Test Plans - provide several tools to perform manual and exploratory testing on the application
Azure Artifacts - allow creating, hosting, and sharing packages with your team. You can also use the artifacts in the CI/CD pipeline.

## ML & Generative AI
### Terminology Definitions

- **LLM**: A large language model is an algorithm that uses training data to recognize patterns and make predictions or decisions.
  
- **System Object**: System object holds anything that is generic, anything that controls how the model behaves.
  
- **Prompt Engineering**: Prompt engineering is the art and science of designing inputs for generative AI tools like GPT-4 to produce optimal output.
  
- **Embeddings**: Vectors representing the data.
  
- **Semantic Search**: Searching by meaning.
  
- **RAG - Retrieval Augmented Generation**: RAG refers to the LLM model pinging a document and pulling content out of that document and then using that content in its response.
  
- **ReAct**: Reasoning + Acting.
  
- **MLFlow**: MLflow is an open-source platform to manage the machine learning lifecycle, including experiment tracking, model management, and deployment. Key components are:
  - **Tracking**: Logs key metrics, parameters, models, and other artifacts when running ML code to monitor experiments.
  - **Model Registry**: Manages model versions.
  - **Deployments for LLMs**: Handles deployment processes.
  - **Evaluate**: Assesses model performance.
  - **Prompt Engineering UI**: Interface for designing and testing prompts.
  - **Recipes**: Standard workflows for common ML tasks.
  - **Projects**: Configurable standard format for organizing ML code to ensure consistency and reproducibility.

    - **MLflow Tracking**: Logs key metrics, parameters, models, and other artifacts when running ML code to monitor experiments.
    - **MLflow Projects**: Configurable standard format for organizing ML code to ensure consistency and reproducibility.
    - **MLflow Models**: Packages ML model files with their dependencies so they can be deployed on diverse platforms.
    - **mlflow run**: Executes an MLflow project locally or from a Git repo with given parameters.
    - **MLflow Projects**: A format for packaging data science code to run it in a reproducible and reusable way. They consist of code, its dependencies, and metadata.
    - **Projects**: Can specify details like name, environments, parameters, and entry points in an MLproject file. Otherwise, conventions are used to infer these.
    - **Projects**: Can be run locally or remotely using mlflow run. Additional parameters, arguments, and flags can configure the runs.
    - **MLflow Projects**: Make iterating quickly easier. They also enable constructing multi-step workflows by calling mlflow.projects.run() in a program.
    - **Use cases**: Include modularizing code, hyperparameter tuning, cross-validation, and packaging existing code.
  
## Software Architecture
**DRY:** The DRY (don't repeat yourself) principle is a best practice in software development that recommends software engineers to do something once, and only once.