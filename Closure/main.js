// ATM data
const atmData = [
    { id: 1, location: "Downtown", bank: "Bank A", status: "working" },
    { id: 2, location: "Uptown", bank: "Bank B", status: "not working" },
    { id: 3, location: "Midtown", bank: "Bank A", status: "working" },
    { id: 4, location: "Suburb", bank: "Bank C", status: "working" },
    { id: 5, location: "Downtown", bank: "Bank B", status: "working" },
];

// Closure function factory
function createATMFilter(atms) {
    return function(bankName) {
        return atms.filter(atm => atm.bank === bankName && atm.status === "working");
    };
}

// Use the closure
const getWorkingATMs = createATMFilter(atmData);

// Populate bank select options
document.addEventListener('DOMContentLoaded', () => {
    const bankSelect = document.getElementById('bankSelect');
    const banks = [...new Set(atmData.map(atm => atm.bank))];
    banks.forEach(bank => {
        const option = document.createElement('option');
        option.value = bank;
        option.textContent = bank;
        bankSelect.appendChild(option);
    });

    // Show code sample
    document.getElementById('codeBlock').textContent = `const atmData = ${JSON.stringify(atmData, null, 2)}\n\nfunction createATMFilter(atms) {\n    return function(bankName) {\n        return atms.filter(atm => atm.bank === bankName && atm.status === "working");\n    };\n}\n\nconst getWorkingATMs = createATMFilter(atmData);\n`;
});

// Filter and display working ATMs
document.getElementById('filterBtn').addEventListener('click', () => {
    const bank = document.getElementById('bankSelect').value;
    const atms = getWorkingATMs(bank);
    const atmList = document.getElementById('atmList');
    atmList.innerHTML = '';
    if (atms.length === 0) {
        atmList.innerHTML = '<li>No working ATMs for this bank.</li>';
    } else {
        atms.forEach(atm => {
            const li = document.createElement('li');
            li.textContent = `${atm.location} (ID: ${atm.id})`;
            atmList.appendChild(li);
        });
    }
});
