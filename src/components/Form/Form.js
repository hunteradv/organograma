import { useState } from 'react';
import Button from '../Button';
import { SuspendedList } from '../SuspendedList/SuspendedList';
import { TextField } from '../TextField/TextField';
import './Form.css'

export const Form = (props) => {
    const onSave = (event) => {
        event.preventDefault();
        props.onAddedContributor({
            name: name,
            role: role,
            image: image,
            team: team
        });

        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField value={name} onChanged={value => setName(value)} required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField value={role} onChanged={value => setRole(value)} required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField value={image} onChanged={value => setImage(value)} required={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <SuspendedList required={true} label="Time" items={props.teams} value={team} onChanged={value => setTeam(value)}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}