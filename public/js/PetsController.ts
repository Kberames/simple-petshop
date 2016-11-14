namespace App {

    export class PetsController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public petsList;
        public currentPet;
        public newPet;

        public name;
        public category;
        public breed;
        public price;

        public title;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            this.title = 'Pets Page';


            console.log ('PetsController stateService: ', this.stateService);

            this.petsList = [];
            this.newPet = {};

            this.getPetList ();
        }

        public getPetList () {
            console.log ('getPetList fired');

            this.httpService ({
                url: '/pets',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.petsList = response;
            })
            .error ((response) => {
            });
        }

    }

}
