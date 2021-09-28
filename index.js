$(document).ready(function () {
    $('#button-convert').on('click', function () {
        const jsonInput = $('#json-file').val()
        const jsonKeys = Object.keys(JSON.parse(jsonInput))
        // console.log('keys', jsonKeys)

        const inputValues = $('#json-values').val()
        const jsonValues = inputValues.split('\n')

        let json = {}
        jsonKeys.map((key, index) => {
            json[key] = jsonValues[index]
        })
        console.log('json', json)
    })
})