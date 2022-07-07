// TODO : checker si dans la div class="navbar-collapse" si aria-expanded == 'false' alors 
// le ul de classe site-navigation doit display: none

// On récupère l'élément div
const div = document.querySelector('.navbar-collapse');
// On récupère la valeur de l'attribut aria-expanded
const ariaExpandedAttribute = div.getAttribute('aria-expanded');
console.log(ariaExpandedAttribute);
// On la teste
const ulElement = document.querySelector('.site-navigation');
console.log(ulElement);
if (ariaExpandedAttribute == 'true') {
    // Si vaut false, alors display: none
    ulElement.style.display = 'none';
    const burgerMenuButton = document.getElementById('nav-toggle');
    burgerMenuButton.style.display = 'block';

    burgerMenuButton.addEventListener('click', function() {
    if (ulElement.style.display = 'none') {
    // Si vaut false, alors display: none
    ulElement.style.display = 'block';
    } else if (ulElement.style.display = 'block') {
        ulElement.style.display = 'none';
    }
});
} else {
    ulElement.style.display = 'block';
}
