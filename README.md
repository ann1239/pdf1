The PDF Co-Viewer is a real-time PDF viewing application that I developed using Node.js, Express, Socket.io, and PDF.js. It’s designed to allow multiple users to view and interact with the same PDF document in sync. This app supports two main roles: the Presenter, who controls the PDF navigation, and Viewers, who follow along in real-time.

I created this project to address use cases like remote presentations, online learning sessions, and collaborative document reviews. By enabling synchronized navigation, users can experience seamless PDF viewing where everyone stays on the same page.

Key Features:-

a) Real-Time Synchronization:
I implemented Socket.io to enable real-time, bidirectional communication between the Presenter and Viewers. Whenever the Presenter navigates to a new page, all connected Viewers instantly see the same page. This feature ensures everyone is aligned without manual refreshing.

b) Role-Based Access:
Users have the option to join as either a Presenter or a Viewer. Only the Presenter can navigate through the PDF using “Next” and “Previous” buttons, while Viewers follow along automatically. This makes it easy to conduct presentations where only one person has control, and others can follow passively.

c) Responsive, User-Friendly Interface:
Designed a clean, responsive interface using custom CSS. The app has vibrant, interactive buttons and a polished layout to ensure a professional and engaging user experience.

Technologies Used:-

Node.js & Express: I used Node.js and Express to set up the backend server. Express serves the static files, including the HTML, CSS, JavaScript, and PDF files.

Socket.io: Socket.io enables real-time communication, so changes made by the Presenter are broadcast to all Viewers instantly.

PDF.js: I integrated PDF.js to render the PDF within the browser, making it possible to display each page in a <canvas> element.

CSS: The styling is custom-built to give the app a professional, modern feel, with smooth transitions and responsive design elements.

How It Works:-

Server Setup:
I configured the Node.js server with Express to serve static assets and handle routing. Socket.io is set up on the server to manage real-time interactions.

Client-Side Interaction:
The front end (written in HTML, JavaScript, and CSS) loads the PDF using PDF.js. When the Presenter changes the page, this page number is emitted to the server through Socket.io, which then broadcasts the update to all clients.
Each Viewer receives the page change and renders it immediately, keeping everyone synchronized.
