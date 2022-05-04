<script setup lang="ts">

    type TwBgPaletteConsoleProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwBgPaletteConsoleProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwBgPaletteConsole</slot>
        </template>
    </div>

</template>
