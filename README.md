---
Title: Basic Command line
---
# Basic command line for this project
## run dev 
npm run dev
## run test
npm run test
## run specific test file
npm test -- tests/sample.test.js
## curl post with json body 
curl -X POST -H "Content-Type: application/json" -d '{"values":"1,2"}' http://localhost:3000/total