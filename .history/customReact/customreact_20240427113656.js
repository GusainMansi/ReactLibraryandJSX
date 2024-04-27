
function customRender(reactElement,container){
    //pehle ye banaoa iss type a element
    const domElement=document.createElement(reactElement.type)
    //ab uss element ki inner html kya hai
    domElement.innerHTML=reactElement.children
    //ab sabko values do
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
}






const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click me to visit google"
}



const mainContainer= document.querySelector('#root');
customRender(reactElement,mainContainer);