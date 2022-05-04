// ./tests/twBgPaletteConsole.test.js

import { twBgPaletteConsole } from '../src/index'



test('twBgPaletteConsole component returns a truthy value', async () => {

    expect(twBgPaletteConsole).toBeTruthy()

})



test('twBgPaletteConsole.console component returns an object with a truthy console property', async () => {

    expect(twBgPaletteConsole.console).toBeTruthy()

})



test('twBgPaletteConsole.console.colors component returns an object with a truthy colors property', async () => {

    expect(twBgPaletteConsole.console.colors).toBeTruthy()

})



test('twBgPaletteConsole component returns an object with the standard five default color names', async () => {

    expect(twBgPaletteConsole.console.colors['default']).toBeTruthy()
    expect(twBgPaletteConsole.console.colors['error']).toBeTruthy()
    expect(twBgPaletteConsole.console.colors['primary']).toBeTruthy()
    expect(twBgPaletteConsole.console.colors['secondary']).toBeTruthy()
    expect(twBgPaletteConsole.console.colors['success']).toBeTruthy()

})
