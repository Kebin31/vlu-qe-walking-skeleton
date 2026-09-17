// auth.test.js
const login = require('./login');

describe('Kiểm thử hàm login()', () => {
    
    test('Trả về true khi đúng tài khoản (admin) và mật khẩu (123)', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Trả về false khi sai mật khẩu', () => {
        expect(login('admin', 'wrong_password')).toBe(false);
    });

    test('Trả về false khi sai tài khoản', () => {
        expect(login('wrong_user', '123')).toBe(false);
    });

    test('Trả về false khi cả tài khoản và mật khẩu đều sai', () => {
        expect(login('hacker', 'password')).toBe(false);
    });

    test('Trả về false khi bỏ trống tài khoản hoặc mật khẩu', () => {
        expect(login('', '')).toBe(false);
        expect(login('admin', '')).toBe(false);
        expect(login('', '123')).toBe(false);
    });
});