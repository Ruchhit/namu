import sum from "../sum";
test('the sum function must return sum of two number', () => {
    const result = sum(3,4);
    expect(result).toBe(7);
});