import reducer from './index';

describe('Layout reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            showMessage: false,
        });
    });

    test('should return the state with showMessage true', () => {
        expect(reducer(undefined, {
            type: 'SHOW_MESSAGE',
        })).toEqual({
            showMessage: true,
        });
    });

    test('should return the state with showMessage false', () => {
        expect(reducer({ showMessage: true }, {
            type: 'HIDE_MESSAGE',
        })).toEqual({
            showMessage: false,
        });
    })
});