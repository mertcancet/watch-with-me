<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h1 align="center">Watch With Me Project</h1>

  </p>
</p>

<hr/>
You will be able to chat and watch youtube videos synchronized with your friends. I used Socket.io for chatting and synchronized the youtube videos. Also I used the css framework Tailwindcss in this project.
I will develop this project further. I plan to add login with username and video search with Youtupe API

TR
Bu projede Youtube üzerinden arkadaşlarınızla senkronize bir şekilde video izleyip, sohbet edebileceksiniz. Kullanıcıların sohbet edebilmesi ve youtube videolarının senkronize çalışması için Socket.io kullandım. Css framework'ü olan Tailwindcss kullandım.
Bu projeyi geliştirmeye devam edeceğim. Kullanıcı adı ile giriş ve Youtupe API ile video araması özelliklerini eklemeyi planlıyorum.

#####Features:

- Synchronized start/stop
- Syncronized timebar ( \*\*Same video, same time. If you change the timebar, your friends timebar will be changed automatically)
- Chat

<hr/>
### Built With
####Front-End
- [React](https://reactjs.org/)
- [React-Youtube](https://www.npmjs.com/package/react-youtube)
- [socket.io-client](https://www.npmjs.com/package/socket.io-client)
- [Tailwindcss](https://tailwindcss.com/)

devDependencies for configuration tailwindcss

- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

####Back-End

- [Express]()
- [Socket.io](https://socket.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

devDependencies

- [concurrently](https://www.npmjs.com/package/concurrently)
- [nodemon](https://www.npmjs.com/package/nodemon)
<hr/>
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- [Node](https://nodejs.org/en/)

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/mertcancet/watch-with-me
```

2. Install Backend NPM packages

```sh
npm install
```

3. Install Frontend NPM packages

```sh
cd frontend
npm install
cd..
```

### Run

Only FRONT-END

```sh
npm run client
```

OR

```sh
cd frontend
npm run start
```

Only BACK-END

```sh
npm run server
```

RUN BOTH OF THEM

```sh
npm run dev
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

This project was bootstrapped with Create React App.
