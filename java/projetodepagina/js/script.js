
function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.classList.add('hidden');
    });
    document.getElementById('defaultMessage').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}