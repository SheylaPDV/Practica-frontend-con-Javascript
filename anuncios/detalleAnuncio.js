import { ControladorNotificaciones } from "../notificaciones/controladorNotificaciones.js";
import { ControladorDetalleAnuncios } from "./controladorDetalleAnuncio.js"

document.addEventListener("DOMContentLoaded", () => {
    const detalleAnuncio = document.querySelector(".detalle-anuncio");

    const elementoNotificacion = document.querySelector(".notificacion");

    const controladorNotificacion = new ControladorNotificaciones(elementoNotificacion);

    const searchParams = new URLSearchParams(window.location.search);

    const anuncioId = searchParams.get("id");

    const controladorDetalleAnuncios = new ControladorDetalleAnuncios(detalleAnuncio);
    controladorDetalleAnuncios.verAnuncio(anuncioId);
});