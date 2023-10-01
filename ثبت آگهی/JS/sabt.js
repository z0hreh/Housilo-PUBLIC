onload = function () {
  let hf = document.querySelector("#hf");
  hf.style.display = "none";
};
let val1;
let val2;

function dropdown1(e) {
  val1 = e.value;
}

function dropdown2(e) {
  val2 = e.value;
}

function showForm() {
  // start sell
  // apartment
  if (val1 == 1 && val2 == 1) {
    document.querySelector("#rent0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
  }

  // Bungalow
  if (val1 == 1 && val2 == 2) {
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#rent0").remove();

    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // land
  if (val1 == 1 && val2 == 3) {
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#rent0").remove();

    document.querySelector("#sen").remove();
    document.querySelector("#rNumber").remove();
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
    document.querySelector("#fNumber").remove();
    document.querySelector("#parking").remove();
    document.querySelector("#elevator").remove();
    document.querySelector("#st").remove();
  }
  //condemned building
  if (val1 == 1 && val2 == 4) {
    document.querySelector("#rent0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }
  // office unit
  if (val1 == 1 && val2 == 5) {
    document.querySelector("#rent0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // business building
  if (val1 == 1 && val2 == 6) {
    document.querySelector("#rent0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
    document.querySelector("#rNumber").remove();
    document.querySelector("#fNumber").remove();
  }

  // estate
  if (val1 == 1 && val2 == 7) {
    document.querySelector("#rent0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // end sell

  // start rent
  // apartment
  if (val1 == 2 && val2 == 1) {
    document.querySelector("#sell0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
  }

  // Bungalow
  if (val1 == 2 && val2 == 2) {
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#sell0").remove();

    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // land
  if (val1 == 2 && val2 == 3) {
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#sell0").remove();

    document.querySelector("#sen").remove();
    document.querySelector("#rNumber").remove();
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
    document.querySelector("#fNumber").remove();
    document.querySelector("#parking").remove();
    document.querySelector("#elevator").remove();
    document.querySelector("#st").remove();
  }
  //condemned building
  if (val1 == 2 && val2 == 4) {
    document.querySelector("#sell0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }
  // office unit
  if (val1 == 2 && val2 == 5) {
    document.querySelector("#sell0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // business building
  if (val1 == 2 && val2 == 6) {
    document.querySelector("#sell0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
    document.querySelector("#rNumber").remove();
    document.querySelector("#fNumber").remove();
  }

  // estate
  if (val1 == 2 && val2 == 7) {
    document.querySelector("#sell0").remove();
    let hf = document.querySelector("#hf");
    hf.style.display = "block";
    document.querySelector("#floor").remove();
    document.querySelector("#unit").remove();
  }

  // end rent
}
