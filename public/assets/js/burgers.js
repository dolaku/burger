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


    $(document).on('click', '.btn-eat-it', (event) => {

        let id = $(event.target).parent().attr('data-id');

        let newDevouredState = {
            devoured: 1
        }
        
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then (() => {
            location.reload();
        });
    });


});