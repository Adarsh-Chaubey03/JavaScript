const buttons = document.querySelectorAll('.button');
    const body = document.getElementById('body'); 

    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        const color = e.target.id;
        const allowedColors = ['grey', 'yellow', 'green', 'red'];

        if (allowedColors.includes(color)) {
          body.className = 'min-h-screen flex items-center justify-center transition-colors duration-500';
          body.style.backgroundColor = color;
        }
      });
    });