import React from "react";
import Swal from 'sweetalert2';
import sha256 from "js-sha256";

export default function RegForm() {
    const [password, setPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const handlerUserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const handlerPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handlerLoginClick = () => {
        const UserName = document.querySelector(".UserName")
        const Password = document.querySelector(".Password")
        if ((UserName.validity.valid) && (Password.validity.valid)) {
            const hash = getSHA256Hash(password)
            Swal.fire({title: "Success", text: hash, icon: "success"});
        } else {
            Swal.fire(
                {title: "Error!", text: "Check correct Username or Password", icon: "error"}
            );
        }
    }

    return (
        <div className="Authform d-flex">
            <div className="AuthFormBoarder d-flex justify-content-center">
                <div className="AuthInputs">
                    <input
                        className="form-control mr-2 AuthInput UserName"
                        placeholder="Username"
                        aria-label="Username"
                        value={userName}
                        onChange={handlerUserNameChange}
                        required="required"
                        minlength="6"></input>
                    <input
                        className="form-control mr-2 AuthInput Password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        aria-label="Password"
                        onChange={handlerPasswordChange}
                        required="required"
                        minlength="8"></input>
                    <button
                        class="btn btn-primary login_btn AuthInput"
                        type="submit"
                        onClick={handlerLoginClick}>
                        Registration</button>
                </div>
            </div>
        </div>
    )
}

async function getSHA256Hash(str) {
    let hash = sha256(str)
    console.log("Тут Hash регистрации", hash)
    return hash;
}