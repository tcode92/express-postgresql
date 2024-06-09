This repo is to demonstrate that one problem can have many solutions.

Other solutions are welcome.
### How to use
1. ```git clone https://github.com/tcode92/express-postgresql.git```
2. ```cp .env.example .env```
3. edit .env file with with you database connection settings
4. run the server
   - ```npm run start:1``` <strong>Async</strong> async-wrapper-1
     
     Use an async IIFE, await the db connection to be established and start express server.
   - ```npm run start:2``` <strong>Async</strong> async-wrapper-2
     
     Use an async function `main`, await the db connection to be established and start express server.
   - ```npm run start:3``` <strong>Async</strong> async-wrapper-3
     
     Start database connection and uses `.then` to pass the database client to `startServer` function.
   - ```npm run start:4``` <strong>Sync</strong> no-async-wrapper
     
     Implements its own `query` method in `Persistence` class that checks if the database client is connected, if not, the connection will be established before executing the query. 
   - ```npm run start:5``` <strong>Sync</strong> no-async-wrapper-mp

     Override (Monkey patch) the `query` function of the client, checks if the database client is connected, if not, the connection will be established before executing the query. 
   - ```npm run start:6``` <strong>Sync</strong> with-pool

     Use postgres `Pool`, it's sync already, no need to do extra stuff for it to work.
   - ```npm run start:7``` <strong>Sync</strong> how-i-would-do-it
  
     How i would solve this problem if i had to, added graceful shutdown as a bonus. Also use `Pool`

### Test
1) Run any server
2) npm test.js
