namespace App {

    export class StoresController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'Stores Page';
        }
    }

}
