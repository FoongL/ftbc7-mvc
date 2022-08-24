$('#xss').submit(async (e) => {
    e.preventDefault()
    const name = $('#name').val()
    $('#nameOutput').html(name)
})




$('#sql').submit(async (e) => {
    e.preventDefault()
    $('#sqlOutput').empty()
    const id = $('#sqlname').val()
    const body = { id }
    const data = await axios.post(`/users/findOne`, body)
    if (data.data.output.length > 0){
        data.data.output.forEach((entry)=>{
            $('#sqlOutput').append(`<p>Name: ${entry.name}, ID: ${entry.id}</p>, name: ${entry.name}`)
        })
    }
})  