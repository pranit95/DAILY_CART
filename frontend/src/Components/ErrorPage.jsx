import { Link } from 'react-router-dom'
import styles from "./Styles/ErrorPage.module.css"

const ErrorPage = () => {
    return (
        <div class={styles.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or an other error occured. Go to <Link to="/">Home Page.</Link></p>
        </div>
    )
}

export default ErrorPage
