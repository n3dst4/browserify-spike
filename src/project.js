import double from "external"
import "babel-polyfill"
//import "kjgfhkjghf"

double(5).then((answer) => {
  console.log("hello")
  // 2
  document.getElementsByTagName("body")[0].innerHTML = answer
})
