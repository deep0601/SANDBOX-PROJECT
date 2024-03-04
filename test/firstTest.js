assert = chai.assert;

describe('Testing function which gets days from given month/year', function () {

    it('Test 1: December, 2022 (31 days)', function () {
        assert.equal(getDaysInMonth(11, 2022), 31);
    });
    it('Test 2: Febuary, 2024 (29 days)', function () {
        assert.equal(getDaysInMonth(1, 2024), 29);
    });
    it('Test 3: June, 2026 (30 days)', function () {
        assert.equal(getDaysInMonth(5, 2026), 30);
    });
});