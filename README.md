# KoinX Backend Developer Intern Assignment

This project is an assignment for the Backend Developer Intern role at KoinX. It is a Node.js application that fetches cryptocurrency data from the CoinGecko API and stores it in a MongoDB database. The application also provides endpoints to retrieve the stored data and calculate the deviation of the coin prices.


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yash-shakya/KoinX-Assignment
    ```
2. Navigate to the project directory:
    ```sh
    cd koinx-assignment
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a [.env](http://_vscodecontentref_/11) file in the root directory and add the following environment variables:
    ```env
    PORT=<your-port>
    MONGO_URI=<your-mongo-uri>
    COINGECKO_API_KEY=<your-coingecko-api-key>
    ```

2. You can refer to the [.env.example](http://_vscodecontentref_/12) file for the required environment variables.

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. The server will start running on the specified port (default is 4000).

## API Endpoints

- **GET /api/stats**: Retrieve the coin data.
- **GET /api/deviation**: Retrieve the deviation of the coin prices.

## Tasks

### Task 1: Fetch and Store Coin Data

The application fetches the data for Bitcoin, Matic, and Ethereum from the CoinGecko API every 2 hours and stores it in the MongoDB database.

### Task 2: Get Coin Data

The [getCoinData](http://_vscodecontentref_/13) function in [coin.controller.js](http://_vscodecontentref_/14) retrieves the coin data from the database.

### Task 3: Get Deviation

The [getDeviation](http://_vscodecontentref_/15) function in [coin.controller.js](http://_vscodecontentref_/16) calculates the deviation of the coin prices.

## Deployment

The project is configured to be deployed on Vercel. The configuration is specified in the [vercel.json](http://_vscodecontentref_/17) file.

