# Fluid-typography-calculator
This generator allows you to create scalable fluid fonts using global css variables. With this system you will no longer have to worry about changing the width of your project's pages. In fact with this generator you will be able to readjust your "font-size formulas" by simply changing the values ​​of your global variables.

##What is Fluid Typography
Fluid typography is a responsive typography technique where the text scales automatically with the screen size. As the screen size increases, the typographic values such as font size, line height, and letter spacing increase. Similarly, the values decrease when the screen size gets smaller.

##How Fluid Typography Works
Fluid typography starts with a minimum value and increases it as the screen width gets larger, until it reaches a set maximum value. Think of the values like the speed limits on a freeway. You have to maintain a minimum speed of 45 mph. The upper limit is 65 mph, and you pick your speed based on the flow of traffic.
Fluid typography are based on "REM" and not "PIXEL". Generally in html a "1rem" is equal to "16px". But the aspect ratio can be changed by changing the font-size value within the ":root" css selector.
 
##Setup
###Setup REM
First of all you need to set up inside your css the following root value:
```css
:root{
  font-size: 62.5%; //This allow us to set 1rem equal to 10px
}
```
###Setup Global variables
To use this generator you need to setup 3 global variables
* --min-page-width: 32rem; -> This represent the minimum viewport size express in rem
* --page-width-val:128; -> This represent the pagination width of your pages
* --min-page-width-val:32; -> This represent the minumum width pagination width of your pages
