fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let table = document.getElementById('fetchTable');
    table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>";
    data.forEach(student => {
      let highlight = student.marks > 90 ? 'highlight' : '';
      table.innerHTML += `<tr class="${highlight}">
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
    let highlight = student.marks > 90 ? 'highlight' : '';
    table.append(`<tr class="${highlight}">
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.marks}</td>
      <td>${student.grade}</td>
    </tr>`);
  });
});
