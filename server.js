function register(event){
    event.preventDefault();
    // alert("working")

    var name=document.getElementById("uname").value;
    var email=document.getElementById("uemail").value;
    var password=document.getElementById("upass").value;
    var confirmpassword=document.getElementById("uconfirmpass").value;
    // var cartproducts=[];
    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password==confirmpassword){
                var tarray=JSON.parse(localStorage.getItem("Instagramusers")) || []
                var flag=false;
                for(var i=0;i<tarray.length;i++){
                    if(tarray[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==true){
                    alert("email alredy exist.")
                   
                }
                else{
                    var tanishq={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                    tarray.push(tanishq);
                    localStorage.setItem("Instagramusers",JSON.stringify(tarray));
                    alert("Signed up successfully");
                    document.getElementById("uname").value=''
                    document.getElementById("uemail").value=''
                    document.getElementById("upass").value=''
                    document.getElementById("uconfirmpass").value=''
                    window.location.href="./login.html"
                }
            }
            else{
                console.log("password not matched.")
            }
        }
        else{
            console.log("Password should be minimum 8 numbers.")
        }

    }
    else{
        console.log("all fields are required.")
    }
}


function login(event){
    event.preventDefault();
    // alert("working")
    var lemail=document.getElementById("lemail").value;
    var lpassword=document.getElementById("lpass").value;
    var loginuser={}
    if(lemail && lpassword){
        var tanishq=JSON.parse(localStorage.getItem("Instagramusers"));
       var flag=false;
        for(var i=0;i<tanishq.length;i++){
            if(tanishq[i].uemail==lemail && tanishq[i].upassword==lpassword){
                flag=true;
                loginuser=tanishq[i];
            }
        }
        if(flag==true){
            // tanishq[i]=loginuser;
            // tanishq.push(loginuser);
            localStorage.setItem("Instagramlogin",JSON.stringify(loginuser));
            alert("logged in successfully");
            document.getElementById("lemail").value=''
            document.getElementById("lpass").value=''
            window.location.href="./home.html"
        }
        else{
            alert("credential not matched")
        }
    }
    else{
        console.log("Both Fields are required.")
    }
}