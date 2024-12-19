const data = {
  categories: [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ],
  series: [
    {
      label: '2023',
      data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945]
    },
    {
      label: '2024',
      data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689]
    }
  ]
};

// Initialize Chart
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.categories,
    datasets: data.series.map(series => ({
      label: series.label,
      data: series.data,
      backgroundColor: series.label === '2023' ? 'rgba(52, 152, 219, 0.5)' : 'rgba(46, 204, 113, 0.5)',
      borderColor: series.label === '2022' ? '#3498db' : '#2ecc71',
      borderWidth: 1
    }))
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2500
        }
      }
    }
  }
});


function toggleMenu() {
  const menu = document.getElementById('menu');
  const sidebar = document.querySelector('.sidebar'); // Sidebar elemen
  menu.classList.toggle('active');
  sidebar.classList.toggle('active'); // Tambahkan kelas active ke sidebar
}
  
// Populate Table
const tableBody = document.getElementById('sales-table-body');
data.categories.forEach((month, index) => {
const row = document.createElement('tr');
row.innerHTML = `
    <td>${month}</td>
    <td>${data.series[0].data[index]}</td>
    <td>${data.series[1].data[index]}</td>
`;
tableBody.appendChild(row);
});

// Search Filter
function filterTable() {
const input = document.getElementById('searchInput').value.toLowerCase();
const rows = document.querySelectorAll('#sales-table-body tr');
rows.forEach(row => {
    const month = row.cells[0].textContent.toLowerCase();
    row.style.display = month.includes(input) ? '' : 'none';
});
}
  

// Menutup sidebar saat menu diklik
const menuLinks = document.querySelectorAll('.sidebar nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    const menu = document.getElementById('menu');
    const sidebar = document.querySelector('.sidebar');
    menu.classList.remove('active'); // Hapus kelas active pada menu
    sidebar.classList.remove('active'); // Hapus kelas active pada sidebar
  });
});
