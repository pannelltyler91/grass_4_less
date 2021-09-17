//admin login event listener
// document.getElementById('admin_login').addEventListener('click', (e) =>{
//     e.preventDefault();
//     let admin_username = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value; //local scope
//     let admin_pw = e.target.previousElementSibling.value;

//     const data = { username: admin_username,pw:admin_pw };

//     fetch('api/admin/login', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
   
// })
