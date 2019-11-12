/*
This file will be included all over the place. Essentially, in a javascript file, we can refer to another javascript file's stuff
as long as that javascript file is included in the html documents earlier. So, pretend this file is included in all the other JS
stuff.

TODO:
> define struct for storing user data, doesn't have to be encrypted as long as we don't actually take anybody's real data
> define dictionary mapping usernames to instances of that struct
> write a function that will run on initialization which will try to load information on a current user from current-user.txt
-> The previous line is necessary so that we can tell who the current user is
> write a function that will run on initialization which will try to load a pre-existing usernames dictionary + pre-existing userdata
from the file users.txt. Can be part of the same function as the previous line.
-> The previous line is necessary so that e.g. registration.js can run properly.
> write a function to log the user out. Should blank current-user.txt and send the user to the login 
page via a document.location.href = newUrl call
> write a function to log the user in. Should take as argument a username and write the appropriate userdata 
from users.txt to current-user.txt
> write a function to modify the userdata for a username. Should take as arguments all the things that we ask for on the registration
page, write everything but the username into a struct, and replace the struct that the username currently maps to with the new struct,
by way of writing the new struct to users.txt (and possibly current-user.txt?)
*/