export default {
    login : user =>{
        return fetch('/user/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "",role : ""}};
        })
    },
    loginGoogle:(user)=>{
        return fetch('/user/logingoogle',{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "",email:""}};

        })
    },
    loginFacebook:(user)=>{
        return fetch('/user/loginfacebook',{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "",email:""}};

        })
        
    },
    register : user =>{
        return fetch('/user/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    update: user=>{
        return fetch('http://localhost:5000/user/update',{
            method:'put',
            body : JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
    },
    delete:user=>{
        return fetch('http://localhost:5000/user/delete',{
            method:"put",
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(data=>data)
    },
    title: user=>{
        return fetch('/user/updatetitle',{
            method:"put",
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
    },
    updateReelsDemos:user=>{
        return fetch('http://localhost:5000/user/updatereelsanddemos',{
            method:"put",
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(data=>data)
    },
    logout : ()=>{
        return fetch('/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    profile:()=>{
        return fetch('/user/profile')
            .then(res=>res.json())
            .then(data=>data)
    },
    isAuthenticated : ()=>{
        return fetch('/user/authenticated')
                .then(res=>{
                    if(res.status !== 401){
                        return res.json().then(data => data);
                    }
                    else
                        return { isAuthenticated : false, user : {username : "",role : "",email:''}};
                });
    }

}