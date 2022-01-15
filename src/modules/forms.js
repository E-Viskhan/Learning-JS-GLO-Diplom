import { maskPhone } from "./maskPhone";

export const forms = () => {
  const forms = document.querySelectorAll('form');

  const sendForm = (data) => {
    return fetch('../server.php', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(() => console.error(new Error('Ошибка отправки данных из формы')));
  };

  forms.forEach(form => form.addEventListener('submit', function (e) {
    const inputs = this.querySelectorAll('input[type=text]');
    const checkbox = this.querySelector('input[type=checkbox]');

    let check = true;

    inputs.forEach(input => {
      switch (input.name) {
        case "phone":
          if (input.value < 18) {
            alert("Пожалуйста, введите номер телефона.");
            check = false;
          }
          break;
        case "name":
          if (input.value.trim() === '') {
            alert("Пожалуйста, напишите ваше имя.");
            check = false;
          }
          break;
      }
    });

    if (!checkbox.checked) {
      alert("Пожалуйста, дайте согласие на обработку персональных данных.");
      check = false;
    }

    if (check) {
      const formData = new FormData(this);
      let formValues = {};

      formData.forEach((val, key) => {
        formValues[key] = val;
      });

      sendForm(formValues);
      this.reset();
    }

    e.preventDefault();
  }));

  maskPhone('input[data-mask="phone"');
};