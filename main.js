const autor = 'Kasia Izak';

console.log(`Hej, nazywam się ${autor} i jestem autorką tej strony.
Fajnie, że zaglądasz do konsoli, ale czego się tu spodziewasz znaleźć? ;-)`);

const footerParagraph = document.querySelector('.footer__paragraph--js');

footerParagraph.innerHTML = `Stronę koduje: ${autor}`;