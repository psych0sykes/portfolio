
// Portfolio Items Array
var portfolioItems = [
    ["item","id","url"],
    ["linkedin","linkedin","url"],
    ["contact","contact","email"],
    ["SVC","svc","https://simplicityviaclarity.com/"],
    ["subloser.com","subloser","https://psych0sykes.github.io/subloser.com/"],
    ["FOOD FIGHT","foodFight","https://psych0sykes.github.io/unit-4-game/"],
    ["SHAPES!","shapes","https://psych0sykes.github.io/word-game/"]
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
        $(newP).text(newItem[0]);
        $(newDiv).append(newP);
        $(newDiv).addClass(newColor);
        $(newDiv).attr("id",newItem[1]);
        $(newDiv).addClass("portfolioItem");
        $("#menuRow").append(newDiv);
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


// Populate Display Functions

function revealDisplay(a) {
    console.log(a);
    $("#displayRow").animate({
        opacity: "100"
    },5000);
};

function PopulateDisplay(a) {
    
}

// Menu On Click Functions

function menuOnClick() {
    $(".portfolioItem").click(function(){
        revealDisplay(this.id);
        moveMenu()
    });

};

menuOnClick();