describe('TotalTravelFare calculation Suite:',function(){
    it('Test Case 1: Inputs are correct',function(){
       expect(totalTravelFare(1000,20)).toEqual(1200);
    });
})