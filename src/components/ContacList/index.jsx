import ListItem from './ListItem'

const ContactList = ({data}) => {
  return (
    <ul className="contact-list">
            {
                data.map(contact => 
                    <ListItem key={contact.id} name ={contact.name} email={contact.email} phone={contact.phone}/>
                 )
            }



       
        
        
    </ul>
  )
}

export default ContactList
