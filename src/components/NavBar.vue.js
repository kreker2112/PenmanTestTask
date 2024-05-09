import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const navButtons = ref([
    { id: uuidv4(), name: 'Політ дрона', link: '/drone' },
    { id: uuidv4(), name: 'Про мене', link: '/about' }
]);
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("navbar"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ onClick: $event => {
            __VLS_ctx.$router.push('/');
            // @ts-ignore
            [$router,];
        },
        class: ("navbar_title"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("navbar__btns"), });
    for (const [button] of __VLS_getVForSourceType((__VLS_ctx.navButtons))) {
        const __VLS_0 = {}.ButtonComponent;
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {}, }, buttonStyle: ("nav-button"), key: ((button.id)), }));
        ({}.ButtonComponent);
        ({}.ButtonComponent);
        __VLS_components.ButtonComponent;
        __VLS_components.ButtonComponent;
        // @ts-ignore
        [ButtonComponent, ButtonComponent,];
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, buttonStyle: ("nav-button"), key: ((button.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {}, }, buttonStyle: ("nav-button"), key: ((button.id)), }));
        let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_3['click'], {}.onClick) };
        __VLS_5 = { click: $event => {
                __VLS_ctx.$router.push(button.link);
                // @ts-ignore
                [$router, navButtons,];
            } };
        (button.name);
        (__VLS_4.slots).default;
        const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_3;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["navbar"];
        __VLS_styleScopedClasses["navbar_title"];
        __VLS_styleScopedClasses["navbar__btns"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            navButtons: navButtons,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
