'use strict';

angular.module('nciFinalFrontApp')
	.controller('ContactCtrl', function($scope, $http) {

		$http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
			'key': 'ntAQV7lrBD2pOtGwIUHw_A',
			'message': {
				'from_email': 'nci.final@gmail.com',
				'to': [{
					'email': 'mark.ranosa@gmail.com',
					'name': 'RECIPIENT NAME (OPTIONAL)',
					'type': 'to'
				}],
				'autotext': 'true',
				'subject': 'YOUR SUBJECT HERE!',
				'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
			}
		}).success(function(response) {
			console.log(response);
		});

	});