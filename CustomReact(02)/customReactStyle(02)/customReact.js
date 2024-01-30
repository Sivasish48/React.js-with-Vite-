// The belocw code is the view of how react actually generalize the code.


const root = document.querySelector("#root")


const reactElement = {
    type:"s",
    props:{
        href:"https://www.google.com/",
        target : "_blank"
    },
    children:"Access GOOGLE"
}

function customRendering (root,reactElement){
    const domElement = document.createElement(reactElement.type)
  
    domElement.innerHTML = reactElement.children
    for (const key in reactElement.props) {
       domElement.setAttribute=(key,reactElement.props.key) // or .props[key])
    }
   root.appendChild(domElement)
  }

  customRendering(root,reactElement)


