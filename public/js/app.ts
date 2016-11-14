namespace App {
    // Setup the node app module.
    let app = angular.module ('App', ['ui.router']);

    app.config([
        '$stateProvider',
        ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider
                .state ('home', {
                    url: '/',
                    //template: 'This is my home page. <p> title value: {{ title }} </p>',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'myController'
                })
                .state ('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: App.AboutController,
                    controllerAs: 'aboutController'
                })
                .state ('contact', {
                    url: '/contact',
                    templateUrl: 'templates/contact.html',
                    controller: App.ContactController,
                    controllerAs: 'contactController'
                })
                .state ('pets', {
                    url: '/pets',
                    templateUrl: 'templates/pets.html',
                    controller: App.PetsController,
                    controllerAs: 'petsController'
                })
                .state ('stores', {
                    url: '/stores',
                    templateUrl: 'templates/stores.html',
                    controller: App.StoresController,
                    controllerAs: 'storesController'
                })
            }
    ]);
}
