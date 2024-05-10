

const Input = ({ id, label, type, value, handleChanges }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} required />


        </>
    )
}

export default Input
