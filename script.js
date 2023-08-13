var todos = [
  {
    title: "personnel website Completetion DeadLine - 17th Agust",
    link: "",
  },
  {
    title: "Apache Kafka",
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
