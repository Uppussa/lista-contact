const ListItem = ({name, email, phone}) => {
  return (
      <li class="contact">
            <span class="name">{name}</span>
            <span class="details">{email} - {phone}</span>
        </li>
  )
}

export default ListItem
