import { ref } from "vue";
import { routes as sections } from '../router'


const menuVisible = ref(false);
const currentSection = ref(0);

function openMenu(){menuVisible.value = true}
function closeMenu(){menuVisible.value = false}

function changeSection(id){currentSection.value = id; closeMenu()}

export {
    sections,
    openMenu,
    closeMenu,
    changeSection,
    menuVisible,
    currentSection
}

