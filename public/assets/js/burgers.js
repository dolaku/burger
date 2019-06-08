$(document).ready(() => {

    $('.btn-add-new').on('click', () => {

        let userInput = $('#input-burger-name').val().trim();

        // setup data of new burger
        let newBurger = {
            burger_name: userInput,
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            location.reload();
        });

        // empty the input
        $('#input-burger-name').val('');
    });


    $('.btn-eat-it').on('click', () => {

        let id = $(this).parent().data('id');

        alert( $(this).parent().data('id') );
        console.log('id = ' + id);

        let newDevouredState = {
            devoured: 1
        }
        
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then (() => {
            // location.reload();
        });
    });


});