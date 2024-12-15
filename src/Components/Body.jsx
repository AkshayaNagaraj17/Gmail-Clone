import {Outlet} from'react-router-dom'
import Side from './Side'
function Body() {
  return (
    <div>
        <Side></Side>
      <Outlet></Outlet>
    </div>
  )
}

export default Body
