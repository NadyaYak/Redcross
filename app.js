
const frequencyInput = document.querySelector('#frequency');
const amountInput = document.querySelector('#amount');
const recurringDonationCheckbox = document.querySelector('#recurring-donation');

recurringDonationCheckbox.addEventListener('change', () => {
  if (recurringDonationCheckbox.checked) {
    const frequency = frequencyInput.value;
    const amount = amountInput.value;
    let recurringAmount = amount;

    if (frequency === 'monthly') {
      recurringAmount *= 12;
    }

    amountInput.value = recurringAmount;
  } else {
    amountInput.value = '';
  }
});


