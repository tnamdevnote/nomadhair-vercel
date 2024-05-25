# NomadHair

### Bringing Style to your place!

<p>
  NomadHair is a men's haircut service that is delivered to your place.</br>
  Sign up, book your appointment, and enjoy the quality haircut without having to leaving your home.
</p>
<p>Check out the demo <a href="www.nomadhair.co">here.</a></p>
<br>
<div align="center">
  <img src="https://github.com/tnamdevnote/nomadhair/assets/44216709/5fdd27f1-8b11-462f-b585-a8e67c78be47" alt='logo'/>
</div>
<br>
<br>
<caption>** Please note that this service is currently limited to Grand Rapids, MI, US region.</caption>
<br>

<h2>Motivation</h2>
<p>
There were two motivations behind this project:
<br>
<br>
1. To communicate my availability to my friends and family more effectively, so that they can easily schedule haircut appointment with me.
<br>
<br>
2. To Investigate how a component-driven development can efficiently manage complexities that arise in UI development, potentially leading to a more uniform user experience and design across the product.
</p>

<h2>How I Built NomadHair</h2>
<div>
  <img src="https://img.shields.io/badge/Next.js-%23000000?logo=next.js" alt='next.js'/>
  <img src="https://img.shields.io/badge/Sanity-%23000000?logo=sanity" alt='sanity'/>
  <img src="https://img.shields.io/badge/Resend-%23000000?logo=resend" alt='resend'/>
  <img src="https://img.shields.io/badge/Storybook-%23ffffff?logo=storybook" alt='storybook'/>
  <img src="https://img.shields.io/badge/TailwindCSS-%23FFFFFF?logo=tailwindcss" alt='tailwindcss'/>
  <img src="https://img.shields.io/badge/Figma-%23FFFFFF?logo=figma" alt='figma'/>
</div>

### 1. Planning and Design Process
#### 1-1. Establishing brand identity
I started out by defining a system that can help me make design decision more quickly. Rather than including all elements from the start, I focused on the key elements such as color scheme, typography, and logo. This not only prevented me from getting lost in limitless pool of colors and font sizes, but also made it much easier to ensure consistency in overall UI as the design evolved.
<br>
<br>
![image](https://github.com/tnamdevnote/nomadhair/assets/44216709/9a056e64-4141-4e12-af78-eb7195968d4c)

#### 1-2. Prototyping components (feat. Figma & Storybook)
Prototyping these UI building blocks was an iterative process that involved designing components using Figma, then quickly building out those components in Storybook to verify each of them functions as designed in different scenarios (viewport size, component states, color variants, etc.). A benefit of this approach was that I can quickly adapt to the evolving layout design simply by reassembling each pieces of components. 
<br>
<br>
![image](https://github.com/tnamdevnote/nomadhair/assets/44216709/ba422348-0db4-41f9-929f-259fc2b77c7c)


### 2. Development
#### 2-1. Automating UI testing workflow
In order to truly harness the benefit of CDD, each UI component needs to be thoroughly tried and tested. The issue was that this process required multiple rounds of testing, including accessibility, user interaction, and visual tests. It’s easy to find tools that test different parts of the UI, but the challenge was to combine them into a productive workflow, ensuring reliability of each UI components without compromising the development speed.
<br>
<br>
<img src="https://github.com/tnamdevnote/nomadhair/assets/44216709/390569ee-fde9-4560-8abd-586474a60cc2" alt="development process" />
<br>
<br>
Fortunately, Storybook offered a way to integrate various UI tests (Axe, Jest, and Playwright) into a single automated workflow using Github CI. With Github Action, I was able to quickly tests for accessibility, user interactions, and modifications in UI each time I created Pull Request. This enabled me to develop UI components more confidently and without sacrificing speed.

![image](https://github.com/tnamdevnote/nomadhair/assets/44216709/e4988d0f-0268-4ec7-a9d3-7a20835b37f0)


#### 2-2. High Level Architecture


<img src="https://github.com/tnamdevnote/nomadhair/assets/44216709/2b62ce5b-2469-4943-adc3-3ecbcb81696a" width="512" alt="system" />


#### 2-3. 

### 3. Deployment
- Coming soon


<h2>What's Included</h2>

### Storybook UI Component library
Storybook was used in this project to build and test UI component in isolation.<br>
Checkout Storybook [here.](https://65f86d160015b8443704c163-ojovnerorg.chromatic.com/?path=/docs/atoms-avatar--docs)

![image](https://github.com/tnamdevnote/nomadhair/assets/44216709/630f6653-d52d-4fbb-bb8c-63fee24376ad)


### Figma Design Documents
Another byproduct of this project is a Figma design documents, which includes:
- Final design mockups
- UI Kit
- Style Guide <br>

Checkout Figma design document [here.](https://www.figma.com/design/cURR8cW2EUkTgpHLf5RiVW/NomadHair?node-id=1506%3A3194&t=hWKvw14LmD6E2GKy-1)

![image](https://github.com/tnamdevnote/nomadhair/assets/44216709/cc7a09e9-58bf-40a2-9d1c-4db7c60a839a)


