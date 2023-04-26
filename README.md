# text-reader
Group project for Natural User Interaction. Eye tracker and gestures to interact with text
CEN4725/5726 Natural User Interaction
Course Project Final Paper

Group Members:
Amanda Cruz						Adam Slavny
Carolina Garcia-Romaguera				Andres Wolfe

Section: Undergraduate
 Gesture Based Text Reader
Prototype Screenshot






Introduction
Our project, Gesture Based Text Reader, utilizes eye and hand gesture recognition to view and scroll through files in a touchless manner. This will directly benefit users who are unable to physically touch their screen, for instance, while cooking or playing an instrument. Text Reader aims to solve the issue of user frustration by creating a gesture based web application to view files. 
Text Reader’s use of natural input prioritizes the user interaction and experience. Designing natural and implicit interaction systems with the individual user in mind is the ultimate goal. Having the ability to design using natural input allows users to positively interact with the web application. To improve interaction, we interpreted natural behavior cues and motions that would best align with our project’s plan. 
Iterative Design and Development Process
Initial Design
While developing our initial design, we discussed and asked possible users the gestures they would utilize when scrolling or flipping through a website or ebook in a touchless manner. Additionally, we interpreted and researched common gestures individuals would perform to scroll or flip through pages with a touchless based application. For instance, users using their full hand or two fingers to zoom-in, zoom-out, or flip through a page(s). 
When deciding on NUI commands to support in our prototype, we considered the tasks, actions, and scenarios that our users will be performing with the interface. For users who have limited arm mobility, body gestures are less practical so we decided to use pupil movement to decide when to flip and scroll through pages. This would also benefit musicians, as they wouldn't have to shift their focus from playing their instrument to flipping the page. The NUI would simply flip the page as the user's eyes reached the bottom of the page. 
Our design is based on personas, storyboards, informal interviews as well as research. The personas we created are those who would directly benefit from our NUI web based application, which extends to a wide range of people. With this being said, there are a countless number of people who cook either once in their lives or numerous times everyday. Additionally, many have once played or regularly play an instrument, the members of our team included. Although not as prominent within our team members' knowledge those with limited mobility in their arms would benefit from using an eye gesture recognition text reader. Shown below, is a visualization of our personas and sample storyboard. 



























We started with 4 simple gestures, looking up, which scrolls up on the current page. Looking down which scrolls down the current page. Looking to the right goes to the next page and looking to the left goes back a page. 

Developing the First Prototype
For the development of our prototype we conducted weekly meetings and delegated individual tasks that we would accomplish prior to our next meeting. In our first meeting we created our github repository, decided on utilizing javascript and html as our main programming language, and brainstormed ideas on how to implement our text reader. In the meeting to follow we found open source projects and frameworks, such as MediaPipe and GazeTracker. 
Inorder to clarify and determine what each team member will complete and employ we used a kanan board. We also created a second kanban board to keep track of bugs that we encountered while implementing our design. This allowed us to effectively communicate solutions for any found bugs or issues along the way. 
The framework we used was MediaPipe, an open-source cross platform framework for building machine learning pipelines. It includes a range of pre-built models and tools for implementing gesture recognition and other computer vision tasks. MediaPipe provided resources for hand and eye gesture recognition. In addition, we used GazeTracker, a software designed to facilitate eye tracking. This gave us the ability to precisely record points tracked when deploying our prototype. 
We also created a system architecture diagram showing the main components of our first prototype as shown below.

Evaluation Plan (Evaluation Overview)
The goal of our Text Reader is to open and navigate a PDF file using solely your eyes with the added benefits of minimal errors and maximum efficiency. To achieve this, the system would need to accurately track the user's eye movements and respond to them quickly and reliably while also providing an intuitive user interface that enables users to navigate the PDS quickly and precisely. By prioritizing accuracy and efficiency in the eye tracking technology and user interface design, the Text Reader can provide a seamless and productive reading experience for all users. 
Some possible quantitative questions to ask are: what is the average task completion time with the text reader compared to reading a PDF using a traditional method? How many errors occur when using the Text Reader compared to reading a PDF using a traditional method? Some possible qualitative questions are: How easy is it to navigate a PDF using the Text Reader? What are the pain points and areas for improvement identified by users?
Viable metrics we will use to assess the success of reaching our goals will be time to learn, error rate, as well as user satisfaction. In addition, we will ask future users to rate their experience when using our NUI prototype. Since this would be used in a real world scenario we would need to use multiple evaluation techniques to acquire the best understanding of the impact of the system on work practice. 
We will run evaluations for the Text Reader in an actual work environment because this will provide the most ecologically valid results, as it allows the testing of the system in the context of actual work tasks and workflows where distractions can occur.  For instance, in their homes and or classrooms. Although it is harder to collect quantitative data our software collects data points to visualize common tracking gestures. The participants will be asked to open a pdf document with a minimum of 2 pages via the test reader in order to test all functionality including flipping through pages. They will then have to navigate through the entire document without using the mouse of the computer.
Actual end users will participate in these evaluations so that we can design for their natural interaction. Our application is meant to be interacted with by all, not only those familiar with the frontend and backend process of gesture recognition and expert designers. Having a broad set of users will allow us to better understand the improvement needed to perfect our recognition features. 
Evaluation Findings – Critical Incidents

Tracking Calibration Confusion (Bad)
Many users experienced issues calibrating the software. The eye tracking software is calibrated by clicking the screen where the user is looking, but we have nothing in our program that conveys that information. We should add instructions of some sort so that users are able to better make the software more accurate. 

Accurate Eye Tracking (Good)
After being told how to properly calibrate the eye tracking software, some users noted how accurate it was at tracking their gaze. This is great since it will provide a more accurate and precise application. Would be made better if the users had more information on how to properly calibrate the model.

Slow Page Turning (Bad)
Users complained about the time it took for the pages to turn once they were done reading. We implemented the page turning to have to hold the gaze at the right side of the screen for a moment in order to limit false page turns. A solution could be to have this moment be quicker once a user is at the bottom of the screen. 

Limited Document Options (Bad)
Some users complained that they were not able to use other document types. Our program uses PDF.js in order to view the documents. Perhaps in the future we can implement accepting other document types. 

Ease of Use (Good)
Users found the UI to be easy to navigate. They had no trouble selecting and opening their documents, as well as changing pages. 

Camera Distraction (Bad)
Some users found the camera to be distracting. The camera was included to confirm that the eye tracking software is running properly, but it isn’t actually necessary. In the future we can add an option to disable the camera. 
Lessons Learned – Planned Improvements to Prototype

For improvements to our prototype, we plan on modifying the page turning mechanism to be more intuitive. We can lower the timeout window for turning the page when the user is at the bottom of the screen, since they will more than likely be wanting to turn the page at that point, removing the need for the false positive precaution. We are also going to add functionality so the user has the option to have the camera displayed or not. We will also be adding an instructions page so the users can better train the model. Additionally, we are going to add hand pose page turning functionality.
Developing the Second Prototype

	For the development of our final prototype we continued our weekly scrum meetings to ensure that our second prototype pertains to our expectations. 

The first change we made was adding the option for hand tracking. The original functionality did not include the option for hand tracking, which made it difficult for the use cases that would use this application while cooking.  We got this idea by conducting a survey and gathering feedback from users. Many users mentioned they would like to be able to navigate the pdf with hand gestures as they felt it would provide more flexibility and a more natural interaction. We decided to incorporate this in our second prototype because it gives users more control over how they interact with the content. 
The second change our team made was changing the way the user flips pages. Rather than having users look at the side of the screen for a couple seconds to flip the page, the page will flip once the reader’s eyes reach the bottom of the screen. This allows for a more natural intuitive interaction. This effectively makes the interaction more seamless and quicker.  We implemented this idea based on the feedback we received in our first prototype presentation. 
The third change we made was to incorporate a few buttons for the features on the top right of the screen. One to switch from eye tracking to hand tracking, one to pause the functionality, one to remove the camera from the top left of the screen, as well as one for instructions on how to use the application. The original functionality didn't give the user clear expectations on how to use the features leaving the users unsure of how to navigate and utilize the interface effectively.  The new functionality includes this tab so that users can customize their own experience with the application. The idea of this change came from user feedback. Some users didn't like the camera at the top left because it covered too much of the pdf so we added the option of taking it off. Other users expressed confusion about how to use the application so we added a button that displayed a step-by-step instruction of the application. A few users suggested adding a feature to pause eye-tracking functionality in case the user needed to step away from the computer momentarily, to prevent false input.

Change 1: Add hand gesture recognition to flip through pages
Change 2: Flip page faster when eye gets to bottom of screen
Change 3: Implement a tab with available features
Final Architecture
System Architecture



Code Modules

Index.js
resetCurrentPDF() - resets the page to have a null file with 1.5 zoom
loadPDF(data) - takes data generated from a FileReader(), resets the page using resetCurrentPDF, then loads the new pdf using the passed in data. Sets the current page using renderCurrentPage() and also gets the amount of pages
renderCurrentPage() - this function is what actually renders the pdf page using the viewPort and the dimensions of the viewer. This function is also called when going to the next and previous pages
instruct() - this function has the base64 text for our instruction pdf. All it does is turns this string into binary, makes it into a blob which can be read as a DataURL which then can be passed into loadPDF()
Event Listeners
switchModes - ends the webgazer module or begins it. This the pause buttons functionality
openFile - creates a way to input a file after clicking a button
input - listens for a new file to load. This triggers a new loadPDF call if the file selected is a PDF
zoomButton - this is how we are able to zoom in and out of the pdf, it calls renderCurrentPage()
Next and Previous - sets the current page to the next or previous then renders it

Script.js
webgazer.setGazeListener - This is how we are activating the webgazer functionality. Inside of this we are getting the prediction points and making the needed actions. If the looking point is at the bottom the page will scroll down, at the top it will scroll up, and next and previous pages for right and left with the necessary timings.
togVideo() - This function is how we toggle the video preview to be displayed, it is simply setting the style to none or block
pause()- This pauses and resumes the eye tracker functionality using webgazer.pause() and webgazer.resume()

Track.js
startVideo() - This is what starts the video stream to be read by runDetection()
toggleVideo() - This function starts is being used by the start and pause button to start the functionality if it’s not currently on and can pause the functionality
runDetection() - This is what is called once the video stream begins and where the predictions are being made. Our model filters the predictions to find point and closed labels. If it finds these then the action of going to the next or previous page is made. There is a three second delay for these actions to be able to take place again.
handTrack.load - this is what is called when the modes are switched and it automatically starts the video feed to being making predictions
visibility() - This function simply hides or shows the video preview

Third-Party Tools

The third party tools we used in our project include WebGazer, PDF.js, HandTrack.js, and GitHub. HandTrack.js and WebGazer are both accompanied by the TensorFlow task library as well as the TensorFlow model maker. 

WebGazer - Eye tracking model built using TensorFlow and Mediapipe that infers eye-gaze locations in real time.
https://webgazer.cs.brown.edu/

PDF.js - Mozilla supported PDF document viewer.
https://github.com/mozilla/pdf.js#online-demo 

HandTrack.js - Uses an object detection network model via TensorFlow to detect hand poses.
https://victordibia.com/handtrack.js/#/docs

GitHub - Used to manage code history.
https://github.com/
Source Code
GitHub: https://github.com/adamslavny/text-reader
Video Link: https://clipchamp.com/watch/V5KcQu6esoh

Future Work 
If we take our product to production we would work on the eye and hand-tracking algorithms to improve accuracy and responsiveness. We would also add a few additional features such as highlighting and other annotation tools. Once the backend is fully developed we would further implement the front end to be more user friendly and visually appealing. The estimated amount of work to finalize our intended level of responsiveness would be around a week if that is our single task. The front end portion could take roughly a day to improve visual functionality. With this being said, our team would expect two weeks with the regard of bugs or any unexpected issues for our prototype to be a viable application usable by our target audience. 
