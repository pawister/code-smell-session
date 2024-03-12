const total = require('../total')
test('total of empty string should be 0', () => {
    expect(total('')).toBe(0);
})
test('toal of 1 and 2 should be 3', () => {
    expect(total('1,2')).toBe(3);
});
test('total of 1 and 1001 should be 1', () => {
    expect(total('1, 1001')).toBe(1);
});
test('total of a and b shoult be ?', () => {
    expect(total('a, b')).toBe(0);
});