export default function verificarSesionAdmin() {
    const tipo = localStorage.getItem("sessionType");

    if (tipo !== "admin") {
        window.location.href = "../login.html";
    }
}


