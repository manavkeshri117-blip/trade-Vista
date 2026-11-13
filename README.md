# TradeVista

TradeVista is a stock trading app I built to learn full-stack development with the MERN stack. It's inspired by Zerodha and has three parts: a landing page, a trading dashboard where you can see your holdings, positions and orders, and a backend API that talks to MongoDB.

## What it does

- Shows your holdings and positions, pulled live from MongoDB through the Express API
- Lets you place a buy order from the dashboard, and saves it in the database
- Displays a bar chart for holdings and a doughnut chart for the watchlist (Chart.js)
- Comes with a separate landing page: Signup, About, Product, Pricing and Support

## Built with

- **Frontend and dashboard:** React, React Router, Axios, Chart.js, Bootstrap
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas

## How the project is organised

```
tradevista/
├── backend/     # Express server, Mongoose models and schemas
├── dashboard/   # Trading dashboard (React)
└── frontend/    # Landing page (React)
```

## API endpoints

| Method | Endpoint       | What it does           |
| ------ | -------------- | ---------------------- |
| GET    | `/allholding`  | Returns all holdings   |
| GET    | `/allposition` | Returns all positions  |
| POST   | `/neworder`    | Saves a new buy order  |

## Running it locally

### 1. Clone the repo

```
git clone https://github.com/manavkeshri117-blip/trade-Vista.git
cd trade-Vista
```

### 2. Start the backend

```
cd backend
npm install
```

Create a `.env` file inside `backend/` with your own values:

```
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

Then run:

```
npm start
```

### 3. Start the landing page

```
cd frontend
npm install
npm start
```

It opens at http://localhost:3000

### 4. Start the dashboard

```
cd dashboard
npm install
npm start
```

It opens at http://localhost:3001. If it asks to use a different port because 3000 is taken, just press `y`.

## Author

Built by Manav Keshri.
