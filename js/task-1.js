const categories = document.querySelectorAll("#categories .item");

function getCategoryListLength() {
  return `Number of categories: ${categories.length}`;
}

console.log(getCategoryListLength());

categories.forEach((category) => {
  const heading = category.querySelector("h2");
  const headingText = heading.textContent;

  const elements = category.querySelectorAll("li");
  const elementsLength = elements.length;

  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${elementsLength}`);
});