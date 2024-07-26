// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         users.forEach(user => {
//             console.log(`${user.id} - ${user.name}`)
//         })
//     })
//     .catch((error) => console.log(error));

// Async y await

// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//         // if(response.status == 404) { // Nos ayuda de un error en la url.
//         //     throw Error("Not found");
//         // }
//     } catch (error) { // Para errores locales, no en base de datos.
//         console.log(error);
//     } finally {
//         console.log("Se ejecuta siempre"); // Es decir, si funciona el try o si va por el catch, se ejcuta igual y da un mensaje de aviso.
//     }
// };

// getUsers();

// --- 

// fetch('https://fakestoreapi.com/products',{
//     method:"POST",
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))