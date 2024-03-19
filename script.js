const scriptURL = 'https://script.google.com/macros/s/AKfycby053f-33OOymhauLHyiyae9SbJoXlCLUidwOdvqYkUEhkCz44t8ndS7cVomhljlKwN/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data => {
      alert('Thank you! Your form is submitted successfully.');
                 window.location.reload(); 
    })
    .catch(error => console.error('Error!', error.message));
});




 