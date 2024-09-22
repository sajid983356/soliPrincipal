Rahul: Do you really understand and ever implemented the Solid principal?

Anjali: Yes Rahul.

Rahul: Really Anjali? Are Your Sure? I am asking for real time application, not for the explanation to give in interview?
Anjali: aaaaaa, I dont remember Rahul !. Actually Na,I went through the multiple articles, youtube videos but didnt get real life example, most of examples are like using Class Shape or Class Vehicles, which are not real life example hence finding difficulties to connect with ours (developer) day to days user case,

Rahul: When Rahul is here, why are you fear Anjali. Dont worry, hence I am writing this articles to explain the SOLID principal completely based on real use cases.
Anjali: you are Awesom Rahul !

Rahul: I Know, I am the best Anjali. Ok, let me Start with SRP (Single Responsibility Principal)


SRP in Single Statemnet:
class, module, or function should have one and only one reason to change, meaning it should have one and only one responsibility or job.


When to Consider Using SRP?
You should consider using the Single Responsibility Principle whenever:
1. When a Class or Function is Doing Too Much
2. When You Encounter Code That’s Hard to Understand and Maintain 
3. When a Class or Function Has Multiple Reasons to Change
4. When Unit Testing Becomes Difficult
5. When You Notice High Coupling and Low Cohesion
6. When Maintaining or Updating Code is Risky

Anjali: I am still not getting Rahul.

Rahul: wait na, I am explaining with the example.

Anjali: ok, ok, pls continue

Rahul: As you can see, in before/index.js, all the code is written in single callback function, i.e input validation, authentications and response schema. 
0. If any input fields changes, then whole callback function wil get impacted 
1. Now imagine, we need to integrate new authentication like okta, azure, DB authentication then  we have to update the authentication methods means whole callback functions will get impacted
2. If any response schema changes, then again whole callback function wil get impacted
3. writing a unit test cases are also harder and maitainable.

Hence, we will convert given example via SRP princiapl.

As you can see in After/index.js function, I have divided the main function into three function i.e authenticateUser, validateInput and getUserData where each functions having one and only one responsiblilty.

0. If any input fields changes, then only validateInput function gets change, which dont impacted the other functions.
1. Now Imagine, here, if new authentication like okta, azure comes then only authenticateUser function will get changes, which dont impacted the other functions.
2. if any response schema changes, then only getUserData function gets updated, which dont impacted the other functions.
3. writing a unit test case is also easier here.


Rahul: Anjaliiii, got it now?

Anjali: yes Rahul, can you give more example,

Rahul: definately Anjali, Lets take another example i.e Notification Services.

Example 2: Notification Services,

Rahul, As you can see, in example/two/before/index.js, all the code is writtern in single callback functions i.e. input validation, formatting message, sending notification, database save and response schema.

0. Again, If any input fields changes, then whole callback function wil get impacted 
1. if message format changes, then again whole callback function wil get impacted 
2. if any sinlge funtions changes, i.e sending notification, database save and response schema, then again whole callback functions get impacted. 
3. writing a unit test cases are also harder as well. correct na Anjali?

Anjali: Yes Rahul !,

Rahul: How to solve it?
Anjali: lemme tell, SRP Princiap? correct na?.

Rahul: Yes, we will convert given example via SRP princiapl.

As you can see in example/two/after/index.js, I have divided the main function into four function i.e. validateInput, formatMessage, sendNotification, saveToDatabase and getUserData where each functions having one and only one responsiblilty where sendNotification function further sub divided into sendEmail and SendSms.

0. If any input fields changes, then only validateInput function gets change, which dont impacted the other functions.
1. if message format changes, then only formatMessage function gets changes which dont impact other functions.
2. if any sinlge funtions changes, i.e sending notification, database save and response schemes wont impact other functions as well.
3. writing a unit test case is also easier here.

Rahul: Anjali, got now?

Anjali: Yes Rahul, you are awesome, but still, can you pls give more example.

Rahul: I know Anjali, I am the best. need more example, dont worry, let me give three example more.

Anjali: Awww ! Yor are so sweet Rahul.

Rahul: ok ok, dont divert let me explain three 3 more example.




____

Example 3: Order Processing Services


Rahul: As you can see, in example/three/before/index.js, all the code is writtern in single callback functions i.e. order validation, inventory check, total price, process payment, send notification and final order details.

Rahul: Again if any sinlge funtions changes, among them , then whole callback functions get impacted.

Anjali: yes

Rahul: Then, How to solve it?
Anjali: ohh, i know it. lemme tell, SRP Princiap? correct na?.

Rahul: Yes, we will again convert given example via SRP princiapl.

As you can see in example/three/after/index.js, I have divided the main function into six function i.e. validateOrder, checkInventory, calculateTotal, saveToDatabase, processPayment, sendNotification and processResponseSchema where each functions having one and only one responsiblilty.

Anjali: I got it now. you are the best Rahul.

Rahul: I know, I am the best. Next week, I will explain the OCP (open close principal).

Anjali: Aww, so sweet. Thank you Rahul.

Rahul: your always  welcome Anjali.