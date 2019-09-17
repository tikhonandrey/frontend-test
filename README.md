# App Demonstration

A 2019 Technology Assessment for Kristi Centinaro

This project is meant to demonstrate an example of how to develop a large scale front end application using frameworks and methodology that are prized today.
In 10 years I hope to look on this fondly, and with a smidgen of PTSD, much like I do my Backbone/Marionette apps ... :)

Cheers,  
Kristi Centinaro  
@tnbKristi

## Live Demo

Because of the CORS limitations on the Yelp API used for this demo,

## Running Locally

### Prerequisites

#### a CORS proxy enabled for localhost or some equivalent

I used a modified version of `docker-cors-container`:

```
$ docker pull bcentinaro/cors-proxy
$ docker run --restart=always -p 3000:3000 bcentinaro/cors-proxy
```

Big thanks to @bcentinaro for helping out with it!

#### Node Version Manager

`npm install -g nvm`

```
git clone https://github.com/tnbKristi/demo-app-2019.git
cd demo-app-2019
nvm install
npm install && npm start
```

## Frameworks & Technology Used

- React
- GraphQL
- TypeScript
- Storybook
- SASS
- Jest/Enzyme

## Project Goals

- To demonstrate a clean separation of Design System components and App Logic
- To demonstrate BEM style classification patterns (atomic design principles)
- To show an effective use of GraphQL in a scaleable, modular React App
- To show an effective use of TypeScript in a scaleable, modular React App
- An example of how to set up a Webpack/Babel/TypeScript dev environment 'from scratch'.
- To demonstrate Intrinsic Design Patterns in CSS-Styling

## Other Goodies Included

#### Typescript React Docgen

https://github.com/strothj/react-docgen-typescript-loader
