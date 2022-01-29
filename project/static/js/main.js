

// todo variables 

const alertBox = document.getElementById('alert-box');
const imgBox = document.getElementById('img-box');
const form = document.getElementById('p-form');

// todo from console getting id for name nad image id from model field 

const name = document.getElementById('id_name');
const image  = document.getElementById('id_image');
const desc = document.getElementById('id_desc');

// todo csrf 
const csrf = document.getElementsByName('csrfmiddlewaretoken');
console.log(csrf)


const url = ""


// todo 

const handleAlerts = (type , text) => {
    alertBox.innerHTML = `

    <div class="alert alert-${type}" role="alert">
       ${text}
    </div>
    `
}


image.addEventListener('change'  , () => {
    const img_data = image.files[0]
    const url  = URL.createObjectURL(img_data)
    imgBox.innerHTML = `<img src="${url}" width="100%" />`
})


// todo save data 

form.addEventListener('submit' , e => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('name' , name.value)
    fd.append('desc' , desc.value)
    fb.append('image' , image.files[0])


    // todo ajax 

    $.ajax({
        type: 'POST',
        url = url , 
        enctype : 'multipart/form-data',
        data : fd,
        success: function(response) {

            console.log(response)

            // todo function success 
            const sText = `successfully saves ${response.name}`
            handleAlerts('success' ,sText ) , 

             // todo timeout 
            setTimeout(() => {
                
                alertBox.innerHTML = ""
                imgBox.innerHTML = ""
                name.value = ""
                desc.value = ""
                image.value = ""

            }, 1000);

        },
        error : function(error) {
            console.log(error)
            // todo function 
            handleAlerts('danger' , 'opps ..  something went wrong ')
        },
        cache : false,
        contentType: false,
        processData : false,

 
        // todo then go to views 

    })
})