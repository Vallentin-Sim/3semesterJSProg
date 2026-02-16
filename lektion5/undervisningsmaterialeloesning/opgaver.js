// Tilføj kode for opgave 4.1 - 4.5 her!

// opgave 5.1
for (let e of document.querySelectorAll('p')) {
    e.className = 'red';
}

// opgave 5.2
for (let e of document.querySelectorAll('h1 + * + *')) {
    e.style.color = 'brown';
}

// opgave 5.3
for (let even of lis = document.querySelectorAll('li:nth-child(odd)')) {
    even.style.backgroundColor = 'lightgrey';
}

// opgave 5.4
for (let e of document.querySelectorAll('h1 + p')) {
    // Løsningsmodel 1
    //let h2Node = document.createElement('h2')
    //e.parentNode.replaceChild(h2Node, e)
    // Løsningsmodel 2
    e.outerHTML = '<h2>' + e.innerHTML + '</h2>'
}

// opgave 5.5
document.body.innerHTML = '<div id="indhold"><p>Indhold:</p></div>'
    + document.body.innerHTML;
let indhold = document.querySelector('#indhold');
let id = 1;
for (let h of document.querySelectorAll('h1, h2')) {
    // Løsningsmodel 1
    h.id = 'id' + id;
    indhold.innerHTML += '<a href="#id' + id++ + '">' + h.innerHTML + '</a><br>';

    // Løsningsmodel 2
    h.setAttribute('id', id)
    let anchorNode = document.createElement('a')
    anchorNode.href = `#id${id++}${h.textContent}`
    indhold.appendChild(anchorNode)
    indhold.appendChild(document.createElement('br'))

};