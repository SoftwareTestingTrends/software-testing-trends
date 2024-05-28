---
sidebar_position: 5
title: 'Python'
metaTitle: 'Python Notes'
metaDescription: 'Python Notes'
---

## Data
* All data in a Python program is stored in objects. 
* These objects have three components: id, type, and value.
* Each object has a unique identifier.
* Object’s type determines what functions can operate on that particular data type
```py
print(id(50))
print(type(50))
```

## Variables
* A Python variable is not an object and does not actually store data; it stores an id that refers to an object that stores data.
* Python standard for naming varibale is to use underscore.

## Determining types of data values

```py
print(type('hello'))
print(type(1))
print(type(1.64))
print(type(True))
```

## Printing
* Syntax: `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`

```py
print('My name is Ambreen.')
print(1, 2, 3, 4)
print(1, 2, 3, 4, sep='*')
print(1, 2, 3, 4, sep='#', end='&')
```

## Output Formatting
```py
x = 5; y = 10
print('The value of x is {} and y is {}'.format(x,y))
# Output: The value of x is 5 and y is 10

print('I like {0} and {1}'.format('mango','orange'))
# Output: I like mango and orange

print('Hello {name}, {greeting}'.format(greeting = 'Good Morning', name = 'John'))
# Output: Hello John, Good Morning

x = 12.3456789
print('The value of x is %3.2f' %x)
# Output: The value of x is 12.35
print('The value of x is %3.4f' %x)
# Output: The value of x is 12.3457
```

## Type Casting

```py
a = int(1)        # a will be 1
b = int(2.5)      # b will be 2
c = int("3")      # c will be 3
#c1 = int("3.4")   # c1 will be... This will result in an error; replace it with below statement to work:
c1 = int(float("3.4"))
d = float(1)      # d will be 1.0
e = float(2.5)    # e will be 2.5
f = float("3")    # f will be 3.0
g = float("4.23") # g will be 4.23
h = str("80s")    # h will be '80s'
i = str(22)       # i will be '22'
j = str(3.01)     # j will be '3.01'
print([a,b,c,c1,d,e,f,g,h,i,j])
```

## Eval
```py
# int('2+3')  - This will result in an error
eval('2+3') 
# Output: 5
```


## Arithmatic Operators

```py
a=10
b=3
print('Addition : ', a + b)
print('Subtraction : ', a - b)
print('Multiplication : ', a * b)
print('Division (float) : ', a / b)
print('Division (floor) : ', a // b)
print('Modulus : ', a % b)
print('Exponent : ', a ** b)
```

## Getting user input values

```py
num1=input('Enter a digit: ')
num2=input('Enter a second number:')
answer=float(num1)+float(num2)
print(answer)
```

### Example
```py
# - Create a distance converter converting Km to miles
# - Take two inputs from user: Their first name and the distance in km
# - Print: Greet user by name and show km, and mile values
# - 1 mile is 1.609 kilometers

name= input('What is your name?: ')
distance = input('Enter the distance you can run?')

print(f'{name.capitalize()} you can run {distance} kms and that is equivalent to {round(float(distance)*1/1.609)} miles')
```

## Working with Strings
```py
msg='welcome to Python 101: Strings'
print(msg)
print(msg.upper())
print(msg.lower())
print(msg.capitalize()) #capitalize first letter on the sentence
print(msg.title()) #capitalize first letter of each word
print(len(msg)) 
print(msg.count('Python'))
print(msg.count('o'))
# Slicing
print(msg[4])
print(msg[-7])
# To grab everthing after 2
print(msg[2:])
# from position -> to upto (character at last position is not included)
print(msg[2:15])
# Starting everything from 0 to indicated number-1
print(msg[:7])

# Challenge: Write text '1 Welcome Ring To Tyler' using given variable 'msg'
msg1=msg[18]+' '+msg[:8]+msg[25:29]+msg[7:11]+msg[13]+msg[12]+msg[2]+msg[1]+msg[-5]  
print(msg1.title()) 

# Print the same string backward
print(msg1[::-1])

#Other way to flip the list
my_list = [1,5,3,7,2]
print(list(reversed(my_list))) #output: [2, 7, 3, 5, 1]

# multi-line strings
msg2="""Dear Terry,,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg2.find("mightiest"))

# Find/Replace in Python
msg3='welcome to Python 101: Strings'
print(msg3.find('Python'))
print(msg3.replace('Python', 'Java'))

# Check if text exists in given string
msg4='welcome to Python 101: Strings'
print('Python' in msg)
print('Java' not in msg)

# String Formatting using variables
name1='terry'
color1 = 'RED'
msg6 = '[' + name1 + '] loves the color ' + color1.lower() + '!'
msg7 = f'[{name1.capitalize()}] loves the color {color1.lower()}!'
print(msg6)
print(msg7)
```

## Working with Lists
```py
friends = ['John','Michael','Terry','Eric','Graham']
# 2nd element and 5th element
print(friends[1],friends[4])
# last element
print(friends[-1])
#  3rd to 5th element
print(friends[2:4])
# first element to fourth element
print(friends[:4])
# reverse the list
print(friends[::-1])
# whole list
print(friends[:]) 
# number of elements in list
print(len(friends))
# Determine index of element in list
print(friends.index('Eric'))
# Count # of certain elements
print(friends.count('Eric'))

# Generate certain number of values
alot_of_zeros = [0] * 20
print(alot_of_zeros)

# Sorting a list 
friends.sort()
print(friends)
# Sort in descending order
friends.sort(reverse=True)
print(friends)

# reverse the list
friends.reverse()
print(friends)

# Sort numeric array
cars = [911,130,328,535,740,308]
cars.sort()
print(cars)

# Find minimum/maximum value in an array
print(min(cars))
print(max(cars))

# Sum of the elements in an array
print(sum(cars))

# Add new elements in the list
friends.append('TerryG')
print(friends)

# Specify the position where to insert the element
friends.insert(1,'TerryV')
print(friends)

# Replacing the value in the list
friends[2]='TerryG'
print(friends)

# Extend the lists (combines 2 lists)
friends.extend(cars)
print(friends)

# Remove an elements
friends.remove('Terry')

# Pop the last element from the list. This element can be assigned to any variable
friends.pop()
# Pop last element - alternate way
friends.pop(-1)
# pop specific element
second_element = friends.pop(2)
print(second_element)

# Remove all elements from the list and returns an empty list
friends.clear()

# Delete a list
del friends
# removes specific index value
del friends[2]

# Copy List - Method 1
new_friends = friends.copy()
# Copy List - Method 2
new_friends = list(friends)
# Copy List - Method 3
new_friends = friends[:]

# Un-packing the list
items = ['laptop', 'mouse', 'keyboard']
laptops, mouse, keyboard = items #generates variables using items from the list
print(laptops)

mobile = ['Pixel3', 'Android 12', 'Android 13', 'Android 14']
mobile_type, *ios_version = items #generates variables using items from the list
print(mobile_type) # prints Pixel3
print(ios_version) #prints other items from the list

# Creating a list from a string
name = list('Ambreen')
print(name)

# Output
['A', 'm', 'b', 'r', 'e', 'e', 'n']

# Creating a list by giving a range
my_list = list(range(0, 10))

# Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Generating a list by giving range and increment value
my_list = list(range(2, 22, 2))
print(my_list)

#Output:
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

```

### Example List
```py
# Lemonade sales for week 1 & week 2
sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]

# Get the number of lemonades sold on 7th day in second week
new_day = input('Enter number of lemonades sold on 7th day in second week')
sales_w2.append(int(new_day))

# Combine the sales for week 1 & week 2
#sales.extend(sales_w1)
#sales.extend(sales_w2)
sales = sales_w1 + sales_w2
print(sales)

# How much you earned on Best & Worst Days
worst_day_prof = min(sales) * 1.5
best_day_prof = max(sales) * 1.5
print(f'Worst day profit:$ {worst_day_prof}')
print(f'Best day profit:$ {best_day_prof}')
print(f'Combined profit:$ {worst_day_prof + best_day_prof}')
```

## Split and Join
### Split
* Split turn data into a list
```py
msg ='Welcome to Python 101: Split and Join'
names = 'Edward,Gor,Eileen,Andy,Abdul'

print(msg.split()) #Splits by spaces
print(names.split(',')) #Splits by Commas
```
### Join
* Join turns data into a string
```py
name_list = ['Edward','Gor','Eileen','Andy','Abdul']
print('-'.join(name_list))

# Output: 
# Edward-Gor-Eileen-Andy-Abdul
```
* To remove the spaces from a string and join it back 
```py
print(''.join(msg.split())) 
# Alternate approach
print(msg.replace(' ', ''))
```

### Example
* Make a list from the names given in csv variable
```py
csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
friends_list = (','.join((','.join(csv.split(';'))).split(':'))).split(',')
print(friends_list)

# Alternate way using replace method
print(csv.replace(';',',').replace(':',',').split(','))
```

## Tuples
* Tuple is read only list that can't be changed
* Tuples are faster in performace than lists
* Tuple can have duplicate items

```py
i_am_tuple = ('1', '2', '2','3')

# To get an element from tuple, use same method as list
print(i_am_tuple[0])
print(i_am_tuple[1:3])
```

## Sets
* Sets are unordered list and remove duplicate date
* Sets are faster in finding the element than the list

```py
i_am_set = {'1','2','3'}
```
* Applying intersection, difference and union on two Sets
```py
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}
my_friends_set = {'Reg','Loretta','Colin','Eric','Graham'}

print(friends_set.intersection(my_friends_set)) # What's common in two sets
print(friends_set & my_friends_set) #Alternate way of writing intersection statement

print(friends_set.difference(my_friends_set)) # What's different in two sets
print(friends_set - my_friends_set) #Alternate way of writing difference statement

print(friends_set.union(my_friends_set)) #Union of two sets removing dupliactes
print(friends_set | my_friends_set) #Alternate way of writing union statement
```

* Symmetric Difference - data that exists only in one of the set
```py
print(friends_set.symmetric_difference(my_friends_set))
print(friends_set ^ my_friends_set) #Alternate way of writing smmetric difference statement
```

## Creating empty list, tuple and set
```py
#empty Lists
empty_list = []
empyt_list = list()

#empty Tuple
empty_tuple = ()
empty_tuple = tuple()

#empty Set
empty_set = {} # this is wrong, this is a dictionary
empty_set = set()
```
## Truthy and Falsy Values
* Empty objects and 0 evaluates to false, everything else evaluates to true
```py
if 1:
    print('I am a truthy value') 

0 #Falsy 
"" #Falsy
[] #Falsy
``` 

## Mutable Vs immutable
### What is not immutable?
* Data Types: bool, int, float, tuple, strings
* you can freely change the value of new variable created from immutable data type as it won't change the value of the original variable.

### What is immutable?
* Data Types: lists, sets, dictionaries
* Stores values by reference
* If you change the value of new variable created from a mutable data type, it will change the value of the original variable.

## If, Else, Elif Statement
* Example
```py
age = 18
if age > 70:
    print("You are old. Don't take a risk to try this ride") 
elif age > 18:
    print("You can try this ride")   
else:
    print("You are too young to try this ride")
```
* Another Example:
```py
def num_days(month):
    days = 31
    if month in {'apr','jun','sep','nov'}:
    #if month == 'apr' or month =='jun' or month =='sep' or month =='nov':
        days = 30
    elif month == 'feb':
        days = 28
    print('number of days in',month,'is',days)
num_days('jan')
```
* `pass` statement
If statements cannot be empty, there must be at least one statement in every if and elif block. You can use the `pass` statement to do nothing and avoid getting an error.
```py
a_number = 9
if a_number % 2 == 0:
    pass
elif a_number % 3 == 0:
    print('{} is divisible by 3 but not divisible by 2'.format(a_number))
```

## Loops
Three Loop Questions:
1. What do I want to repeat?
2. What do I want to change each time?
3. How long should we repeat?

## For loops
```py
students = ['Ambreen', 'Abdul', 'Mariam', 'David']
for student in students:
    print(student)
   

for i in range(0, 20): #running loop 20 times
    print(f'I am running for {i} time')

name = 'Ambreen'
for letter in name:
    print(letter) #prints the letters in the name 

#output   
# A
# m
# b
# r
# e
# e
# n   

for table_of_two in range(2,21,2):   #performs the action in step of 2
    print(table_of_two)


# Use of break to get out of loop
friends = ['Ambreen', 'Abdul', 'Mariam', 'David', 'Michael', 'Andy']
for friend in friends:
    if friend == 'Mariam':
        print('Found ' + friend + '!')
        break
    print(friend)

# Continue the loop by going to top of the loop on continue condition
friends = ['Ambreen', 'Abdul', 'Mariam', 'David', 'Michael', 'Andy']
for friend in friends:
    if friend == 'Mariam':
        print('Found ' + friend + '!')
        continue
    print(friend)    
```

## While Loop
```py
age = 10
while age < 18:
    print(f'You are not allowed to take this ride! at age {age}')
    age += 1
    if age == 18:
        print(f'Congrats, you are {age} and now you are eligible to try this ride')

#Output
# You are not allowed to take this ride! at age 10
# You are not allowed to take this ride! at age 11
# Congrats, you are 12 and now you are eligible to try this ride

# Contine the loop
kid_age = 10
while kid_age < 18:
    age += 1
    if age == 12:
        continue #doesn't perform the action mentioned below for value 12
    print(f'You are not allowed to take this ride! at age {age}')

# Output
# You are not allowed to take this ride! at age 11
# You are not allowed to take this ride! at age 13
# You are not allowed to take this ride! at age 14
# You are not allowed to take this ride! at age 15
# You are not allowed to take this ride! at age 16
# You are not allowed to take this ride! at age 17
# You are not allowed to take this ride! at age 18    

```

## Functions
* Always declare the function before using it
```py
def multiplyByTen(number):
    return number * 10 

number_returned = multiplyByTen(20)
   
print(number_returned)

def add(number, by=1): #providing default value
    return number+by

print(add(10, 5)) #prints 15
print(add(10))   #prints 11 
```
* Functions - Named Notation allows to send parameters in any order while calling a function
```py
def greeting(name, age=28, color="red"):
 print(f"Hello {name.capitalize()}, you will be {age+1} next birthday!")
 print(f"We hear you like the color {color.lower()}!")

greeting(age=27, name="brian",color="Blue")
```
* Functions can return multiple values and any data type. 
```py
def value_added_tax(amount):
    tax = amount * 0.25
    total_amount = amount * 1.25
    return [amount, tax, total_amount]
    
price = value_added_tax(100)    
print(price, type(price)) # output: [100, 25.0, 125.0] <class 'list'>

# or return a particluar value from list as below
print(price[1], type(price)) # output: 25.0 <class 'list'>
```

## Comparisions and Booleans
```py
a=7
b=3
print('a == b is', a == b)
print('a != b is', a != b)
print('a > b is', a > b)
print('a < b is', a < b)
print('a >= b is', a >= b)
print('a <= b is', a <= b)
print('o in John is ','o' in 'John') #membership
print('o in John is ','o' not in 'John') #non membership
print('John is John ','John' is 'John') #identity
print('John is not John is ','John' is not 'John') # negative identity
```

## Enumerate (use of counter)
* Use enumerate() to get a counter in a loop
* `enumerate` function goes to the list and turns all elements into tuples
```py
friends = ['Ambreen', 'Abdul', 'Mariam', 'David', 'Michael', 'Andy']
for num, friend in enumerate(friends,1):
    print(num, friend)

for num, friend in enumerate(friends,51):
    print(num, friend)
for friend in enumerate(friends,51):
    print(friend)
for friend in enumerate(enumerate(friends,51),-100):
    print(friend)   
for num, letter in enumerate('python',start = 5):
    print(num, letter)
print(type(enumerate(friends)))
print(list(enumerate(friends)))
    
```

## Sort() and Sorted()
* `sort()` function just performs the sorting operation but doesn't return anything. It will modify the original list
* `sorted()` function yields a new sorted list. The actual list doesn't change.

```py
my_list = [1,5,3,7,2]
print(my_list,'original')
print(sorted(my_list)) #returns a new sorted list
print(my_list,'new') #original list remains unchanged
```
* If `sorted()` function is performed on a tuple, it returns a list
```py
my_tuple = ('d','c','e','a','b')
print(sorted(my_tuple)) #output: ['a', 'b', 'c', 'd', 'e']

# 
```
* If `sorted()` function is performed on a string, it returns a sorted list
```py
my_string = 'python' 
print(sorted(my_string)) #output: ['h', 'n', 'o', 'p', 't', 'y']
```
* If `sorted()` function is performed on a dictionary, it only sorts key values
tuples
```py
my_dict = {'car':4,'dog':2,'add':3,'bee':1}
print(sorted(my_dict)) #output: ['add', 'bee', 'car', 'dog']
```
* If `sorted()` function is performed on items in a dictionary, it returns a list of tuples that is sorted on the keys.
```py
my_dict = {'car':4,'dog':2,'add':3,'bee':1}
print(sorted(my_dict.items())) #output: [('add', 3), ('bee', 1), ('car', 4), ('dog', 2)]
```
* To get dictionary values in ascending order
```py
print(sorted(my_dict.values())) #output: [1, 2, 3, 4]
```
* To get dictionary values in descending order
```py
print(sorted(my_dict.values(), reverse=True)) #output: [4, 3, 2, 1]
```
* Sorted on absolute values
```py
my_list = [1,5,-3,7,-2]
print(sorted(my_list, key = abs)) #output: [1, -2, -3, 5, 7]
```
* A list of list is sorted by the first element
```py
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_llist)) #output: [['add', 3, 10], ['bee', 1, 24], ['car', 4, 65], ['dog', 2, 30]]
```
* Applying lambda function while sorting a list of list
```py
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_llist, key = lambda item :item[1])) #output: [['bee', 1, 24], ['dog', 2, 30], ['add', 3, 10], ['car', 4, 65]]

print(sorted(my_llist, key = lambda item :item[2])) #output: [['add', 3, 10], ['bee', 1, 24], ['dog', 2, 30], ['car', 4, 65]]
```

## Dictionaries
* Used to store data values as key value pairs.
* A dictionary is a collection which is ordered (starting version 3.7), changeable and does not allow duplicates.
```py
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car["brand"])
```
* To get the keys in the dictionary:
```py
for key in car:
    print(key) 

#Output: 
# Ford
# brand
# model
# year

# Alternate to get Keys
print(car.keys()) # Returns an array - dict_keys(['brand', 'model', 'year'])
```
* To get the items (i.e. values) in the dictionary:
```py
print(car.items()) #Returns a list of tuples - dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)]) 
```
* To get key and values from a dictionary:   
```py
for key, values in car.items():
    print(key)
    print(values)
```
* To check if key exists in the dictionary:
```py
if "brand" in car:
    print('The brand exists: ')  
    print(car["brand"])  
```
* To check if key doesn't exist in the dictionary:
```py
if "brand" not in car:
    print('The brand doesn\'t exist')  
```
* If a key doesn't exist in a dictionary and we try to get it using bracket notation, it results in unknown error. To avoid the error, use `get()` instead.
```py
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car.get('owner')) #This will return 'None' which is an empty object.

# To return a default value set by user when an key is not found, set default value like below:
print(car.get('owner', 'not found')) #returns 'not found' if the value is not found.
```
* To update the value of a key, use bracket notation:
```py
print(car["brand"] = 'Toyota')
```
* To add a new key value, you can use bracket notation.
```py
car["color"] = 'Red')
```
* To update the whole dictionary, you can use `update` command
```py
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
```
* To delete an item from the dictionary, use `del` command
```py
del movie['year']
```
* Use `pop` command to remove the value from dictionary and assign it to some variable for a later use
```py
year = movie.pop('year')
```
* The dictionaries can be Concatenated in 3 different ways:
```py
user_list_1 = {'John':35,'Eric':36,'Michael':35,'Terry':38,'Graham':37,'TerryG':34}
user_list_2 = {'Kevin':40,'Tim':35,'Nike':39,'Ahmed':40, 'Kabir':17}
user_list_3 = {'Brian':33,'Reg':35,'Saima':32,'Phillip':45}

users1= {}
users2 = {}
users3 = {}

#method 1: using update
users1.update(user_list_1)
users1.update(user_list_2)
users1.update(user_list_3)
print(users1)

#method 2: comprehension
for groups in (user_list_1,user_list_2,user_list_3) : users2.update(groups)
print(users2)

#method 3: unpacking, only works for 3.5 & later
users3 = {**user_list_1,**user_list_2,**user_list_3}
print(users3)
```
* To get the sum of the values:
```py
print('The sum of the ages: ', sum(user_list_1.values()))
```

## Try, Except & Raise

```py
#try:
    #code you want to run
#except:
    #executed if error occurs
#else:
    #executed if no error
#finally:
    #always executed 
try:
    num=int(input('Enter a number between 1 and 30: '))
    num1 = 30/num
    if num > 30:
        raise ValueError(num)
except ZeroDivisionError as err:
    print(err, "You can't divide by Zero!!!")
except ValueError as err:
    print(err,num, "Bad Value not between 1 and 30!")
except:
    print("Invalid Input!")
else:
    print("30 divided by",num, "is: ", 30/num)
finally:
    print("**Thank you for playing!**")
```

## Classes and Objects
* Keyword `self` refers to the newly created object that is active at the moment. It is used to represent the instance of a class. 
* By using the "self" keyword we access the attributes and methods of the class in python.
* `__init__` is a reserved method in Python classes. It is called as a **constructor** when an object is created from a class. 
* `__init__` allows the class to **initialize** the attributes of the class.

* Example:
```py
class Movie:
    def __init__(self,title,year,imdb_score,have_seen):
        self.title = title
        self.year = year
        self.imdb_score = imdb_score
        self.have_seen = have_seen
    
    def nice_print(self):
        print("Title: ", self.title)
        print("Year of production: ", self.year)
        print("IMDB Score: ", self.imdb_score)
        print("I have seen it: ", self.have_seen)
        
film_1 = Movie("Life of Brian",1979,8.1,True)
film_2 = Movie("The Holy Grail",1975,8.2,True)

films = [film_1,film_2]
print(films[1].title,films[0].title)
films[0].nice_print()
```

## Inheritance
```py
class Person:
    def move(self):
        print("Moves 4 paces")
    def rest(self):
        print("Gains 4 health points")
class Doctor(Person):
    def heal(self):
        print("Heals 10 health points")

class Fighter(Person):
    def fight(self):
        print("Do 10 health points of damage")
    def move(self):
        print("Moves 6 paces")
        
class Wizard(Doctor,Fighter):
    def cast_spell(self):
        print("Turns invisble")
    def heal(self):
        print("Heals 15 health points")
    
    
character1=Wizard()
character1.move()
``` 

## Modules
* [Python Module Index](https://docs.python.org/3/py-modindex.html)
* Using `dir` on a module name provides the name of all the methods available in a module.
* While importing a module, Python looks at several places defined in `sys.path`. We can also add our own location to this list.
```py
import platform
print(dir(platform))
print(platform.python_version())
```
* The imports can be renamed: 
```py
import platform as pl
print(pl.python_version())
```
* To import a specific method from a module:
```py
from platform import python_version, system
print(python_version())
print(system())
```
* The specific method imported from a module can also be renamed as below:
```py
from platform import python_version as pv
print(pv())
```
* Another Example:
```py
import random
random_number = random.randint(0,20)
print(random_number)
```

## Packing & Unpacking (zip & unzip)
* Example:
```py
nums = '1234' 
letters = ['a','b','c','d']
names =['John','Eric','Michael','Graham','Joe']
combo = list(zip(nums,letters,names))
print(combo)
# Now unzip the combo by following command
num,let,nam =zip(*combo)
print(num,let,nam)
```
* Another example using dictionary
```py
keys = 'this parrot is deceased'
values = 'denna papegojan är avliden'
keys = keys.split()
values = values.split()
print(keys,values)
en_sv_dict = dict(zip(keys,values))
print(en_sv_dict)

# Alternate method (known as dictionary comprehension)
new_dict = {key:value for key,value in zip(keys,values)}
print(new_dict)

# Unzipping a dictionary
en,sv = list(en_sv_dict.keys()),list(en_sv_dict.values())
print(en,sv)

# Alternate way to unzip the dictionary (returns a tuple)
en1,sv1 = zip(*en_sv_dict.items())
print(en1,sv1)
```

## Lambda Functions
* Lambda functions are single line functions that can have a name or can be anonymous
* A lambda function always returns a value.
```py
# A simple function
def square(x):
    return x*x
# Using lambda syntax to define above method:    
#name = lambda parameter(s): expression
square1 = lambda x: x*x
print(square1(3))
```

## Reading & Writing files
```py
def read_files(path):
    file_countries_names = open(path, 'r')
    if((file_countries_names.readable())):
        for lines in file_countries_names.readlines():
            print(lines)
    file_countries_names.close()

def write_file(path):
    file_name = open(path, 'w')
    file_name.write('Write something')

def append_file(path):
    file_countries_names = open(path, 'a')
    file_countries_names.write('\nI am new here!')

read_files('read-write-files/countries.txt')
write_file('read-write-files/new_file.txt')
append_file('read-write-files/countries.txt')

```

## PyPI
* The official Python package repository is called PyPI, which stands for Python Package Index.
* Use `pip` to install any package from `PyPI`.

## Virtual Environment
* It is a complete copy of the Python interpreter.
* Allows to have different versions of packages for different applications.
* Use a different virtual environment for each application.
* Support for virtual environments is included in all recent versions of Python
* By running below command Python will use `venv` package, which will create a virtual environment named `venv`. Here:
    * The first `venv` in the command is the name of the Python virtual environment package
    * The second `venv` is the virtual environment name and this can be anything.  
```sh
python3 -m venv venv
```
* After the command completes, a directory named `venv` is created where the virtual environment files are stored.
* To use this virtual environment, you need to activate it using below command:
```sh
source venv/bin/activate
```

## How to declare a package?
* In Python, a sub-directory that includes a `__init__.py` file is considered a package, and can be imported.
* When you import a package, the __init__.py executes and defines what symbols the package exposes to the outside world. 

## Resources:
* [Learn Python for free from Scrimba](https://scrimba.com/learn/python)
* [Learn Python Programming](https://www.programiz.com/python-programming)
* [Python Online Compiler](https://www.programiz.com/python-programming/online-compiler/)
* [Python Tutorial by ScalerTopics](https://www.scaler.com/topics/python/)




