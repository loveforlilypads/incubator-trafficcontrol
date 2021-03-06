/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var FormTypeController = function(type, $scope, $location, formUtils, stringUtils, locationUtils) {

    $scope.type = type;

    $scope.props = [
        { name: 'name', type: 'text', required: true, maxLength: 45 },
        { name: 'useInTable', type: 'text', required: true, maxLength: 45 }
    ];

    $scope.labelize = stringUtils.labelize;

    $scope.viewServers = function() {
        $location.path($location.path() + '/servers');
    };

    $scope.viewDeliveryServices = function() {
        $location.path($location.path() + '/delivery-services');
    };

    $scope.viewCacheGroups = function() {
        $location.path($location.path() + '/cache-groups');
    };

    $scope.navigateToPath = locationUtils.navigateToPath;

    $scope.hasError = formUtils.hasError;

    $scope.hasPropertyError = formUtils.hasPropertyError;

};

FormTypeController.$inject = ['type', '$scope', '$location', 'formUtils', 'stringUtils', 'locationUtils'];
module.exports = FormTypeController;
