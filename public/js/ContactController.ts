namespace App {

    export class ContactController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'Contact Page';
        }
    }

}
