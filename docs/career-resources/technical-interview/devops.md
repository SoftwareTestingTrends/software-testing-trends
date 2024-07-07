---
sidebar_position: 3
---

# DevOps

## What is DevOps Culture?
* DevOps = Development + Operations. A practice that aims at merging development, qa and operations (deployment & integration) into a single, continuous set of processes and continuous delivery approaches.
* A close, collaborative working relationship between everyone involved in software development lifecycle.

## **Benefits of DevOps:**

- Reduce the time to market for new features
- Increase the overall quality of software
- Significantly reduce your software development costs

## **What is Continuous Integration?**

- CI = Code Commit -> Build & Test

"Continuous Integration (CI) is a software development practice where members of a team integrate their work frequently; usually each person integrates at least daily - leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible".

## **CI Components:**

- Version control system
- Automated build and unit test by an independent continuous integration server.
- Fast Feedback to allow developers to take immediate action if change breaks the build
- Team agreement on working practices

## **What is Continuous Delivery?**

- Contineous Delivery = CI + Acceptance Testing + Manual deployment to production
- Automates application delivery process
- It gives you the capability to deploy to production frequently
- Software is deployable throughout its lifecycle
- Fast, automated feedback on the production readiness
- Contineous Delivery does not necessarily mean that you are automating the deployment (e.g. approval process)

According to Martin Fowler, who coined the term Continuous Delivery,

> "Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

## **What is Continuous Deployment?**

- Contineous Deployment = Contineous Delivery + Automated deployment to production
- An automated way of deploying your releases to production
- Requires continuous delivery to perform automated deployment
- e.g. Companies like Netflix, Amazon, Google, and Facebook

## **What is Continuous Testing?**

### **Why Continuous Testing?**

- Better scheduling of tests
- Test data/results availabe to the team
- Easier for developer to test their code

### DevOps Testing Strategy
1. Define Goals - Figure out which tests to automate? Why?
2. Planning a test Approach - Decide on testing methods, scope and responsibilities.
3. Select Test Automation Framework - Detailed guidelines to be followed while writing and running tests.
4. Select your tools - Right tool which is aligned with team outcome.
5. Create and run the tests - write test templates which can be reused.
6. Maintain the scripts - Define the purpose of scripts to be reused.

### Which DevOps practices are most helpful in testing?
* Leverage test automation: In a DevOps environment, developers frequently merge code to a central repository. This means that the code updates continuously through continuous integration (CI). To prevent the risk of errors, you have to continuously test the code through different types of tests, including:
  * Unit tests
  * Integration tests 
  * Functional tests
  * Acceptance tests
* Select the right testing tool
* Track performance with metrics
You can track key metrics such as:
  * No. of tests passed vs failed
  * customer satisfaction index
  * Number of bugs identified
  * Time taken for release
  * Execution time of the automation suite
* Maintain proper documentation
  * Quality management plans
  * Test summary reports
  * Test case specifications
  * Risk assessment reports
  * Regression test reports
 
## Which DEvOps principles are most helpful?
Several DevOps principles are instrumental in creating efficient and collaborative development and operations environments. Some of the most helpful DevOps principles include:

1. **Automation:** Automate repetitive tasks, such as testing, deployment, and configuration management, to improve efficiency, reduce errors, and free up time for teams to focus on higher-value activities.

2. **Continuous Integration (CI):** Integrate code changes frequently into a shared repository, allowing for early detection of integration issues and promoting collaboration among team members.

3. **Continuous Delivery (CD):** Continuously deliver code to production or staging environments, ensuring that software can be released quickly, reliably, and with minimal manual intervention.

4. **Infrastructure as Code (IaC):** Manage infrastructure configurations through code, enabling consistent and repeatable deployments, easier scalability, and version control for infrastructure changes.

5. **Monitoring and Logging:** Implement robust monitoring and logging practices to gain insights into system performance, identify issues proactively, and facilitate troubleshooting and optimization efforts.

6. **Collaboration and Communication:** Foster a culture of collaboration and open communication between development, operations, and other stakeholders, promoting transparency, shared goals, and collective responsibility for software delivery and maintenance.

7. **Feedback Loops:** Establish feedback loops throughout the development and operations processes, gathering input from users, stakeholders, and automated monitoring tools to inform continuous improvement efforts.

8. **Security Practices:** Integrate security measures throughout the DevOps lifecycle, including code scanning, vulnerability assessments, and secure configuration management, to enhance the overall security posture of applications and infrastructure.

By embracing these DevOps principles, organizations can streamline workflows, accelerate delivery cycles, improve quality, and enhance collaboration across teams, ultimately driving greater agility and innovation in software development and operations.

## What are the DevOps Principles for good test automation?
* Test Automation should give quick and early feedback about your quality of work.
* Tests should generate consistent, deterministic and repetitive results provided same conditions for different test runs.* 
* Tests shouldn't generate false positives.
* Small number of automated and reliable test cases are better than high number of non-automated, unreliabletest cases.
* Make automation tests easy to understand, document and maintain.
* Keep your automated test suite independent from your development environment.

## What is the objective of Continuous Test Automation?
The objective of Continuous Test Automation is to integrate automated testing seamlessly into the software development and delivery pipeline, enabling frequent and reliable testing of applications throughout their lifecycle. Continuous Test Automation aims to achieve several key objectives:

1. **Early Detection of Issues:** By automating tests, software teams can detect defects and issues early in the development process, minimizing the cost and effort required for fixing bugs later in the lifecycle.

2. **Faster Feedback Loop:** Automated tests provide rapid feedback to developers about the quality and functionality of their code changes, allowing them to iterate quickly and make improvements without delays.

3. **Regression Testing:** Continuous Test Automation facilitates automated regression testing, ensuring that new code changes do not introduce regressions or break existing functionalities.

4. **Consistent Testing:** Automated tests ensure consistent and repeatable testing procedures, reducing human errors and variability in test results.

5. **Increased Test Coverage:** Automation enables comprehensive test coverage across various aspects of the application, including functional, performance, security, and compatibility testing.

6. **Support for Continuous Integration/Continuous Delivery (CI/CD):** Continuous Test Automation integrates seamlessly with CI/CD pipelines, enabling automated testing of each code commit or build, thereby supporting continuous integration, delivery, and deployment practices.

7. **Efficiency and Cost Savings:** Automated tests run faster and more efficiently than manual tests, leading to time and cost savings in the testing process.

8. **Facilitates Agile Practices:** Continuous Test Automation aligns with Agile development methodologies by enabling rapid and iterative testing cycles, promoting collaboration between development and testing teams, and supporting frequent releases.

Overall, the objective of Continuous Test Automation is to enhance the speed, quality, and reliability of software delivery by automating testing processes and integrating them into the DevOps and CI/CD workflows.

### What does the testing in DevOps environment should look like?

Testing in a DevOps environment should be integrated seamlessly into the development and operations workflows, aligning with the principles of agility, collaboration, and automation. Here are key aspects of what testing in a DevOps environment should look like:

1. **Shift-Left Testing:** Start testing early in the development cycle, often referred to as "shift-left" testing. This involves involving testers and quality assurance (QA) professionals from the initial stages of design and development to identify and address issues proactively.

2. **Continuous Testing:** Implement continuous testing practices that automate testing throughout the development lifecycle, from code commits to deployment. This includes unit testing, integration testing, regression testing, performance testing, and security testing.

3. **Automated Testing:** Leverage automation tools and frameworks for testing to ensure efficiency, repeatability, and reliability of tests. Automated tests should be integrated into the continuous integration/continuous delivery (CI/CD) pipeline to provide rapid feedback on code changes.

4. **Collaboration:** Foster collaboration between development, testing, and operations teams to ensure shared goals, responsibilities, and accountability for software quality. Encourage cross-functional teams where developers and testers work closely together to understand requirements, design tests, and resolve issues collaboratively.

5. **Test Environment Management:** Maintain well-managed and consistent test environments that closely mirror production environments. Use tools and infrastructure as code (IaC) practices to automate the provisioning and configuration of test environments, ensuring consistency and reproducibility of test results.

6. **Feedback Loops:** Establish feedback loops between testing and development teams to provide timely insights into test results, defects, and quality metrics. Use feedback to drive continuous improvement in both testing and development processes.

7. **Performance and Scalability Testing:** Conduct performance testing to assess the scalability, reliability, and responsiveness of applications under various load conditions. Use performance testing tools and techniques to identify and address performance bottlenecks early in the development cycle.

8. **Security Testing:** Integrate security testing practices, such as static code analysis, dynamic application security testing (DAST), and penetration testing, into the DevOps pipeline to identify and mitigate security vulnerabilities throughout the development lifecycle.

9. **Monitoring and Observability:** Implement monitoring and observability tools to track application performance, availability, and reliability in real time. Use monitoring data to identify issues, prioritize testing efforts, and optimize system performance.

In summary:
* Testing should be continuous and automated process that enables continuous and faster delivery of software.
* Testing should span every stage of the software development lifecycle (SDLC)
* Each step of the SDLC involves different forms of testing. This minimizes backtracking in the case that you've detected an error.
* Testing should no longer the responsibility of one particular team. Shared testing responsibilities allow everyone to understand the impacts behind each change.
* Shift left pushes the testing to left, in the earlier stages of the software development process. Testing starts as soon as the development starts allowing to detect the bugs as early as possible.
   
By embracing these principles and practices, testing in a DevOps environment becomes an integral part of the software delivery process, contributing to faster, more reliable, and higher-quality releases.

### **How to make your test code CI Friendly?**

- Independent Tests - responsible for its own state and data - each automated test can create and find its own data.
- Shorter Tests - Each test responsible for one feature or function
- Parallel running - reduce overall test time
- Use APIs for data setup and teardown of the test to reduce execution time

## **What is Deployment Pipeline?**

Code Commit to VCS -> CI server Build the code -> CI server runs Unit test -> Deploy to STG -> Automated Testing -> Deploy to PROD -> Measure & Validate

- Automates build, test & release process
- Allows all stakeholders to monitor the progress
- Eliminates the overhead of all the manual work
- Provides quick feedback
- Builds confidence on the code quality

## **Deployment Pipeline Tools/Components**

- VCS (e.g Git)
- CI tool (e.g. Jenkins)
- Test framework (e.g xUnit, Selenium)
- A binary repository to store build artifacts (e.g. Artifactory )
- Configuration management tool (e.g. Ansible)
- Monitoring Dashboard (e.g Dynatrace)
- Frequent Feedback (e.g. emails, slack notifications)
- A CI/CD tool to bring all above tools togather (e.g. Circle CI/ Travis CI, Jenkins, GitLab CI/CD)
  
## **What is CI/CD?**
CI/CD stands for Continuous Integration and Continuous Deployment. It is a set of best practices and automation processes aimed at improving the software development lifecycle by frequently integrating code changes and deploying them to production.

## **Explain the difference between Continuous Integration and Continuous Deployment.**
Continuous Integration (CI) involves frequently merging code changes into a shared repository and running automated tests. Continuous Deployment (CD) takes CI a step further by automatically deploying the code changes to production after successful testing.

## **What are the key benefits of implementing CI/CD?**
Benefits include faster release cycles, early bug detection, improved collaboration among team members, and increased overall software quality.

## **What is a CI/CD pipeline?**
A CI/CD pipeline is an automated process that facilitates the continuous integration, testing, and deployment of code changes. It typically consists of stages such as build, test, and deploy.

## **How does CI/CD help in catching bugs early in the development process?**
By integrating code changes frequently and running automated tests, CI/CD helps detect bugs early in the development process, reducing the chances of introducing defects into the codebase.

## **Explain the concept of a "build" in CI/CD.**
A build involves compiling and assembling source code into executable artifacts. In CI/CD, the build stage is where the code is transformed into a deployable format.

## **What is the purpose of automated testing in a CI/CD pipeline?**
Automated testing ensures that code changes introduced during development do not negatively impact existing functionality. It includes unit tests, integration tests, and end-to-end tests.

## **How do you handle database migrations in a CI/CD pipeline?**
Database migrations can be automated as part of the deployment process. Tools like Flyway or Liquibase help manage and version database schema changes.

## **What are blue-green deployments?**
Blue-green deployments involve maintaining two production environments: one (blue) with the current live version and another (green) with the new version. The switch between environments is seamless, reducing downtime.

## How can you ensure security in a CI/CD pipeline?
Security can be ensured by incorporating security scans, static code analysis, and dependency scanning into the CI/CD pipeline. Additionally, access controls and secure credential management are crucial.

## **Explain the concept of canary deployment.**
Canary deployment involves gradually rolling out a new version of an application to a subset of users or servers to assess its stability and performance before a full deployment.

## **What is the role of version control systems in CI/CD?**
Version control systems (e.g., Git) track changes in the codebase, enabling collaboration, maintaining a history of changes, and providing a basis for continuous integration.

## **How do you handle rollback in a CI/CD pipeline?**
Rollback mechanisms should be in place, allowing a quick and automated revert to a previous version in case of deployment issues. This ensures minimal downtime and impact on users.

## **What is the difference between declarative and imperative CI/CD configuration?**
Declarative configuration (e.g., YAML-based) focuses on describing the desired end state, while imperative configuration involves specifying the step-by-step instructions to achieve the desired state.

## **How do you measure the success of a CI/CD implementation?**
Success metrics may include faster release cycles, reduced time to detect and fix defects, increased deployment frequency, and improved collaboration and communication within the development team.

These questions cover various aspects of Continuous Integration and Continuous Deployment, from basic concepts to practical considerations in implementing and managing CI/CD pipelines. Candidates familiar with CI/CD principles should be able to provide concise and informative responses.

## What is SSH Client?
* SSH (Secure Shell) is a cryptographic network protocol that provides a secure way to access and manage network devices and servers over an unsecured network. An SSH client is a software application or command-line tool that allows users to connect to and interact with remote servers or devices using the SSH protocol.
* Using an SSH client is a common practice for system administrators, developers, and anyone who needs to securely access and manage remote servers or network devices.
* Commonly used SSH clients include:

  * OpenSSH: A widely used open-source implementation of the SSH protocol, available on many Unix-like operating systems, including Linux.

  * PuTTY: A popular and free SSH client for Windows, providing a graphical user interface (GUI) for connecting to remote servers.

  * MobaXterm: MobaXterm is a terminal application for Windows that combines various network tools and a graphical X11 server, providing a comprehensive solution for remote computing. MobaXterm is often used by system administrators, developers, and IT professionals for remote access, administration, and development tasks.
 
## What is PEM?
A PEM (Privacy Enhanced Mail) file is a widely used file format that typically contains cryptographic information, such as X.509 digital certificates or private/public key pairs. It was initially developed to secure email communication, but it is now commonly used for various security-related purposes, including SSL/TLS certificates and cryptographic keys.

A PEM file is encoded in Base64 and is delimited by specific headers and footers. The most common PEM file extensions include .pem, .crt, .cer, and .key. The contents of a PEM file are plain text, making them human-readable, but the data is encoded in Base64 for transmission and storage.

Here are some common components that can be stored in PEM files:

* **X.509 Certificates (.pem, .crt, .cer):** X.509 certificates, used in the context of SSL/TLS for securing websites and network communications, are often stored in PEM format. The certificate contains information about the entity it identifies, along with the public key.
* **Private Keys (.pem, .key):** Private keys used for SSL/TLS connections or other cryptographic purposes can be stored in PEM format. These keys are kept confidential and should be securely handled.

## What is Ansible?
Ansible is an open-source automation tool widely used for configuration management, application deployment, orchestration, and task automation. It simplifies the process of managing IT infrastructure by allowing users to automate repetitive tasks such as server provisioning, software installation, configuration updates, and deployment processes.

Key features of Ansible include:

1. **Agentless**: Ansible operates over SSH (Secure Shell) by default, meaning it doesn't require any additional software to be installed on the managed nodes. This makes it lightweight and easy to deploy.

2. **Declarative**: Ansible uses YAML (YAML Ain't Markup Language) to describe the desired state of systems, rather than requiring users to write procedural code. This declarative approach makes it easier to understand and maintain playbooks (configuration files).

3. **Idempotent**: Ansible ensures that tasks can be run multiple times without causing unexpected changes if the system is already in the desired state. This helps in ensuring consistency and predictability.

4. **Modular and Extensible**: Ansible's architecture is designed to be modular, allowing users to extend its functionality with custom modules, plugins, and roles. Additionally, Ansible integrates seamlessly with other tools and platforms through its extensive collection of modules.

5. **Orchestration**: Ansible allows users to orchestrate complex workflows across multiple systems. Tasks can be executed sequentially or in parallel, enabling efficient management of distributed environments.

6. **Community and Ecosystem**: Ansible benefits from a large and active community, which contributes to its ecosystem by developing modules, roles, and playbooks that can be reused and shared.

Overall, Ansible simplifies IT automation, improves productivity, and promotes consistency across infrastructure environments, making it a popular choice for organizations of all sizes.

## What is Kubernetes?

Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. Developed by Google and later donated to the Cloud Native Computing Foundation (CNCF), Kubernetes provides a robust framework for managing containerized workloads and services in a highly dynamic and scalable manner.

Key features of Kubernetes include:

1. **Container Orchestration**: Kubernetes abstracts away the underlying infrastructure and provides a unified API for managing containerized applications. It automates tasks such as deployment, scaling, load balancing, and resource allocation, allowing users to focus on application development rather than infrastructure management.

2. **Automatic Scaling**: Kubernetes can automatically scale applications based on resource utilization metrics such as CPU and memory usage. This ensures optimal performance and resource efficiency, even in dynamically changing environments.

3. **Self-healing**: Kubernetes continuously monitors the health of applications and automatically restarts or replaces containers that fail or become unresponsive. This helps in maintaining high availability and resilience.

4. **Service Discovery and Load Balancing**: Kubernetes includes built-in mechanisms for service discovery and load balancing, allowing applications to communicate with each other seamlessly and distribute incoming traffic across multiple instances of the same service.

5. **Rolling Updates and Rollbacks**: Kubernetes supports rolling updates, enabling users to update applications with zero downtime by gradually replacing old instances with new ones. In case of issues, Kubernetes also facilitates easy rollback to a previous version of the application.

6. **Portability and Extensibility**: Kubernetes is designed to be cloud-agnostic and can run on any infrastructure, including public clouds, private clouds, and on-premises data centers. Additionally, Kubernetes is highly extensible, allowing users to integrate with a wide range of third-party tools and services through its flexible plugin system.

Overall, Kubernetes simplifies the management of containerized applications, improves scalability and reliability, and accelerates the adoption of cloud-native technologies in modern IT environments.

# Resources:
* [Why Do You Need Test Automation In Your DevOps Organization?](https://www.devops-certification.org/Why_Do_You_Need_Test_Automation_In_Your_DevOps_Organization.php)
  
