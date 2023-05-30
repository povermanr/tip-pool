describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });

    it('should calculate the total tip amount', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 250;
        tipAmtInput.value = 50;
    
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(90);
      });
    
      it('should calculate the total bill amount', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 125;
        tipAmtInput.value = 25;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(225);
      });
    
      it('should calculate the total tip percent', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
      });
    
    it('should calculate the tip percentage', function () {
      expect(calculateTipPercent(50, 10)).toEqual(20);
      expect(calculateTipPercent(75, 15)).toEqual(20);
      expect(calculateTipPercent(100, 20)).toEqual(20);
    });
  
    it('should append a new td element to the table row', function () {
      let tr = document.createElement('tr');
  
      appendTd(tr, 'test');
  
        expect(tr.children.length).toEqual(1);
        expect(tr.firstChild.innerHTML).toEqual('test');
    });
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});