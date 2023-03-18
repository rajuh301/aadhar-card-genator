const inputvalueByID = (element) => {
    const inputId = document.getElementById(element);
    const convert = inputId.value;
    return convert
}


document.getElementById('submit').addEventListener('click', function () {


    const inputName = inputvalueByID('inputName')
    const inputFather = inputvalueByID('fatherName')
    const inputMother = inputvalueByID('motherName')
    const inpuDob = inputvalueByID('dob')


    let datas = document.getElementsByName('gender');

    let genders = []

    for (let data of datas) {
        if (data.checked) {
            genders.push(data.value)

        }

    }

    const IdNo = Math.random() * 10000000000000;
    const roundValue = Math.round(IdNo)
    // console.log(roundValue) 


    const inputImg = document.getElementById('image').files[0];


    // const setImage = (inputImg);

    console.log(inputImg.name)




    if (inputName === '' && inputFather === '' && inputMother === '' && inpuDob === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })

    }

    else{


    


    //    Set localStorage 




    const setLocalStorae = {
        Name: inputName,
        FatherName: inputFather,
        MotherName: inputMother,
        InputDateOf: inpuDob,
        Gender: genders,
        ID: roundValue,
        // image: setImage,

    };

    const convertForJson = JSON.stringify(setLocalStorae);
    localStorage.setItem('Data', convertForJson);



    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
        )
     

      

      
    //  window.open("showCard.html");


}

})
// Show Data Area------------------------







