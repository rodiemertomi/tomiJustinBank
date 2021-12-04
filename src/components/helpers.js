export function formatPrice(cents){
    return (cents / 100).toLocaleString("ph-PHP", {
        style: "currency",
        currency: "Php"
    })
}

export function rando(arr){
    return arr[Math.floor(Math.random() * arr.lengt)];
}

export function slugify(text){
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
}
