function createHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    //header for restaurant: (now putting at top of page by default)
    // const headerDiv = document.createElement('div');
    // const title = document.createElement('h1');
    // headerDiv.append(title);
    // title.innerHTML = "Tapas de Nebraska";
    // content.append(headerDiv);
    
    //about section
    const desc = document.createElement('div');
    const descP = document.createElement('p');
    const descT = document.createElement('h1');
    descT.setAttribute('class', 'tabhead');
    descT.innerHTML = 'About:';
    desc.append(descT);
    desc.append(descP);
    descP.innerHTML = 'Tapas de Nebraska is a new tapas bar in Nebraska, the first of its kind that the website designer knows of! Our aim is to bring the joy of fine Spanish cuisine to the plains of the Midwest.'
    content.append(desc);

    //hours section
    const hoursDiv = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    hoursTitle.innerHTML = 'Hours:';
    const hours = document.createElement('p');
    hours.innerHTML = '<b>Hours:</b><br>Sunday: 8am - 12pm <br>Monday: 8am - 10pm <br>Tuesday: 8am - 10pm <br>Wednesday: 8am - 10pm <br>Thursday: 8am - 10pm <br>Friday: 8am - 12pm <br>Saturday: 8am - 12pm';
    hoursDiv.append(hours);
    content.append(hoursDiv);

    //address div
    const locDiv = document.createElement('div');
    const loc = document.createElement('h2');
    loc.innerHTML = "Address:";
    const locC = document.createElement('p');
    locC.innerHTML = '777 O Street, Lincoln, NE';
    locDiv.append(loc);
    locDiv.append(locC);
    content.append(locDiv);
}

//export default createHome();
export {
    createHome
};