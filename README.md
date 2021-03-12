# Angular-projects

Quick learn challenge: I am going to finish this in 24 hours. Start from March 9th 22:00 - March 11th 22:00 (Sry guys. I lost. Too many thing to catch up here. Plus I have coursework to do :(

* I self-taught Angular framework out of interest and need for building full stack projects in cs4111 and cs6998.

* I built this shopping website and host it on AWS S3! [check it out](http://angular-project-s3.s3-website-us-west-2.amazonaws.com/) .

* The website is not thing special but it contains all the basic functions such as creating, updating, searching, and deleting objects.

* Another than getting myself familiar with angular framework, I also catch up some knowledge about html and css.

* Fun learning process!

## Part 1. Angular  Notes

-- a frontend framework but has similar logic as a backend design

![image](https://user-images.githubusercontent.com/46977839/110383649-9616f200-802a-11eb-9a94-fbe7415edfb6.png)



### 1. Hello world

HTTP Services / APIs:
Endpoints that are accessible via the HTTP protocol.

#### some installation

1. make sure you install node.js by
   `node --version`

2. stall npm
   `npm install -g @angular/cli`  (-g means globally)

3. create a new project
   `ng new hellow-world`  (can only be alphabet and - (dash))

   It will use npm to download 3 party libraries

4. go into hellow-world folder and check it runs 
   `ng serve`

5. open http://localhost:4200/ and can see it is running!

   

#### Project structure

![image](https://user-images.githubusercontent.com/46977839/110383738-b777de00-802a-11eb-8244-01492e874ca3.png)

* e2e: end to end test, automatic test mocking a user

* node_modules: store libraries, put into a bundle during deployment later

* srs: our source code (assets, environment, package.json...)



#### Start coding!

1. [Open Sublime Text from cmder (Windows)](https://medium.com/@pinglinh/open-sublime-text-from-cmder-windows-88f1a7ff63d)  

2. `npm install -g typescript`
![image](https://user-images.githubusercontent.com/46977839/110383809-d37b7f80-802a-11eb-9683-a94f649a1a9b.png)

3. Write a a ts file and compile it as .js file
![image](https://user-images.githubusercontent.com/46977839/110383875-f017b780-802a-11eb-8cef-014db43f95d0.png)


* pls use *let* key work than *var* when defining a variable in a scope ** 

* a note:** when there is a compile error in ts, tsc still can generate a valid js file which compile let to var (old version js)

#### Types in typescript
see in ts-hello file



### 3. Building blocks of Angular Apps

**Components** 

* (what users will see): data, html template, logic for a view. 
*  need a App/root component
* just like different objects

**Modules**: different components block

**pipeline**
create a component -> **register it in a module** -> add an element in an HTML markup

dependency injection:

![image](https://user-images.githubusercontent.com/46977839/110887468-611fcf00-82b8-11eb-8069-c4deb16dd837.png)

Don't forget to register the service in module.provider list.



#### Dealing with css

* when using 
  `npm stall bootstrap --save`

  it will automatically install the 4 version which does not support glyphicon, thus

  `npm stall bootstrap3 --save`

**Http**
angular4 use 
*import { HttpClientModule } from '@angular/common/http';*

