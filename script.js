



const height = document.getElementById('height');
const Left = document.getElementById('Left');
const Right = document.getElementById('Right');
const reveal = document.getElementById('reveal');
const factsPage = document.getElementById('factsPage');
const sportsPage = document.getElementById('sportsPage');
const alumniPage = document.getElementById('alumniPage');
const tuitionPage = document.getElementById('tuitionPage');
const majorsPage = document.getElementById('majorsPage');


function scrollDown() {
    height.classList.remove('d-none');
    Left.classList.remove('d-none');
    Right.classList.remove('d-none');
    Left.classList.add('left');
    Right.classList.add('right');
    reveal.classList.remove('d-none');
    reveal.classList.add('up');
}

function showSportsPage() {
    if (sportsPage) sportsPage.classList.remove('d-none');
}
function showFactsPage() {
    if (factsPage) factsPage.classList.remove('d-none');
}
function showAlumniPage() {
    if (alumniPage) alumniPage.classList.remove('d-none');
}
function showTuitionPage() {
    if (alumniPage) tuitionPage.classList.remove('d-none');
}
function showMajorsPage() {
    if (majorsPage) majorsPage.classList.remove('d-none');
}

function revealAllSections() {
    if (height) height.classList.remove('d-none');
    if (Left) Left.classList.remove('d-none');
    if (Right) Right.classList.remove('d-none');
    if (reveal) reveal.classList.remove('d-none');
    if (factsPage) factsPage.classList.remove('d-none');
    if (sportsPage) sportsPage.classList.remove('d-none');
    if (alumniPage) alumniPage.classList.remove('d-none');
    if (tuitionPage) tuitionPage.classList.remove('d-none');
    if (majorsPage) majorsPage.classList.remove('d-none');
}