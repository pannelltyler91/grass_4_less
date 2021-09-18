// console.log('connected to html')



//admin register event listener

document.getElementById('admin_register').addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('clicked')
  let admin_username = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value; 
    let admin_pw = e.target.previousElementSibling.value;

    const data = { username: admin_username,pw:admin_pw };

    fetch('/api/admin/register', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
 

})
.catch((error) => {
  console.error('Error:', error);
});
   
})






//employee login event listener
// document.getElementById('employee_login').addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('employee logged in!')
// })



//client login event listener
// document.getElementById('cl_login').addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('client logged in!')
// })



//client registration event listener
// document.getElementById('cr_submit').addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('client registered!')
// })