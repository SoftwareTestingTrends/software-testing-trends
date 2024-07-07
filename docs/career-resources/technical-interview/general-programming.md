---
sidebar_position: 7
---
# General Programming

## What is the difference between Dynamic typing vs. static typing?

There are two main differences between dynamic typing and static typing that you should be aware of when writing transformation scripts.

1. Dynamically-typed languages perform type checking at runtime, while statically typed languages perform type checking at compile time. This means that scripts written in dynamically-typed languages (like Groovy) can compile even if they contain errors that will prevent the script from running properly (if at all). If a script written in a statically-typed language (such as Java) contains errors, it will fail to compile until the errors have been fixed.

2. Statically-typed languages require you to declare the data types of your variables before you use them, while dynamically-typed languages do not. Consider the two following code examples:

```Java
// Java Example
int num;
num = 5;
```
```
// Groovy example
num = 5
```

Both examples do the same thing: create a variable called num and assign it the value 5. The difference lies in the first line of the Java example, int num;, which defines num's data type as int. Java is statically-typed, so it expects its variables to be declared before they can be assigned values. Groovy is dynamically-typed and determines its variables' data types based on their values, so this line is not required.

Dynamically-typed languages are more flexible and can save you time and space when writing scripts. However, this can lead to issues at runtime.

# **What are software design patterns?**

Software design patterns are general, reusable solutions to commonly occurring problems in software development.

Design patterns are not libraries or frameworks that you can plug in and use right away. Rather, they are established suggested ways of thinking to use when you're faced with a problem that many developers have solved before.

# **How many patterns are there?**

The original Gang of Four book included 23 patterns divided into 3 categories:

- **Creational** patterns used to create objects without instantiating them directly. This category includes *Abstract Factory*, *Builder*, *Factory Method*, *Prototype*, and *Singleton*.
- **Structural** patterns that define ways of class and object composition. *Adapter*, *Bridge*, *Composite*, *Decorator*, *Facade*, *Flyweight*, and *Proxy* are all structural patterns.
- **Behavioral** patterns that suggest various ways for objects to communicate and/or evolve. Behavioral patterns include *Chain of Responsibility*, *Command*, *Interpreter*, *Iterator*, *Mediator*, *Memento*, *Observer*, *State*, *Strategy*, *Template Method*, and *Visitor*.

This is the original list, but it's not set in stone. If you look around, you will find variations where some patterns are omitted and others are introduced.

## **Singleton**

One of the most used design patterns, Singleton makes sure that only one instance of a particular class is created, and provides a global point of access to that instance.

Singleton is most useful when you need a single object to coordinate other objects.

A singleton is usually implemented as a class that contains:

- a private constructor (so that only members of the same class can access it),
- a private static member,
- a static public method that returns a reference to the private static member.

There are multiple legitimate scenarios for using singletons, including caching, logging, and hardware interface access.

## **Factory**

The Factory pattern helps create an instance of an object without exposing the instantiation logic to the code that needs the object.

Normally, when you create an object, you just call a class constructor directly:

```
1MyObject myObject = new MyObject();
```

Most of the time, there's nothing wrong with creating objects via constructors. However, sometimes you may want to make the parts of your code that need objects independent from the implementation of these objects. That's when Factory can help.

When using Factory, you don't call a constructor. Instead, you call a method in a static factory class and provide information about the type of object that you need. The factory returns an instance of the object you're looking for.

## **Observer**

The Observer pattern helps objects learn about changes to the state of other objects. It does so by establishing a one-to-many dependency between objects. It's used extensively for event management.

## **Adapter**

If two classes cannot work together because their interfaces are different, applying the Adapter pattern helps establish compatibility between them.

For example, if one class has a function that returns XML and another class has a function that takes JSON as input, and you want to take advantage of functionality in both of these classes, you may want to implement the Adapter pattern to enable interaction between them.

It's very similar to how adapters work with consumer electronics:

- To read a memory card from your laptop, you use an adapter.
- To plug your European laptop into a socket in the US, you use an adapter.

# What is meant by static code analysis?

Static code analysis is a process of analyzing source code without executing the program. The analysis is performed on the source code itself, often during the development or build phase, to identify potential issues, vulnerabilities, or areas where coding standards are not followed. This analysis helps in improving the code quality, detecting bugs, security vulnerabilities, and adherence to coding standards early in the development lifecycle.

Key points about static code analysis include:

1. **Automated Analysis:** Static code analysis is typically automated, using specialized tools that examine the source code files without executing the program.

2. **Code Quality Metrics:** It assesses code quality metrics such as maintainability, readability, and complexity, providing insights into potential areas for improvement.

3. **Bugs and Defect Detection:** It identifies common programming errors, potential bugs, and issues that might lead to runtime errors or unintended behavior.

4. **Security Vulnerability Detection:** Static code analysis tools can identify security vulnerabilities and potential weaknesses in the code that could be exploited by attackers.

5. **Coding Standards Compliance:** It checks whether the code adheres to coding standards and best practices established by the development team or the industry.

6. **Integration with CI/CD Pipelines:** Static code analysis is often integrated into Continuous Integration (CI) or Continuous Delivery (CD) pipelines, allowing for automated checks with every code commit or build.

7. **Early Issue Detection:** By analyzing the code statically, developers can catch issues early in the development process, reducing the cost and effort required to fix them.

8. **Language-Dependent:** Different programming languages may have specific static code analysis tools tailored to their syntax and features. For example, there are tools like ESLint for JavaScript, pylint for Python, and SonarQube that supports multiple languages.

Examples of issues that static code analysis tools can detect include unused variables, potential null pointer dereferences, code duplication, inconsistent naming conventions, security vulnerabilities, and more.

In summary, static code analysis is a valuable practice in software development that helps ensure code quality, maintainability, and security by automatically examining source code for potential issues and deviations from coding standards.

# What's the difference between devDependencies and dependencies when installing packages using npm (Node Package Manager)?
When installing packages using npm (Node Package Manager), there are two types of dependencies: devDependencies and dependencies. Here's the difference between them:

1. **dependencies**: These are packages that are necessary for your application to run in production. They typically include libraries and frameworks that your application directly depends on to function properly. For example, if your application is built with React, React would be listed as a dependency.

2. **devDependencies**: These are packages that are only needed during development and testing. They include tools, testing frameworks, compilers, or other utilities that assist in development but are not required for the final production build of your application. Examples of devDependencies include testing libraries like Jest, build tools like Webpack or Babel, or code quality tools like ESLint.

This differentiation is important because it allows for a cleaner and more efficient production build, as unnecessary development tools and libraries are not included.

