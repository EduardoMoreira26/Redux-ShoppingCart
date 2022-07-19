import {
    hideMessage,
    showMessage
} from "./index";

describe('Layout actions', () => {
    describe('Actions Types', () => {
        test('Deve retornar a action type SHOW_MESSAGE', () => {
            expect(showMessage.type).toBe('SHOW_MESSAGE');
        });
        test('Deve retornar a action type HIDE_MESSAGE', () => {
            expect(hideMessage.type).toBe('HIDE_MESSAGE');
        });
    });

    describe('Actions Creators', () => {
        test('Deve retornar a action creator showMessage', () => {
            expect(showMessage()).toEqual({
                type: showMessage.type
            });
        });
        test('Deve retornar a action creator hideMessage', () => {
            expect(hideMessage()).toEqual({
                type: hideMessage.type
            });
        });
    })
});