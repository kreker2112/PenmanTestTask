import { defineEmits } from 'vue';
import { ref, reactive, onUnmounted } from 'vue';
import flightData from '../data/flightData.json';
import drone from '@/assets/icons/drone.svg';
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dronePosition = reactive({ x: 50, y: 50 });
const running = ref(false);
let intervalId;
const emits = defineEmits(['update:running']);
const startAnimation = () => {
    running.value = true;
    emits('update:running', true);
    let index = 0;
    const steps = flightData.length;
    const totalTime = 20000;
    const stepTime = totalTime / steps;
    intervalId = window.setInterval(() => {
        if (index < steps) {
            const entry = flightData[index];
            const angle = parseFloat(entry.direction) * (Math.PI / 180);
            const speed = parseFloat(entry.speed) / 500;
            let newX = dronePosition.x + speed * Math.cos(angle);
            let newY = dronePosition.y - speed * Math.sin(angle);
            dronePosition.x = Math.min(100 - 1.5, Math.max(1.5, newX));
            dronePosition.y = Math.min(100 - 1.5, Math.max(1.5, newY));
            index += 1;
        }
        else {
            stopAnimation();
        }
    }, stepTime);
};
const stopAnimation = () => {
    running.value = false;
    emits('update:running', false);
    clearInterval(intervalId);
    dronePosition.x = 50;
    dronePosition.y = 50;
};
onUnmounted(() => {
    clearInterval(intervalId);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ class: ("flight-area"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ class: ("drone"), src: ((__VLS_ctx.drone)), style: (({ top: __VLS_ctx.dronePosition.y + 'vh', left: __VLS_ctx.dronePosition.x + 'vw' })), });
    // @ts-ignore
    [drone, dronePosition, dronePosition,];
    if (!__VLS_ctx.running) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ onClick: (__VLS_ctx.startAnimation),
        });
        // @ts-ignore
        [running, startAnimation,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ onClick: (__VLS_ctx.stopAnimation),
        });
        // @ts-ignore
        [stopAnimation,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["flight-area"];
        __VLS_styleScopedClasses["drone"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            drone: drone,
            dronePosition: dronePosition,
            running: running,
            startAnimation: startAnimation,
            stopAnimation: stopAnimation,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
