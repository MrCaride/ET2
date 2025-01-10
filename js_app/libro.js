class libro extends EntidadAbstracta{

	constructor(){
		
		super();
		this.entidad = 'libro';
		this.columnasamostrar = Array(  `CodigoL`,
		`AutoresL`,
		`TituloL`,
		`ISBN` ,
		`PagIniL`,
		`PagFinL`,
		`VolumenL`,
		`EditorialL`,
		`FechaPublicacionL`,
		`EditorL`,
		`PaisEdicionL`,
		`archivopdfL`
	  	);
		this.datosespecialestabla = Array('FechaPublicacionL','pagIniL','paginaFinL','archivopdfL');

		this.inicializar();


	}

	
	cargar_formulario_html() {
		this.accion = '';

		let formulario = `
			<label class="label_CodigoL">CodigoL</label>
			<input type='text' id='CodigoL' name='CodigoL'></input>
			<span id="div_error_CodigoL"><a id="error_CodigoL"></a></span>
			<br>

			<label class="label_AutoresL">AutoresL</label>
			<input type='text' id='AutoresL' name='AutoresL'></input>
			<span id="div_error_AutoresL"><a id="error_AutoresL"></a></span>
			<br>
			
			<label class="label_TituloL">TituloL</label>
			<input type='text' id='TituloL' name='TituloL'></textarea>
			<span id="div_error_TituloL"><a id="error_TituloL"></a></span>
			<br>

			<label class="label_ISBN">ISBN</label>
			<input type='text' id='ISBN' name='ISBN'></input>
			<span id="div_error_ISBN"><a id="error_ISBN"></a></span>
			<br>

			<label class="label_PagIniL">PagIniL</label>
			<input type='text' id='PagIniL' name='PagIniL'></input>
			<span id="div_error_PagIniL"><a id="error_PagIniL"></a></span>
			<br>

			<label class="label_PagFinL">PagFinL</label>
			<input type='text' id='PagFinL' name='PagFinL'></input>
			<span id="div_error_PagFinL"><a id="error_PagFinL"></a></span>
			<br>

			<label class="label_VolumenL">VolumenL</label>
			<input type='text' id='VolumenL' name='VolumenL'></input>
			<span id="div_error_VolumenL"><a id="error_VolumenL"></a></span>
			<br>

			<label class="label_EditorialL">EditorialL</label>
			<input type='text' id='EditorialL' name='EditorialL'></input>
			<span id="div_error_EditorialL"><a id="error_EditorialL"></a></span>
			<br>

			<label class="label_FechaPublicacionL">FechaPublicacionL</label>
			<input type='text' id='FechaPublicacionL' name='FechaPublicacionL'></input>
			<span id="div_error_FechaPublicacionL"><a id="error_FechaPublicacionL"></a></span>
			<br>

			<label class="label_EditorL">EditorL</label>
			<input type='text' id='EditorL' name='EditorL'></input>
			<span id="div_error_EditorL"><a id="error_EditorL"></a></span>
			<br>

			<label class="label_PaisEdicionL">PaisEdicionL</label>
			<input type='text' id='PaisEdicionL' name='PaisEdicionL'></input>
			<span id="div_error_PaisEdicionL"><a id="error_PaisEdicionL"></a></span>
			<br>

			<label id="label_archivopdfL" class="label_archivopdfL">archivopdfL</label>
			<input type='text' id='archivopdfL' name='archivopdfL'></input>
			<span id="div_error_archivopdfL"><a id="error_archivopdfL"></a></span>
			<a id="link_archivopdfL" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_archivopdfL" class="label_nuevo_archivopdfL">Nuevo archivopdfL</label>
			<input type='file' id='nuevo_archivopdfL' name='nuevo_archivopdfL'></input>
			<span id="div_error_nuevo_archivopdfL"><a id="error_nuevo_archivopdfL"></a></span>
			<br>
		`;
		document.getElementById("IU_form").innerHTML = formulario;
	}
	
	createForm_ADD(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_ADD';

		document.getElementById('CodigoL').remove();

		document.getElementById('label_archivopdfL').remove();
		document.getElementById('archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();

		this.colocarvalidaciones('ADD');
		
		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}


		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}


	createForm_EDIT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_EDIT';

	

		// relleno los valores de los atributos
		this.rellenarvaloresform(parametros);

		// desactivo los campos necesarios
		document.getElementById('TituloL').setAttribute('readonly',true);
		document.getElementById('CodigoL').setAttribute('readonly',true);
		document.getElementById('archivopdfL').setAttribute('readonly',true);
		document.getElementById('label_archivopdfL').setAttribute('readonly',true);


		
		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');
		
		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_DELETE(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();

		this.rellenarvaloresform(parametros);


		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SHOWCURRENT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}


		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();



		
		this.rellenarvaloresform(parametros);


		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;



		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}



	comprobar_CodigoL() {
		if (!(this.validaciones.format('CodigoL', '^[0-9]+$'))) {
		  this.mostrar_error_campo('CodigoL', 'CodigoL_no_format_KO');
		  return 'CodigoL_no_format_KO';
		}
		if (!(this.validaciones.max_size('CodigoL', 11))) {
		  this.mostrar_error_campo('CodigoL', 'CodigoL_max_size_KO');
		  return 'CodigoL_max_size_KO';
		}
		this.mostrar_exito_campo('CodigoL');
		return true;
	  }
	
	  comprobar_AutoresL() {
		if (!(this.validaciones.min_size('AutoresL', 1))) {
		  this.mostrar_error_campo('AutoresL', 'AutoresL_min_size_KO');
		  return 'AutoresL_min_size_KO';
		}
		if (!(this.validaciones.max_size('AutoresL', 200))) {
		  this.mostrar_error_campo('AutoresL', 'AutoresL_max_size_KO');
		  return 'AutoresL_max_size_KO';
		}
		if (!(this.validaciones.format('AutoresL', '^[A-Za-zñÑáéíóúÁÉÍÓÚ ,.-]+$'))) {
		  this.mostrar_error_campo('AutoresL', 'AutoresL_no_format_KO');
		  return 'AutoresL_no_format_KO';
		}
		this.mostrar_exito_campo('AutoresL');
		return true;
	  }
	
	  comprobar_TituloL() {
		if (!(this.validaciones.min_size('TituloL', 1))) {
		  this.mostrar_error_campo('TituloL', 'TituloL_min_size_KO');
		  return 'TituloL_min_size_KO';
		}
		if (!(this.validaciones.max_size('TituloL', 100))) {
		  this.mostrar_error_campo('TituloL', 'TituloL_max_size_KO');
		  return 'TituloL_max_size_KO';
		}
		if (!(this.validaciones.format('TituloL', '^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ,.-]+$'))) {
		  this.mostrar_error_campo('TituloL', 'TituloL_no_format_KO');
		  return 'TituloL_no_format_KO';
		}
		this.mostrar_exito_campo('TituloL');
		return true;
	  }
	
	  comprobar_ISBN() {
		if (!(this.validaciones.min_size('ISBN', 13))) {
		  this.mostrar_error_campo('ISBN', 'ISBN_min_size_KO');
		  return 'ISBN_min_size_KO';
		}
		if (!(this.validaciones.max_size('ISBN', 13))) {
		  this.mostrar_error_campo('ISBN', 'ISBN_max_size_KO');
		  return 'ISBN_max_size_KO';
		}
		if (!(this.validaciones.format('ISBN', '^[0-9]+$'))) {
		  this.mostrar_error_campo('ISBN', 'ISBN_no_format_KO');
		  return 'ISBN_no_format_KO';
		}
		this.mostrar_exito_campo('ISBN');
		return true;
	  }

	  comprobar_PagIniL() {
		if (!(this.validaciones.min_size('PagIniL', 1))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_min_size_KO');
			return 'PagIniL_min_size_KO';
		}
		if (!(this.validaciones.max_size('PagIniL', 4))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_max_size_KO');
			return 'PagIniL_max_size_KO';
		}
		if (!(this.validaciones.format('PagIniL', '^[0-9]+$'))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_no_digit_KO');
			return 'PagIniL_no_digit_KO';
		}
		if (this.validacionesespeciales('PagFinL', 'pagMayor')) {
			this.mostrar_exito_campo('PagFinL');
		  } else {
			this.mostrar_error_campo('PagFinL', 'PagFinL_greater_KO');
		  }
		this.mostrar_exito_campo('PagIniL');
		return true;
	}
		

	comprobar_PagFinL() {

		if (!(this.validaciones.min_size('PagFinL', 1))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_min_size_KO');
			return 'PagFinL_min_size_KO';
		}
		if (!(this.validaciones.max_size('PagFinL', 4))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_max_size_KO');
			return 'PagFinL_max_size_KO';
		}
		if (!(this.validaciones.format('PagFinL', '^[0-9]+$'))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_no_digit_KO');
			return 'PagFinL_no_digit_KO';
		}
		if (!(this.validacionesespeciales('PagFinL','pagMayor'))){
			this.mostrar_error_campo('PagFinL','PagFinL_greater_KO');
			return 'PagFinL_greater_KO';
		}
	
		this.mostrar_exito_campo('PagFinL');
		return true;
	}

		comprobar_VolumenL() {
			if (!(this.validaciones.min_size('VolumenL', 1))) {
				this.mostrar_error_campo('VolumenL', 'VolumenL_min_size_KO');
				return 'VolumenL_min_size_KO';
			  }
			if (!(this.validaciones.max_size('VolumenL', 4))) {
			  this.mostrar_error_campo('VolumenL', 'VolumenL_max_size_KO');
			  return 'VolumenL_max_size_KO';
			}
			if (!(this.validaciones.format('VolumenL', '^[0-9]+$'))) {
			  this.mostrar_error_campo('VolumenL', 'VolumenL_format_KO');
			  return 'VolumenL_format_KO';
			}
			this.mostrar_exito_campo('VolumenL');
			return true;
		  }
		
		  comprobar_EditorialL() {
			if (!(this.validaciones.min_size('EditorialL', 1))) {
			  this.mostrar_error_campo('EditorialL', 'EditorialL_min_size_KO');
			  return 'EditorialL_min_size_KO';
			}
			if (!(this.validaciones.max_size('EditorialL', 100))) {
			  this.mostrar_error_campo('EditorialL', 'EditorialL_max_size_KO');
			  return 'EditorialL_max_size_KO';
			}
			if (!(this.validaciones.format('EditorialL', '^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ,.-]+$'))) {
			  this.mostrar_error_campo('EditorialL', 'EditorialL_no_format_KO');
			  return 'EditorialL_no_format_KO';
			}
			this.mostrar_exito_campo('EditorialL');
			return true;
		  }
		
		  comprobar_FechaPublicacionL() {
			if (!(this.validaciones.format('FechaPublicacionL','[0-9]{4,}[-][0-9]{2,}[-][0-9]{2,}'))){
				this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_format_KO');
				return 'FechaPublicacionL_format_KO';
			}
			if (!(this.validacionesespeciales('FechaPublicacionL','fechavalida'))){
				this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_no_date_KO');
				return 'FechaPublicacionL_no_date_KO';
			}
			this.mostrar_exito_campo('FechaPublicacionL');
			return true;
		  }
		
		  comprobar_EditorL() {
			if (!(this.validaciones.min_size('EditorL', 1))) {
			  this.mostrar_error_campo('EditorL', 'EditorL_min_size_KO');
			  return 'EditorL_min_size_KO';
			}
			if (!(this.validaciones.max_size('EditorL', 100))) {
			  this.mostrar_error_campo('EditorL', 'EditorL_max_size_KO');
			  return 'EditorL_max_size_KO';
			}
			if (!(this.validaciones.format('EditorL', '^[A-Za-zñÑáéíóúÁÉÍÓÚ ,.-]+$'))) {
			  this.mostrar_error_campo('EditorL', 'EditorL_no_format_KO');
			  return 'EditorL_no_format_KO';
			}
			this.mostrar_exito_campo('EditorL');
			return true;
		  }
		
		  comprobar_PaisEdicionL() {
			if (!(this.validaciones.min_size('PaisEdicionL', 1))) {
			  this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_min_size_KO');
			  return 'PaisEdicionL_min_size_KO';
			}
			if (!(this.validaciones.max_size('PaisEdicionL', 20))) {
			  this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_max_size_KO');
			  return 'PaisEdicionL_max_size_KO';
			}
			if (!(this.validaciones.format('PaisEdicionL', '^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'))) {
			  this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_no_format_KO');
			  return 'PaisEdicionL_no_format_KO';
			}
			this.mostrar_exito_campo('PaisEdicionL');
			return true;
		  }

		// comprobar_archivopdfL() {
		// 	if (!(this.validaciones.min_size('archivopdfL', 7))) {
		// 		this.mostrar_error_campo('archivopdfL', 'archivopdfL_min_size_KO');
		// 		return 'archivopdfL_min_size_KO';
		// 	}
		// 	if (!(this.validaciones.max_size('archivopdfL', 100))) {
		// 		this.mostrar_error_campo('archivopdfL', 'archivopdfL_max_size_KO');
		// 		return 'archivopdfL_max_size_KO';
		// 	}
		// 	if (!(this.validaciones.format('archivopdfL', ' ^[a-zA-Z\.]*$'))) {
		// 		this.mostrar_error_campo('archivopdfL', 'archivopdfL_no_format_KO');
		// 		return 'archivopdfL_no_format_KO';
		// 	}
		// 	this.mostrar_exito_campo('archivopdfL');
		// 	return true;
		// }

		comprobar_nuevo_archivopdfL(){      
	
			if (document.getElementById('nuevo_archivopdfL').files.length == 0){
				if (this.accion == 'EDIT'){
					return true;
				}
				else{
					if (this.accion = "ADD"){
						this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_empty_KO');
						return 'nuevo_archivopdfL_empty_KO';
					}
				}
			}
		
			let mifichero = document.getElementById('nuevo_archivopdfL').files[0];
			
	
			if (!(this.validaciones.max_size_file(mifichero,2000000 ))){
				this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_max_size_file_KO');
				return 'nuevo_archivopdfL_max_size_file_KO';
			}
			if (!(this.validaciones.type_file(mifichero,Array("application/pdf")))){
				this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_type_file_KO');
				return 'nuevo_archivopdfL_type_file_KO';
			}
			if (!(this.validaciones.format_name_file(mifichero,'^[A-Za-z.]+$'))) {
				this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_format_name_file_KO');
				return 'nuevo_archivopdfL_format_name_file_KO';
			}
			if (!this.validaciones.min_size('nuevo_archivopdfL',11)){
				this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_min_size_name_KO');
				return 'nuevo_archivopdfL_min_size_name_KO';
			}
			if (!this.validaciones.max_size('nuevo_archivopdfL',104)){
				this.mostrar_error_campo('nuevo_archivopdfL','nuevo_archivopdfL_max_size_name_KO');
				return 'nuevo_archivopdfL_max_size_name_KO';
			}
	
			this.mostrar_exito_campo('nuevo_archivopdfL');
			return true;
	
		}


		comprobar_CodigoL_SEARCH() {
			if (!(this.validaciones.max_size('CodigoL', 11))) {
				this.mostrar_error_campo('CodigoL', 'CodigoL_max_size_KO');
				return 'CodigoL_max_size_KO';
			}
			if (!(this.validaciones.format('CodigoL', '^$|^[0-9]+$'))) {
				this.mostrar_error_campo('CodigoL', 'CodigoL_no_format_KO');
				return 'CodigoL_no_format_KO';
			}
			this.mostrar_exito_campo('CodigoL');
			return true;
		}
		
		comprobar_AutoresL_SEARCH() {
			if (!(this.validaciones.max_size('AutoresL', 200))) {
				this.mostrar_error_campo('AutoresL', 'AutoresL_max_size_KO');
				return 'AutoresL_max_size_KO';
			}
			if (!(this.validaciones.format('AutoresL', '^$|^[A-Za-zñÑáéíóúÁÉÍÓÚ ,.-]+$'))) {
				this.mostrar_error_campo('AutoresL', 'AutoresL_no_format_KO');
				return 'AutoresL_no_format_KO';
			}
			this.mostrar_exito_campo('AutoresL');
			return true;
		}
		
		comprobar_TituloL_SEARCH() {
			if (!(this.validaciones.max_size('TituloL', 100))) {
				this.mostrar_error_campo('TituloL', 'TituloL_max_size_KO');
				return 'TituloL_max_size_KO';
			}
			if (!(this.validaciones.format('TituloL', '^$|^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ,.-]+$'))) {
				this.mostrar_error_campo('TituloL', 'TituloL_no_format_KO');
				return 'TituloL_no_format_KO';
			}
			this.mostrar_exito_campo('TituloL');
			return true;
		}
		
		comprobar_ISBN_SEARCH() {
			if (!(this.validaciones.max_size('ISBN', 13))) {
				this.mostrar_error_campo('ISBN', 'ISBN_max_size_KO');
				return 'ISBN_max_size_KO';
			}
			if (!(this.validaciones.format('ISBN', '^$|^[0-9X]+$'))) {
				this.mostrar_error_campo('ISBN', 'ISBN_no_format_KO');
				return 'ISBN_no_format_KO';
			}
			this.mostrar_exito_campo('ISBN');
			return true;
		}

		comprobar_PagIniL_SEARCH() {
			if (!(this.validaciones.max_size('PagIniL', 4))) {
				this.mostrar_error_campo('PagIniL', 'PagIniL_max_size_KO');
				return 'PagIniL_max_size_KO';
			}
			if (!(this.validaciones.format('PagIniL', '^$|^[0-9]+$'))) {
				this.mostrar_error_campo('PagIniL', 'PagIniL_no_digit_KO');
				return 'PagIniL_no_digit_KO';
			}
			this.mostrar_exito_campo('PagIniL');
			return true;
		}
			
	
		comprobar_PagFinL_SEARCH() {
			if (!(this.validaciones.max_size('PagFinL', 4))) {
				this.mostrar_error_campo('PagFinL', 'PagFinL_max_size_KO');
				return 'PagFinL_max_size_KO';
			}
			if (!(this.validaciones.format('PagFinL', '^$|^[0-9]+$'))) {
				this.mostrar_error_campo('PagFinL', 'PagFinL_no_digit_KO');
				return 'PagFinL_no_digit_KO';
			}
		
			this.mostrar_exito_campo('PagFinL');
			return true;
		}
		
		comprobar_VolumenL_SEARCH() {
			if (!(this.validaciones.max_size('VolumenL', 4))) {
				this.mostrar_error_campo('VolumenL', 'VolumenL_max_size_KO');
				return 'VolumenL_max_size_KO';
			}
			if (!(this.validaciones.format('VolumenL', '^$|^[0-9]+$'))) {
				this.mostrar_error_campo('VolumenL', 'VolumenL_format_KO');
				return 'VolumenL_format_KO';
			}
			this.mostrar_exito_campo('VolumenL');
			return true;
		}
		
		comprobar_EditorialL_SEARCH() {
			if (!(this.validaciones.max_size('EditorialL', 100))) {
				this.mostrar_error_campo('EditorialL', 'EditorialL_max_size_KO');
				return 'EditorialL_max_size_KO';
			}
			if (!(this.validaciones.format('EditorialL', '^$|^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ,.-]+$'))) {
				this.mostrar_error_campo('EditorialL', 'EditorialL_no_format_KO');
				return 'EditorialL_no_format_KO';
			}
			this.mostrar_exito_campo('EditorialL');
			return true;
		}

		comprobar_FechaPublicacionL_SEARCH() {
			if (!(this.validaciones.format('FechaPublicacionL','^$|[0-9]{4,}[-][0-9]{2,}[-][0-9]{2,}'))){
				this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_format_KO');
				return 'FechaPublicacionL_format_KO';
			}
			if (!(this.validacionesespeciales('FechaPublicacionL','fechavalida'))){
				this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_no_date_KO');
				return 'FechaPublicacionL_no_date_KO';
			}
			this.mostrar_exito_campo('FechaPublicacionL');
			return true;
		  }
		
		comprobar_EditorL_SEARCH() {
			if (!(this.validaciones.max_size('EditorL', 100))) {
				this.mostrar_error_campo('EditorL', 'EditorL_max_size_KO');
				return 'EditorL_max_size_KO';
			}
			if (!(this.validaciones.format('EditorL', '^$|^[A-Za-zñÑáéíóúÁÉÍÓÚ ,.-]+$'))) {
				this.mostrar_error_campo('EditorL', 'EditorL_no_format_KO');
				return 'EditorL_no_format_KO';
			}
			this.mostrar_exito_campo('EditorL');
			return true;
		}
		
		comprobar_PaisEdicionL_SEARCH() {
			if (!(this.validaciones.max_size('PaisEdicionL', 20))) {
				this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_max_size_KO');
				return 'PaisEdicionL_max_size_KO';
			}
			if (!(this.validaciones.format('PaisEdicionL', '^$|^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'))) {
				this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_no_format_KO');
				return 'PaisEdicionL_no_format_KO';
			}
			this.mostrar_exito_campo('PaisEdicionL');
			return true;
		}

		comprobar_archivopdfL_SEARCH() {
			if (!(this.validaciones.max_size('archivopdfL', 100))) {
				this.mostrar_error_campo('archivopdfL', 'archivopdfL_max_size_KO');
				return 'archivopdfL_max_size_KO';
			}
			if (!(this.validaciones.format('archivopdfL', '^$|^[a-zA-Z\\.]*$'))) {
				this.mostrar_error_campo('archivopdfL', 'archivopdfL_no_format_KO');
				return 'archivopdfL_no_format_KO';
			}
			this.mostrar_exito_campo('archivopdfL');
			return true;
		}

		comprobar_submit(){
		
			let result = 	(
				(this.comprobar_CodigoL()) &
				(this.comprobar_AutoresL()) &
				(this.comprobar_TituloL()) &
				(this.comprobar_ISBN()) &
				(this.comprobar_PagIniL()) &
				(this.comprobar_PagFinL()) &
				(this.comprobar_VolumenL()) &
				(this.comprobar_EditorialL()) &
				(this.comprobar_FechaPublicacionL()) &
				(this.comprobar_EditorL()) &
				(this.comprobar_PaisEdicionL()) &
				(this.comprobar_nuevo_archivopdfL())
					);
			
			result = Boolean(result);
			
			return result;
	
		}


		comprobar_submit_SEARCH(){
		
			let result = 	(
				(this.comprobar_CodigoL_SEARCH()) &
				(this.comprobar_AutoresL_SEARCH()) &
				(this.comprobar_TituloL_SEARCH()) &
				(this.comprobar_ISBN_SEARCH()) &
				(this.comprobar_PagIniL_SEARCH()) &
				(this.comprobar_PagFinL_SEARCH()) &
				(this.comprobar_VolumenL_SEARCH()) &
				(this.comprobar_EditorialL_SEARCH()) &
				(this.comprobar_FechaPublicacionL_SEARCH()) &
				(this.comprobar_EditorL_SEARCH()) &
				(this.comprobar_PaisEdicionL_SEARCH()) &
				(this.comprobar_archivopdfL_SEARCH())
				
					);
			
			result = Boolean(result);
			
			return result;
	
		}

		validacionesespeciales(atributo, prueba){

			if (atributo == 'FechaPublicacionL'){
				if (prueba == 'fechavalida'){
					let fecha = document.getElementById(atributo).value;
					let fechaf = fecha.split("-");
					let day = fechaf[2];
					let month = fechaf[1];
					let year = fechaf[0];
					let date = new Date(year,month,'0');
					if((day-0)>(date.getDate()-0)){
						return false;
					}
					if(month-0>12 | month-0<1){
						return false;
					}
					return true;
				}
			}


			if (atributo == 'PagFinL' && prueba == 'pagMayor') {
				let pagIniElement = document.getElementById('PagIniL');

				if (!pagIniElement || pagIniElement.value === '') {
					return true;
				}

				let pagFinElement = document.getElementById('PagFinL');

				
				if (!pagFinElement || pagFinElement.value === '') {
					return true;
				}


				let start = parseInt(pagIniElement.value, 10);
				let end = parseInt(pagFinElement.value, 10);
	
				return end > start;
			}
	
		}

		colocarboton(accion){

			let divboton = document.createElement('div');
			divboton.id = 'div_boton';
			//divboton.stype.display = 'block';
			document.getElementById('IU_form').append(divboton);
			let boton = document.createElement('button');
			boton.id = 'submit_button';
			boton.type = 'submit';
			let img = document.createElement('img');
			img.src = './iconos/'+accion+'.png';
			boton.append(img);
			document.getElementById('div_boton').append(boton);
	
		}
	
		rellenarvaloresform(parametros){
			
			//obtener campos del formulario
				let campos = document.forms['IU_form'].elements;
				//recorrer todos los campos
				for (let i=0;i<campos.length;i++) {
				if (document.getElementById(campos[i].id).type == 'file'){
					
				}
				else{
							document.getElementById(campos[i].id).value = parametros[campos[i].id];
				}
				}
		}
	
		colocarvalidaciones(accion){
			
			let evento;
			//obtener campos del formulario
				let campos = document.forms['IU_form'].elements;
				//recorrer todos los campos
				for (let i=0;i<campos.length;i++) {
				if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')){
							evento = 'onblur';
				}
				else{
					evento = 'onchange';
				}
			if (accion == 'SEARCH'){
				document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'_'+accion+'();');
			}
			else{
				document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'();');
			}
			
			}
		}
	
		ponernoactivoform(){
			//obtener campos del formulario
				let campos = document.forms['IU_form'].elements;
				//recorrer todos los campos
				for (let i=0;i<campos.length;i++) {
						document.getElementById(campos[i].id).setAttribute('readonly', true);
				}
		}


		cambiardatosespecialestabla(atributo, valoratributo){

			if (atributo == 'archivopdfL'){
	
				if (valoratributo == ''){
					return "no hay fichero";
				}
				let texto = valoratributo; 
				texto += `<a id="Link" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/`;
				texto += valoratributo;
				texto += `"><img src="./iconos/FILE.png" /></a>`;
	
				return texto;
	
			}

			if (atributo == 'FechaPublicacionL'){

				let fech = valoratributo.split('-');
				let fechaformateada = fech[0] + '-' + fech[1] + '-' + fech[2];
				return fechaformateada;
	
			}
			
		}
	




}