export function formatPrice(cents){
    return (cents / 100).toLocaleString("en-PH", {
        style: "currency",
        currency: "Php"
    })
}

export function rando(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randAcctNo(){
    return Math.random().toString().substr(2, 9);
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
