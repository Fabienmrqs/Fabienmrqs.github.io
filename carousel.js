const next = document.querySelector('#next');
const back = document.querySelector('#back');
const slider = document.querySelector('#slider');

var sectionIndex = 0;

function reset() {
    for ( var i = 0;i < slider.children.length; i++){
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}

next.addEventListener('click', function(){
    reset();
    sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
    slider.children[sectionIndex].style.zIndex = 1;

    slider.children[sectionIndex].style.opacity = 1;
});

back.addEventListener('click', function(){
    reset();
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;

    slider.children[sectionIndex].style.opacity = 1;
});