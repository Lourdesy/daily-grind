/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//retrieve data from querystring, if exists
if(urlParams.has("day")){
    myDay = urlParams.get("day");
}

//turn string into integer
myDay = parseInt(myDay);


switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pic of a delicious Pumpkin Spice Latte.",
            color:"purple",
            day:"Sunday",
            desc: `Sunday is for cozy vibes! Wrap your hands around a warm Pumpkin Spice Latte, full of cinnamon and nutmeg, while you enjoy your day of rest.`

        }
 	break;

 	case 1:
   		today = "Monday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a delicious caramel latte.",
            color:"red",
            day:"Monday",
            desc: `Beat the Monday blues! Our rich espresso and buttery caramel swirls will give you the sweet energy boost you need to conquer the work week.`

        }
 	break;

    case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc: `Keep it fun on Tuesday! Take a break with our signature Bubble Tea—chewy tapioca pearls and creamy tea make for the perfect midday treat.`

        }
 	break;
    case 3:
   		today = "Wednesday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A pic of mocha.",
            color:"Brown",
            day:"Wednesday",
            desc: `Happy Hump Day! You're halfway through the week, and you deserve a decadent Mocha. It's the perfect marriage of rich chocolate and bold coffee.`

        }
 	break;
        case 4:
   		today = "Thursday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A pic of Frappaccino.",
            color:"Blue",
            day:"Thursday",
            desc: `The weekend is almost here! Chill out this Thursday with a frosty Frappaccino—thick, icy, and topped with plenty of whipped cream.`

        }
    break;

    case 5:
   		today = "Friday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of drip coffee.",
            color:"green",
            day:"Friday",
            desc: `It's Friday! Stay focused and finish strong with our classic Drip coffee. It's hot, fresh, and ready to carry you straight into the weekend.`

        }
 	break;
        case 6:
   		today = "Saturday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A pic of a yummy Cold Brew.",
            color:"orange",
            day:"Saturday",
            desc: `Time for a Saturday adventure! Grab a smooth, powerful Cold Brew to keep you going all day long. It's the ultimate high-caffeine fuel for your weekend.`

        }
 	break;


 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

//alert(coffeeTemplate(coffee));

//Adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

//change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
           <p>
			<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
			<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
		</p>
    `;

    return myReturn;
}


































