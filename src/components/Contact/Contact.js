
export const ContactList = ({contacts}) => {
    return (<div>
            <ul>{contacts.map(({ id, name, number, onDeleteContact }) => (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
      </li>
    ))}</ul>
          </div>)
}