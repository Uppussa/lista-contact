const ListItem = ({name, email, phone, id}) => {
  return (
      <li key={id} className="contact">
            <span className="name">{name}</span>
            <span className="details">{email} - {phone}</span>
        </li>
  )
}

export default ListItem
