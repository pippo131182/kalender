// Data hari libur nasional
const holidays = {
    "Januari": { 1: "Tahun Baru Masehi", 27: "Isra Miraj Nabi Muhammad SAW", 29: "Tahun Baru Imlek 2576" },
    "Maret": { 29: "Hari Raya Nyepi" },
    "April": { 1: "Hari Raya Idul Fitri 1446 H", 18: "Wafat Yesus Kristus" },
    "Mei": { 1: "Hari Buruh Internasional", 12: "Hari Raya Waisak 2569", 29: "Kenaikan Isa Almasih" },
    "Juni": { 1: "Hari Lahir Pancasila", 6: "Hari Raya Idul Adha 1446 H", 27: "Tahun Baru Islam 1447 H" },
    "Agustus": { 17: "Hari Kemerdekaan RI" },
    "September": { 5: "Maulid Nabi Muhammad SAW" },
    "Desember": { 25: "Hari Raya Natal" },
};

// Fungsi untuk membuat kalender bulan
function generateMonth(name, days, startDay) {
    let table = `<div class="month"><h2>${name} 2025</h2><table>`;
    table += `
        <thead>
            <tr>
                <th>Minggu</th>
                <th>Senin</th>
                <th>Selasa</th>
                <th>Rabu</th>
                <th>Kamis</th>
                <th>Jumat</th>
                <th>Sabtu</th>
            </tr>
        </thead>
        <tbody>
    `;

    let day = 1;
    for (let row = 0; row < 6; row++) {
        table += "<tr>";
        for (let col = 0; col < 7; col++) {
            if ((row === 0 && col < startDay) || day > days) {
                table += "<td></td>";
            } else {
                const holiday = holidays[name] && holidays[name][day] ? ' class="holiday"' : '';
                table += `<td${holiday}>${day}</td>`;
                day++;
            }
        }
        table += "</tr>";
    }
    table += "</tbody></table>";

    if (holidays[name]) {
        table += `<p class="holiday">${Object.entries(holidays[name])
            .map(([date, desc]) => `${date} ${name}: ${desc}`)
            .join("<br>")}</p>`;
    }

    table += "</div>";
    return table;
}

// Data bulan
const months = [
    { name: "Januari", days: 31, startDay: 3 },
    { name: "Februari", days: 28, startDay: 6 },
    { name: "Maret", days: 31, startDay: 6 },
    { name: "April", days: 30, startDay: 2 },
    { name: "Mei", days: 31, startDay: 4 },
    { name: "Juni", days: 30, startDay: 0 },
    { name: "Juli", days: 31, startDay: 2 },
    { name: "Agustus", days: 31, startDay: 5 },
    { name: "September", days: 30, startDay: 1 },
    { name: "Oktober", days: 31, startDay: 3 },
    { name: "November", days: 30, startDay: 6 },
    { name: "Desember", days: 31, startDay: 2 },
];

// Generate semua bulan
const calendarContainer = document.getElementById("calendar-container");
months.forEach(({ name, days, startDay }) => {
    calendarContainer.innerHTML += generateMonth(name, days, startDay);
});
