
// Portfolio Items Array
// var portfolioItems = [
//     ["divdiv","divdiv","https://dividv.herokuapp.com","A living social art project. Create your own div to add to the always growing canvas. Built with Handlebars, Sequelize and Huebee. Hosted on Herkou with a JawsDB mySQL database."],
//     ["linkedin","linkedin","url",""],
//     ["contact","contact","email",""],
//     ["SVC","svc","https://simplicityviaclarity.com/",""],
//     ["subloser.com","subloser","https://psych0sykes.github.io/subloser.com/",""],
//     ["FOOD FIGHT","foodFight","https://psych0sykes.github.io/unit-4-game/",""],
//     ["SHAPES!","shapes","https://psych0sykes.github.io/word-game/",""]
// ];

var portfolioItems = [
    {
        title: "divdiv",
        id: "dividv",
        urlText: "check out the app",
        url: "https://divdiv.herokuapp.com",
        description: "A living social art project. Create your own div to add to the always growing canvas. Built with Handlebars, Sequelize and Huebee. Hosted on Herkou with a JawsDB mySQL database.",
        background: ["image","divdiv"]
    },
    {
        title: "linkedin",
        id: "linkedin",
        urlText: "view my profile",
        url: "https://www.linkedin.com/in/blake-sykes-7b5656140/",
        description: "Currently employed at Castle & Cooke Mortgage as a Financial Analyst.",
        background: ["color"]
    },
    {
        title: "contact",
        id: "contact",
        urlText: "or email me:",
        url: "mailto:blakesykes13@gmail.com",
        description: "call me: 385-445-5016",
        background: ["color"]
    },
    {
        title: "subloser.com",
        id: "subloser",
        urlText: "click here",
        url: "https://subloser.com",
        description: "I write, record, produce and perform music under the name subloser. This is the website I made for myself. Built with HTML, CSS, and Javascript.",
        background: ["color"]
    }

];


// Color Pick Function

var colorArray = [
    "red","blue","yellow"
];
var colorCount = 0;
var menuMoved = false;

function pickColor() {
    console.log("color count: " + colorCount)
    if(colorCount >= (colorArray.length - 1)){
        colorCount = 0;
        return(colorCount);
    }
    else {
        colorCount++;
        return(colorCount);
    };
};


// Create div boxes from array

function createPortfolio(a) {
    for (i=0;i<a.length;i++){
        let newItem = a[i];
        let newDiv = $("<div>");
        let newP = $("<p>");
        let newColor = colorArray[pickColor()];
        $(newP).text(newItem.title);
        $(newDiv).append(newP);
        $(newDiv).addClass(newColor);
        $(newDiv).attr("id",i);
        $(newDiv).addClass("portfolioItem");
        $(newDiv).attr("name",newItem.id);
        $("#menuRow").append(newDiv);
        if(newItem.background[0] === "color"){
            a[i].background.push(newColor)
        };
    }
};

createPortfolio(portfolioItems);

// Move Menu Down, reveal display

function moveMenu() {
    if(menuMoved === false){
        console.log("moving menu...")
        $("#menuRow").animate({
            top: "300"
        },1000);
        menuMoved = true;
    };
}


// Reveal Display; moves menu and shows the display item

function revealDisplay() {
    $("#displayRow").animate({
        opacity: "100"
    },5000);
};

// Transition Fade

// Populate Display Function

function populateDisplay(a) {
    console.log("populating " + a.id + "...")
    $("#displayTitle").html(a.title);
    $("#displayDescription").html(a.description);
    $("#displayLink").html(a.urlText);
    $("#displayLink").attr("href",a.url);

    switch (a.background[0]) {
        case "image":
            $("#displayIcon").attr("class","col-4 " + a.background[1]);
            $("#displayIcon").attr("style","background-color: none");
            break;
        case "color":
            $("#displayIcon").attr("style","background-color: " + a.background[1]);
            $("#displayIcon").attr("class", "col-4");
            break;
    };
};

// Menu On Click Functions

function menuOnClick() {
    $(".portfolioItem").click(function(){
        console.log(this.id)
        populateDisplay(portfolioItems[this.id]);
        revealDisplay();
        moveMenu();
    });

};

menuOnClick();