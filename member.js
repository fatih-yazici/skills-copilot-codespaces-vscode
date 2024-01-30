function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            skills: '='
        },
        controller: function($scope) {
            $scope.skill = $scope.skills[0];
            $scope.next = function() {
                var index = $scope.skills.indexOf($scope.skill);
                if (index < $scope.skills.length - 1) {
                    $scope.skill = $scope.skills[index + 1];
                }
            };
            $scope.prev = function() {
                var index = $scope.skills.indexOf($scope.skill);
                if (index > 0) {
                    $scope.skill = $scope.skills[index - 1];
                }
            };
        }
    };

