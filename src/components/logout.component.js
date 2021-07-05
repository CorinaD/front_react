
function Logout()  {   

    if(localStorage.getItem('isLogged') ==='true'){
      
        localStorage.setItem('user', '');
        localStorage.setItem('isLogged', 'false');
    }
       
    return (
        window.location = "/home"
    )    
}

export default Logout;