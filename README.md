# Module 4 Code Challenge: Poesy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Poesy, where your poetry masterpieces come to life! Our old front-end team laid down the foundations for our app, but it looks like they forgot all the functionality!

Your job will be to make our app work according to the user stories you will find the [Core Deliverables](#Core-Deliverables) section.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8004`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:8004/poems](http://localhost:8004/poems) in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8004`

## Core Deliverables

As a user:

1. When the app starts, I can see all currently created poems.
2. I can show/hide the form to create new poems.
3. I can create poems and they are still there when I refresh the page.
4. I can mark poems as read which will change the text of that button to "Mark as unread".

### Endpoints for Core Deliverables

#### GET /poems

Example Response:

```json
[
  {
    "id": 1,
    "title": "The Song About the Song",
    "content": "This is the song about the show...",
    "author": "Bryan Higgins"
  },
  {
    "id": 2,
    "title": "My Pickle",
    "content": "...may my pickle stroll about hungry ...",
    "author": "Jon Glass"
  }
]
```

#### POST `/poems`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "title": "string",
  "content": "string",
  "author": "string"
}
```

Example Response:

```json
{
  "id": 1,
  "title": "The Song About the Song",
  "content": "This is the song about the show...",
  "author": "Bryan Higgins"
}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user:

1. I can add a poem to my favorites and see it on a separate list.
2. I can delete a poem and they are still gone when I refresh the page.

### Endpoints for Advanced Deliverables

#### DELETE /poems/:id

Example Response:

```json
{}
```
