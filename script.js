//declare the vars for having access to the template window
let fullScreenWindow = document.querySelector("#fullScreenWindow");
let fullScreenWindowPhoto = document.querySelector("#fullScreenWindowPhoto");
let closeButton = document.querySelector("#windowCloseButton");

//give functionality to left bar buttons
let leftBarButtonDates = document.getElementById("leftBarButtonDates");
leftBarButtonDates.addEventListener("click", () => {
    document.getElementById("pricesSection").scrollIntoView({behavior: 'smooth'});
});


//change the language of the button language when the mouse is over the element
let flags = ["https://flagdom.com/flag-resources/flag-images/international/british/british-flag_3000x1500.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/2000px-Flag_of_the_Republic_of_China.svg.png"];
let languageButton = document.querySelector("#languageButtonBarTop");
let languageLable = document.querySelector("#languageLableBarTop");
let languageFlag = document.querySelector("#languageFlagBarTop");

languageButton.addEventListener("mouseover", () => {
    languageLable.innerHTML = "中文";
    languageFlag.setAttribute("src", flags[1]); 
});

languageButton.addEventListener("mouseout", () => {
    languageLable.innerHTML = "ENG";
    languageFlag.setAttribute("src", flags[0]);
});

//open the leftBar options when you put the mouse over
//DOM elements
let leftBarElements = document.querySelectorAll(".leftBarBox");

leftBarElements.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
        elem.style.maxWidth = "none";
        elem.style.width = "20rem";

        //access to the div style
        let flashingText = elem.firstChild.style;
        flashingText.display = "flex";
    });
});

//Put back the original values of the element when the mouse is out of the element
leftBarElements.forEach((elem) => {
    elem.addEventListener("mouseout", () => {
        elem.style.maxWidth = "3.5rem";
        elem.style.width = "3.5rem";

        //access to the div style
        let flashingText = elem.firstChild.style;
        flashingText.display = "none";
    });
});

//modify topBar when scrolling
//DOM elements
let logos = ["https://www.sdatac.org.tw/wp-content/uploads/logo-big.png", "https://www.sdatac.org.tw/wp-content/uploads/favicon.png"]; 
let topBar = document.querySelector("#topBar");
let topBarElements = document.querySelectorAll(".topBarElements");

let lastScrollPos = 0;
window.addEventListener("scroll", (event) => {
    if (window.scrollY != 0) {
        //modifies topBar
        topBar.style.transition = "transform 0.3s ease 0s, background-color 0.3s ease 0s, opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s, margin 0.25s ease-out 0s, backdrop-filter 0.25s ease 0s";
        topBar.style.height = "4rem";
        topBar.style.backgroundColor = "white";
        topBar.style.color = "var(--main-title)";
        topBar.style.boxShadow = "0 1px 2vh black";
        topBarElements.forEach((elem) => {
            elem.style.borderColor = "var(--main-title)";
        });

    } else if (window.scrollY < 10) {
        //modifies topBar
        topBar.style.backgroundColor = "transparent";
        topBar.style.color = "white";
        topBar.style.boxShadow = "none";
        topBarElements.forEach((elem) => {
            elem.style.borderColor = "white";
        });
        topBar.style.height = "5rem";
        topBar.style.transition = "transform 0.3s ease 0s, background-color 0.3s ease 0s, opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s, margin 0.25s ease-out 0s, backdrop-filter 0.25s ease 0s";
    }
    //change the value
    lastScrollPos = window.scrollY;
    
});

//open a window to show the prices
let linkToPrices = "prices.png";
let pricesLink = document.querySelector("#pricesLink");

pricesLink.addEventListener("click", () => {
    fullScreenWindow.style.display = "flex";
    fullScreenWindowPhoto.setAttribute("src", linkToPrices);
});

//closes the window
closeButton.addEventListener("click", () => {
    fullScreenWindow.style.display = "none";
});

//open a window to show the brochure
let linkToBrochure = "https://drive.google.com/drive/folders/1mcyICx_T0iYw8jvD6cJO_g5izpOo9dRf?usp=sharing";
let brochureLink = document.querySelector("#brochureLink");

brochureLink.addEventListener("click", () => {
    window.open(linkToBrochure);
});

//change the content on the screen when the mouse points at an element of the list
//save links and names
const pictures = ["https://www.christiancamps.net/deer-run/wp-content/uploads/sites/3/2020/08/outdoor-prayer.jpg", "https://connectedlearning.sg/wp-content/uploads/2022/08/group-tutoring-benefits-learning-chinese-together.jpg", "https://www.novakidschool.com/blog/wp-content/uploads/2022/06/shutterstock_1956799045.webp", "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_119321/20240412055021_eKomR/png", "https://media.licdn.com/dms/image/C5112AQG-eTvF_6R-pw/article-cover_image-shrink_720_1280/0/1576997391713?e=2147483647&v=beta&t=tMckUczjErcJtm-f96KBVR6aw7cKD1HgxVkRP6CXKKM"];
const titles = ["Values that last a life", "Better methods give better results", "The best environment to learn English", "There is only room for unforgettable experiences", "Learning can be done in so many ways"];
const descriptions = ["This camp, apart from being an excellent place to learn English, is a place where values are encouraged and character is strengthened through entertaining activities.", "An smaller group moves faster. The couses are based on American-teaching style with small-class learning system.", "Classes are taught by foreign native-speaking teachers, each class accompanied by academic staff and teacher assistant to help students during the learning process.", "Multi-layered and diverse courses, combining indoor and outdoor learning activities to assist children to gain a holistic learning experience.", "Indoor courses include studying in English language, nutritious cooking, creative arts, and environmental education; Outdoor courses include exploratory education, tree-climbing experiences, forest exploration, and other physical activities."];


//DOM elements
const carrouselScreen = document.querySelector("#carrouselScreen");
const carrouselHeading = document.querySelector("#carrouselHeading");
const carrouselDescription = document.querySelector("#carrouselDescription");
const carrouselBackArrow = document.querySelector("#carrouselBackArrow");
const carrouselNextArrow = document.querySelector("#carrouselNextArrow");

let totalElements = pictures.length;
let currentElementID = 0;

//Set initial value of the screen
function setCarrouselValues(id) {
    carrouselScreen.setAttribute("src", pictures[id]);
    carrouselHeading.innerHTML = titles[id];
    carrouselDescription.innerHTML = descriptions[id];
}

setCarrouselValues(currentElementID);

carrouselNextArrow.addEventListener("click", () => {
    if (currentElementID == (totalElements - 1)) {
        currentElementID = 0;
        setCarrouselValues(currentElementID);

    } else {
        ++currentElementID;
        setCarrouselValues(currentElementID);
    }
});

carrouselBackArrow.addEventListener("click", () => {
    if (currentElementID == 0) {
        currentElementID = (totalElements - 1);
        setCarrouselValues(currentElementID);

    } else {
        --currentElementID;
        setCarrouselValues(currentElementID);
    }
});








