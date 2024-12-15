
import { useParams } from 'react-router-dom';

const dummy={
    1:{subject:"Thans for clicking here is your notes",body:"Thanksssssss"},
    2:{subject:"Thans for clicking here is your notes",body:"Thanksssssss"},
    3:{subject:"Thans for clicking here is your notes",body:"Thanksssssss"},
    4:{subject:"Thans for clicking here is your notes",body:"Thanksssssss"}
}
function Mail()
{
    const{id}=useParams()
    const email=dummy[id]
    if(!email)
    {
        return<div>Not found</div>
    }
    return(
        <div>
            <h1>{email.subject}</h1>
            <p>{email.body}</p>
        </div>
    )

}
export default Mail