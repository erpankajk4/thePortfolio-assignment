# Dynamic Portfolio Transformation given by thePortFolio
This project aims to transform static portfolios into dynamic ones using ThePortfolyo.com platform. Below you'll find information on how to set up the project, its functionalities, and how to contribute.

## Deployed link- 
https://theportfolio-gavi.000webhostapp.com/

## Introduction
This project focuses on transforming static portfolios into dynamic ones using ThePortfolyo.com platform. It fetches data from a provided API endpoint and integrates it into various sections of the portfolio template dynamically.

## Setup
To set up the project, follow these steps:
1. Download or clone the repository.
2. Unzip the portfolio template provided in the zip file onto your local system.
3. Run the following commands:
   ```
   npm install
   npm start
   ```
4. Visit the local server to view the dynamic portfolio.

## Features
- Updated all project libraries and resolved UI and library errors.
- Data integration for both Light and Dark UI.
- Utilized dynamic data integration from the provided API endpoint. The `axios` library was employed for data fetching.
- Employed Redux Toolkit for efficient state management.
- Implemented filtering and sorting according to assignment instructions, updating state in each component based on `sequence`, `forEducation`, `enabled`, etc.
- Attempted to utilize all data provided in the API, including URLs.

## Folder Structure
📦gavi-reactjs <br/>
 ┣ 📂public <br/>
 ┃ ┣ 📂assets <br/>
 ┃ ┣ 📂light<br/>
 ┃ ┃ ┗ 📂assets<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂Common<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📂dark<br/>
 ┃ ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┃ ┗ 📂works<br/>
 ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┗ 📂light<br/>
 ┃ ┃ ┃ ┣ 📂blogs<br/><br/>
 ┃ ┃ ┃ ┣ 📂contact<br/>
 ┃ ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┃ ┗ 📂works<br/>
 ┃ ┃ ┗ 📂home<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┃ ┣ 📂dark<br/>
 ┃ ┃ ┗ 📂light<br/>
 ┃ ┣ 📂store        <====== added to Redux ToolKit for state Management<br/>
 ┃ ┃ ┣ 📜store.js<br/>
 ┃ ┃ ┗ 📜userSlice.js<br/>
 ┃ ┣ 📂utils        <br/>
 ┃ ┃ ┣ 📜api.js    <====== added to API Fetching<br/>
 ┃ ┃ ┗ 📜numberToWords.js     <====== added to convert number to words<br/>
 ┃ ┣ 📜App.js<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┣ 📜index.js<br/>
 ┣ 📜.gitignore<br/>
 ┗ 📜package.json<br/>

