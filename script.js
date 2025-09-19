


const height = document.getElementById('height');
const Left = document.getElementById('Left');
const Right = document.getElementById('Right');
const reveal = document.getElementById('reveal');
const factsPage = document.getElementById('factsPage');
const sportsPage = document.getElementById('sportsPage');
const alumniPage = document.getElementById('alumniPage');
const tuitionPage = document.getElementById('tuitionPage');

function ScrollDown() {
    height.classList.remove('d-none');
    Left.classList.remove('d-none');
    Right.classList.remove('d-none');
    Left.classList.add('left');
    Right.classList.add('right');
    reveal.classList.remove('d-none');
    reveal.classList.add('up');
    if (factsPage) factsPage.classList.add('d-none');
}

function showFactsPage() {
    if (factsPage) factsPage.classList.remove('d-none');
}
function showSportsPage() {
    if (sportsPage) sportsPage.classList.remove('d-none');
}
function alumniPage() {
    if (alumniPage) alumniPage.classList.remove('d-none');
}
function tuitionPage() {
    if (tuitionPage) tuitionPage.classList.remove('d-none');
}

