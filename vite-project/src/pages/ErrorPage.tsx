
const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <button onClick={() => { window.location.href = '/users' }}>Home</button>
        </div>
    )
}

export default ErrorPage
