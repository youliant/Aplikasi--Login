/** @module Login-Script */
/**
* Membuat variabel loginForElement untuk tampilan form.
/* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordElement untuk tampilan password email.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {String}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {String}
*/
const expectedPassword = 'superpassword';


/* Coment: Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/**
* Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
* @constant {String}
*/
  const email = inputEmailElement.value;

/**
* Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
* @constant {String}
*/
  const password = inputPasswordElement.value;


  /* Coment: Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Coment: Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();

  } else {

    /* Coment : Namaun jika tidak sesuai maka akan menamoilkan informasi bahwa input salah */
    showPopUp();
  }
});
