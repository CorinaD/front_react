import {useHistory} from "react-router-dom";

function RedirectToMainPage () 
{
        let history = useHistory();
        history.push("/mainPage");
        this.redirect();
}

export default RedirectToMainPage;