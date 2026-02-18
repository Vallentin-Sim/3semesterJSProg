const elementNode = document.getElementsByName("input");

function addLabelsToInput() {
    const elementNode = document.getElementsByName("input");
    for (let i = 0; i < elementNode.length; i++) {
        const label = document.createElement("label");
        label.textContent = "Input " + (i + 1);
        elementNode[i].parentNode.insertBefore(label, elementNode[i]);
    }
}

