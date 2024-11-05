function findTheKiller(whisper, suspects) {
    const whisperRegex = new RegExp(
        '^' + 
        whisper
            .replace(/\$/g, '$')
            .replace(/~/g, '.')
            .replace(/\$/g, '$')
            + (whisper.endsWith('$') ? '$' : ''), 
        'i'
    );

    const matches = suspects.filter(suspect => whisperRegex.test(suspect));
    if (matches.length === 1) {
        return matches[0];
    } else if (matches.length > 1) {
        return matches.join(',');
    } else {
        return '';
    }
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']
findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']
findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']
findTheKiller(whisper4, suspects4); // -> ''