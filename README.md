Simulator is a web based solution to simulate 3D cameras, motion sensing devices for prototyping, developing and testing perceptual computing, augmented and virtual reality application without using a physical device. The simulator is purely based on JavaScript and easily integrates with the device's SDKs. Also, it is platform independent.

Using this simulator, people can conduct workshops, seminars for a larger audience who would be intending to learn a new technology, but wouldn't be having the required hardware (RealSense, Kinect, Leap Motion etc.)

This idea was first presented at JSConfAsia 2015, Singapore.

Link to the talk [here](https://www.youtube.com/watch?v=vgWonzhZIww)

Slides can be found [here](https://docs.google.com/presentation/d/1iA0m4JyN1wfRmW9UuVWwW9gnG9nWFmJV4IzcMtn24ps/edit?usp=sharing)

Currently, this simulator works for a Leap Motion controller.

**Run the following steps:**

 - cd to leapmotion/ directory 
 
 - npm install node app (*creates a http
   server to server files from the public/ directory*) Runs on port 5000
   
 - node websocket (*creates a websocket server to be used with leap.js*)
   Runs on port 3000 
   
 - Open a web browser (Chrome, FireFox) and run
   http://localhost:5000/server/server.html 
   
 - In another browser window/tab run http://localhost:5000/client/client.html 
 
 - The client and server use websocket for communication

