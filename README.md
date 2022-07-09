# Ecommerce Back End
  ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation and Instructions](#Installation/Usage)
  3. [Technologies](#Technologies)
  4. [License](#License)
  5. [Author](#Author)
  6. [Questions](#Questions)
  7. [User-Story](#User-Story)
  8. [Acceptance-Criteria](#Acceptance-Criteria)


  ## Description
  A backend to a typical internet retail site, allowing for the CREATION/UPDATE/DELETION. Application includes existing seeds in order to test API routes

  ## Installation/Usage
  first time users: ensure you are in the correct directory, and do a 'npm install' as well as 'npm run seed' in order to insert all seeding data. Then run 'npm start' to start the server
  
  Link to walk through: https://drive.google.com/file/d/1yr9xtpDZ5fsbkN5LWAlwYX49LQ9CAVuz/view?usp=sharing

  ## Technologies
    * Express.js
    * Sequelize
    * MySQL2
    * dotenv

  ## License
  Copyright (C) function getFullYear() { [native code] }
    MIT License.
    Read more at: https://choosealicense.com/licenses/mit/

  ## Author
  Author: Alexander Lu  

  ## Questions
  For further questions, you can reach out to me by:
  email: alu1868@gmail.com
  GitHub: github.com/alu1868

  ## User Story
  AS A manager at an internet retail company
  I WANT a back end for my e-commernce website that uses the latest technologies
  SO THAT my company can compete with other e-commerice companies

  ## Acceptance Criteria
  GIVEN a function Express.js API

  WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  THEN I am able to connect to a database using Sequelize

  WHEN I enter schema and seed commands
  THEN a development database is created and is seeded with test data

  WHEN I enter the command to invoke the application
  THEN my server is started and the Sequelize models are synced to the MySQL database

  WHEN I open PI GET routes in Insomnia for Categories, products, or tags
  THEN the data for each of these routes is displayed in a formatted JSON

  WHEN I test API POST, PUT and DELETE routes in Insomnia
  THEN I am able to succesffully create, update, and delete data in my database