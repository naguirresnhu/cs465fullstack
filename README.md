# cs465fullstack
CS 465-Full Stack Development with MEAN

Architecture

**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**

The Express portion of the site uses Express, HTML, and JavaScript to handle server-side requests. Routes and controllers process browser requests, serving static HTML or rendering Handlebars templates with database data. In contrast, the Angular SPA delivers the entire application to the client on the initial load, with all rendering and logic executed client-side in the browser. API calls to the Express backend  to the fetch data only when needed. Unlike Express, which requires server calls for each page load or refresh, the SPA’s initial load is slower but enables seamless client-side navigation without further server requests for page changes.

**Why did the backend use a NoSQL MongoDB database?
Functionality**

NoSQL MongoDB allows for high scalability because data does not have stored a predefined structure. The Traqvlr Getways application is doing most of the heavy lifting on the angular or front-end portion. JMongoDB is an excellent tool to utlize JSON documents. 

**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**

JSON is format structure that uses many programming languages to exchange data. Javascript is a full programming language that can use JSON's to call/define an object. JSON uses API's to tie in the frontend and backend of a SPA. Using localhost and Express, the JSON works through API's to format requests that query a database like  MongoDB.  

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Testing**

Using UI components like handlebars greatly improved the effciency and functionality for the full stack application. Handlebars allowed for each of the various partials including headers, footers and specific items on the page to all have the same format. Using models and controllers helped the MongoDB speak effectively with the full stack program and allow for easy modifications to the database without exiting the frontend application. The static site would be updated and features like adding a edit trip button allowed for admin to easily configure the site with new data. 

**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Reflection**

HTTP methods define various ways a client interacts with a server, with common ones being GET, POST, PUT, and DELETE. API endpoints enable these interactions by specifying the server routes clients can access using these methods. In the full-stack application, security involves authenticating users and issuing a JSON Web Token (JWT) via the `AuthenticationService`, allowing access to protected endpoints on the Express backend. 

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

The course challenged my critical thinking and technical skills which I believe are both vital to a successful career in this industry. I have a greater understanding of the static and nonstatic components that go into creating an application. I find it helpful to have hands on experience with UI tools like handlebars and controllers to make tasks easier and more functional for both the user and the developer. I can say I have had experience with industry appropriate tools such as Postman and Node.js that will be encountered and needed to be understood in order to complete work assignments in the future. 

The skills I have mastered in this course is patience and writing effective code using industry standards. I made a great effort to include comments that would help explain the logic behind the algorithms used in the code. Taking the time to debug is helpful to avoid large issues down the future that would halt progress. I tried to check every couple of lines to make sure there were no errors that would affect the program. I appreciate the professor including the videos as even sometimes in the field I am going to have to improvise to solve a problem. In this industry trying different options is not always a negative decision. 
