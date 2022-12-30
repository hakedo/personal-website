import cryptoApp from '../../assets/crypto_app.png'
import expenseApp from '../../assets/expense_app.png'
import faceApp from '../../assets/face_app.png'
import weatherApp from '../../assets/weather_app.png'
import kanji from '../../assets/kanji.jpg'

export const projectsData = [
   {
      id: 1,
      image: weatherApp,
      title: "Weather App",
      description: "ReactJS, Weather API",
      github: "https://github.com/hakedo/weather-app-react",
      url: "https://hakedo-weather-app.netlify.app/",
   },
   {
      id: 2,
      image: cryptoApp,
      title: "CryptoWorld App",
      description: "ReactJS, Redux Toolkit, RapidAPI",
      github: "https://github.com/hakedo/crypto-app",
      url: "",
   },
   {
      id: 3,
      image: expenseApp,
      title: "Expense Tracker",
      description: "ReactJS",
      github: "https://github.com/hakedo/expense-tracker-react",
      url: "https://hakedo-expense-tracker.netlify.app/",
   },
   {
      id: 4,
      image: faceApp,
      title: "Face Recognition App",
      description: "ReactJS, Clarifai API",
      github: "https://github.com/hakedo/face-recognition-app",
      url: "https://hakedo-face-recognition-app.netlify.app/",
   },
   {
      id: 5,
      image: kanji,
      title: "Kanji Learning Algorithm",
      description: "Java",
      github: "https://github.com/hakedo/Kanji-Learning-Algorithm",
      url: "",
   },
];

// projects
export const projectsNav = [
   {
      name: "all",
   },
   {
      name: "web",
   },
   {
      name: "app",
   },
   {
      name: "design",
   },
];
