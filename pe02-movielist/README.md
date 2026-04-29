## Input
The user interacts with the web-based application through a drop down menu that shows the movie genre options and the user chooses the desired genre.  Choices are Action, Drama, or Science Fiction. The interaction from this menu are how the use controls the interaction of the app by choosing from the choices in the drop down menu.

## Process
This application uses React as the vehicle for the creation of components and to control the action of the app. useState is the method to control the data. The predefined movie objects is an array stored in state where the objects are move title, move genre, and year of release of the movie. When the use selects a genre, the list of movies is filtered dynamically to meet the choice made. When a move is selected by a click, an event handler function is triggered to handle the request. 

##Output
The output is a display of the list of movie cards shown on the screen of the users device. The list is updated in real time based on the filter as engaged by the user. Each card shows the movie title, move genre, and release year. When the movie title is clicked, an alert box appears showing the title of the movie chosen which confirms the interaction. 