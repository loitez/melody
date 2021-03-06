$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var flatLinks = $('.flat-link')
    var flatPath = $('.flats path')
    var viewFlatsButton = $('.view-flats');
    var modalDialog = $('.modal-dialog');
    var menuIcon = $('.menu__icon');
    var menu = $('.navbar__menu');

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });
    flatPath.on('mouseover', function(){
        flatPath.removeClass('current-flat');
        flatLinks.removeClass('current-flat');
        currentFlat = $(this).attr("data-flat");
        $(`[data-flat="${currentFlat}"]`).addClass('current-flat');
    });
    flatLinks.on('mouseover', function(){
        flatPath.removeClass('current-flat');
        flatLinks.removeClass('current-flat');
        currentFlat = $(this).attr("data-flat");
        $(`[data-flat="${currentFlat}"]`).addClass('current-flat');
    });

    flatLinks.on('mouseout', removeCurrentFlat);
    flatPath.on('mouseout', removeCurrentFlat);

    counterUp.on('click', function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    function toggleModal () {
        modal.toggleClass('is-open');
        menuIcon.style.zIndex = "-9999";
    }

    function removeCurrentFlat () {
        flatPath.removeClass('current-flat');
        flatLinks.removeClass('current-flat');
    }

    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            modal.removeClass('is-open');
        }
    })

    menuIcon.on('click', function () {
        menu.toggleClass('active')

    })

    jQuery(function($){
        $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
            // ?????? ?????????????????? ID ????????????????
            if (!modalDialog.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
                && modalDialog.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
                modal.removeClass('is-open'); // ???????????????? ??????
            }
        });
    });

});




