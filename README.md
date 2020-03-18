# evolve
The objective is to make a reactive website that constantly updates and presents a "live" graphical simulation of evolving dots. There is a genetic neural network in the backend that would take in some sensory inputs and guide each dot on the speed and direction of movement. Food will spawn randomly.

## Setup

### Start the server
* npm install express
* npm install socket.io
* node app.js

### Connect to the server as a client
* Connect to "localhost:2000/" on a browser

3/18
I cannot figure out how to make non-deterministic mutations.
So far theres
genetic mutations- each time two dots mate, their offspring has roughly the average of its parents "characteristics" and each characteristic gets a 1-10 weight.
or
reinforcement- just give the dots an input array of some sensory information like how far food and other dots are and it learns how to act over time. But this is computationally intensive and hard to implement in a society of dots.
