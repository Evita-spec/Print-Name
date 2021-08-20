const myName = () => {
    return "Evita Adame Yobana"
}
const span = document.createElement("span")

span.style.color = '#0000FF';
span.style.fontSize ='50px';
span.style.fontWeight ='bold';
span.style.textShadow ='2px 2px 3px yellow';


span.innerText = myName();

document.body.append(span)


