import Whatsnew365 from '../img/whatsnew365.png'
import SpaceTime from '../img/spacetime.png'
import MovieApp from '../img/movie_recommender.png'
import OSAapp from '../img/osa_app.png'
import Quoridor from '../img/quoridor_app.png'

let projects = {
    "Whatsnew365": {
        "company": "@project",
        "date": "Fall 2020",
        "text": "I built a full stack web platform that allow users to listen to topics and tweets of their choice from Twitter   For example, if I want to see what is happening in the Premier League, politics, and New Year event, I could provide these  keywords in the web app and then get back streams of live tweets on these topics. Picture on the right shows this example. I used Node.js and JavaScript for both the frontend and the backend. Click the link in the project name to visit my github repository of this project.",
        "tech": ["JavaScript", "Node.js", "HTML", "CSS", "React", "GIT", "Express", "Docker", "Kubernetes"],
        "image": Whatsnew365,
        "github": "https://github.com/andrewta999/Whatsnew365"
    },
    "SpaceTime": {
        "company": "@project",
        "date": "Summer 2020",
        "text": "I built a complete social media website that allows users to post, like, and comment block messages. User can also post images and follow other users on the platform. I maded this website with JavaScript and Node.js. The frontend was maded with React library, and MongoDB was used to store the data. The project was deployed on the Heroku platform and is public to any visitor.",
        "tech": ["JavaScript", "Node.js", "HTML", "CSS", "React", "GIT", "Express", "MongoDB"],
        "image": SpaceTime,
        "github": "https://github.com/andrewta999/SpaceTime"  
    },
    "Pet App": {
        "company": "@teamproject",
        "date": "Spring 2020",
        "text": "I collaborated with 5 Mcgill students in a team to develop a project for our software engineering course. We were given an ill-defined problem of creating a website and mobile app the connect adopters and adoptees for pet adoption. We used Java and Spring Boot to create the backend while using Vue.js to build the frontend. PostgreSQL was used to store the data. We presented the project at the end of the course.",
        "tech": ["Java", "JavaScript", "Vue.js", "Node.js", "HTML", "CSS", "GIT", "PostgreSQL"],
        "image": OSAapp,
        "github": "https://github.com/andrewta999/Whatsnew365" 
    },
    "Quoridor App": {
        "company": "@teamproject",
        "date": "Fall 2019",
        "text": "I collaborate with 5 other students in a team to develop a software version of the Quoridor games for our software course. I used Object-Oriented design heavily to developped classes that were blueprints for the game objects. I developed everything in Java and used Gradle to manage dependancies and to build the project. Unit tests were written with JUnit. We presented the project at the end of the course.",
        "tech": ["Java", "Gradle", "HTML", "Eclipse", "JUnit"],
        "image": Quoridor,
        "github": "https://github.com/McGill-ECSE223-Fall2019/ecse223-project--group-10" 
    },
    "Movie Recommender": {
        "company": "@project",
        "date": "Spring 2019",
        "text": "I developed a web app that was integrated with a machine learning model to recommend movies to users based on their watched history. Users can provide the movies they have watched and liked and then get back a list of recommended movies. I used Python and Tensorflow to train the machine learning model and used JavaScript and React to build the web app.",
        "tech": ["Python", "Tensorflow", "JavaScript","HTML", "CSS", "React"],
        "image": MovieApp,
        "github": "https://github.com/andrewta999/Movie_Recommender"  
    },
}

export default projects