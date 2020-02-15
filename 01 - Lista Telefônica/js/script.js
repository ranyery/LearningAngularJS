angular.module('listaTelefonica', []);

angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl', ['$scope', function ($scope) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
      { nome: 'Pedro', telefone: '99998888', cor: 'red' },
      { nome: 'Ana', telefone: '99998877', cor: 'green' },
      { nome: 'Maria', telefone: '99998866', cor: 'blue' },
      { nome: 'Ranyery', telefone: '940028922', cor: 'yellow' }
    ];
    $scope.operadoras = [
      {nome: 'Oi', codigo: 14, categoria: 'celular'},
      {nome: 'Vivo', codigo: 15, categoria: 'celular'},
      {nome: 'Tim', codigo: 41, categoria: 'celular'},
      {nome: 'GVT', codigo: 25, categoria: 'Fixo'},
      {nome: 'Embratel', codigo: 21, categoria: 'Fixo'},
    ];
    $scope.adicionarContato = function (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
    };
    $scope.apagarContatos = function (contatos) {
      $scope.contatos = contatos.filter(function(contatos) {
        return !contatos.selecionado
      });
    };
    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
          return contato.selecionado;
      });
    }
  }]);