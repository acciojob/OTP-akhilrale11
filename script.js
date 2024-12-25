//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const nextInput = codes[idx + 1];
    if (e.target.value && nextInput) {
      nextInput.focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (!e.target.value && idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});
