
const addBtn = document.querySelector(`#btn1`);
const deleteBtn = document.querySelector(`#btn2`)
const summary = document.querySelector(`#summary`);
const todostext = document.querySelector(`#input`);
const hidecompleted = document.querySelector(`#HideCompleted`);

const paragraphsCard = document.querySelector(`#paragraphsCard`);



addBtn.addEventListener(`click`, function (e) {

    const text = document.querySelector(`#input`);
    console.log(text.value);

    const paragraphs = document.createElement(`p`);
    paragraphs.textContent = text.value;
    paragraphsCard.appendChild(paragraphs);
    text.value = ``;

    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    paragraphs.appendChild(checkbox);

    const updateSummary = function () {
        const checkboxes = Array.from(document.querySelectorAll(`p input[type="checkbox"]`));
        const incompleteTodos = checkboxes.filter(function (checkbox) {
            return !checkbox.checked;
        });


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
    const isChecked = document.querySelectorAll(`p input[type="checkbox"]:checked`);
    isChecked.forEach(function (check) {
        check.parentElement.remove();

        const isCompleted = document.querySelectorAll(`p input[type="checkbox"]`).length === 0;
        if (isCompleted) {
            summary.textContent = `Congratulations! You have completed all your todos!`;

        }
    });
});

hidecompleted.addEventListener(`click`, function (e) {
    setInterval(() => {
        const completedCheckboxes = Array.from(document.querySelectorAll(`p input[type="checkbox"]`));
        completedCheckboxes.forEach(function (checkbox) {


            if (e.target.checked && checkbox.checked) {
                checkbox.parentElement.style.display = `none`;
            } else {
                checkbox.parentElement.style.display = `block`;
            }


        });
    })
});


