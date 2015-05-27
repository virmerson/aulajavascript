function aoClicar(){
	
	//var campoNome = document.getElementById("nome") ;
	//var texto = campoNome.value;
	//window.alert(texto);
	
	window.alert(document.getElementById("nome").value)
}

function aoExcluir(id){
	var decisao = window.confirm("Tem Certeza que deseja excluir com id "+ id+ "?")

	if(decisao==true){
		//exclusao
		window.alert("Excluido com sucesso!");
	}else{
		window.alert("Exclusao cancelada!");
	}
}

function valida(){
	campoNome= document.getElementById("nome");
	if (campoNome.value.trim() =="" ){
		window.alert("O campo nome nao pode ser vazio!!!");
		campoNome.focus();
		return false;
	}
	return true;
	
}