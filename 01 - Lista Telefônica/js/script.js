angular.module('listaTelefonica', ["ngMessages"]);

angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl', ['$scope', function ($scope) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
      { nome: 'Ranyery', telefone: '940028922', data: new Date(), operadora: { nome: 'Vivo', codigo: 15, categoria: 'celular' } },
      { nome: 'Maria', telefone: '99998866', data: new Date(), operadora: { nome: 'Tim', codigo: 41, categoria: 'celular' } },
      { nome: 'Ana', telefone: '99998877', data: new Date(), operadora: { nome: 'Vivo', codigo: 15, categoria: 'celular' } },
      { nome: 'Pedro', telefone: '99998888', data: new Date(), operadora: { nome: 'Oi', codigo: 14, categoria: 'celular' } }
    ];
    $scope.operadoras = [
      { nome: 'Oi', codigo: 14, categoria: 'celular' },
      { nome: 'Vivo', codigo: 15, categoria: 'celular' },
      { nome: 'Tim', codigo: 41, categoria: 'celular' },
      { nome: 'GVT', codigo: 25, categoria: 'Fixo' },
      { nome: 'Embratel', codigo: 21, categoria: 'Fixo' },
    ];
    $scope.adicionarContato = function (contato) {
      contato.data = new Date();
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
      $scope.contatos = contatos.filter(function (contatos) {
        return !contatos.selecionado
      });
    };
    $scope.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };
    $scope.ordenarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
  }]);