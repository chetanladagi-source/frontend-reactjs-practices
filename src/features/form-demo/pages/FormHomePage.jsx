import { Link } from "react-router-dom"

const FormHomePage = () => {
    return (
        <div style ={{textAlign: 'left'}}>
            <ul>
                <li>
                    <Link to={'react-hook-form'} >React Hook Form Test</Link>
                </li>
            </ul>
        </div>
    )
}

export default FormHomePage;