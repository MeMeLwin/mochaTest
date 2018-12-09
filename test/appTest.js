const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
//const iamNum = require('../app').iamNum;
//const addNumbers =require('../app').addNumbers;
const app = require('../app');
//Results
sayHelloResult=app.sayHello();
addNumbersResult=app.addNumbers(5,2);//5+2 is bigger than 5, so in this case,test passing
//const app =require('../app');

describe('App',function(){

  describe('sayHello',function(){

    it('sayHello should return hello',function(){
      //let result=sayHello();
        assert.equal(sayHelloResult,'hello');
    });

    it('sayHello should return type string',function(){
        //let result=sayHello();
        assert.typeOf(sayHelloResult,'string');
    });

  });

    describe('addNumbers',function(){

      it('iamNum should return type integer',function(){
          //let result=iamNum();
          assert.typeOf(addNumbersResult,'number');
      });

      it('addNumbers should be above 5',function(){
          //let result=addNumbers(1,2);//1+2 is not bigger than 5, so in this case, test not passing
          assert.isAbove(addNumbersResult,5);
      });

    });

});
