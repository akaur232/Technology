# Technology


This is a simple website which user to see the content fetched from different APIs. In this user can use various endpoints to see the data. User can explore frequently asked question and login for any query.

Link: https://cpsc2600-akaur232.herokuapp.com/

Instruction to run: install the zip folder and then install node_module file -> then just simply run 

  npm run dev

  npm run watch

in the console the it will work finely.


Feature: I tried to include as many features i can add to make this website working. User cannot login with same email again and again.

It is a pretty simple website in which user can simple click on FAQ to see the answer. Post any question which will b makred as not answered. In Contact us form user and simply write any query I am going to same their email and reply them as soon as possible.

API: 
post '/question' : used to post the question, sends no response, expected body of the req - object with question, it is used when user post the question

get: '/question' : used to get all the questions, it simply send data to the client in the format of list(Array), it is used when loading the page and it loads all the question

get: '/api/v1/' : handeled by router

post: '/api/v1/info' : used to post the info, sends json response, donot allow user to re-login with same email. expected body of the req - object with info, it is used when user submit the information

get: '/api/v1/info' : used to get the data , sends json response, gets what is stored n the mongoose , it is used when user presses Information link

get : '/api/v1/req' : used to get the data , sends json response, gets what is stored n the mongoose , it is used when user presses request link

post: '/api/v1/req' : used to post the req, sends json response, expected body of the req - object with question, it is used when user submit the request.

get: '/api/v1/allInfo/:email' : used to get the data associate with email , sends json response, gets what is stored n the mongoose , i didn't used it.

get: '/api/v1/allReq/:email' :used to get the data associate with email , sends json response, gets what is stored n the mongoose , i didn't used it.

get: '/api/faq' : to get question from the API,

