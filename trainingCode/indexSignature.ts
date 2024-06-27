interface CoreLoggerOption {
    token: string
    project: string
    dataset: string
    data: {[key: string]: string}
    flush?: boolean
    callback?: () => void
}

interface Sample {
    data: {[key: string]: string}
}

const opt: Sample = {
    data: {
        hoge: "hoge",
        fuga: "fuga",
        piyo: "piyo"
    }
}
