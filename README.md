<h1 align="center"><strong>East Sussex MTB Trails</strong></h1>

<h2>2nd Milestone Project</h2>

[View the live project here](https://josecastanocoding.github.io/east-sussex-mtb-trails/)

<img src="assets/images/responsiveDesign.PNG" width="600" height="400" />

East Sussex MTB Trails is a website aimed to help mountain bike riders to find new trails to ride in East Sussex, UK. The visitors will be given the option to select both their skill and fitness levels, the site will collate the choices of each visitor, and return the best trail that suits the rider selections. 

The website has been designed to be responsive, intuitive and accessible on a range of devices, including smartphones, tablets and desktops/laptops.

---

## Table of contents

1. [**User Experience**](#user-experience)
    - [**User stories**](#user-stories)
    - [**Design**](#design)
        - [**Colour Scheme**](#colour-scheme)
        - [**Typography**](#typography)
        - [**Imagery**](#imagery)
    - [**Wireframes**](#wireframes)
    
2. [**Features**](#features)
    - [**Existing features**](#existing-features)
    - [**Features left to implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Testing User Stories**](#testing-user-stories)
    - [**Bugs and some other challenges**](#bugs-and-some-other-challenges)
    - [**Final layout**](#final-layout)

5. [**Deployment**](#deployment)
    - [**GitHub Pages**](#github-pages)
    - [**Forking the GitHub Repository**](#forking-the-github-repository)
    - [**Making a Local Clone**](#making-a-local-clone)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Resources**](#resources)
    - [**Acknowledgements**](#acknowledgements)

---

## User Experience

East Sussex MTB Trails uses the visitor choices from the dropdown menus, and displays the mountain bike trail that suits the rider characteristics, along with its location (presented to the visitor in a map) and 3 bullet points showing key information about such trail.


## User stories

-  ### <h3>First Time Visitor Goals</h3>

    1. As a First Time Visitor, I want to find out which mountain bike trail I should be attempting to ride, based on my current level of skills and fitness. Once I know which trail is suitable for me, I want to make some notes of the key characteristics of such trail.
    2. As a First Time Visitor, I want to plan directions to get to the location where the mountain bike trail is. 
    3. As a First Time Visitor, I want to get in touch with the real people behind East Sussex MTB Trails, and ask some questions about a particular trail.

-  ### <h3>Returning Visitor Goals</h3>

    1. As a Returning Visitor, since my set of skills and fitness level might have changed from my first visit, I could be using this site to check out other trails to ride, and make some notes about the key characteristics of the new trail I would like to ride.
    2. As a Returning Visitor, I might want to plan directions to get to the location where any other trails are. 
    3. As a Returning Visitor, I would like to keep interacting with the owners of the site, by sending them an enquiry about anything in regards to the information displayed about the trail, location or key characteristics of it.

## Design

- ### <h3>Colour Scheme</h3>

I wanted to keep the design of the website simple and neat. I have applied a hero image to be the main background of the website, please see below:

<img src="assets/images/hero-image.jpg" width="600" height="400" />

I picked a combination of colours that I consider to be eye-catching, and that does not take the attention of the user away from the main goal of the website. 

<img src="assets/images/colours.jpg" width="600" height="400" />

There are 2 dominant colours that can be identified on my site:

- <strong>Black galvanised (rgb(26, 23, 23))</strong> : Used as the background colour for the header, footer and the drop down menus as well as the result box (where the trail is revealed once the user has made their choices).
- <strong>Intense Orange (#ff3b00eb)</strong> : Used as the colour of the text displayed on the header, footer and the drop down menus as well as the result box (where the trail is revealed once the user has made their choices).

- ### <h3>Typography</h3>

The font I used for all the website is "Space Grotesk".

<img src="assets/images/font.PNG" width="1000" height="150" />

- ### <h3>Imagery</h3>

All the images I used for my project can be found in the following [link](assets/images) 

I used the site [Unsplash](https://unsplash.com/) to download all my images, with the exception of the ones corresponding to the mountain bike trails I have based my website on. I acquired those one via facebook groups where I am a member of.

## Wireframes

All the wireframes I drew can be found in the following [link](/workspace/east-sussex-mtb-trails/wireframes)

## Features

The site counts with 1 pages in total, where the user can choose from two

### Existing Features

- It is responsive to screen size thanks to bootstrap and the media queries I have put in place.

- There are 9 possible combinations of user choices from the drop-downs, as per the table below:

    SKILL LEVEL | FITNESS LEVEL | MTB TRAIL
    ----------- | ------------- | ---------
    BEGGINER | AVERAGE | STANMER PARK  
    BEGGINER | FIT | STANMER PARK
    BEGGINER | SUPER FIT! | FRISTON FOREST
    INTERMEDIATE | AVERAGE | STANMER PARK
    INTERMEDIATE | FIT | FRISTON FOREST
    INTERMEDIATE | SUPER FIT! | SURREY HILLS
    ADVANCED | AVERAGE | STANMER PARK
    ADVANCED | FIT | FRISTON FOREST
    ADVANCED | SUPER FIT! | SURREY HILLS

 1.	If the user selects beginner (skills) and average (fitness levels), the mtb trail we recommend is Stanmer Park.
 2. If the user selects beginner (skills) and fit (fitness levels), the mtb trail we recommend is Stanmer Park.
 3. If the user selects beginner (skills) and super fit! (fitness levels), the mtb trail we recommend is Friston Forest.
 4. If the user selects intermediate (skills) and average (fitness levels), the mtb trail we recommend is Stanmer Park.
 5. If the user selects intermediate (skills) and fit (fitness levels), the mtb trail we recommend is Friston Forest.
 6. If the user selects intermediate (skills) and super fit! (fitness levels), the mtb trail we recommend is Surrey Hills.
 7. If the user selects advanced (skills) and average (fitness levels), the mtb trail we recommend is Stanmer Park.
 8. If the user selects advanced (skills) and fit (fitness levels), the mtb trail we recommend is Friston Forest.
 9. If the user selects advanced (skills) and super fit! (fitness levels), the mtb trail we recommend is Surrey Hills.

- RESULTS BASED ON USER CHOSEN OPTIONS

1. If the result is Stanmer Park, the home page will display a picture of Stanmer Park and 3 interactive buttons to show:
    - 1.1 The distance to cover going uphill.
    - 1.2 The distance to cover going downhill.
    - 1.3 Tips about Stanmer Park trails.
- The home page will, also, display a google maps api integration and a contact form, using mailjs api integration to get in touch with us to find out more about the trails at Stanmer Park.

2. If the result is Friston Forest, the home page will display a picture of Friston Forest and 3 interactive buttons to show:
    - 2.1 The distance to cover going uphill.
    - 2.2 The distance to cover going downhill.
    - 2.3 Tips about Friston Forest trails.
- The home page will, also, display a google maps api integration and a contact form, using mailjs api integration to get in touch with us to find out more about the trails at       Friston Forest.

3. If the result is Surrey Hills, the home page will display a picture of Surrey Hills and 3 interactive buttons to show:
    - 2.1 The distance to cover going uphill.
    - 2.2 The distance to cover going downhill.
    - 2.3 Tips about Surrey Hills trails.
- The home page will, also, display a google maps api integration and a contact form, using mailjs api integration to get in touch with us to find out more about the trails at Surrey Hills.
  
 ##### back to [contents](#table-of-contents)

---
## Technologies Used

- Languages : HTML, CSS, Bootstrap framework and Javascript.

- IDE: [Gitpod](https://www.gitpod.io/) (runs Visual Studio code online).

- Version control: Git on [Gitpod](https://www.gitpod.io/) and [Github](https://github.com/).

- Wireframes: [Balsamiq](https://balsamiq.com/)

- Browser Developer tools : [Google Chrome](https://www.google.com/chrome)

- Fonts : [Google Fonts](https://fonts.google.com/)

- Icons : [Fontawesome](https://fontawesome.com/)

- Colour Picker : [colourpicker](https://www.w3schools.com/colors/colors_picker.asp)

- RGB Generator : [rgbgenerator](https://www.coolgenerator.com/rgb-color-generator)

##### back to [contents](#table-of-contents)  

---
## Testing

 The following tools were utilised to test the website:

 - [Pingdom Website Speed Test](https://tools.pingdom.com/)

 The results of such test can be seen as below:

 <img src="assets/images/pingdomSpeedResults.PNG" width="400" height="300" />

 - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 - [W3C Markup Validator](https://validator.w3.org/)

 In regards to the HTML markup, I encountered a couple of warnings that even though it did not affect the functionality of the site, see below:

 <img src="assets/images/htmlWarnings.PNG" width="1000" height="300" />

 In regards to the CSS, no errors. 

 - [Responsive Web Design](http://ami.responsivedesign.is/)

 The website has been tested in various devices and I have also used the dev tools to make sure that the site renders adequately on all the breakpoints.

### Testing User Stories

-  ### <h3>First Time Visitor Goals</h3>

    1. As a First Time Visitor, I want to find out which mountain bike trail I should be attempting to ride, based on my current level of skills and fitness. Once I know which trail is suitable for me, I want to make some notes of the key characteristics of such trail.
        - This has been tested and an user will be more than able to identify which trail will be suitable to ride, according to their choices regarding level of skills and fitness.
    2. As a First Time Visitor, I want to plan directions to get to the location where the mountain bike trail is.
        - Map displays prefectly, giving the user the exact location of the trail.
    3. As a First Time Visitor, I want to get in touch with the real people behind East Sussex MTB Trails, and ask some questions about a particular trail.
        - An email form displays accordingly, and a message shows whether or not the form has been correctly filled in.

-  ### <h3>Returning Visitor Goals</h3>

    1. As a Returning Visitor, since my set of skills and fitness level might have changed from my first visit, I could be using this site to check out other trails to ride, and make some notes about the key characteristics of the new trail I would like to ride.
        - An user can return to the site and try other choices.
    2. As a Returning Visitor, I might want to plan directions to get to the location where any other trails are.
        - The map will enable users to perform these actions.
    3. As a Returning Visitor, I would like to keep interacting with the owners of the site, by sending them an enquiry about anything in regards to the information displayed about the trail, location or key characteristics of it.
        - The email form will enable users to perform these actions.

### Bugs and some other challenges    

On large screens, the paragraphs displaying the uphill & downhill distance as well as the tips for each trail slightly overlaps one of the forms.

### Final layout

 - Home Page: I introduced the carousel slider instead of a static photo, as per my wireframe I drew back when I was starting the project.
 - Shop: I deployed a dropdown menu with all the sections of the shop, rather than displaying them all on a single page.


##### back to [contents](#table-of-contents)

---
## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu. 
3. Scroll down the Settings page until you locate the "GitHub Pages" Section. 
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking

You may wish to contribute to this website and have your contribution published, if so, you are welcome to follow these steps below.

1. Log in to GitHub and locate the GitHub Repository
2. Open https://josecastanocoding.github.io/east-sussex-mtb-trails/ 
3. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
4. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

If you prefer working on the repository locally, you can clone the repository to your desktop by the following steps.

1. Go to [the east sussex mtb trails github page](https://github.com/JoseCastanoCoding/east-sussex-mtb-trails)
2. Under the repository name, click "Clone or download".
3. - To clone the repository using HTTPS, under "Clone with HTTPS", click the paste icon. 
   - To clone the repository using an SSH key, click Use SSH, then click the paste icon. 
   - To clone a repository using GitHub CLI, click Use GitHub CLI, then click the paste icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
5. Type 'git clone', then paste the URL you copied earlier above. 
6. Press Enter to create your local clone.

##### back to [contents](#table-of-contents)  

---
## Credits

### Resources

- [Code Institute](https://learn.codeinstitute.net/)
- [Typewolf](https://www.typewolf.com/google-fonts)
- [Design Shack](https://designshack.net/articles/trends/best-website-color-schemes/)
- [Unsplash](https://unsplash.com/)
- [Bootstrap components](https://getbootstrap.com/)
- [W3schools](https://www.w3schools.com/)
- [Code institute's Slack workspace channels](https://slack.com)
- [CSS tricks](https://css-tricks.com/) 
- [Stack Overflow](https://stackoverflow.com/)
- [Hover.css](https://ianlunn.github.io/Hover/#effects)
- [CSS Gradient](https://cssgradient.io/gradient-backgrounds/)
- [jQuery](https://jquery.com/)

### Acknowledgements

- Various people at the [code institute](https://codeinstitute.net/) and on the code institute Slack channel.
- Various people at [LinkedIn](https://www.linkedin.com/)
- My career consultant Stuart Crang.
- My mentor Aaron.

 ##### back to [contents](#table-of-contents)   




