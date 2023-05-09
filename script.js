GitHubCalendar(".calendar", "Surya0297", {
    responsive: true,
    global_stats: false,
    tooltips: true,
});

const hamburger = document.getElementById("hamburger");
const menulist = document.getElementById("menu-list");

hamburger.addEventListener('click', () => {


    menulist.classList.toggle('show');
});