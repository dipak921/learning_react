import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function App(){
//   return(
//     <div>
//       <h1>Custom App | </h1>
//     </div>
//   )
// }


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

// const anothrElement = (
//   <a href ="https://google.com" target='_blank' >Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:'https://googel.com',target:'_blank'},
//   'click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  <App />
)
