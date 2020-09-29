const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// const text = document.querySelector('h1')
// text.innerHTML = 'Dom <br> is <br> awesome!
// "button": "Get Started",

const newBut = document.querySelector('button');
newBut.textContent = 'Get Started';


// cta.children[1].textContent = siteContent["cta"]["button"]

const text = document.querySelector('h1');
text.innerHTML = 'DOM <br> IS <br> AWESOME';


const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';
headerImg.alt = 'image of a code snippet';


const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt = 'imgage of code snippets aross the screen';

const navItems = document.querySelectorAll('a');
navItems[0].textContent = 'Services';
navItems[1].style.color = 'green';
navItems[1].textContent = 'Product';
navItems[2].style.color = 'green';
navItems[2].textContent = 'Vision';
navItems[3].style.color = 'green';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[4].style.color = 'green';
navItems[5].textContent = 'Contact';
navItems[5].style.color = 'green';
navItems[0].style.color = 'green';


const newLink = document.createElement('a')
newLink.textContent = 'Turbo'
newLink.href = '#'
newLink.id = 'linkOne'
newLink.style.color = 'green'
document.querySelector('nav').appendChild(newLink)

const newLink2 = document.createElement('a')
newLink2.textContent = 'Hyperspeed'
newLink2.href = '#'
newLink2.id = 'linkTwo'
newLink2.style.color = 'green'
document.querySelector('nav').prepend(newLink2)

const hTitle = document.querySelectorAll(".text-content h4")
const hPara = document.querySelectorAll(".text-content p")

hTitle[0].textContent = siteContent["main-content"]["features-h4"]
hTitle[1].textContent = siteContent["main-content"]["about-h4"]
hTitle[2].textContent = siteContent["main-content"]["services-h4"]
hTitle[3].textContent = siteContent["main-content"]["product-h4"]
hTitle[4].textContent = siteContent["main-content"]["vision-h4"]

hPara[0].textContent = siteContent["main-content"]["features-content"]
hPara[1].textContent = siteContent["main-content"]["features-content"]
hPara[2].textContent = siteContent["main-content"]["features-content"]
hPara[3].textContent = siteContent["main-content"]["features-content"]
hPara[4].textContent = siteContent["main-content"]["features-content"]



