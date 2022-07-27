# Employee Polls
Employee Polls is a React app allows users to create, answer, and track poll questions. Stats are shared through the leaderboard, using the number of polls answered and created as the main metrics.

<img src="./images/WYR.jpg" />

### 🕹 Project Features

1. Login from the list of users
2. View Answered & Unanswered Poll
3. Participate in Poll Voting 
4. View Rank in Leaderboard
5. Route Redirecting

**Route Redirecting** is in place. For example if user tries to visit `/leaderboard` directly from address bar without logging in then he/she will asked to login first and then redirected to initially requested route (`/leaderboard`)


### ⚙️ Installation & Setup

You should have `npm` and `node` installed in your machine, to confirm type `node --version` in terminal. Below are steps to setup project in your system :

1. Clone the `master` branch of this repository
2. Open Terminal in project folder (containing `package.json` file)
3. Run `npm install` and wait for all dependencies to download
4. Finally run `npm start` this will automatically launch application in default browser at `http://localhost:3000`

