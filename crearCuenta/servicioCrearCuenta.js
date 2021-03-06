//  CREAR CUENTA USUARIO

class ServicioCrearCuenta {

    constructor() { }

    async crearUsuario(username, password) {

        const body = {
            username,
            password,
        };

        //Este codigo es lo mismo que hacemos en postman

        const response = await fetch("http://localhost:8000/auth/register", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
    }

    async loginUsuario(username, password) {
        const body = {
            username,
            password,
        };

        const response = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        const token = data.accessToken;
        localStorage.setItem('jwt', token);
    }

    usuarioLogeado() {
        return localStorage.getItem("jwt") || null;
    }
}

export const servicioCrearCuenta = new ServicioCrearCuenta();