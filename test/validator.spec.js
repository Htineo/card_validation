import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "6011111111111117"', () => {
      expect(validator.isValid("6011111111111117")).toBe(true);
    });

    it('debería retornar true para "6011000990139424"', () => {
      expect(validator.isValid('6011000990139424')).toBe(true);
    });

    it('debería retornar false para "5555555555554444"', () => {
      expect(validator.isValid('5555555555554444')).toBe(true);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });
});