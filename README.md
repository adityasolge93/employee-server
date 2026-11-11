# Employee Server
TBD

## How to Create and Setup Express Backend
1. Create a folder for the server.
2. Run `npm init -y` command at the root of the folder to create empty node project.

## Environment Variables
```
PORT = 5001
MONGODB_CONNECTION_URL = mongodb://localhost:27017/coe-fsd-employee
```

## Folder Structure
1. src: Source code of the app, containing business logic or every code that you write for your app.
2. src/controllers: Its the entry point of the REST/API request. It takes care of taking the request input, processing it, and sending the response.
3. src/dao: These are responsible for interacting with the databases. It stands for Data Access Object.
4. src/middleware: These are the files where you keep the code which needs to run before multiple files or API.
5. src/routes: This is where your api endpoints live.
6. src/util: Any utility function needed by the app.
7. src/manager: This is where the core business logic live. 
8. src/service: This is where calls to external service like AWS live.

## Practice Problems
### Day-01
1. Learn difference between REST APIs and https based APIs.
2. Read and learn commonly used HTTP response code.

### Day-02
1. Comment out `app.use(express.json())` line from server.js and then invoke the API via postman.
2. Implement rest of the employee APIs.

### Day-03
1. Implement rest of the DAO methods using MongoDB instead of in-memory database.
2. Fix the failing authController code where it is not able to fetch the employee data by email even though the data exist. Hint: It has to do with the behaviour of Mongoose library (especially how it handles naming of the collection).