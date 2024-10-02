// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>response.json())
// .then(users =>{
//     console.log('list of users',users)
// })
// .catch(error=>{
//     console.error('Error fetching users:',error)
// })

fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(users =>{
    const firstUser = users[0]
    console.log('firstUsers:',firstUser)

    return(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`)
})
.then(response => response.json())
.then(posts =>{
    console.log('first User posts',posts)
})
.catch(error =>{
    console.error('Error:',error)
})
