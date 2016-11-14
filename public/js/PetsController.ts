namespace App {

    export class PetsController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'Pets Page';
        }
    }

}
