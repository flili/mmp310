function randomPassword(length) {
  var spcval = document.getElementById("specialchar");
  var spc = spcval.value;
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  if (spc === "On") {
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+[{}]|\;:',<.>/?";
  }

  pass = "";
  for (x = 0; x < length; x++) {
    i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}

function formSubmit() {
  passform.passbox.value = randomPassword(passform.length.value);
  return false;
}