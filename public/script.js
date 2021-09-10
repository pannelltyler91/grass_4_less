// console.log('connected to html')

//admin login event listener
// document.getElementById('admin_login').addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('admin logged in!')
//     const username = document.getElementById('admin_username').value;
//     const password = document.getElementById('admin_password').value;
//     const adminInfo = {username,password}
//     fetch('http://localhost:3000/api/admin/login', {
//   method: 'POST',
//   mode:'no-cors', 
//   headers: {
//     'Content-Type': 'application/json',
    
//   },
//   body: JSON.stringify(adminInfo),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })

    
// })




//employee login event listener
document.getElementById('employee_login').addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('employee logged in!')
})



//client login event listener
document.getElementById('cl_login').addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('client logged in!')
})



//client registration event listener
document.getElementById('cr_submit').addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('client registered!')
})