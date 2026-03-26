document.addEventListener('DOMContentLoaded', loadCategories);

function loadCategories() {
    fetch('/api/categories')
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#categoriesTable tbody');
            tbody.innerHTML = '';
            data.forEach(cat => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${cat.id}</td>
                    <td>${cat.name || ''}</td>
                    <td>
                        <button onclick="editCategory(${cat.id}, '${cat.name || ''}')">Edit</button>
                        <button onclick="deleteCategory(${cat.id})">Delete</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        });
}

function showAddForm() {
    document.getElementById('categoryId').value = '';
    document.getElementById('categoryName').value = '';
    document.getElementById('formContainer').style.display = 'flex';
}

function hideForm() {
    document.getElementById('formContainer').style.display = 'none';
}

document.getElementById('categoryForm').onsubmit = function(e) {
    e.preventDefault();
    const id = document.getElementById('categoryId').value;
    const name = document.getElementById('categoryName').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/categories/${id}` : '/api/categories';
    fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id ? Number(id) : undefined, name })
    })
    .then(() => {
        hideForm();
        loadCategories();
    });
};

function editCategory(id, name) {
    document.getElementById('categoryId').value = id;
    document.getElementById('categoryName').value = name;
    document.getElementById('formContainer').style.display = 'flex';
}

function deleteCategory(id) {
    if (confirm('Delete this category?')) {
        fetch(`/api/categories/${id}`, { method: 'DELETE' })
            .then(() => loadCategories());
    }
}
