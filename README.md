# Image Processing API Project

## Overview

This project requires you to build an API can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.

## Instructions

- Initializing the project by add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier.
- Create folders and files and setting up the project structure.
- Configure middleware and dependencies.
- Set up your server and create an API endpoint
- Install Sharp and configure endpoint
- Using Typescript for to reduce coder errors, and TypeScript offers the developer the ability to state their intentions clearly.
- Write your tests for endpoint and for image processing and different tests created.
- Add caching to application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.
- Test, Debug, and Refactor.
- You can use http://localhost:3000/api/images?filename=fjord&width=200&height=200 to resize image and display it and save it in the thumb folder.
- you can change filename from the names of images available in full Image folder and we can use any valid width and height (postive integer number more than one)
- You can see `index.html` to make html structure for front end and using `style.css` to style application and you can use the front end by filling width , height and choose the image you want and when you click generate button, the new tab will open with resizing image we want.
- Follow all project specification for image processing API project from Udacity rubric for review

## Table of Contents

- Start from the scratch to initialize the project that has src folder have index.ts and utility folder inside it processing image module and there are test folder for tests files.
- Install Node and Express, TypeScript, Jasmine, Eslint, and Prettier.
- install dependencies and middleware
- Setup local server on local machine
- Making unit tests that test endpoint and image processing.
- Making html and css file to make front-end page to handle project perfect.
- use http://localhost:3000/api/images?filename=fjord&width=200&height=200 to ensure that functionality of project as our expectation and as required.

## Sources and References

- Udacity "Advanced Full-Stack Web Development" Nanodegree program in Backend Development with Node.js course
- https://www.npmjs.com/package/node
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/eslint
- https://www.npmjs.com/package/prettier
- https://www.npmjs.com/package/typescript
- https://www.typescriptlang.org/
- https://www.npmjs.com/package/jasmine
- https://github.com/jasmine/jasmine
- https://www.npmjs.com/package/node-cache
- https://www.npmjs.com/package/sharp
- https://sharp.pixelplumbing.com/api-constructor
- https://nodejs.org/api/fs.html
- https://www.geeksforgeeks.org/node-js-fs-existssync-method/

## Extras

- for testing our code, you can use `index.html` or you can manually by using http://localhost:3000/api/images?filename=fjord&width=200&height=200
