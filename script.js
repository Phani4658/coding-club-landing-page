let bars = document.getElementById('bars');
let close = document.getElementById('close');
let aboutUs = document.getElementById('aboutUs');
let header = document.getElementById('header');
let aboutUsSection = document.getElementById('aboutUsSection');
let teamSection = document.getElementById('teamSection');

bars.addEventListener('click',() => {
    header.classList.add('active');
    aboutUsSection.classList.add('hide');
    teamSection.classList.add('hide');
});
close.addEventListener('click',() =>{
    header.classList.remove('active');
    aboutUsSection.classList.remove('hide');
    teamSection.classList.remove('hide');
});
aboutUs.addEventListener('click',() => {
    header.classList.remove('active');
    aboutUsSection.classList.remove('hide');
    teamSection.classList.remove('hide');

});
AOS.init({
    duration: 1200,
});