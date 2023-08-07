

export function setupUserForm() {
    const form = document.createElement('form');
    form.id = 'user-form';
  
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
  
    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.id = 'age';
    ageInput.name = 'age';
    ageInput.required = true;
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';


  
    form.appendChild(nameLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(ageLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(ageInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    
  
    form.addEventListener('submit', handleSubmit);
  
    const container = document.createElement('div');
    container.appendChild(form);
  
    document.body.appendChild(container);
  }
  
  function handleSubmit(event: Event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
  
    const name = nameInput.value;
    const age = ageInput.value;
  
    const output = document.getElementById('output');
    if (output) {
      output.textContent = `Hello, ${name}! You are ${age} years old.`;
    }

    //setShopVisibility()
  }
  
  document.addEventListener('DOMContentLoaded', setupUserForm);
  