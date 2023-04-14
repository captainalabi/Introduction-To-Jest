      INTRODUCTION TO JEST Js
Delightful Test Framework Developed and maintained by Facebook.
Jest is uitable for unit testing of functions and APIs.
To install in node:
npm install jest
Modify the package.json as follows: 
"scripts": {
  "start": "node",
  "dev" : "nodeman",
  "test" : "jest"  
}
Make sure your test files are located inside a tests folder and distinguish them with .test.js, e.g myTest.test.js.
Require the function to test in your test file as usual.
Call the function to test and assign the result to a variable.
Test the result against expected using expect functions.
The tests can be written inside describe() and it() just as in wdio or written in test() block directly
Using describe() and it() beautify your codes.
Run with npm test or jest <file path>
      
      --WATCH OR WATCHALL
Jest provides some run options at run time.
To utilize the runtime options, modify the test value with --watch or --watchAll in package.json as follows:
"test" : "jest --watchAll" 
and run as usual, then choose your options as desire when the system prompts you.
Watch is useful for debugging your application as: You can continue to edit your test while run is paused and 
each time you save your codes, it is automatically executed.

THE DONE PARAMETER SYNC MODE
If you wish to run your test synchronously, Jest introduced the done parameter into its anonymous callback to it() or test() function to ensure that tests that
suppose to fail are not passed. To use, pass done as parameter without () and invoke it as done() after the assertion. 
Async/await is also supported by Jest.
