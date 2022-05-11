const loginAuthMessages = (errorCode)=> {
    let message = ''
    switch(errorCode){
        case 'auth/email-already-exists':message = 'Email já existente' 
        break
        case 'auth/id-token-expired':message = 'Usuario expirado' 
        break
        case 'auth/insufficient-permission': message = 'Serviço indisponivel no momento, sem permissão'
        break
        case 'auth/internal-error': message = 'Estamos com nossos serviços indisponiveis no momento, mas ja estamos trabalhando nisso'
        break
        case 'auth/invalid-password': message = 'Senha fraca, sua senha deve ter no minimo 6 caracteres'
        default: message = 'Serviço indisponivel no momento'
    }

    return message
}

export default loginAuthMessages