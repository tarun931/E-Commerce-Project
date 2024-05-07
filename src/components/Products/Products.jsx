import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";
import Accordian from "../Accordian";

import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

// map
//
// a = [1,2,3,4]
// a = {1:{},2:{}}

// keys
//[1,2]
// obj[key]

// a.map(function(cur) {
// return cur*2;// 1, 2, 3, 4
//})

// promises

// let [cur, ind] = [0,1]
// hooks
// useWindowsize
//useState
//useEffect
// you create them and utilize them in the beginning of your function
// you don't use hooks to render a UI
// use will not use hooks inside conditions
// 1) Component is mounted
// 2) sets the product
// 3)compares the values
// 4) Rerenders because of dif
//

// useEffect
// all the side effects that happen
// in a react component need to be done here

// when do we rerender
//State changes
// State of parents changes
const list = [
  "Render list item 1",
  "Render list item 2",
  "Render list item 3",
  "Render list item 4"
];
function Products() {
  // let isLoading = true;
  // useState(default value)
  // [stateVar, setterfunction]
  console.log("Products");
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);

  // let a =  useState(true);
  // let isLoading = a[0];
  // let setIsLoading = a[1];
  useEffect(function () {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
        // isLoading = false;
        // rerender()
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div> Loading </div>;
  } else {
    return (
      <div>
        <Accordian heading={"heading"} body={"body"}>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Accordian heading="Nested Accordion" defaultExpanded={true}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Accordian>
        </Accordian>
        <Link to="/cart"> Cart</Link>
        <Categories />
        {products.map(function (product) {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default memo(Products);

// mounting
// updation
// unmounting

//Virtual DOM

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// VDOM -> JSON reprentation of DOM
// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// let newVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// diff = diffAndGenerateChanges(currentVdom, newVDom);
// ReactDOM.applyChanges(diff);
// currentVdom = newVDom;

// {
//   action: 'addNode',
//   nodeDetails: {
//     nodeName: 'li',
//     properties: {
//       children: [
//         'Item 4'
//       ]
//     }
//   }
// }
