let job;
let future;
let children;

const jobs = ["doctor", "teacher", "laywer", "software engineer", "shop assistant", "nurse", "singer", "millionaire",]
const futures = ["Happiness", "Change", "Uncertainty", "Money", "Long-life", "Health", "Ill-health", "Loneliness"]

function getRandom(arrayList){
    return Math.floor(Math.random() * arrayList.length);
}

function getFortune(jobs, futures){
    job = jobs[getRandom(jobs)];
    future = futures[getRandom(futures)];
    children = Math.floor(Math.random() * 8);
    const fortune = `You will be a ${job}.\n You will have ${children} children.\n ${future} is in your future.`
    return fortune
}

function changeWidthInPercentage(percentage) {
    var fortuneParagraph = document.querySelector('div');
    fortuneParagraph.style.width = percentage + '%'; // Set the width to your desired percentage
}

function returnFortune(){
    const fortuneParagraph = document.getElementById("fortune")
    textToAdd = getFortune(jobs, futures);
    fortuneParagraph.innerText = textToAdd;
    changeWidthInPercentage(60)
}

