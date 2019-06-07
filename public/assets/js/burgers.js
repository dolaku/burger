$(document).ready(() => {

    $('.btn-add-new').on('click', () => {

        let userInput = $('#input-burger-name').val().trim();

        let newBurger = {
            burger_name: userInput,
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('Added new burger: ' + newBurger.burger_name);
            location.reload();
        });

    });




});