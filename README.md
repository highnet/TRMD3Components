# TRMD3 Components

This repository contains the minimal components required to start developing with the TRMD3 styled component design system. TRMD3 is a set of React components that are designed to work together to create a consistent and cohesive user interface.

## Getting Started

To get started with TRMD3 Components, you'll need to have Node.js and npm installed on your machine. Once you have those installed, you can install the package using npm:

<code>npm i trmd3components</code>

## Using TRMD3 Components

In your React App:

```
import "trmd3components/trmd3.css";
import Button from "trmd3components/Button";
import HorizontalCard from "trmd3components/HorizontalCard";

...

<Button></Button>
<HorizontalCard></HorizontalCard>
```
## Getting Icons and Fonts to Work

On your application, paste these snippets inside the <head> of index.html
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css" />
```
