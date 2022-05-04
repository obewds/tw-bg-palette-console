// ./tests/TwBgPaletteConsole.test.js

import { mount } from '@vue/test-utils'
import TwBgPaletteConsole from '../src/components/TwBgPaletteConsole.vue'



test('TwBgPaletteConsole.vue component mounts successfully', async () => {

    expect(TwBgPaletteConsole).toBeTruthy()

})



test('TwBgPaletteConsole.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(TwBgPaletteConsole, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('TwBgPaletteConsole.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(TwBgPaletteConsole, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
