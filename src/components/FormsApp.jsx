import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const { username, email, password, onInputChange } = useForm(initialForm)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            'Username:', username, ',',
            'Email:', email, ',',
            'Password:', password
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-box">
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name='username'
                        value={username}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <div className="forms-box">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}
