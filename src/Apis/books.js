export function getBookAPI(){
    return fetch ("http://localhost:5000/books").then(res=>res.json()).then(data=>data)
}

export function addBookAPI(book){
    return fetch('http://localhost:5000/books',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(book)})
        
        .then(response=>response.json())
        .then(data=>data);
}

export function updateBookAPI(book){
    return fetch(`http://localhost:5000/books/${book._id}`,{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(book)

    }).then(response=>response.json())
    .then(data=>data)
}

export function deletedAPI(id){

    return fetch(`http://localhost:5000/books/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response=>response.json())
    .then(data=>data)

}