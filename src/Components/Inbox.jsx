import { Link } from "react-router-dom"

const dummy=[
    {
        id:1,sender:"tm17@gmail.com",subject:"Helo here is your material for studies thank you"
    },
    {
        id:2,sender:"tm17@gmail.com",subject:"Helo here is your material for studies thank you"
    },
    {
        id:3,sender:"tm17@gmail.com",subject:"Helo here is your material for studies thank you"
    },
    {
        id:4,sender:"tm17@gmail.com",subject:"Helo here is your material for studies thank you"
    },
    {
        id:5,sender:"tm17@gmail.com",subject:"Helo here is your material for studies thank you"
    }
]
function Inbox() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-md">
        <h1>Inbox</h1>
        <ul>
            {dummy.map((email)=> (
                <li className="border-b py-2" key={email.id}>
                    <Link to={`/mail/${email.id}`}>
                    <strong>{email.sender}</strong>:{email.subject}
                    </Link>
                    
                  
                </li>
            ))}
        </ul>

      </div>
    </div>
  )
}

export default Inbox
