# Getting Started
This project is created with react and tailwindcss
This directory only contains client app

Steps To follow: -
1.) Create an empty folder eg. blockchain-main
2.) Create react app named client into it using terminal 
    "npx create-react-app client"
3.) Then cd into client folder
    "cd client"
4.) To run the app 
    "npm start"
5.) In public folder keep only index.html and delete rest of them.
    In src folder, create a components folder and add app.jsx into it, other than components folder and index.js file delete everything from src folder. Create stylesheet folder in src and inside it create index.css file
6.) Go to tailwindcss react doc and follow the instruction, remember css files in src folder can only use tailwindcss.
7.) Paste tailwind directives into index.css file and then import index.css file into index.js file.

----------Boilerplate of react app and using tailwindcss is ready till now-------

8.) Create Footer, Loader, Navbar, Services, Transactions, Welcome jsx files in component folder and return h1 tag with their function name, just for checking.
9.) Import all of them into App.jsx folder.
10.) In terminal come into home directory and create smart_contract folder, sibling to client app.
11.) cd into smart_contract folder.
12.) To initialize empty package.json file into smart_contract folder
    "npm init -y"