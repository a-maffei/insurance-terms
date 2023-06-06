# Insurance Glossary

The title says it all. It’s a simple glossary of insurance terms, aimed at making this often overwhelming topic more accessible for everyone.

You can check out the deployed project [here](https://insurance-glossary.netlify.app/).

## Purpose

It is imagined as a small extension of the Feather Insurance website (it could, for example, be linked in the footer section and interconnected with other resources on the website—interlinking is beneficial for SEO). From a branding/communication perspective, it aligns with Feather’s mission to make insurance understandable and simple thanks to a team of supportive, motivated, and knowledgeable experts.

Since I’m not an employee at Feather, I build this project in complete independence—as an opportunity to grow my frontend skills in connection to a real-world product that I consider interesting and compelling.

## Tech Stack

- TypeScript
- ReactJS (Create React App)
- Feather’s publicly available design system https://dirtyswan.design/
- Semantic HTML

A brief note on styling: I applied in a bit of a “scrappy” way given self-imposed time constraints and my limited knowledge of how to use this specific system—I used inline styles for typography, plus Styled Components for branded colours and some branded elements (buttons and inputs). I styled everything layout related and the autocomplete section independently.

## Overview

**An user can:**

- Scroll through the page and read through the glossary terms
- Select one of the 3 suggested terms to check out their definition (when refreshing, the suggested terms will change)
- Search for a specific term
- If the glossary has been filtered through search or selection, click on “All” to go back to all results
- Make use of the autocomplete function to select a term starting with the text they’re typing
- Click on a specific letter and go to the corresponding glossary section
- When reaching the end of the full glossary, navigate back to the top
- Contact support by clicking on a call to action at the bottom of the page
- Bonus: take a look at my CV, linked in the navigation bar 😇

## Screenshot

Desktop:<br>
<img alt="feather-desktop" width="90%" src="https://github.com/a-maffei/insurance-terms/assets/113006001/ee3193e6-379e-4a26-887b-d4e507a5944a">

Mobile:<br>
<img alt="feather-desktop" width="30%" src="https://github.com/a-maffei/insurance-terms/assets/113006001/e3d7394f-e9aa-4757-9e05-16166c13e0fc">

## Reflection

I built this project on and off, for what amounts to 3/4 days of work. It was a fun way to practice technologies I was familiar with (React) and newer ones (TypeScript, Styled Components).

**What I enjoyed while building this app:**

- Finding my way around a “foreign” design system and striving to have my design resemble as much as possible the original product
- I always enjoy thinking about State management and see my understanding of it evolve (lifting state up, using `children` props, etc.)
- The search bar was particularly fun, especially building and styling the “autocomplete” part

**Things I learned through building this app:**

- TypeScript fundamentals applied to a React project
- Autonomously finding my way around a design system
- Application and opportunities of some React hooks (useState, useEffect, useRef, useMemo)

## Wishes for V2

- Refactoring: review the main data structure to see if I can make the app more efficient (for example, consider switching from array to Map for the glossary)
- Refactoring: split the styling into different components instead of one single file-making it more organized, readable, and manageable
- Feature: build specific pages for each glossary term, to interlink with other resources on the Feather website (good for SEO)

## Acknowledgements

- [Pexels for the photos](https://www.pexels.com/)

## Authors

- [@a-maffei](https://www.github.com/a-maffei)
