
let testsAdd2 = [
    function test_add2_ok() {
        num = 25;
        assertEqual(add2(num), 27);
        assertGreater(add2(num), num);
    },
    function test_add2_not_string() {
        assertNotEqual(add2(25), 42);
    },
]

let testsMul5 = [
    function test_mul5_ok() {
        num = 7;
        assertGreater(mul5(num), 34);
        assertGreaterEqual(mul5(num), 35);
        assertEqual(mul5(num), 35);
    },
    function test_mul5_not_40() {
        num = 7;
        assertNotEqual(mul5(num), 40);
    },
]

let testsIsMod10 = [
    function test_isMod10_ok() {
        num = 40;
        assertEqual(isMod10(num), true);
        assertTrue(isMod10(num));
    },
]

var myScriptTests = [
    ...testsAdd2,
    ...testsMul5,
    ...testsIsMod10,
]
