import './SuspendedList.css'

export const SuspendedList = (props) => {
    return (
        <div className='suspended-list'>
            <label>{props.label}</label>
            <select required={true} value={props.value} onChange={event => props.onChanged(event.target.value)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}