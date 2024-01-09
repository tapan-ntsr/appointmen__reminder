document.addEventListener('DOMContentLoaded', function () {
    const design2Form = document.querySelector('.container-form.design-4 form');
    design2Form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleDesign2FormSubmit();
    });
  
    const design3Form = document.querySelector('.container-form.design-8 form');
    design3Form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleDesign3FormSubmit();
    });
  
    const design4Form = document.querySelector('.container-form.design-6 form');
    design4Form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleDesign4FormSubmit();
    });
  });
  
  function handleDesign2FormSubmit() {
    alert('Design 2 form submitted!');
  }
  
  function handleDesign3FormSubmit() {
    alert('Design 3 form submitted!');
  }
  
  function handleDesign4FormSubmit() {
    // Replace this alert with your logic for Design 4 form submission
    alert('Design 4 form submitted!');
  }
  