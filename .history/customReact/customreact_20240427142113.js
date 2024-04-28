
function customRender(reactElement,container){
    //pehle ye banaoa iss type a element= anchor tag baanaana hai 
    // const domElement=document.createElement(reactElement.type)
    // //ab uss element ki inner html kya hai
    // //basically here we are setting the html component
    // domElement.innerHTML=reactElement.children
    // //ab sabko values do
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target); container.appendChild(domElement);


const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop  in reactElement.props) {
  if(prop==children) continue;
  domElement.setAttribute(prop,reactElement.props[props])

  
  

}

container.appendChild(domElement);


}



const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    //children property shows what content will be displayed
    children:"Click me to visit google"
}



const mainContainer= document.querySelector('#root');
customRender(reactElement,mainContainer);