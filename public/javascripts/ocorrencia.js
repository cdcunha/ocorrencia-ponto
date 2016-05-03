document.getElementById("dateOcorrencia").defaultValue = getFormattedDate(today());
document.getElementById("dateAssinatura").defaultValue = getFormattedDate(today());

angular.module('app', [])
	.controller('OcorrenciaCtrl', OcorrenciaCtrl);
	
function OcorrenciaCtrl($scope, $window){
	$scope.showPrint = 0;
	$scope.dataOccur = {
		availableOptions: [
			{id: "1", name:"Atraso acima de 15 minutos"},
			{id: "2", name:"Falta"},
			{id: "3", name:"FÉRIAS"},
			{id: "4", name:"Falta marcação do ponto"},
			{id: "5", name:"Atestado médico"},
			{id: "6", name:"Ausência por viagem"},
			{id: "7", name:"Ausência por visita clientes"},
			{id: "8", name:"Entrada antecipada"},
			{id: "9", name:"Saída antecipada"},
			{id: "10", name:"Outros (Anotar no histórico)"}
		],
		selectedOption: {id: '1', name: 'Atraso acima de 15 minutos'}
	};
	
	$scope.dataParecer = {
		availableOptions: [
			{id: "0", name:""},
			{id: "1", name:"ACORDADO PREVIAMENTE"},
			{id: "2", name:"ABONAR"},
			{id: "3", name:"CONSIDERAR BANCO DE HORAS"},
			{id: "4", name:"DESCONTAR"},
			{id: "5", name:"PAGAR HORAS EXTRAS"},
			{id: "6", name:"FÉRIAS"}
		],
		selectedOption: {id: '3', name: 'CONSIDERAR BANCO DE HORAS'}
	};
	
	$scope.print = function(){
		$(".notPrintable").hide();
		$window.print();
		$(".notPrintable").show();
	}
	$scope.initializePage = function(){
		$scope.showPrint = 0;
	}
	$scope.initializePage();
}

function today() {
	return new Date();
}

// Get formatted date YYYY-MM-DD
function getFormattedDate(date) {
	return date.getFullYear()
		+ "-"
		+ ("0" + (date.getMonth() + 1)).slice(-2)
		+ "-"
		+ ("0" + date.getDate()).slice(-2);
}