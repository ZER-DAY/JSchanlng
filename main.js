function getPosts(userId){
    let req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    req.responseType = "json";
    req.send();
    document.getElementById("posts").innerHTML = "";
    req.onload = function(){
        if(req.status >= 200 && req.status < 300){
            let posts = req.response;
            for(let post of posts){
                let content = `
                <!-- post -->
                    <div id="post">
                        <h3>${post.title}</h3>
                        <hr>
                        <h4>
                            ${post.body}
                        </h4>
                    </div>
                <!-- post -->
                `;
                document.getElementById("posts").innerHTML += content;
            }
        }else{
            alert("error");
        }
    };
}   

getPosts(1);

function getUsers(){
    let req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/users");
    req.responseType = "json";
    req.send();
    req.onload = function(){
        if(req.status >= 200 && req.status < 300){
            let users = req.response;
            document.getElementById("users").innerHTML = "";
            for(let user of users){
                let content =`
                <div id="user" onClick="userClicked(${user.id})">
                    <h2>${user.name}</h2>
                    <h2>${user.email}</h2>
                </div>
                `;
                document.getElementById("users").innerHTML += content;
            }
        }else{
            alert("error");
        }
    };
}   

getUsers();

function userClicked(id){
   getPosts(id);
}
