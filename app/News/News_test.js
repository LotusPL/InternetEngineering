/**
 * Created by Karol on 10.03.2016.
 */
'use strict';

describe('myApp.News module', function() {

    beforeEach(module('myApp.News'));

    describe('News controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var NewsCtrl = $controller('NewsCtrl');
            expect(NewsCtrl).toBeDefined();
        }));

    });
});