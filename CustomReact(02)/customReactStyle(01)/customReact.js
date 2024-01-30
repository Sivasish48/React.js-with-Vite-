// The belocw code is the view of how react actually generalize the code.


const root = document.querySelector("#root")


const reactElement = {
    type:"button",
    props:{
        href:"https://www.google.com/"
    },
    children:"Access GOOGLE"
}

function customRendering (root,reactElement){
    const domElement = document.createElement(reactElement.type)
  
    domElement.innerHTML = reactElement.children
    domElement.setAttribute =("href", reactElement.props.href)
    root.appendChild(domElement)
  }

  customRendering(root,reactElement)


