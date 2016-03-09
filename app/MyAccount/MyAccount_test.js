'use strict';

describe('myApp.MyAccount module', function() {

    beforeEach(module('myApp.MyAccount'));

    describe('MyAccount controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var MyAccountCtrl = $controller('MyAccountCtrl');
            expect(MyAccountCtrl).toBeDefined();
        }));

    });
});