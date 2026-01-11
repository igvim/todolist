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
