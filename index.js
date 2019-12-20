document.getElementsByClassName("hello");

document.children; // Nodes 
document.body.children // Nodes

document.body.getElementsByClassName("Hello")

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