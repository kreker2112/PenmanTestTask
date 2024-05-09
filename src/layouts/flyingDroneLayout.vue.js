import { ref, computed, watchEffect } from 'vue';
import Navbar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const backgroundColor = ref('#f0f0f0');
const showNavbar = ref(true);
const showFooter = ref(true);
const navbar = ref(null);
const footer = ref(null);
watchEffect(() => {
    document.body.style.backgroundColor = backgroundColor.value;
});
const flightAreaHeight = computed(() => {
    let height = 100;
    if (showNavbar.value)
        height -= 0;
    if (showFooter.value)
        height -= 0;
    return `height: ${height}vh;`;
});
window.addEventListener('mousemove', (e) => {
    showNavbar.value = (e.clientY <= 80);
    showFooter.value = (window.innerHeight - e.clientY <= 80);
    if (navbar.value) {
        if (showNavbar.value) {
            navbar.value.classList.remove('hidden');
        }
        else {
            navbar.value.classList.add('hidden');
        }
    }
    if (footer.value) {
        if (showFooter.value) {
            footer.value.classList.remove('hidden');
        }
        else {
            footer.value.classList.add('hidden');
        }
    }
});
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
    const __VLS_0 = {}.transition;
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("fade"), }));
    ({}.transition);
    ({}.transition);
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    const __VLS_2 = __VLS_1({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("fade"), }));
    if (__VLS_ctx.showNavbar) {
        const __VLS_5 = {}.Navbar;
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
        ({}.Navbar);
        __VLS_components.Navbar;
        // @ts-ignore
        [Navbar,];
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({}));
        // @ts-ignore
        [showNavbar,];
        const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("flying-drone-layout"), style: ((__VLS_ctx.flightAreaHeight)), });
    var __VLS_10 = {};
    // @ts-ignore
    [flightAreaHeight,];
    const __VLS_11 = {}.transition;
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ name: ("fade"), }));
    ({}.transition);
    ({}.transition);
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    const __VLS_13 = __VLS_12({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ name: ("fade"), }));
    if (__VLS_ctx.showFooter) {
        const __VLS_16 = {}.FooterComponent;
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
        ({}.FooterComponent);
        __VLS_components.FooterComponent;
        // @ts-ignore
        [FooterComponent,];
        const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({}));
        // @ts-ignore
        [showFooter,];
        const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    }
    (__VLS_15.slots).default;
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["flying-drone-layout"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            Navbar: Navbar,
            FooterComponent: FooterComponent,
            showNavbar: showNavbar,
            showFooter: showFooter,
            flightAreaHeight: flightAreaHeight,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
