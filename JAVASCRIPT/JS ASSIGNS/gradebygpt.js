
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('studentName').value;
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);

    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (totalMarks / 500) * 100;

    let pass = true;
    let marksArray = [subject1, subject2, subject3, subject4, subject5];
    marksArray.forEach(mark => {
        if (mark < 33) {
            pass = false;
        }
    });

    let status = (pass && percentage >= 33) ? 'Pass' : 'Fail';

    let resultTable = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    let newRow = resultTable.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = totalMarks;
    cell3.innerHTML = percentage.toFixed(2) + '%';
    cell4.innerHTML = status;

    document.getElementById('studentForm').reset();
});
