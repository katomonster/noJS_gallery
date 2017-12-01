console.log('hello');

$(document).ready(function () {
    resetCheckbox();
});

function resetCheckbox() {
    $('figure, .overlay').on('click', function (e) {
        $(e.target).siblings('input').trigger('click');
    });
}