import { Link } from "react-router-dom";

const dummy = [
  {
    id: 1,
    sender: "tm17@gmail.com",
    subject: "Helo here is your material for studies thank you",
  },
  {
    id: 2,
    sender: "tm17@gmail.com",
    subject: "Helo here is your material for studies thank you",
  },
  {
    id: 3,
    sender: "tm17@gmail.com",
    subject: "Helo here is your material for studies thank you",
  },
  {
    id: 4,
    sender: "tm17@gmail.com",
    subject: "Helo here is your material for studies thank you",
  },
  {
    id: 5,
    sender: "tm17@gmail.com",
    subject: "Helo here is your material for studies thank you",
  },
];
function Inbox() {
  return (
    <div className="w-[100%] flex items-center justify-center">
     
      <div className="bg-white p-5 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold">Inbox</h1>
        <ul>
          {dummy.map((email) => (
            <li className="border-b py-2 m-5  hover:bg-slate-300 p-5 rounded-full" key={email.id}>
              <Link to={`/mail/${email.id}`}>
                <strong>{email.sender}</strong>:{email.subject}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Inbox;
