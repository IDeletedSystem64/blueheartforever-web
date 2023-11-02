import { MemoryPage, MemoryInfo, } from "./types.js";

{
    async function getMemories(): Promise<MemoryInfo[]> {
        const response = await fetch("./conf/memories.json");
        const memories = await response.json() as MemoryInfo[];

        return memories;
    }

    function setupButtons(memoryPage: MemoryPage) {
        const nextButton = document.getElementById("next") as HTMLButtonElement;
        const prevButton = document.getElementById("prev") as HTMLButtonElement;

        nextButton.addEventListener("click", () => memoryPage.goToNextMemory())
        prevButton.addEventListener("click", () => memoryPage.goToPreviousMemory());
    }


    async function loadPage() {
        const memories = await getMemories();
        const memoryBox = document.getElementById("memoriesBox") as HTMLDivElement;
        const memoryPage = new MemoryPage(memories, memoryBox);

        setupButtons(memoryPage);
        memoryPage.renderMemorybox();
    }

    loadPage();

}
