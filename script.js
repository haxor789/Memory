var counter = 0, flipped = [0, 0], array = [], random = function() {
    return Math.random() - 0.5;
};

for (var i = 0; i < 30; i += 1)
    array[i] = i + 1;

array = array.concat(array).sort(random);

var append = function() {
    for (var i = 0; i < 60; i += 1)
        $('#board').append('<img src="Badges/0.png" id="' + (i + 1) + '" class="' + array[i] + '.png">');
};

var reset = function() {
    confirm('Congratulations! You won.\nWould you like to play again?');
    array = array.sort(random), flipped = [0, 0];
    counter = 0, $('#board').empty(), append();
};

$(document).ready(append);

$(document).on('click', 'img', function() {
    var card = [$(this).attr('id'), $(this).attr('class')], id;
    $(this).attr('src', 'Badges/' + $(this).attr('class')); counter++;
    console.log([counter, card, flipped].join(', '));
    if (counter % 2 === 0 && card[0] === flipped[0]){
	flipped = [0,0];//should fix the triple click bug             
	return $(this).attr('src', 'Badges/0.png');
    }
    if (card[1] === flipped[1])
        return reset();
    if (counter % 2 === 0) {
        id = flipped[0]; flipped = [0, 0];
        return setTimeout(function() {
            $('#' + id).attr('src', 'Badges/0.png');
            $('#' + card[0]).attr('src', 'Badges/0.png');
        }, 800);
    }
    flipped = card;
});
