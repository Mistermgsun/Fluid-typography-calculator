# Fluid Typography Calculator
This generator allows you to create scalable fluid fonts using global css variables. With this system you will no longer have to worry about changing the width of your project's pages. In fact with this generator you will be able to readjust your "font-size formulas" by simply changing the values ​​of your global variables.

## What is Fluid Typography
Fluid typography is a responsive typography technique where the text scales automatically with the screen size. As the screen size increases, the typographic values such as font size, line height, and letter spacing increase. Similarly, the values decrease when the screen size gets smaller.

## How Fluid Typography Works
Fluid typography starts with a minimum value and increases it as the screen width gets larger, until it reaches a set maximum value. Think of the values like the speed limits on a freeway. You have to maintain a minimum speed of 45 mph. The upper limit is 65 mph, and you pick your speed based on the flow of traffic.
Fluid typography are based on "REM" and not "PIXEL". Generally in html a "1rem" is equal to "16px". But the aspect ratio can be changed by changing the font-size value within the ":root" css selector.
 
## Setup
### Change the default REM values
First of all you need to set up inside your css file the following html value:
```css
:html {
  font-size: 62.5%; //This allow us to set 1rem equal to 10px
}
```
### Setup Global CSS variables
To use this generator you need to setup 3 global variables
```css
:root{
  --min-page-width: 32rem; //This variable represent the minimum viewport of your project
  --page-width-val: 128; //This variable represent your project's pages width and the target to start the font-size scaling
  --min-page-width-val: 32; //This variable represent the minimum width and the target to finish the font-size scaling
}
```
> :warning: The first variable **--min-page-width** and the last variable **--min-page-width-val** must have the same value

## How to use
To use the calculator, simply download the html file and click on it. Once the file is opened in your browser, just enter the values ​​in the two input fields and copy the results using the appropriate button.

## Example
Imagine you want a layout of 1280px and you want to get a responsive paragraph that starts resizing from 1280px to a minimum of 320px.
In this case you want a paragraph that have a maximum size of 16px and a minimum size to 12px.
> :warning: Remember 16px is equal to 1.6rem
> :warning: Remember 12px is equal to 1.2rem

#### Setup
```css
:root{
  --min-page-width: 32rem; 
  --page-width-val: 128;
  --min-page-width-val: 32; 
}
html{
  font-size: 62.5%;
}
```
#### Fluid Typography Calculator settings
![Cattura](https://github.com/jacopo-degattis/esc/assets/60223467/169a7814-2d1b-4336-89d3-12cb725c457c)

#### Paragraph style CSS
```css
p{
  font-size: clamp(1.2rem, calc(1.2rem + (1.6 - 1.2) * ((100vw - var(--min-page-width)) / (var(--page-width-val) - var(--min-page-width-val)))), 1.6rem);
}
```
