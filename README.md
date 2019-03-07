# Portfolio

[Live Site](https://www.craigsportfolio.com/)

## Overview

Creating a website that represents myself and my work has always been a challenging task for me, mainly around the design. I find when designing something for myself I want to dart off in every direction, every style and every design trend I can think of. When I set out to design this new iteration of my portfolio I decided I wanted to make it space themed. Using a space theme I was able to hit the design ideas I wanted most which was bright colors, playfulness, freedom to be interpretive about the design, room to do complex animations without them feeling forced, and something that was more than just a boilerplate portfolio.

## Tech

-   HTML
-   Sass
-   Javascript
-   [Chroma JS](https://github.com/gka/chroma.js/)
-   [animate.css](https://github.com/daneden/animate.css)
-   [hover.css](http://ianlunn.github.io/Hover/)
-   [Font Awesome](https://fontawesome.com/)

## Challenges

The main challenge I faced here was actually not coding related but animation related. As I'm not an animator nor did I have any sort of animated prototypes to work off of I spent hours tweaking the animations of the starry background and the meteors trying to make them look just right. In the future, I would like to explore some animation tools or prototyping tools that would allow me to play around with the feel of an animation in some sort of GUI before for I even start coding.

## Learning Points

Form vs. Function

I've worked with HTML canvas before, utilizing an exspensive animation and I knew that I could very well be facing performance issues this time around as well. Although I never faced significant performance issues on this project I did learn that even when your not taxing the client it's still worth exploring more resource sensitive options. I say that because in the first iteration of this site I was generating and rotating the _starry background_ via canvas, it looked great and was still viable performance wise, but I wondered to myself if I could do it in a way that gave a similar result but was still more performant(and ultimately much simpler). What I did was generated an svg that looked just like the stars I was generating with canvas, put that in a div and used css animation to rotate the div. Voila! I had a nearly identicle look to the previous iteration but I was saving on resources and reducing dozens of lines of code. Now I'll admit that by doing it this way I lost a lot of control over the look and feel of the starry background, meaning I could not just change a few parameters to change the look of the stars or their locations, I would need to regenerate a new svg to do that but what I learned is that a little trickery can give you a result very close to what you desire with much simple implementation minus a bit of control. I liken this to practical effects vs CG effects in movies, sure you could blow up 6 cars to get the hero shot at the end of car chase but you could get almost the same exact effect with computer generated effects for significantly less resources.

## What I Would Do Different/Future

Aside from a few design modifications what I will be doing in the future is reworking my Sass to better utilize variables, as I was mainly designing this as I went I didn't know what colors, fonts, etc. that I would be reusing and thus didn't set up variables for them.

## Author

[Craig Melville](https://www.craigsportfolio.com/)
