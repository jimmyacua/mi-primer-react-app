import React, {Component} from 'react';

class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component{
    render(){
        return <div>
            <p>Bienvenido usuario!</p>
            <button>Cerrar sesión</button>
        </div>
    }
}

function useConditionalRendering(isUserLogged){
    if(!isUserLogged){
        return <LoginButton></LoginButton>;
    } else{
        return <LogoutButton></LogoutButton>;
    }
}


export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = {isUserLogged: false}
    }
    render(){
        const conditionalComponent = useConditionalRendering(this.state.isUserLogged);
        return (
            <div>
                <h4>Conditional rendering</h4>
                {conditionalComponent}
            </div>
        )
    }
}