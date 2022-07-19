import {
    Types,
    Creators
} from "./index";

describe('Layout actions', () => {
    describe('Actions Types', () => {
        test('Deve retornar a action type SHOW_MESSAGE', () => {
            expect(Types.SHOW_MESSAGE).toBe('SHOW_MESSAGE');
        });
        test('Deve retornar a action type HIDE_MESSAGE', () => {
            expect(Types.HIDE_MESSAGE).toBe('HIDE_MESSAGE');
        });
    });

    describe('Actions Creators', () => {
        test('Deve retornar a action creator showMessage', () => {
            expect(Creators.showMessage()).toEqual({
                type: Types.SHOW_MESSAGE
            });
        });
        test('Deve retornar a action creator hideMessage', () => {
            expect(Creators.hideMessage()).toEqual({
                type: Types.HIDE_MESSAGE
            });
        });
    })
});