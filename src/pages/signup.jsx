import {Form, Message, Button} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import {useState} from 'react'
import styles from './../styles/signup.module.scss'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../firebase'
import { collection, addDoc } from "firebase/firestore";
import validateAuthCode from './../functions/generics'
import { Link } from 'react-router-dom'

export default function Signup(){

    const router = useRouter()
    const [isLoading, setLoading] = useState(false)
    const [isFormSucess, setFormSucess] = useState({})
    const [formMessage, setFormMessage] = useState({
        success: true,
        error:false,
        header:'',
        content:''
    })

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confsenha, setConfsenha] = useState("")
    const [tel, setTel] = useState("")

    const checkPassword = ()=>{
        if(senha === confsenha){
            return true
        }else{ 
            return false
        }
    }
    const signin = ()=>{
        setLoading(true)
        if(checkPassword()){
            createUserWithEmailAndPassword(auth, email, senha)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    const token = user.uid
                    await addDoc(collection(db, "user"), {
                        name: nome,
                        email: email,
                        phone: tel,
                        uid: token
                      });
                        setLoading(false)
                        setFormSucess({success: true}) 
                        setFormMessage({
                            success: true,
                            error: false,
                            header:'Cadastro Concluido',
                            content:"Agora é so aguardar a liberação para utilizar nosso chat! :)"
                        })
                })
                .catch((error) => {
                    setLoading(false)
                    const errorCode = error.code;
                    const errorMessage = validateAuthCode(errorCode);
                    setFormSucess({
                        error: true
                    })
                    setFormMessage({
                        error: true,
                        success:false,
                        header: 'Não foi possivel concluir o cadastro :(',
                        content: errorMessage
                      })
                });               
        }else{
            setLoading(false)
            setFormSucess({
                error: true
            })
            setFormMessage({
                error: true,
                success:false,
                header: 'Não foi possivel concluir o cadastro :(',
                content: 'As senhas não conferem por favor digite novamente'
              })
        }
    }


    return (
        <div className={styles.container}>            
            <Form onSubmit={signin} {...isFormSucess}>
            <h1>Cadastre-se</h1>
                <Message
                    {...formMessage}          
                />
                <Form.Field>
                    <label>Nome</label>
                    <input required onChange={e => setNome(e.target.value)} type='text' placeholder='Digite seu nome'/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input required onChange={e => setEmail(e.target.value)} type='email' placeholder='Digite seu email'/>
                </Form.Field>
                <Form.Field>
                    <label>Telefone/celular</label>
                    <input required onChange={e => setTel(e.target.value)} type='text' placeholder='Digite seu telefone'/>
                </Form.Field>
                <Form.Group>
                    <Form.Field>
                        <label>Senha</label>
                        <input required onChange={e => setSenha(e.target.value)} type='password' placeholder='Digite sua senha'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Confirme sua senha</label>
                        <input required onChange={e => setConfsenha(e.target.value)} type='password' placeholder='Digite novamente sua senha'/>
                    </Form.Field>
                </Form.Group>
                <div className= {styles.buttons}>
                    <Button primary loading={isLoading}>Cadastrar</Button>
                    <Button> <Link to="/">Voltar</Link> </Button>
                </div>  
            </Form>
            
        </div>
    )
}