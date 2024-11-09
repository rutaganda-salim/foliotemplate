export function titleConverter(text: string) {
    const title : string[] = []
    text.split(" ").forEach(word => {
        title.push(word.charAt(0).toLowerCase() + word.slice(1))
    })

    return title.join(" ")
}