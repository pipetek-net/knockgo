import React from 'react';

// El uso de funciones dentro de un mismo .jsx en lugar de .js externo
// permite al código modificar el DOM virtual generado por React.
//
// Las siguientes cuatro funciones se encargan de:
// 1. UpdateDeviceType: Activa la selección de Marcas según el tipo de dispositivo y
//    actualiza el detalle.
// 2. UpdateDeviceBrand: Activa la selección de Categorias (de problemas) según el tipo
//    de dispositivo y la marca, y actualiza el detalle.
// 3. UpdateDeviceCategory: Genera (prototipo) las soluciones al problema y el precio en base al
//    problema, y actualiza el detalle.
// 4. UpdateDeviceOther: Monitorea las notas del usuario y actualiza el detalle.
function UpdateDeviceType() {
    var deviceType = document.getElementById('deviceType');
    var deviceBrand = document.getElementById('deviceBrand');
    var detailType = document.getElementById('detailType');
    var detailTypeText = document.getElementById('detailTypeText');

    // Verifica si el usuario seleccionó una opción en "Tipo de Dispositivo" y en base
    // a esto deshabilita o no la siguiente opción (Marca).
    if (deviceType.value === 'none') {
        deviceBrand.setAttribute('disabled', '');
        deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option>'
        
        detailType.removeAttribute('value');
        detailTypeText.innerHTML = 'N/A';
    }
    else {
        deviceBrand.removeAttribute('disabled');
        detailType.setAttribute('value', deviceType.value);
        detailTypeText.innerHTML = deviceType.value.charAt(0).toUpperCase() + deviceType.value.slice(1);

        // Habilita distintas marcas en base al tipo de dispositivo que el usuario eligió.
        switch(deviceType.value)
        {
            case 'computador':
                deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option><option value="acer">Acer</option><option value="apple">Apple</option><option value="asus">Asus</option><option value="dell">Dell</option><option value="gear">Gear</option><option value="gigabyte">Gigabyte</option><option value="google">Google</option><option value="hp">HP</option><option value="huawei">Huawei</option><option value="lenovo">Lenovo</option><option value="microsoft">Microsoft</option><option value="msi">MSI</option><option value="samsung">Samsung</option><option value="toshiba">Toshiba</option>';
                break;
            case 'telefono':
                deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option><option value="alcatel">Alcatel</option><option value="apple">Apple</option><option value="google">Google</option><option value="huawei">Huawei</option><option value="lg">LG</option><option value="motorola">Motorola</option><option value="nokia">Nokia</option><option value="oneplus">OnePlus</option><option value="oppo">Oppo</option><option value="samsung">Samsung</option><option value="Sony">Sony</option><option value="vivo">Vivo</option><option value="Xiaomi">Xiaomi</option><option value="zte">ZTE</option>';
                break;
        }
    }
    UpdateDeviceBrand();
}

function UpdateDeviceBrand() {
    var deviceType = document.getElementById('deviceType');
    var deviceBrand = document.getElementById('deviceBrand');
    var deviceCategory = document.getElementById('deviceCategory');
    var detailBrand = document.getElementById('detailBrand');
    var detailBrandText = document.getElementById('detailBrandText');

    var issuesBase = '<optgroup label="Problemas Generales"><option value="none">Selecciona una opcion...</option><option value="audio">Audio</option><option value="bateria">Bateria</option><option value="encendido">Encendido</option><option value="internet">Internet</option><option value="pantalla">Pantalla</option><option value="velocidad">Velocidad</option></optgroup>';
    var issuesType;
    var issuesBrand;

    // Verifica si el usuario seleccionó una opción en "Marca de Dispositivo" y en base
    // a esto deshabilita o no la siguiente opción (Categoria de Problema).
    if (deviceBrand.value === 'none') {
        deviceCategory.setAttribute('disabled', '');
        deviceCategory.innerHTML = '<option value="none">Selecciona una opcion...</option>'
        
        detailBrand.removeAttribute('value');
        detailBrandText.innerHTML = 'N/A';
    }
    else {
        deviceCategory.removeAttribute('disabled');
        detailBrand.setAttribute('value', deviceBrand.value);
        detailBrandText.innerHTML = deviceBrand.value.charAt(0).toUpperCase() + deviceBrand.value.slice(1);

        // Verifica el tipo de dispositivo que eligió el usuario y en base a esto habilita
        // problemas específicos dependiendo de la marca elegida.
        if (deviceType.value === 'computador') {
            issuesType = '<option value="temperatura">Temperatura</option>';
            switch (deviceBrand.value)
            {
                case 'apple':
                    issuesBrand = '<option value="actualizacion">Actualizacion</option>';
                    break;
                case 'google':
                    issuesBrand = '<option value="actualizacion">Actualizacion</option>';
                    break;
                default:
                    issuesBrand = '<option value="actualizacion">Actualizacion</option><option value="licencia">Licencia</option>';
                    break;
            }
        }
        else if (deviceType.value === 'telefono') {
            issuesType = '<option value="camara">Camara</option>';
            switch (deviceBrand.value)
            {
                case 'apple':
                    issuesBrand = '<option value="appstore">AppStore</option><option value="faceid">FaceID</option>';
                    break;
                case 'huawei':
                    issuesBrand = '<option value="appgallery">AppGallery</option><option value="YouTube">YouTube</option>'
                    break;
                case 'samsung':
                    issuesBrand = '<option value="knox">Knox</option><option value="playstore">PlayStore</option>'
                    break;
                default:
                    issuesBrand = '<option value="playstore">PlayStore</option>';
                    break;
            }
        }
        deviceCategory.innerHTML = issuesBase + '<optgroup label="Problemas Especificos">' + issuesType + issuesBrand + '</optgroup>';
    }
    UpdateDeviceCategory();
}

function UpdateDeviceCategory() {
    var deviceCategory = document.getElementById('deviceCategory');
    var detailCategory = document.getElementById('detailCategory');
    var detailCategoryText = document.getElementById('detailCategoryText');

    var detailSolution = [];
    var detailSolutionText = document.getElementById('detailSolutionText');
    var detailPrice;
    var detailPriceText = document.getElementById('detailPriceText');

    detailSolutionText.innerHTML = "";
    detailPriceText.innerHTML = "$0"

    console.log("DeviceCategory ", deviceCategory.value)

    // Verifica que el usuario haya seleccionado un problema, y en base a eso se
    // generan (prototipo) soluciones.
    if (deviceCategory.value === 'none') {
        detailCategory.removeAttribute('value');
        detailCategoryText.innerHTML = 'N/A';
    }
    else {
        deviceCategory.removeAttribute('disabled');
        detailCategory.setAttribute('value', deviceCategory.value);
        detailCategoryText.innerHTML = deviceCategory.value.charAt(0).toUpperCase() + deviceCategory.value.slice(1);

        switch (deviceCategory.value)
        {
            /* Template, para facilitar copiado y pegado.
                case "":
                    detailSolution[0] = "";
                    detailSolution[1] = "";
                    detailSolution[2] = "";
                    detailPrice = "";
                    break;
            */
            case "internet":
                detailSolution[0] = "Reiniciar el router.";
                detailSolution[1] = "Reconectar cable de red.";
                detailSolution[2] = "Cambiar ajustes de DNS.";
                detailSolution[3] = "Reemplazar cable de red.";
                detailPrice = "$55.000";
                break;
            case "bateria":
                detailSolution[0] = "Correr un scan de virus y remover si es necesario.";
                detailSolution[1] = "Desinstalar aplicaciones y programas poco usados.";
                detailSolution[2] = "Actualizar los drivers del sistema";
                detailSolution[3] = "Reemplazar la batería del dispositivo";
                detailPrice = "$105.000";
                break;
            case "pantalla":
                detailSolution[0] = "Actualizar drivers de video";
                detailSolution[1] = "Reconectar cables de pantalla.";
                detailSolution[2] = "Reemplazar la pantalla.";
                detailPrice = "$40.000";
                break;
            case "audio":
                detailSolution[0] = "Verificar que el nivel de volumen es el adecuado.";
                detailSolution[1] = "Seleccionar los dispositivos de entrada/salida de audio correctos.";
                detailSolution[2] = "Reconectar el cable del dispositivo de audio.";
                detailSolution[3] = "Reemplazar dispositivo de audio o adaptador de audio."
                detailPrice = "$35.000";
                break;
            case "encendido":
                detailSolution[0] = "Seleccionar correctamente el orden de inicio en la BIOS/UEFI.";
                detailSolution[1] = "Reparar el inicio del sistema mediante las herramienta avanzadas.";
                detailPrice = "$130.000";
                break;
            default:
                detailSolution = null;
                detailPrice = null;
                break;
        }

        if (detailSolution.length == null) {
            detailSolutionText.innerHTML = "";
        }
        else {
            detailSolution.forEach(element => {
                detailSolutionText.innerHTML += "<li>" + element + "</li>";
            });
            detailPriceText.innerHTML = detailPrice;
        }
    }
}

function UpdateDeviceOther() {
    var deviceOther = document.getElementById('deviceOther');
    var detailOther = document.getElementById('detailOther');
    var detailOtherText = document.getElementById('detailOtherText');

    // Verifica que el usuario haya escrito alguna nota y actualiza el campo respectivo
    // en detalle.
    if (deviceOther.value === '') {
        detailOther.removeAttribute('value');
        detailOtherText.innerHTML = 'N/A';
    }
    else {
        detailOther.setAttribute('value', deviceOther.value);
        detailOtherText.innerHTML = deviceOther.value;
    }
}

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function Diagnostico() {
    return(
        <>
            <main>
                <div className="container my-5">
                    <h1 className="mb-4 pb-3 border-bottom border-dark border-1">Diagnostico, <strong>¡es gratis!</strong></h1>
                    <div className="row">
                        <div className="col-8">
                            <form action="" method="get">
                                <div className="mb-3">
                                    <label htmlFor="deviceType" className="form-label">¿Con que tipo de dispositivo esta teniendo problemas?</label>
                                    <select id="deviceType" className="form-select" name="deviceType" onChange={UpdateDeviceType}>
                                        <option value="none">Selecciona una opcion...</option>
                                        <option value="computador">Computador</option>
                                        <option value="telefono">Telefono</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="" className="form-label">¿Que marca es el dispositivo?</label>
                                    <select id="deviceBrand" className="form-select" name="deviceBrand" onChange={UpdateDeviceBrand} disabled>
                                        <option value="none">Selecciona una opcion...</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="deviceCategory" className="form-label">¿Que tipo de problema tiene?</label>
                                    <select id="deviceCategory" className="form-select" name="deviceCategory" onChange={UpdateDeviceCategory} disabled>
                                        <option value="none">Selecciona una opcion...</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="deviceOther" className="form-label">Si desea agregar mas informacion, porfavor escribala aqui:</label>
                                    <textarea id="deviceOther" className="form-control w-100 h-25" name="deviceOther" onChange={UpdateDeviceOther}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex flex-column justify-content-between p-3 border border-1 border-grey rounded-3 bg-dark bg-opacity-10">
                            <div>
                                <div className="mb-4">
                                    <h2 className="mb-0">Detalle</h2>
                                    <data>
                                        <option id="detailType">Tipo: <em id="detailTypeText" className="text-secondary">N/A</em></option>
                                        <option id="detailBrand">Marca: <em id="detailBrandText" className="text-secondary">N/A</em></option>
                                        <option id="detailCategory">Categoria: <em id="detailCategoryText" className="text-secondary">N/A</em></option>
                                        <option id="detailOther">Notas: <em id="detailOtherText" className="text-secondary">N/A</em></option>
                                    </data>
                                </div>
                                <div>
                                    <div className="my-4">
                                        <h3 className="mb-0 fs-5">Posibles soluciones:</h3>
                                        <ol id="detailSolutionText">
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h3 className="mb-0 fs-5">¿Necesitas ayuda?</h3>
                                <p>No hay problema, ¡ayudar es nuestro negocio!</p>
                                <div className="text-center fs-6 mb-2 lh-sm">
                                    <h4 className="mb-0">Precio estimado:</h4>
                                    <span id="detailPriceText" className="fs-2">$55.500</span>
                                </div>
                                <button type="submit" className="btn btn-primary fs-3">¡Contratanos!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Diagnostico;