const { validateInput, getUserData } = require('./index')
const httpMocks = require('node-mocks-http');

//Mock middleware
jest.mock('./authMiddleware', () => (req, res, next) => {
    req.user = { id: 1, name: 'sajid', email: 'sajid@gmail.com' };
    next();
})

describe('validateInput Middleware', () => {
    it('should return 400 if email id is invalid', () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/user',
            body: {
                email: 'invalid-email',
                password: '1234',
            },
        });
        const res = httpMocks.createResponse();
        const next = jest.fn();

        validateInput(req, res, next)
        expect(res.statusCode).toBe(400);
        expect(res._getData()).toBe("Invalid input file");
        expect(next).not.toHaveBeenCalled();
    })
    it('should return 400 if password is missing', () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/user',
            body: {
                'email': 'validemail@gmail.com',
                password: '',
            }
        })
        const res = httpMocks.createResponse();
        const next = jest.fn();

        validateInput(req, res, next);
        expect(res.statusCode).toBe(400)
        expect(res._getData()).toBe('Invalid input file');
        expect(next).not.toHaveBeenCalled()
    })
    it('should call next if data is valid', () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/user',
            body: {
                'email': 'validemail@gmail.com',
                password: '123',
            }
        })
        const res = httpMocks.createResponse();
        const next = jest.fn();

        validateInput(req, res, next);
        expect(next).toHaveBeenCalled()
    })
});

describe('getUserData function', () => {
    it('shouldr return correct user data', () => {
        const user = { id: 1, name: 'sajid', email: 'sajid@gmail.com' };

        const userData = getUserData(user);
        expect(userData).toEqual({
            id: user.id,
            name: user.name,
            email: user.email
        })
    })
})