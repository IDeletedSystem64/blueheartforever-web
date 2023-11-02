export type MemoryBox = HTMLDivElement;

export interface MemoryInfo {
    name: string
    memory: string
}

export class MemoryPage {
    readonly memories: MemoryInfo[];
    readonly memoryBox: MemoryBox;
    protected currentMemoryIndex: number;

    constructor(memories: MemoryInfo[], memoryBox: MemoryBox) {
        this.memories = memories;
        this.memoryBox = memoryBox;
        this.currentMemoryIndex = 0;
    }

    goToNextMemory() {
        this.currentMemoryIndex = (this.currentMemoryIndex + 1) % this.memories.length;
        this.renderMemorybox();
    }

    goToPreviousMemory() {
        this.currentMemoryIndex = (this.currentMemoryIndex - 1) % this.memories.length;
        this.renderMemorybox();
    }

    renderMemorybox() {
        const memoryInfo = this.memories[this.currentMemoryIndex];
        if (memoryInfo) {
            this.memoryBox.innerHTML = `
            <h2>${memoryInfo.name}</h2>
            <p>${memoryInfo.memory}</p>
            `;
        }
    }
}
