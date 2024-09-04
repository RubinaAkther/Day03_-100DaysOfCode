// This is for counter section

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//This is for drowpdown menu
// dropdown menu

document.addEventListener('DOMContentLoaded', function () {
  const dropdownData = {
    'Background Medium': ['Bangla Medium', 'English Version', 'English Medium'],
    'Select Class': ['Class 1', 'Class 2', 'Class 3'],
    'Preferred Subject': ['Math', 'Science', 'English'],
    'Select Gender': ['Male', 'Female', 'Other'],
  };

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const label = dropdown.querySelector('p').innerText.trim();
    const optionsContainer = dropdown.querySelector('.options');

    const options = dropdownData[label] || [];
    options.forEach((optionText) => {
      const option = document.createElement('p');
      option.textContent = optionText;
      optionsContainer.appendChild(option);
    });

    dropdown.addEventListener('click', function () {
      const allOptions = document.querySelectorAll('.options');
      allOptions.forEach((opt) => {
        if (opt !== optionsContainer) {
          opt.style.display = 'none';
        }
      });
      optionsContainer.style.display =
        optionsContainer.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.options').forEach((opt) => {
        opt.style.display = 'none';
      });
    }
  });
});

// For location selection
$(document).ready(function () {
  $('.demo').select2();
});

//Filters hide
document.getElementById('hideDiv').onclick = function () {
  var myDiv = document.getElementById('myDiv');
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block'; // Use the appropriate display value for your layout
  } else {
    myDiv.style.display = 'none';
  }
};
