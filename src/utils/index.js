import queryString from 'query-string'
let rootUrl='https://www.fastmock.site/mock/b4b002fffe69367c446d37e43d86586f/api';

let myFetch = {
    get(url,queryParams){
        url = rootUrl+url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        console.log(url)
        return fetch(url)
                .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": 'application/json',   
                "Connection": "close",   
                "type": "getUserData"
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
            
    }
}

export {myFetch};

// let myFetch={
//     get(){
        
//     },

// post(url,body){
//     fetch(rootUrl+url,{
//         method:'POST',
//         headers:{
//             "Accept":'application/json',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(body)
//     })
//     .then(res=>res.json())
    
// }
// }

// export {myFetch}