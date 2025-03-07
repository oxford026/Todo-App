
const addBtn = document.querySelector(`#btn1`);
const deleteBtn = document.querySelector(`#btn2`)

addBtn.addEventListener(`click`, function (e) {

    const text = document.querySelector(`#input`);
    console.log(text.value);
    const p = document.createElement(`p`);
    p.textContent = text.value;
    document.querySelector(`body`).appendChild(p);
    text.value = ``;
    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    p.appendChild(checkbox);

    const updateSummary = function () {
        const checkboxes = Array.from(document.querySelectorAll(`input[type="checkbox"]`));
        const incompleteTodos = checkboxes.filter(function (checkbox) {
            return !checkbox.checked;
        });
        let summary = document.querySelector(`#summary`);

        if (!summary) {
            summary = document.createElement(`h3`);
            document.querySelector(`body`).appendChild(summary);
        }


        summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    };

    document.addEventListener(`change`, updateSummary);
    updateSummary();
});


deleteBtn.addEventListener(`click`, function (e) {
    const isChecked = document.querySelectorAll(`input[type="checkbox"]:checked`);
    isChecked.forEach(function (check) {
        check.parentElement.remove();

        const isCompleted = document.querySelectorAll(`input[type="checkbox"]`).length === 0;
        if (isCompleted) {
            summary.textContent = `Congratulations! You have completed all your todos!`;

        }

    });



});


