class validacionesatomicas {
    constructor() {
    }

    format(id, exprreg) {
        // Add null check and error handling
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id ${id} not found`);
            return false;
        }

        let expresionregular = new RegExp(exprreg);
        let valor = elemento.value;
        return expresionregular.test(valor);
    }

    min_size(id, minsize) {
        // Add null check and error handling
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id ${id} not found`);
            return false;
        }

        switch (elemento.tagName) {
            case 'INPUT':
                switch (elemento.type) {
                    case 'number':
                    case 'email':
                    case 'text':
                        var valorelemento = elemento.value;
                        if (valorelemento.length < minsize) {
                            return false;
                        }
                        return true;
                    case 'file':
                        if (!elemento.files || elemento.files.length === 0) {
                            return false;
                        }
                        var valorelemento = elemento.files[0].name;
                        if (valorelemento.length < minsize) {
                            return false;
                        }
                        return true;
                    default:
                        return false;
                }
            case 'SELECT':
                return true;
            default:
                return false;
        }
    }

    max_size(id, maxsize) {
        // Add null check and error handling
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Element with id ${id} not found`);
            return false;
        }

        switch (elemento.tagName) {
            case 'INPUT':
                switch (elemento.type) {
                    case 'number':
                    case 'email':
                    case 'text':
                        var valorelemento = elemento.value;
                        if (valorelemento.length > maxsize) {
                            return false;
                        }
                        return true;
                    case 'file':
                        if (!elemento.files || elemento.files.length === 0) {
                            return false;
                        }
                        var valorelemento = elemento.files[0].name;
                        if (valorelemento.length > maxsize) {
                            return false;
                        }
                        return true;
                    default:
                        return false;
                }
            case 'SELECT':
                return true;
            default:
                return false;
        }
    }

	max_size_file(file, maxsize) {
        if (!file) {
            console.error('No file provided for max_size_file check');
            return false;
        }
        return file.size <= maxsize;
    }

    type_file(file, allowed_types) {
        if (!file) {
            console.error('No file provided for type_file check');
            return false;
        }
        return allowed_types.includes(file.type);
    }

    format_name_file(file, exprreg) {
        if (!file) {
            console.error('No file provided for format_name_file check');
            return false;
        }
        let expresionregular = new RegExp(exprreg);
        return expresionregular.test(file.name);
    }
}

