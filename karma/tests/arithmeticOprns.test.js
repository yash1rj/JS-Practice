describe('Arithmetic Operations Suite:',function(){

    it('Test Case 1: Correct Addition 1',function(){
       expect(add(10,20)).toEqual(30);
    });
    it('Test Case 2: Correct Addition 2',function(){
        expect(add(10,-20)).toEqual(-10);
    });

    it('Test Case 3: Is Zero? 1',function(){
        expect(isZero(20)).toEqual(false);
    });
    it('Test Case 4: Is Zero? 2',function(){
        expect(isZero(0)).toEqual(true);
    });

    it('Test Case 5: Correct Division 1',function(){
        expect(divide(1000,20)).toEqual(50);
    });
    it('Test Case 6: Correct Division 2',function(){
        expect(divide(10,20)).toEqual(0.5);
    });
    it('Test Case 7: Incorrect Division',function(){
        expect(divide(1000,0)).toEqual("Cannot divide by zero");
    });

    it('Test Case 8: Correct Subtraction 1',function(){
        expect(substract(1000,20)).toEqual(980);
    });
    it('Test Case 9: Correct Subtraction 2',function(){
        expect(substract(5,20)).toEqual(-15);
    });

    it('Test Case 10: Correct Multiplication 1',function(){
        expect(multiply(11,7)).toEqual(77);
    });
    it('Test Case 11: Correct Multiplication 2',function(){
        expect(multiply(14,-5)).toEqual(-70);
    });
    
})