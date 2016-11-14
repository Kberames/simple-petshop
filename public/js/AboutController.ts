namespace App {

    export class AboutController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'About Page';
        }
    }

}
