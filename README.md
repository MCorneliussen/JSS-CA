# Course Assignement 1 <sup>V2</sup> - MCORNELIUSSEN 

## Description

Discover a world of laughter at Meme Central, an interactive meme website featuring a curated selection of 20 hilarious memes. 

With our user-friendly meme gallery, utilize the search function to find tailored humor, and enjoy a nostalgic twist with an embedded classic Rick Astley video on our home page and tracking so you don't have to view the same meme twice.
Our Exclusive login system offers personalized features such as including detailed meme insights. Go watch memes. 



## Technologies Used:
This Project is built using the following technologies:
- **Node.js**
- **Express.js**: Web application framework.
- **EJS (Embedded JavaScript templates)**
- **Axios**: Promise-based HTTP client.
- **Bootstrap (v5.2.3)**: Front-end framework.
- **jQuery**: JavaScript Library.
- **Passport.js**: Authentication middleware for Node.js.
- **Passport-local**: Strategy for Passport.js authentication.
- **Cookie Parser**: Middleware to parse cookies.
- **Express Session**: Session middleware for Express.
- **Express Session Json**: JSON storage for Express Sessions.
- **HTTP Errors**: Library to create HTTP error objects.
- **Morgan (HTTP request logger middleware)**: HTTP request logger middleware.
- **Debug**: Debugging utility for Node.js.
- **request**: Simplified HTTP request client.

## Installation:
### Prerequisities
    Node.js & npm (Node Package Manager) must be installed on your system. 
    You can download them from [Node.js official website](https://nodejs.org/) if you haven't already.

Verify the installations:
- Node.js
    ```bash
    node --version
    ```
- npm
  ```bash 
  npm --version
  ```


### Setup

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/noroff-backend-1/jss-ca-1-MCorneliussen.git](https://github.com/MCorneliussen/JSS-CA.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd JSS-CA
   ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Application:

1. Start the application by running the following command in the project directory:

    ```bash
    npm start
    ```
2. Access the application in a web browser at 'http://localhost:3000'.



## Configuration

### API Key Setup
1. Edit 'data/config.json':
   ```JSON
   {
    "apiURL": "YOUR_API_KEY_HERE"
   }
   ```
   Replace "YOUR_API_KEY_HERE" with your actual API key.

### User Credentials
1. Modify 'data/users.json' with user credentials in the required format.
   ```JSON
   [
        {
            "username": "Admin",
            "password": "Admin1"
        },
        {
            "username": "User",
            "password": "User1"
        }
    ]

   ```
**Note:** Ensure both files are correctly set up for the application to function properly.
