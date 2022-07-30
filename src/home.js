function createHome() {
    const content = document.getElementById('content');
    
    //header for restaurant:
    const headerDiv = document.createElement('div');
    const title = document.createElement('h1');
    headerDiv.append(title);
    title.innerHTML = "Tapas de Nebraska";
    //title.classList.add('')
    content.append(headerDiv);
    
    //about section
    const desc = document.createElement('div');
    const descP = document.createElement('p');
    const descT = document.createElement('h1');
    descT.innerHTML = 'About:';
    desc.append(descT);
    desc.append(descP);
    descP.innerHTML = 'Tapas de Nebraska is a new tapas bar in Nebraska, the first of its kind! Our aim is to bring the joy of fine Spanish cuisine to the plains of the Midwest.'
    content.append(desc);

    //hours section
    const hoursDiv = document.createElement('div');
    const hours = document.createElement('p');
    hours.innerHTML = 'Sunday: 8am - 12pm <br>Monday: 8am - 10pm <br>Tuesday: 8am - 10pm <br>Wednesday: 8am - 10pm <br>Thursday: 8am - 10pm <br>Friday: 8am - 12pm <br>Saturday: 8am - 12pm';
    content.append('hoursDiv');

    //address div
    const locDiv = document.createElement('div');
    const loc = document.createElement('h1');
    loc.innerHTML = "Address:";
    const locC = document.createElement('p');
    locC.innerHTML = '777 O Street, Lincoln, NE';
    locDiv.append(loc);
    locDiv.append(locC);
    content.append(locDiv);
}

export default createHome();