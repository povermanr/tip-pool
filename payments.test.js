describe("submitPaymentInfo", function() {
    beforeEach(function() {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
    });
  
    it("should add a new payment to allPayments", function() {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
    });
 
    beforeEach(function() {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
    });
  
    it("should return a valid curPayment object with positive billAmt and tipAmt", function() {
      const curPayment = createCurPayment();
  
      expect(curPayment).toBeDefined();
      expect(curPayment.billAmt).toEqual('100');
      expect(curPayment.tipAmt).toEqual('20');
      expect(curPayment.tipPercent).toEqual(20);
    });
  
    it("should return undefined with empty billAmt or tipAmt", function() {
      billAmtInput.value = '';
      const curPaymentEmptyBillAmt = createCurPayment();
  
      tipAmtInput.value = '';
      const curPaymentEmptyTipAmt = createCurPayment();
  
      expect(curPaymentEmptyBillAmt).toBeUndefined();
      expect(curPaymentEmptyTipAmt).toBeUndefined();
    });
  
    it("should return a valid curPayment object with 0 tipAmt", function() {
      tipAmtInput.value = '0';
      const curPaymentZeroTipAmt = createCurPayment();
  
      expect(curPaymentZeroTipAmt).toBeDefined();
      expect(curPaymentZeroTipAmt.billAmt).toEqual('100');
      expect(curPaymentZeroTipAmt.tipAmt).toEqual('0');
      expect(curPaymentZeroTipAmt.tipPercent).toEqual(0);
    });

    it('should create a new payment', function () {
      let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    beforeEach(function () {
        allPayments = {
            payment1: {
                billAmt: '100',
                tipAmt: '20',
            }
        }
    })
  });