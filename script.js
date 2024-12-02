$(document).ready(function () {
  $("#registrationForm").validate({
    rules: {
      username: { required: true, minlength: 3 },
      email: { required: true, email: true },
      password: { required: true, minlength: 6 },
      confirm_password: { required: true, equalTo: "#password" },
    },
    messages: {
      username: {
        required: "Proszę podać nazwę użytkownika",
        minlength: "Nazwa użytkownika musi mieć co najmniej 3 znaki",
      },
      email: {
        required: "Proszę podać adres email",
        email: "Proszę podać poprawny adres email",
      },
      password: {
        required: "Proszę podać hasło",
        minlength: "Hasło musi mieć co najmniej 6 znaków",
      },
      confirm_password: {
        required: "Proszę potwierdzić hasło",
        equalTo: "Hasła muszą się zgadzać",
      },
    },
  });
});
