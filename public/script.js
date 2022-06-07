const button = document.getElementById('posting')

button.addEventListener('click', async ()=>{
    console.log('I have been clicked')
    // const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    // console.log(result)

    const gottenName = document.getElementById('name').value
    const gottenPassword = document.getElementById('password').value
    const body = {
        name: gottenName,
        password: gottenPassword
    }

    const result = await axios.post('/users/add-user', body)
    console.log(result)

    // DOM manipulation
    const output = document.getElementById('output')
    const data = document.createElement('p')
    data.textContent = result.data.name
    output.append(data)
})