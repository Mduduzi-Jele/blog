import {useNavigate} from 'react-router-dom'

const Register = () => {
    const userId = 0
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate('/home',  { state: { userId } })}>submit</button>
    </div>
  )
}

export default Register