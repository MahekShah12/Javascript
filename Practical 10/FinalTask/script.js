let products = [];
fetch('products.json')
    .then(response => response.json())
    .then(data => {
    products = data;
    populateCategoryDropdown(data);
    renderTable(data, 'fetchTable');
    console.log("Fetch API: Displayed items =", data.length); })
.catch(err => console.error('Fetch Error:', err));
$.getJSON('products.json', function(data) {
    renderTable(data, 'jqueryTable');
    console.log("jQuery AJAX: Displayed items =", data.length);
}).fail(() => console.error("Error loading JSON using jQuery."));
function renderTable(data, tableId) {
const table = document.getElementById(tableId);
table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price (₹)</th>
        <th>Stock</th>
    </tr> `;
let visibleCount = 0;
data.forEach(item => {
    const row = document.createElement('tr');
    if (item.stock < 5) row.classList.add('low-stock');
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.price}</td>
        <td>${item.stock}</td> `;
    table.appendChild(row);
    visibleCount++; });
    console.log(`${tableId}: Displayed ${visibleCount} items`); }
function populateCategoryDropdown(data) {
    const categories = [...new Set(data.map(p => p.category))];
    const dropdown = document.getElementById('categoryFilter');
    categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    dropdown.appendChild(option); }); }
document.getElementById('categoryFilter').addEventListener('change', () => {
filterAndSearch(); });
document.getElementById('searchBox').addEventListener('input', () => {
filterAndSearch(); });
function filterAndSearch() {
    let filtered = [...products];
    const category = document.getElementById('categoryFilter').value;
    const search = document.getElementById('searchBox').value.toLowerCase();
    if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category); }
    if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search))}
    renderTable(filtered, 'fetchTable');
    console.log("Filtered/Displayed items =", filtered.length); }