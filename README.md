# API-project
udacity first project

### Introduction
This API allows user to resize their Image. The user has the option to show all alread processed pictures as well.

### Getting Started            
1. npm install
2. npm run test (will run the build and the jasmine test within one script as defined in package.json)
3. npm run start (start the server)

### Tests
There is a test includes with checks the function for the image resizing itself without the API. In this test, the image is removed from the thumb folder again after the test is finished, so it can be executed multiply times and checks if the functions works properly.

### Usage
To resize images you need to type in follow URL "http://localhost:3000/api/images?filename=your-image&width=desired-width&height=desired-height
" for example http://localhost:3000/api/images?filename=fjord&width=200&height=200
Pictures are already in the full order. Ready to go, type in the provided URL.

You can also check out your already processed images by visting "http://localhost:3000". App.js will dynamically create content if pictures have already been resized.
The html, css and js scripts can be viewed in the public folder.

node moduels are not being uploaded.

