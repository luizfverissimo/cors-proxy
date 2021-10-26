<h1 align="center">Cors-proxy 🚪</h1>
<p>
  <a href="https://www.npmjs.com/package/cors-proxy" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/cors-proxy.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 🚪 Cors proxy created with Node.js and Express

## Install

```sh
yarn #npm install
```

## Usage
This repository have two servers, the test server don't have cors enable.

```sh
yarn start #npm start - run the cors proxy server
yarn start-test #npm run start-test - run the test server without cors
```
You can test the cors proxy in the ```index.html``` file opened if Live Server extension. Make your fetch calls using:
```js
"http://localhost:3000/${URLencoded}"
```

You also can use the host server passing the encoded URL through ```https://lfv-cors-proxy.glitch.me/``` 

## Author
[<img alt="Logo LF Verissimo - Front-end Developer" src="https://github.com/luizfverissimo/luizfverissimo/blob/8604eedb8ecf5eeb23f8ffae63cfdf8eba6513c3/banner.png?raw=true" />](https://lfverissimo.com)

👤 **Luiz Fernando Veríssimo <luizfverissimo@gmail.com>**

* Website: http://lfverissimo.com
* Github: [@luizfverissimo](https://github.com/luizfverissimo)
* LinkedIn: [@lfverissimo](https://linkedin.com/in/lfverissimo)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
