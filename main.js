const autor = 'Kasia Izak';

console.log(`Hej, nazywam się ${autor} i jestem autorką tej strony.
Fajnie, że zaglądasz do konsoli, ale czego się tu spodziewasz znaleźć? ;-)`);

const footerParagraph = document.querySelector('.footer__paragraph--js');

footerParagraph.innerHTML = `Stronę koduje: ${autor}`;

function welcome(name, age) {
/* const welcome = (name, age) => { */
  if (age < 18) {
    console.log (`Witaj ${name}, widzę że do pełnoletności jeszcze trochę brakuje, ale to nie szkodzi! :-)`)
  } else {
    console.log (`Witaj ${name}, widzę że 18 lat to masz już skończone... :-)`)
  }
}

welcome('Kasia', 36);