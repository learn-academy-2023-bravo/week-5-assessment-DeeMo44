# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: 
Calling super in a ruby class gives tells the parent class that it can borrow information from it
like variables and methods.

Researched answer:
The super keyword is used to access a method with the same name from the super class. The class using the
super keyword passes the arguments to the parent class. This allows developers to have greater organization.

https://www.rubyguides.com/2018/09/ruby-super-keyword/

2. What is a gem?

Your answer: 
A gem is a bundle of dependencies for a ruby file.

Researched answer:
A gem in Ruby is a package of Ruby software that gives a developer custom methods. The methods 
in the gem are designed to speed up specific tasks. For example, the date gem gives a developer
access to the date method which could be used creating a calendar or timeline.

https://github.com/ruby/date/blob/master/README.md

3. What is a relational database? Are there other kinds of databases?

Your answer:
A relational database stores info that are related to each other and can be accessed by its rows and columns.

Researched answer:
A relational database houses data points that are related to each other. For example, in PostgreSql, we have
data points that are all related to countries (population, name, gnp, head of state, etc.)

https://www.oracle.com/database/what-is-a-relational-database/

4. What are primary keys? Why are they important?

Your answer:
In Ruby on Rails, a primary key is the id number of an object in a database. It is important because each key is
unique.

Researched answer:
A primary key, or primary keyword, is a unique identifier for a row of data in a table. If were to create a database
with all of my cohorts names, one column would have an ID number, and the other with their names. Each ID number would
be unique because each person is their own person.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
The HTTP Put, Get, -(I forgot this one)-, and delete. They correlate (in this order) to the CRUD actions as Create,
Read, Update, and Delete. 

Researched answer:
The HTTP verbs and CRUD actions corresponds to each other as such:
POST = CREATE ==> create entity
GET = READ ==>  retrieve entity
PUT = UPDATE ==>  update entity
DELETE = DELETE ==> delete entity

https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/http-crud-methods#:~:text=HTTP%20Request%20Methods,with%20a%20different%20HTTP%20method.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:
Validating that the model has achieved its goal.

2. RESTful routes:
There are 7 restful routes that corresponds with a controller#action. the 7 routes perform HTTP verbs.

3. ERB:
ERB is a plain text source code file.

4. Params:
Params means parameters. Parameters in Ruby are variables used in methods to be manipulated.

5. API:
An API (application programming interface) is software that allows different software to communicate.