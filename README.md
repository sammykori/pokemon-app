# 3SC Web Developer Test

## Task

Build a React.js web UI that interfaces with the [Pokemon API](https://pokeapi.co).

This task is designed to assess how you will go about building a web application, at the very least you must demonstrate your ability to write:
* Readable and well laid out code
* A well laid out project structure
* JS or TypeScript / HTML and CSS
* Component / Unit and Snapshot Tests (Where Appropriate)
* Clear Documentation about the project


## User Stories
* "As a user I want to view and easily find pokemon so that I can easily explore the many pokemon that exist"
* "As a user I want to filter pokemon by their [generation](https://pokeapi.co/docs/v2#generations) so that I can find pokemon I am interested in"
* "As a user I want to preview in detail a pokemon so that I can find out all the information around that particular pokemon"
* "As a user I want to compare pokemon so that I can decide if one is better over the other"
* "As a user I want to save my favourite pokemon so that I can easily find them next time I visit the application"


## Getting Started

* The following endpoint provides a list of Pokemon: https://pokeapi.co/api/v2/pokemon/
* You may use any other endpoints and resources provided by the Pokeapi to achieve the user stories.
* Your solution should demonstrate use of version control (git).
* You may use any additional JavaScript or CSS libraries to achieve your solution.

## Submission

* The Submission must have version control history (.git directory) - this is essential so we can see how you went about implementing your solution.
* Can be zipped up and sent to us via email or hosted on GitHub.
* Please ensure that with your solution you include the following documentation (this can be included as part of a `README.md` or separate document)
  * A brief "Getting Started guide" on how to open the project locally
    - Install yarn in your command line
    - Run yarn istall to install all dependencies for this project
    - Run yarn start to start the project 
  * If you used any particular libraries why did you choose them?
   - I used axios to make my API calls because it is easy to make multiple simultaneous requests
   - I used Tailwindcss because it is very easy to add your styling in the same page as your compoonents
  * Did you have any challenges and if so, how did you overcome them?
    - I had some challenges understanding (generations) in the API maybe because I'm not familiar with pokemons  
    - I also had challenges rendering all the data of the pokemon 
    - Time was a huge constraint because I did not have the time design the UI before implementing to use the right UI element to display the information
  * Did you add any extra features?
  - I added a count for favorite pokemons selected
  * If you had more time, what else would you implement?
  - I would improve the UI with modals, pop-ups and drop downs to display all the information of the pokemon 