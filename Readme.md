# SLIDESHOW PROJECT (KIBO SCHOOL)

## Overview: 
This project allows users to view separate content of a page in a slideshow format.

## Instructions
1. Open the website [here](https://write-a-readme-albie01.tk5-web.repl.co/)
2. Wait for the content to load
3. Click anywhere on the screen to view the next item in the slide show
4. After you have viewd the last item, the content disappears.
5. Congrats! You have completed the slideshow
   
## Code Description
1. The index.html file has the content required for the slideshow (
   and each individual content has the class ".s-1, .s-2, etc")
2. The style.css file allows us to provide style for the content added in the html file.
Here, one major style was added, the .hidden and style which disallows the display of content on the webpage.

3. I added this class to all the sldeshow content except the one with class ".s-1"
4. At this pont, the current content being viewed is the content with class ".s-1"
5. The script.js file allowed me to add interactivity to the page.
6. I added a variable called curentSlide which is initialized to a value of 1.
7. I then added an event listener to the body element such that when the body is clicked,
   a. The console displays "clicked"
   b. The current value of the variable "currentSlide" is also displayed
   c. The content being displayed currently ie (".s-" + currentSlide) is 
      hidden ie (the .hidden class is added to its class list, in this 
      case, .s-1)
   d. The value of currentSlide increases by 1
   e. The content that follows now has the .hidden class removed from its 
      class list and can now be displayed ie (".s-" + currentSlide has the 
      hidden class removed from it, in this case, .s-2 since currentSlide 
      now has a value of 2)
   f. This process is repeated every time the body is clicked until the 
      slideshow content has been exhausted

8. The Javascript code is described below:
   ```
   var currentSlide = 1;

  document.body.addEventListener("click", () => {
  console.log("clicked")
  console.log(currentSlide)
  document.querySelector(".s-" + currentSlide).classList.add("hidden")
  currentSlide = currentSlide + 1
  document.querySelector(".s-" + currentSlide).classList.remove("hidden")
})
   ```
  
 