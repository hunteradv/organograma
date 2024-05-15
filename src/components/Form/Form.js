import { TextField } from '../TextField/TextField';
import './Form.css'

export const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    );
}