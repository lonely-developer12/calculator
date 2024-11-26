// Funkcija za dodavanje operacije u područje rezultata
function appendOperation(operation) {
    const container = document.getElementById('resultArea');
    if (container.innerHTML === '0') {
      // Ako je sadržaj područja rezultata "0", zamijeni ga s prvom unesenom operacijom
      container.innerHTML = operation;
    } else {
      // Inače, dodaj novu operaciju na kraj postojećeg sadržaja
      container.innerHTML += operation;
    }
  }

  // Funkcija za izračunavanje rezultata
  function calculateResult() {
    let container = document.getElementById('resultArea');
    // Evaluiraj sadržaj područja rezultata kao JavaScript izraz
    let result = eval(container.innerHTML);
    // Postavi rezultat u područje rezultata
    container.innerHTML = result;
  }

  // Funkcija za brisanje zadnjeg znaka u području rezultata
  function deleteLast() {
    const container = document.getElementById('resultArea');
    if (container.innerHTML.length > 1) {
      // Ako područje rezultata sadrži više od jednog znaka, ukloni zadnji znak
      container.innerHTML = container.innerHTML.slice(0, -1);
    } else {
      // Ako područje rezultata sadrži samo jedan znak, postavi ga na "0"
      container.innerHTML = '0';
    }
  }
