const Nota = require('../src/models/nota');

describe('mediaCA', () => {
    it('retorna "SS - Superior" para nota entre 9.0 e 10.0', () => {
      expect(mediaCA(9.5)).toBe('SS - Superior');
      expect(mediaCA(10)).toBe('SS - Superior');
    });
  
    it('retorna "MS - Médio Superior" para nota entre 7.0 e 8.9', () => {
      expect(mediaCA(8)).toBe('MS - Médio Superior');
      expect(mediaCA(7.5)).toBe('MS - Médio Superior');
    });
  
    it('retorna "MM - Médio" para nota entre 5.0 e 6.9', () => {
      expect(mediaCA(6)).toBe('MM - Médio');
      expect(mediaCA(5.5)).toBe('MM - Médio');
    });
  
    it('retorna "MI - Médio Inferior" para nota entre 3.0 e 4.9', () => {
      expect(mediaCA(4)).toBe('MI - Médio Inferior');
      expect(mediaCA(3.5)).toBe('MI - Médio Inferior');
    });
  
})

