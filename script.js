
function aboutMeScroll() {
    //when tab in nav is clicked, scroll to #bio
    $('.js-btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.js-section').offset().top
        }, 200);
    });
}

function projectsScroll() {
//when tab in nav bar is clicked, scroll to .projects
}

function contactScroll() {
//when tab in nav is clicked, scroll to footer
}

function email() {
//when tab in footer is clicked, create seperate window with email addressed to
// 'aubreyyoder@gmail.com'
}

function github() {
//when tab in footer is clicked, take to https://github.com/aubreyyoder/
}

function linkedin() {
//when tab in footer is clicked, take to linkedin page
}

function handleAllEvents() {
    $(aboutMeScroll);
    $(projectScroll);
    $(contactScroll);
    $(email);
    $(github);
    $(linkedin);
}

$(handleAllEvents);