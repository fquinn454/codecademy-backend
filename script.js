let opportunity;
let noun;
let verb;

const opportunities = [
    "new", "exciting", "unexpected", "lucrative",
    "challenging", "romantic", "mysterious", "promising",
    "fortunate", "interesting", "promising", "rewarding", "thrilling", 
    "serendipitous", "fortuitous", "magical", "adventurous", "transformative"
];

const nouns = [
    "career", "relationship", "hobby", "passion", "dream", 
    "goal", "quest", "aspiration", "path", "commitment", "friendship", 
    "decision", "investment"
];

const verbs = [
    "embracing", "exploring", "seeking", "pursuing", "encountering",
    "accepting", "welcoming", "indulging", "discovering"
];

function getRandom(arrayList) {
    return Math.floor(Math.random() * arrayList.length);
}

function getFortune(opportunities, nouns, verbs) {
    const opportunity = opportunities[getRandom(opportunities)];
    const noun = nouns[getRandom(nouns)];
    const verb = verbs[getRandom(verbs)];
    const fortune = `You will encounter ${opportunity} opportunities today.\n
    Your ${noun} will bring you joy and fulfillment.\n
    Be open to ${verb} new experiences: they will lead to growth.  `
    
    return fortune;
}

function returnFortune() {
    const fortuneParagraph = document.getElementById("fortune");
    const textToAdd = getFortune(opportunities, nouns, verbs);
    fortuneParagraph.innerText = textToAdd;
    const fortuneParagraphDiv = document.querySelector('div');
    fortuneParagraphDiv.style.display = "block";
}


