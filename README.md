Live Link - https://mjh-shikder.github.io/A-05-Emergency-Hotline/


**Answer 1**
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is
getElementById selects a single element by its ID.
getElementsByClassName selects all elements with the same class name. 
querySelector Select the first element that matches a CSS selector.
querySelectorAll Select all elements that match a CSS Selector.





**Answer 2**
Creating and inserting a new element into the DOM usually takes 3 steps
First, create a new element using document.createElement("div") 
second set its content div.innerHtml = `<p>Hello world</p>`
Third, insert this new element into the DOM  title-container.appendChild(div)





**Answer 3**
Event bubbling is a concept in the DOM where an event that occurs on a nested element first runs on that element, and then bubbles up or propagates through its parent > grandparent > document > window.
It works when an event is triggered: 
target phase - the event is first executed on the element where it was triggered, like a button you clicked. 
bubbling phase - then, the same event is passed upward to all parent elements one by one until it reaches the root or window. 






**Answer 4**
Event delegation is a JavaScript technique where, instead of adding event listeners to multiple child elements, you can add a single event listener to their parent element, and use event bubbling to handle events on the children. 
It relies on the fact that events bubble up through the DOM hierarchy. When an event happens on a child element, it travels up to its ancestors. 
It is useful for improving performance instead of attaching listener to potentially hundreds or thousands of child elements, you just use one  on the parent. This saves memory and improves speed.
If new child elements are added later, they are automatically covered, since the parent listener still works. Without delegation, you just need to add new listeners manually. 
Another usefulness of delegation is fewer event listeners and less clutter in your code. 





**Answer 5**
The preventDefault() and stopPropagation() are used in event handling, but they serve very different purposes. 
preventDefault(): prevent the default action that the browser would normally do for the event. Usage: when you want the event to happen without its default browser behavior. 
stopPropagation(): Stops the event from bubbling up or propagating through the DOM.  By default, when and event happens on an element, it bubbles up to its parent elements, but when you want only the specific element's event handler to run, it comes to save. 

                  
