angular.module('listaTelefonica', []);

angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl', ['$scope', function ($scope) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
      { nome: 'Pedro', telefone: '99998888' },
      { nome: 'Ana', telefone: '99998877' },
      { nome: 'Maria', telefone: '99998866' },
      { nome: 'Ranyery', telefone: '940028922' }
    ];
    $scope.adicionarContato = function (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
    };
  }]);