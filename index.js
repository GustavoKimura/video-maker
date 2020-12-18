const readline = require('readline-sync')

const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = {
        searchTerm : askAndReturnSearchTerm(),
        prefix: askAndReturnPrefix()
    }

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = [
            'Who is',
            'What is',
            'The history of'
        ]

        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')

        return prefixes[selectedPrefixIndex]
    }

    //console.log(content)
}

start()