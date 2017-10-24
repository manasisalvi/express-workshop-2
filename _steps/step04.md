---
layout: step
number: 4
title: Communicating with the server
permalink: step04/

keywords:
  - term: handler function
    define: A function that receives requests and tells the server how to respond to them.

  - term: URL Path
    define: |
      The part of the URL that comes after the hostname (and port if specified). It indicates the specific resource that the request relates to.

      E.g. `http://example.com/foods/chocolate` the path is `/foods/chocolate`.  

      E.g. `http://example.com` the path is `/`.

  - term: route
    define: The mapping between a **URL path**, a **request method** and a **handler function**.

  - term: endpoint
    define: A **URL path** which corresponds to a particular route.   

  - term: routing
    define: The process of determining how to respond to a request on a given **endpoint**.

  - term: get()
    define: "One of the Express functions used to add routes in Express. Takes two parameters: the URL path, and the handler function."

  - term: send()
    define: The Express method used to send information back to the client from the server. Updates the response object.

  - term: HTTP Request Methods
    define: |
      A request method is a hint to the server from the client about the expected type of response.  There are nine different methods but the most commonly used are GET and POST.

      <https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods>

---

So our Express `app` object is listening for requests, but how will it know which requests to respond to and what to do when it does?

To do this Express keeps a list of items called 'routes'.  

Each route has three components:

1. A HTTP **request method**
2. An **URL path** (AKA **endpoint**)
3. A **handler function**

When the server receives a request, it looks at the request's URL and request method.  If it has a route that matches both then it reponds to the request by running that route's function.

This process of matching a request to the right **handler function** is called "routing".  

We add routes to our server to tell it which requests to respond to, and what to do for the response in each case.

## Adding a Route

Express has a function for each **request method** for adding routes.

To add a route, you call the appropriate function with the parameters of the **URL** and your **handler function**.  

Let's see adding a GET route in action.

Update `server.js` like so:

```javascript
var express = require('express');
var app = express();

app.get("/hello", function (request, response) {
  response.send("Hello World!");
});

app.listen(8080, function () {
  console.log('Server has started listening on port 8080. ');
});
```

So as before, but we've added a route for GET requests to the `/hello` endpoint which just sends the simple text response of 'Hello World!' back.

Make sure your changes to `server.js` are saved.

Now in your terminal press `ctrl + c` to stop your server running and run your server again with `node server.js`.

You will see the "Server is listening" message again.

So now that it's running, how do we send a GET request to it?  By using our trusty web browser of course.

Open a new browser window or tab and type in the address below, replacing **USERNAME** with your Cloud9 username and **WORKSPACE** with the name of your workspace:

<pre><code>https://<b>WORKSPACE</b>-<b>USERNAME</b>.c9.io:8080/hello</code></pre>

Then press ENTER and you should see the "Hello World!" message displayed in your browser like a webpage.

[INSERT SCREENSHOT]

Everytime you request a webpage in your browser, it is doing a GET request.  Sending GET requests is probably the most common daily activity in the world today.  :smile:

## Looking more closely at handler functions

The second parameter we supplied for the route was a **handler function**.

A handler function is just a regular Javascript function which `app` will invoke when it matches that route.  `app` passes two parameters to it as well: one that contains the request data, and one to use to send a response.

Let's look at the handler function from the `/hello` route above:
```javascript
function (request, response) {
  response.send("Hello World!");
}
```

`request` contains all the information about the request that matched this route.  We don't use it in this example.  There is a massive amount of information in `request` and we will talk about this more in step #7.

`response` is what we use to send a response back to the client.  It has several different functions that we can ue to do this.  In this example we used `response.send()`.

Exactly what steps you perform in each handler will depend on your application and the specific route that it belongs to.

## Try it yourself

Now you know a little more about routes and handler functions, try adding this new route yourself.

Here's what you need to know:

 * request method is `get`
 * the endpoint is `/chocolate`
 * the reponse should be `Mmmm, chocolate ...`

Test it by going to in your browser:

 * For Cloud9: `https://WORKSPACE-USERNAME.c9users.io:8080/chocolate`
 * For local: `https://localhost:8080/chocolate`


Check the solution below if you get stuck.

```javascript
var express = require('express');
var app = express();

app.get("/chocolate", function (request, response) {
  response.send("Mmmm, chocolate ...");
});

app.listen(8080, function () {
  console.log('Server has started listening on port 8080. ');
});
```
{: .solution }