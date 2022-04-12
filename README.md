## Overview

To get a better idea on how to use Request in a modern context, I tasked myself to make a simple web application using an API by fetching and parsing the requested data. 
I also wanted to check my CSS skills, making sure I can proprely incorporate a design choice (Here, they asked to match the design of the app). 
I ran into a few problems structuring the flow of my page, but all in all, an easy and helpful first step to understanding 'GET' and 'POST' methods and calling my data asyncronsouly. 

### The challenge

Users should be able to:

- Generate useful and witty life advice on the click of the button (desktop and mobile)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/quote-generator-using-fetch-BJE5qzzNq]
- Live Site URL: [https://kieransweetman.github.io/advice-generator-app-main/]

## My process

- Having no experience calling an API, I first started learning and experimenting with async functions and familiarizing myself with the Fetch API documentation
- After getting a good understanding, I wrote a simple function that gets the json data, and updates the DOM evertime the user clicks the bottom button. 
- I moved on to the HTML and CSS to structure and design the web app according to the challenge, using the style guidelines frontendmentors.com provides. 

### What I learned

By learning how to fetch data using an APi like Fetch, I now have a better understanding of the basics of HTTP requests. Using an asynchronous function and changing the default cache setting to 'no-cache', I was able to generate a new 'GET' request on the click of the button. Generating a new request was the biggest technical hurdle of this project. 

Moving on to the styling of the page, I had some problems with centering my app and the positioning of certain elements. The button position is relative to the 'form' tag to offset it from the rest of app.  Doing this allowed me to fix it to the bottome of the box and give the card a more cohesive and unique look. 

The 3 examples are below (not in order when mentioned)

```html
       <form> 
        <button type="button" id = "btn" onclick = 'getAdvice()'>
            <img src="./images/icon-dice.svg" alt="button" name = 'dice'>
        </button>
      </form>
```
```
#btn {
    position: relative;
    display: flex;
    padding: 10px;
    top:30px;
    
   
    background-color: hsl(150, 100%, 66%);
    border-radius: 25px;
    border-style: none;
    
}
```
```js
async function getAdvice() {
    const api_url = "https://api.adviceslip.com/advice"
    const response = await fetch(api_url, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit'
    });
    const data = await response.json();
    const { advice, id } = data.slip
```

### Continued development

This project highlighted a few areas to work on: positioning of elements, 'GET' and 'POST' requests using Fetch, and general planning strategies when working on projects. I had estimated that this would take about a day (took about a day and a half).

Next steps will be to incorporate a framework like ReactJs to make usuable and scalable components. 

### Useful resources

- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API] - Classic MDN on Fetch







