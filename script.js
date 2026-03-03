const categories = [
  { name: 'Civil Engineering', page: 'pages/civil.html' },
  { name: 'Mechanical Engineering', page: 'pages/mechanical.html' },
  { name: 'Electrical Engineering', page: 'pages/electrical.html' },
  { name: 'Chemical Engineering', page: 'pages/chemical.html' },
  { name: 'Software Engineering', page: 'pages/software.html' },
  { name: 'Aerospace Engineering', page: 'pages/aerospace.html' }
];

const categoryGrid = document.getElementById('category-grid');

categories.forEach((category) => {
  const card = document.createElement('article');
  card.className = 'category-card';
  card.innerHTML = `
    <h2>${category.name}</h2>
    <p>Browse companies in the ${category.name.toLowerCase()} sector.</p>
    <a href="${category.page}">View Directory</a>
  `;
  categoryGrid.appendChild(card);
});
