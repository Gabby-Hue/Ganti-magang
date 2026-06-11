let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Text moves up fastest — feels like it's furthest behind
    text.style.marginTop = value * 2.5 + 'px';

    // Far background mountains — move very slowly
    hill1.style.top = value * 0.5 + 'px';

    // Mid-foreground hills — moderate speed
    hill4.style.left = value * -1.5 + 'px';

    // Closest foreground hill — moves fastest horizontally
    hill5.style.left = value * 1.5 + 'px';

    // Leaf comes in from top-right on scroll
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
});