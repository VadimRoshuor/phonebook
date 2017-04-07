/**
 * Created by VR on 22.03.2017.
 */

var phonebookApp = angular.module('phonebookApp', []).controller('phonebookCtrl', function ($scope) {
    $scope.persons = [
        {
            name: 'Vadim',
            phone: '097-941-70-01',
            email: 'rovd_00@bk.ru'
        },
        {
            name: 'Roy Jones',
            phone: '103',
            email: 'roy@jones.com'
        },
        {
            name: 'legaviy',
            phone: '+380-50-999-99-85',
            email: 'leg@ms.ua'
        }
    ];
    $scope.currentPerson = -1;
    $scope.addPerson = function () {
        if ($scope.name != '') {
            if(!isNaN($scope.phone)){
            $scope.persons.push({

                name: $scope.name,
                phone: $scope.phone,
                email: $scope.email

            });
            $scope.name = '';
            $scope.phone = '';
            $scope.email = '';
        }else {
            alert('Phone number must consist of numbers')
            }

        }
        else {
            alert('Enter name')
        }


    };
    $scope.savePerson = function () {
        if ($scope.currentPerson > -1) {
            var personId = $scope.currentPerson;
            $scope.persons[personId].name = $scope.name;
            $scope.persons[personId].email = $scope.email;
            $scope.persons[personId].phone = $scope.phone;
            $scope.name = '';
            $scope.phone = '';
            $scope.email = '';
            $scope.currentPerson = -1;

        }

    };

    $scope.editPerson = function (personId) {
        $scope.currentPerson = personId;
        $scope.name = $scope.persons[personId].name;
        $scope.email = $scope.persons[personId].email;
        $scope.phone = $scope.persons[personId].phone;


    };
    $scope.deletePerson = function (personId) {

        $scope.persons.splice(personId, 1)

    };
    $scope.submitForm = function () {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }

    };

});