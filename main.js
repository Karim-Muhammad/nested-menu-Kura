const menu = document.querySelector(".menu-bar ul");
const children = menu.children;

// Close All Menus When Click in any where in Page.
// window.document.addEventListener(
//   "click",
//   (ev) => {
//     console.log(ev.target);
//     if (ev.target !== document.querySelector("nav"))
//       Array.from(children).forEach((li) => li.classList.remove("active"));
//   },
//   true
// );

// console.log(children.querySelector(".nested-menu"));
// const nested_menu = Array.from(children).filter((li) => {
//   return li.classList.contains("active");
// });

// nested_menu.forEach((el) => {
//   el.addEventListener("click", (_) => {
//     nested_menu.forEach((li) => li.classList.remove("active"));
//     el.classList.add("active");
//   });
// });

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
    li.classList.toggle("active");
  })
);

function toggle(li) {}
