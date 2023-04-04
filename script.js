var todos = [
  {
    title: "Improving Quality of personal website",
    link: "https://www.ionos.com/website-checker-result#menu-PRESENTATION",
  },
  {
    title: "Placement Preparation Review",
    link: "",
  },
  {
    title: "Spring-boot personnel website initialization",
    link: "",
  },
];

function validate(url) {
  if (url.length > 0) return `<a href="${url}">Link</a>`;
  return "";
}

var action = document.getElementById("todos-list");
var html = "";
for (var i = 0; i < todos.length; i++) {
  html += `<tr>
            <td>${i + 1}</td>
            <td>${todos[i].title} ${validate(todos[i].link)}</td>
        </tr>`;
}
action.innerHTML = html;
