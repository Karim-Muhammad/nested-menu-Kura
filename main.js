const menu = document.querySelector(".menu-bar ul");
const children = menu.children;
const barIcon = document.querySelector(".fa-bars");
barIcon.addEventListener("click", () => barIcon.classList.toggle("active"));

// Module

const nested_menu = [];

Array.from(children).forEach((el) => {
  isNest(el);
});

console.log(nested_menu);

// for check on ".nested-menu" class.
function isNest(element) {
  if (element.classList.contains("nested-menu")) {
    nested_menu.push(element);
    traverse(element);
  }
}
// for add events on elements which have class ".nested-menu".
function traverse(head) {
  const nested = head.querySelector(".sub-menu ul").children;
  Array.from(nested).forEach((el) => {
    isNest(el);
  });
}

console.log(nested_menu);
nested_menu.forEach((li) =>
  li.addEventListener("click", (ev) => {
    ev.stopPropagation();
    console.log(li.parentElement);
    Array.from(li.parentElement.children).forEach((el) =>
      el.classList.remove("active")
    );
    li.classList.toggle("active");
  })
);

function toggle(li) {}

window.document.addEventListener("click", () => {
  Array.from(children).forEach((el) => el.classList.remove("active"));
});
