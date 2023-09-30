let topbtn = document.getElementById('topbtn');

topbtn.addEventListener('mouseover', () => {
    topbtn.querySelector('i').className = 'display-relative fa-solid fa-chevron-up fa-2xl fa-bounce';
});

topbtn.addEventListener('mouseout', () => {
    topbtn.querySelector('i').className = 'display-relative fa-solid fa-chevron-up fa-2xl';
});