//alert("Hi There")
$(document).ready(function () {
  getNewQuote()
  changeTheme()
})

const getNewQuote = () => {
  //alert("getting new quote");
  // get a random index
  let index = Math.floor(Math.random() * 10)

  // get a random item
  const { id, quote, author } = quotes[index]
  // Set the quote to the element #text
  $("#text").text(quote)

  // Set the author to the #author element
  $("#author").text("- " + author)
  //return quotes[index]
}

const changeTheme = () => {
  let index = Math.floor(Math.random() * 10)
  console.log($("body").css("--theme-color"))
  let newTheme = themeColors[index]
  // $("body").toggleClass(newTheme);
  $("body").css("--theme-color", newTheme)
}

function handleClick() {
  getNewQuote()
  changeTheme()
}
// add new quote event handler
const newQuoteElem = document.getElementById("new-quote")
newQuoteElem.addEventListener("click", handleClick)
