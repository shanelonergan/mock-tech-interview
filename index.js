// create getElementsByClassName from scratch
document.getElementsByClassName("hello");

// given as help
document.children; // Nodes 
document.body.children // Nodes

getElementsByClassName(className){
  const elements = []
  const firstChildren = this.children
  
  const checkChildren = (child) => {
    if (child.classList.contains(className)) {
      elements.push(child)
    } 
    
     if (child.children) {
       const children = child.children
       children.forEach(child => checkChildren(child))
     }
  }
  
  firstChildren.forEach(child => { 
    checkChildren(child)
  })
  
  return elements
}

HTMLElement.prototype.getElementsByClassname = getElementsByClassName