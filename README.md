# API-project
udacity first project

### Introduction
This API allows user to resize their Image. The user has the option to show all alread processed pictures as well.

### Getting Started            
1. npm install
2. npm run test (will run the build and the jasmine test within one script as defined in package.json)
3. npm run start (start the server)

### Usage
To resize images you need to type in follow URL "http://localhost:3000/api/images?filename=your-image&width=desired-width&height=desired-height
" for example http://localhost:3000/api/images?filename=fjord&width=200&height=200
Be aware that you need to drag the pictures into the full folder, before trying to resize them.

You can also check out your already processed images by visting "http://localhost:3000". App.js will dynamically create content if pictures have already been resized.
The html, css and js scripts can be viewed in the public folder.

Images to test the API are stored in the images folder in the beginning.

node moduels are not being uploaded.

