<div id="top"></div>

<div align="center">

  <img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor" width="80">

  <h2 align="center">3-column preview card component solution</h2>
  <p align="center">
    <a href=""><strong>Frontend Mentor Challenge</strong></a>
    <br />
    <br />
    <a href="https://designer-space.github.io/3-column-preview-card-component/">View Demo</a>
    ·
    <a href="https://github.com/Designer-space/interactive_rating_component/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/Designer-space/interactive_rating_component/issues" target="_blank">Request Feature</a>
  </p>
</div>



#

![](./design/desktop-preview.jpg)

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<h2 align="center">Links</h2>

- Solution URL: [3-Column Card Component (SASS + Flexbox + BEM) | Frontend Mentor]()
- Live Site URL: [https://designer-space.github.io/3-column-preview-card-component/](https://designer-space.github.io/3-column-preview-card-component/)

<br>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM naming convention
- [SASS](https://sass-lang.com/documentation/modules) - Sass modules

### Useful resources

- [CSS Guidelines](https://cssguidelin.es/#bem-like-naming)
- [BEM naming convention](https://css-tricks.com/bem-101/)
- [BEM naming examples](https://getbem.com/naming/)

<br>

## Author

- Frontend Mentor - [@vinay](https://www.frontendmentor.io/profile/vinay3000)

## Acknowledgments

When using `sass` in order to build this solution

- Install `sass` if not yet installed:

```bash
npm install -g sass
```

- Run build command from command line:

```bash
sass assets/sass/main.scss assets/css/style.css
```

- If you want to edit the code and test, in the root folder of this repository, run this command from the command line:

```bash
sass --watch assets/sass/main.scss assets/css/style.css
```

## File structure

```
.
├── Assets
│   ├── css
│   │   ├── main.css
│   │   ├── main.css.map
│   │   ├── main.min.css
│   │   └── main.min.css.map
│   ├── images
│   │   ├── favicon-32x32.png
│   │   ├── icon-star.svg
│   │   └── illustration-thank-you.svg
│   ├── js
│   │   └── main.js
│   └── sass
│       ├── abstracts
│       │   ├── _index.scss
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       ├── base
│       │   ├── _index.scss
│       │   ├── _home.scss
│       │   └── _reset.scss
│       ├── component
│       │   ├── _index.scss
│       │   ├── _utilityclasses.scss
│       │   └── _sr-only.scss
│       ├── layout
│       │   ├──_index.scss
│       │   └── _card.scss
│       └── main.scss
├── design
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   ├── desktop-preview.jpg
│   ├── desktop-thank-you-state.jpg
│   ├── mobile-design.jpg
│   └── mobile-thank-you-state.jpg
├── index.html
├── README.md
└── style-guide.md
```