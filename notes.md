## persist-checked

- [x] read done status from todos
- [x] add localStorage to persist on refresh
  - This doesn't get me checked status because I lose object methods. address this in write-checked
  - also a separate delete todo? OR make you delete the whole project - persists the satisfaction of a clean list
- [ ] SOLID refactor of todo creation

## write-checked

- cannot write checked status. making me rethink writing an entire todo array vs biting the bullet and writing individual ids. I like organizing them by project, though.

Displaying checked status currently works because I'm iterating over an array of objects. I need to figure out how to write the checked state without using an object method, so that can be written to localStorage, and once I do that I just figure out the reverse to get back my array of objects.

I was not writing the checked state because I was only writing todos when they were first added - every change means a new write to the db.

- Figure out whether I can reduce sources of truth?

## new-projects

We'll also need a new project button that, when clicked:

- creates a project form (enter a name)
- creates the new project
- displays the new project

refactoring was indeed a good idea, because now I more clearly see the way all the functions depend on having the project data. The new ToDo button has a form that should write new app data and refresh the page with the new data. The displayed todos will include multiple elements that, when changed, should write to the database, and displaying these states shouldn't be too entangled with changing them.

I imagine this will get worse when I create new projects - I'll want to display all of them upon loading the page, but also be able to delete individual projects (requiring an ID). So projects will have an id and a list of todos.

## takeaways

- event listener callback function _must_ take in the event parameter, even if you do nothing with it. you can access properties of the event target with e.currentTarget
