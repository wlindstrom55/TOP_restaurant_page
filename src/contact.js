function createContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headDiv = document.createElement('div');
    const head = document.createElement('h1');
    head.innerHTML = 'Contact Us:';
    headDiv.append(head);
    content.append(headDiv);

    const infoDiv = document.createElement('div');
    const info = document.createElement('p');
    info.innerHTML = "Will Lindstrom<br>Restaurant Proprietor<br>555-555-5555<br>realemail@yes.com";
    infoDiv.append(info);
    content.append(infoDiv);
}

export { createContact };