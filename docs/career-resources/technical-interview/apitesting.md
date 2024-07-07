---
sidebar_position: 1
---

# API Testing

## Concepts
### SOAP Vs REST
– SOAP uses services interfaces to expose the business logic. REST uses URI to expose business logic.


## POISED API Testing Strategy:
- P - Parameters
  - Test by changing parameter values such that: - Valid values must work - Invalid values must result in error - Check which parameters are mandatory or optional
- O - Output
  - Change headers and see if output changes accordingly
  - If error occurs for some parameters, informative message should be returned in addition to status code. This will give clues to the developer when things are not right
- I - Interop
  - See how API interacts with other services. Does changing parameters format breaks consuming application (e.g. Date Format). The information about parameter formats should be clearly indicated in API documentation to avoid such scenarios.
- S - Security
  - Having security at UI level is good but it doesn't secure your API. If API is not secure it could have cross site scripting attacks. So make sure the parameters doesn't allow html input.
- E - Error
  - Check error returned & exception handling done by API
  - Make sure status returned matches the type of error returned by API
  - Errors returned by API should provide details about the error, for e.g. if there is a Bad Request Error, it should also specify which parameter value is bad.
  - Ideally we should never have a 500 error returned in an API
- D - Data
  - Make sure data is being handled properly by API
  - Make sure API provides right data
  - Check scalability of API
  
# How can you effectively test APIs to prevent performance bottlenecks?

Testing APIs for performance is crucial to ensure that they can handle the expected load and provide a responsive experience for users. Here are some strategies and tools you can use to effectively test APIs and prevent performance bottlenecks:

1. **Define Performance Metrics:**
   - Clearly define the performance metrics that are important for your API, such as response time, throughput, and error rates.
   - Set specific performance goals based on your application's requirements.

2. **Load Testing:**
   - Use load testing tools to simulate a realistic volume of concurrent users and requests to your API.
   - Tools like Apache JMeter, Gatling, and locust.io can help you generate different types of loads and analyze the API's performance under stress.

3. **Stress Testing:**
   - Perform stress testing to determine the breaking point of your API. This involves testing beyond the expected load to identify how the system behaves under extreme conditions.
   - Identify the maximum load your API can handle before experiencing performance degradation.

4. **Performance Monitoring:**
   - Implement performance monitoring to continuously track key metrics in real-time.
   - Tools like Prometheus, Grafana, and New Relic can help you monitor the health and performance of your API.

5. **Endpoint-Specific Testing:**
   - Focus on specific API endpoints that are critical to your application.
   - Test both normal and edge cases to ensure that the API performs well under various scenarios.

6. **Caching Strategies:**
   - Implement and test caching strategies to reduce the load on your API.
   - Evaluate the impact of caching on response times and ensure it doesn't introduce stale data issues.

7. **Network Latency Simulation:**
   - Simulate different network conditions to understand how your API performs under varying latency.
   - Tools like Charles Proxy or network throttling in browser developer tools can help simulate slower network conditions.

8. **Security Testing:**
   - Perform security testing to ensure that security measures don't introduce significant performance overhead.
   - Evaluate the performance impact of encryption and authentication mechanisms.

9. **Database Performance:**
   - If your API interacts with a database, ensure that the database queries are optimized.
   - Test the impact of different database loads on the overall API performance.

10. **Scalability Testing:**
    - Test the scalability of your API by gradually increasing the load and observing how the system scales.
    - Implement auto-scaling mechanisms to handle increased load dynamically.

11. **Continuous Integration/Continuous Deployment (CI/CD) Pipeline:**
    - Integrate performance testing into your CI/CD pipeline to catch performance issues early in the development lifecycle.

12. **Documentation and Reporting:**
    - Document your testing process and results, making it easier to replicate tests and analyze performance improvements or regressions.
    - Provide clear reports with graphs and statistics to communicate performance insights.

By incorporating these strategies and tools into your testing process, you can identify and address performance bottlenecks in your APIs before they impact users.

# How defining SLO (Service level Objective) can improve the overall application quality?
SLI - Service Level Indicator → Measuring operational excellence
SLI = 100 * (Good events / Total valid events)
events → User experiences (for eg. 1000 logins per day); Good event means successful logins.
Speed → Speed is also included in better user expereince.
100% SLI means everyone logged in successfully.

Defining Service Level Objectives (SLOs) and using Service Level Indicators (SLIs) contributes to improving the overall quality of an application. Here's how:

1. **Quantifiable Objectives:** SLOs provide quantifiable objectives for the performance and reliability of your application. By setting specific targets, you establish a clear standard for what is considered acceptable performance. This clarity helps teams focus on measurable goals rather than subjective opinions about quality.

2. **Operational Excellence Measurement:** SLIs, which are metrics like successful logins (as per your example), are key indicators of operational excellence. They give you insights into how well your system is performing in terms of user interactions. This operational data allows teams to identify areas for improvement and optimization.

3. **User-Centric Approach:** SLOs often revolve around user experiences and satisfaction. By using SLIs related to user interactions, you are aligning your performance metrics with the actual experiences of your users. This user-centric approach ensures that your application quality is evaluated based on how well it serves its intended purpose.

4. **Early Detection of Issues:** SLOs and SLIs can act as early warning systems. By continuously monitoring SLIs, you can detect deviations from the expected performance. This enables teams to proactively address potential issues before they escalate, reducing the likelihood of user-facing problems and improving overall reliability.

5. **Continuous Improvement:** SLOs provide a framework for continuous improvement. Teams can set SLOs based on current performance levels and gradually increase them as the application matures. This iterative process encourages a culture of continuous improvement, where the focus is on consistently raising the bar for application quality.

6. **Alignment with Business Goals:** SLOs are typically aligned with broader business objectives. By defining SLOs that reflect the expectations of your users and business stakeholders, you ensure that your technical and operational efforts are in sync with overarching organizational goals.

7. **Objective Decision-Making:** SLOs provide an objective basis for decision-making. When there are discussions about resource allocation, prioritization of tasks, or trade-offs between features and reliability, having clear SLOs allows teams to make informed decisions based on data rather than subjective opinions.

8. **Communication and Accountability:** Clearly defined SLOs create a common language for communication across teams. They also foster accountability, as teams can be held responsible for meeting or exceeding the established objectives. This transparency encourages a shared responsibility for the overall quality of the application.

In summary, by incorporating SLOs and SLIs into your monitoring and evaluation processes, you establish a systematic approach to enhancing application quality, ensuring that it not only meets but continuously improves upon user expectations and business requirements.

# What is an OAuth?
OAuth, which stands for "Open Authorization," is an open standard and protocol that provides secure authorization for web applications and APIs (Application Programming Interfaces). It allows a user to grant a third-party application limited access to their resources without exposing their credentials, such as usernames and passwords.

The primary use case for OAuth is to enable third-party applications to access a user's resources on another service (such as social media accounts, cloud storage, etc.) without the need for the user to share their login credentials with the third party. OAuth facilitates this by providing a secure and standardized way for the user to grant the necessary permissions to the third-party application.

OAuth involves several roles and components:

1. **Resource Owner:** This is the user who owns the resources (such as data or services) that the third-party application wants to access.

2. **Client:** This is the third-party application that seeks access to the user's resources. The client needs to be registered with the OAuth service provider.

3. **Authorization Server:** This is the server that authenticates the resource owner, obtains their consent, and issues access tokens to the client.

4. **Resource Server:** This is the server that hosts the protected resources. It verifies the access tokens and provides access to the client if the token is valid.

5. **Access Token:** This is a credential that represents the authorization granted by the resource owner to the client. The access token is used by the client to access the protected resources on the resource server.

OAuth uses different grant types, such as authorization code grant, implicit grant, client credentials grant, and others, depending on the specific requirements and security considerations of the application.

Overall, OAuth is a widely adopted standard for securing the authorization process in modern web and mobile applications, promoting a more secure and user-friendly way of accessing resources across different services.

# What are the common HTTP Status codes?
HTTP (Hypertext Transfer Protocol) status codes are issued by servers in response to a client's request made to the server. Here are some common HTTP status codes:

**200 OK:** The request was successful, and the server has returned the requested data.

**201 Created:** The request was successful, and a new resource has been created as a result. This is often used after a POST request to indicate that a resource has been successfully created.

**204 No Content:** The server successfully processed the request but there is no content to send in the response.

**400 Bad Request:** The server could not understand the request due to a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

**401 Unauthorized:** The request requires user authentication. The client must provide valid credentials to access the requested resource.

**403 Forbidden:** The server understood the request, but it refuses to authorize it. The client does not have permission to access the requested resource.

**404 Not Found:** The server cannot find the requested resource. This is one of the most common error codes and indicates that the requested URL is not recognized or the resource is not available.

**500 Internal Server Error:** A generic error message indicating that an unexpected condition was encountered on the server, and no more specific message is suitable.

**502 Bad Gateway:** The server, while acting as a gateway or proxy, received an invalid response from an upstream server it accessed in attempting to fulfill the request.

**503 Service Unavailable:** The server is not ready to handle the request. Common causes include temporary overloading or maintenance of the server.

**504 Gateway Timeout:** The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or some other auxiliary server it needed to access in order to complete the request.

These status codes are part of the HTTP protocol and are crucial for communication between clients (like web browsers) and servers. They help to indicate the success or failure of a request and provide information about the nature of any errors encountered.

# What is the difference between SOAP, REST & GraphQL?
SOAP, REST, and GraphQL are different approaches or protocols used for designing and implementing web services. Here are the key differences between them:

1. **SOAP (Simple Object Access Protocol):**
   - **Protocol Type:** SOAP is a protocol, often based on XML, used for exchanging structured information in web services.
   - **Communication:** It relies heavily on XML for message formatting and typically uses HTTP or other protocols for communication.
   - **Message Format:** SOAP messages are XML-based and can be quite verbose due to the XML markup required.
   - **Service Description:** WSDL (Web Services Description Language) is commonly used to describe SOAP-based web services.
   - **State:** SOAP is stateful, meaning it maintains session information between requests.
   - **Error Handling:** SOAP has built-in error handling mechanisms and supports standards like WS-Security for security features.

2. **REST (Representational State Transfer):**
   - **Architectural Style:** REST is an architectural style for designing networked applications, commonly implemented using HTTP.
   - **Communication:** RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) for communication and leverage HTTP status codes for indicating the result of operations.
   - **Message Format:** RESTful APIs can use various message formats such as JSON, XML, or plain text, depending on the application's needs.
   - **Service Description:** REST APIs often rely on self-descriptive messages and may use formats like OpenAPI (formerly Swagger) for describing API specifications.
   - **State:** REST is stateless, meaning each request from a client to the server must contain all the information necessary to understand and fulfill the request.
   - **Error Handling:** RESTful APIs handle errors using HTTP status codes (e.g., 404 for Not Found, 500 for Internal Server Error) and may include error details in the response body.

3. **GraphQL:**
   - **Query Language:** GraphQL is a query language and runtime for APIs that enables clients to request only the data they need.
   - **Communication:** GraphQL APIs typically use HTTP as the transport protocol, but the request and response structures are different from traditional RESTful APIs.
   - **Message Format:** GraphQL requests and responses are typically in JSON format, and clients can specify the exact shape and structure of the data they require in their queries.
   - **Service Description:** GraphQL APIs are often described using a GraphQL schema, which defines the types of data that can be queried and the available operations.
   - **State:** GraphQL can be implemented as either stateful or stateless, depending on the server-side implementation and how it handles client sessions.
   - **Error Handling:** GraphQL APIs use standard HTTP status codes for basic errors, but they also include a dedicated "errors" field in the response for more detailed error messages.

In summary, SOAP is a protocol with a strict message format and built-in standards, REST is an architectural style emphasizing stateless, resource-based interactions over HTTP, and GraphQL is a query language for APIs that allows clients to request and receive precisely the data they need. The choice between these approaches depends on factors such as the application's requirements, data complexity, performance considerations, and development team preferences.
