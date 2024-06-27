type StarbucksSize = "short" | "tall" | "grande" | "venti"

function getVolume(size: StarbucksSize): number {
    if (size === "short") {
        return 240
    } else if (size === "tall") {
        return 350
    } else if (size === "grande") {
        return 470
    } else {
        return 590
    }
}
