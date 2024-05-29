document.addEventListener('DOMContentLoaded', function () {
    generateSizeTable();
});

function generateSizeTable() {
    const sizes = [
        ['CM', 'EU', 'US', 'UK'],
        ['24', '38.5', '6', '5.5'],
        ['24.5', '39', '6.5', '6'],
        ['25', '40', '7', '6.5'],
        ['25.5', '40.5', '7.5', '7'],
        ['26', '41', '8', '7.5'],
        ['26.5', '42', '8.5', '8'],
        ['27', '42.5', '9', '8.5'],
        ['27.5', '43', '9.5', '9'],
        ['28', '44', '10', '9.5'],
        ['28.5', '44.5', '10.5', '10'],
        ['29', '45', '11', '10.5'],
        ['29.5', '45.5', '11.5', '11'],
        ['30', '46', '12', '11.5'],
        ['31', '47.5', '13', '12.5'],
        ['32', '48.5', '14', '13.5'],
        ['33', '49.5', '15', '14.5'],
        ['34', '50.5', '16', '15.5']
    ];

    const table = document.getElementById('sizeTable');

    sizes.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const td = document.createElement(rowIndex === 0 ? 'th' : 'td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}