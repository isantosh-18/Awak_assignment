

const form = document.getElementById('form');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const error_mail=document.getElementById('error-mail');
const error_password=document.getElementsByClassName('error-password')[0];
const show=document.getElementById('show')
const sucess=document.getElementById('sucess')
const loading=document.getElementById('loading')
// form validation
form.addEventListener('submit',(e)=>
{
    const mailcontain= /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,4})$/
    const passwordContain = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/
    if (!mail.value.match(mailcontain)){
        e.preventDefault()
        error_mail.innerHTML="*enter valid mail"
        return
    }
    else{
        error_mail.innerHTML=""
    }
    if (password.value.length <= 6){
        e.preventDefault()
        error_password.innerHTML="*password must be more than 6 characters"
        if(password.value=="")
        {
            error_password.innerHTML="Empty Password"
            return
        }
      
        if (!password.value.match(passwordContain)){
            error_password.innerHTML="Invalid Password"
            return
        }
    else{
        error_password.innerHTML=""
    }
    }
    // form validation ends-----------

    // api integration starts-----------
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: mail.value,
            password: password.value,
        }),
    };
    
    error_password.innerHTML = "";
    e.preventDefault()
    function ad() {
        return fetch("https://jsonplaceholder.typicode.com/posts", options)
            .then((res) => res.json())
            .then((data) => {
                // Handle the response data here if needed
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors here if needed
                console.error('Error:', error);
            });
    }
    
    loading.style.display="block";
    
  
    
    
    setTimeout(() => {
        ad().then(() => {
            loading.style=""
            loading.innerText = "loginsucessfull";
            mail.value=""
            password.value=''
            
        });
    }, 5000);
    
    ad();
  
    
    // Prevent the default form submission if this is part of a form event handler
    // e.preventDefault(); // Ensure e is defined and is part of the event listener
    
    
       
        
        
        // api integration ends
})





const showpassword=()=>{
        const typeattribute=password.getAttribute('type')
        const show2=document.getElementById("show2")

        if (typeattribute=="password"){
            show.style.display="none";
            password.setAttribute('type','text')
            show2.style.display="inline";
            
        }

        else{
            show2.style.display='none'
            password.setAttribute('type','password')
            show.style.display='inline'
           
            
        }



}

