fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let table = document.getElementById('fetchTable');
    table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>";
    data.forEach(student => {
      table.innerHTML += `<tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${student.grade}</td>
      </tr>`;
    });
  });

$.getJSON('data.json', function(data) {
  let table = $('#jqueryTable');
  table.append("<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>");
  $.each(data, function(_, student) {
    table.append(`<tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.marks}</td>
      <td>${student.grade}</td>
    </tr>`);
  });
});
