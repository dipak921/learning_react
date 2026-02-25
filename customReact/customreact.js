function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElment = document.createElement(reactElement.type)
    domElment.innerHTMl = reactElement.children
    for(const props in reactElement.props){
        if(prop == 'children') continue;
        domElment.setAttribute(props,reactElement.props[prop])
    }
    container.appendChild(domElment)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)