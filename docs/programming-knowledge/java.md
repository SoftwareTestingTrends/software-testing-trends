---
sidebar_position: 6
title: 'Java'
metaTitle: 'Java'
metaDescription: 'Java'
---

- Dynamically typed langauges determine the data type of variables at runtime.
- Statically typed languages determine the data type of variables at compile time.
- Data Types
  - Primitive Data types
    - byte
    - short
    - int
    - long
    - float
    - double
    - boolean
    - char
  - Wrapper Classes: An object representation of a primitive data type. All primitive data types can be expressed as objects. These objects are known as `wrapper classes`.
    - Byte
    - Short
    - Int
    - Long
    - Float
    - Double
    - Boolean
    - Char
  - Variable declared with `var` - It allows programmers to initialize a variable without having to explicitly declare its data type. Java infers the data type by the value that is assigned to the variable.
- Variable Scope
- OOP Concepts
  - Encapsulation
  - Inheritance
  - Polymorphism
  - Abstraction

- Clases & Objects
  - Classes
    - A class is an extensible program-code-template for creating objects, providing initial values for state and implementations of behavior.
    - All classes in Java, whether provided by the language or created by you, inherit from the Object class
  - Objects:
    - Objects are structures which contain data in the form of fields and methods.
    - Reserved word `new` is used to instantiate an object.
    - The data type of an object is a Class.
  - Constructors
    - All objects have a constructor.
    - Used to initialize an object when it is created
    - There is no limit on maximum number of constructors allowed within a class
    - Constructors start with an access modifier
    - There's no return type, because they're not a method
    - The constructor's name must be the exact same name as the class
    - A constructor of the class is called when instanting a new object
    - An object instantiation map to the proper constructor by using the constructor with the same parameter list
    - Default constructor
      - In Java, default constructors exist in classes with no constructors, even if not explicitly defined
      - The default constructor is known as such because it does not have a parameter list.
      - The default constructor is typically used to assign default values to the fields.
  - Static Vs Non-Static
    - `Static methods` are ones that can be called without instantiating its class. They do not have knowledge of state within the class
    - For a static method to be able to call a non-static method, it must do so by using an object of the type in which the non-static method belongs
    - Static global fields can be accessed by non-static methods of the same class
- **Encapsulation:** 
    - Hiding the data of a class by making its fields private and allowing access through public methods is known as Encapsulation
- **Inheritance**
    - Inheritance between classes is done to reuse code
    - An inheritance relationship is created in the subclass
    - `extends` is the reserved word used to inherit from a class 
    - An explicit call to a superclass's constructor must be the very first line of the calling constructor.
    - Given that Car inherits from Vehicle, and no constructors have been explicitly defined in either class, constriuctor for `Vehicle` will be called first upon the instantiation of Car.
    - If a superclass has constructors but none of them are a default constructor, the subclass has to explicitly call one of the existing non-default constructors of its superclass from one of its constructors.
    - A subclass inherit Public and protected fields and methods from its superclass
    - If a subclass inherits from an abstract class, the subclass must implement the inherited abstract methods or declare itself as abstract as well.
- Overriding & Overloading
  - Overloading
    - When multiple methods within a class have the same name, but different parameter lists (signatures)
    - Without inheritance, methods are overloaded within the same class. With inheritance, a subclass can overload a method that it inherited from the superclass
  - Overriding
    - To override an inherited method, the subclass must redefine the method with the same signature
    - Used to change the behavior of an inherited method
    - If a class does not want any of its subclasses to override an inherited member, it can declare that member as `final` 

- **Polymorphism**
    -  Polymorphism is the ability to take multiple forms. Specifically, in object-oriented programming, polymorphism is where a subclass can define their own unique behaviors, and yet share some of the same behaviors of their superclass.
- **Abstraction**
    - Abstraction is defined as something that exists in theory but does not have a concrete existence.
    - Abstract classes and methods are templates that are meant to be implemented by their subclasses.
    - Abstract classes cannot be instantiated. They are only to be used as a superclass.
    - The classes and methods are declared abstract by using the `abstract` keyword.
    - The reserved word `abstract` is a non-access modifier.
    - An abstract method has no body, only the signature of the method is defined.
    - An abstract method is designed to be overridden by a subclass.
  ```java
  public abstract class Shape {
      abstract double calculateArea();
  }
  ```
  - If even one method in a class is abstract, then the entire class must be declared abstract as well.
  - An abstract class doesn't only have to contain abstract methods. It can also contain implemented methods.
  - You can use an abstract class as a type, but as you can't instantiate it, so you would have to instantiate it with one of its subclasses.
  ```java
  Shape rectangle = new Rectangle(5, 7);
  ```
- **Interfaces**

  - Interfaces cannot be instantiated.
  - Interfaces are implemented, not extended.
  - Methods in an interface must be abstract (no explicit declaration required), or default.

  ```java
  public interface Product {
      double getPrice();
      void setPrice(double price);
  }
  ```

  - Any class that implements an interface must implement all of its methods, or it must declare itself as an `abstract` class.

  ```java
  public class Book implements Product {

      @Override
      public double getPrice() {
      return price;
      }

      @Override
      public void setPrice(double price) {
          this.price = price;
      }
  }
  ```

  - No need to provide an access modifier on the methods in an interface. That's because by default, all methods are public.
  - Note: The fact that `all of the methods inside of an interface must be abstract`, was true until Java version 8. Java 8 introduced a new option, where a method can be declared as default within interfaces.

  ```java
      default String getBarcode(){
      return "no barcode";
  }
  ```

  - If a method is declared as default, user can provide a default implementation for this method. This way any existing class that implemented an interface will no longer break after a change in interface class.
  - **Multiple Interfaces:**

    - While a class can only extend one class, it can implement multiple interfaces.
    - To implement multiple interfaces, the class header must specify a comma delimited list of names of all of the interfaces that it would like to implement.
    - If a class declares that it will implement multiple interfaces, then it must provide the methods specified by all of those interfaces.

    ```java
        public class Book implements Product, KindleItem {

        }
    ```

- **Collection**
  - A Collection is an object that holds references to other objects. These are data structures and the objects within the collection are known as elements.
  - Java provides a collections framework which consists of interfaces, classes and methods to store and manipulate aggregate data.
  - All of the interfaces and classes for the collections framework can be found in the java.util package.
  - Collection itself is an interface and is the root of the hierarchy. Java does not provide any direct implementations of the Collection interface, but there are other interfaces which inherit from Collection.
  - Most common collections:
    - **Set**
      - Unordered collection of `unique` elements
      - Set is an interface, it cannot be instantiated, but it can be an object's type
      - Some implementations of Set are `HashSet`, `LinkedHashSet` and `TreeSet`.
      - If a duplicated value is tried to add, no error but value also not added.
    - **List**
      - Ordered elements that can be accessed by position; duplicated values allowed.
      - Some implementations of lists are `ArrayList`, `LinkedList`, `Stack` and `Vector`.
      - List index starts at 0.
    - **Queue**
      - Ordered elements for processing
      - Queues follow the first in-first out algorithm — means elements are processed in the order in which they are entered.
      - The most common implementations of Queue are `LinkedList` and `PriorityQueue`
      - The first element of the Queue is known as the `head`
      - The last element of a Queue is known as the `tail`.
      - Use `peek()`to know what's the next item to be processed before you actually do anything.
    - **Map**
      - Unordered unique key-value pairs;
      - Keys are unique, but values can be duplicate.
      - You can access an element in a Map by its key
      - Map has a put method, which is used to add the elements.
      - if you call put passing in a key that already exists, the map will update that entry with the new value that was passed in.
      - Popular implementations of the map interface are `HashMap`, `TreeMap` and `LinkedHashMap`.
      - It is not a true collection, meaning it does not inherit from the Collection interface. As it contains collection-like operations, therefore it is used as collections.
  - Using `of()` method to add elements to collection
  ```java
  List unchangeablelist = List.of("apple", "lemon", "banana");
  ```
  - Using `of()` to add items in the collection makes the collection immutable, meaning it cannot change. For example, calling the add() and remove() methods on this collection after using List.of() will throw an UnsupportedOperationException.
- **Looping through collection**

  - **Collection: Iterator**

    - The iterator allows to go through each of the items in this collection.
    - `hasNext()` method of Iterator lets you know if there are more elements to iterate over.
    - `next()` method of Iterator gives you the next entry in the map

    ```java
    public static void setDemo(){
        Set fruit = new HashSet();
        fruit.add("apple");
        fruit.add("lemon");
        fruit.add("banana");
        fruit.add("orange");
        fruit.add("lemon");

        var i = fruit.iterator();
        while(i.hasNext())
            System.out.println(i.next());
        }
    }
    ```

  - **Collection: Enhanced For Loop**

    - In order to use the enhanced for loop to iterate over collections, the data type of the elements must be declared
    - diamond operator `< >` is used to declare the data type of the elements within a collection/map

    ```java
    Set<String> fruit = new HashSet();
    fruit.add("apple");
    fruit.add("lemon");
    fruit.add("banana");
    fruit.add("orange");
    fruit.add("lemon");

    for(String item : collection){
    System.out.println(item);
    }
    ```

  - **Collection: forEach**

    ```java

    Set<String> fruit = new HashSet();
    fruit.add("apple");
    fruit.add("lemon");
    fruit.add("banana");
    fruit.add("orange");
    fruit.add("lemon");

    fruit.forEach(x -> System.out.println(x));
    //Alternate form
    fruit.forEach(System.out::println);
    ```

    - This work for all collections so we can use this for the `list` as well as for the `queue`.

  - **Map: Enhanced For Loop**

    - We can't use above methods on the Map because, the Map is not a Collection.

    - To iterate over the Map we can use an enhanced for loop, but we can't just iterate over the Map itself.

    - We can use the `entrySet` — which will give us a Set object. Once we have this Set object, then we can print out the value from the set.
    - Maps are NOT able to hold entries with primitive data types as their key and value.

    ```java
    Map<String, Integer> fruitCalories = new HashMap();
    fruitCalories.put("apple", 95);
    fruitCalories.put("lemon", 20);
    fruitCalories.put("banana", 105);
    fruitCalories.put("orange", 45);
    fruitCalories.put("lemon", 17);

    for(var entry : fruitCalories.entrySet()){
        System.out.println(entry.getValue());
    }
    ```

  - **Map: forEach**
    - The forEach() method takes the `lambda expression`
    ```java
    fruitCalories.forEach(
    (k,v)->System.out.println("Fruit: " + k + ", Calories: " + v));
    ```

- **Exceptions**

  - `try/catch` structure is used to handle exceptions
  - Statements that could possibly throw an exception go inside of `try` block.
  - The code to actually handle the exception goes inside of `catch` block
  - To handle an exception, you must specify which exceptions you are handling.
  - The code inside of a catch block is executed only if an exception of the type or subtype specified is thrown.
  - `Stack trace:` Information about the exception and the path that the code took
  - When an exception is caught, that exception has a stack trace as well, which will provide information about the error and also the path that the code took before getting there.
  - To list multiple exceptions within one catch block, `|` symbol is used.

  ```java
  public static void createNewFile(){
      File file = new File("resources/nonexistent.txt");
      try {
          file.createNewFile();
      } catch (IOException e) {
          System.out.println("Directory does not exists.");
          e.printStackTrace();
      }
  }
  ```

  - `Exception` is the top-most superclass for all exceptions
  - There can be `multiple catch clauses` to handle different types of exceptions.
  - If the multiple catch clauses contain related exceptions, the subclass’ catch clause must appear first. Otherwise, it will never have the possibility of reaching other catch clauses.
  - A `finally` clause can optionally be added below any catch clauses.
  - A `finally` clause is executed after try and after any catch clauses, even if the catch clauses don't execute.
  - Try with Resources: This allows you to specify a resource and Java will automatically close this resource on your behalf once done with the try/catch.

  ```java
  File file = new File("resources/numbers.txt");

  try(Scanner fileReader = new Scanner(file)){

      while(fileReader.hasNext()){
          double num = fileReader.nextDouble();
          System.out.println(num);
      }
  }
  ```

  - This only works with classes that implement the `Closable` or `AutoClosable` interfaces, and Scanner happens to be one of those.
  - **Throwing Exception**:
    - If your method has code that has the potential of throwing an exception, you must either catch that exception or rethrow it.
    ```java
    public static void createNewFileRethrow() throws IOException{
        File file = new File("resources/nonexistent.txt");
        file.createNewFile();
    }
    ```
    - A method can initiate the throwing of an exception by using the word throw inside of the method's body and instantiating an exception.
    ```java
    public static void calculateSalary(double hours, double rate){
        if(hours>40){
            throw new illegalArgumentException("we don't allow overtime.");
        }
    }
    ```
    - You can also define your own custom exception class, which extends from Exception.
