export const toDataURL = (url: string) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        if(blob.size > 1000000) {
            reject("image trop grosse")
           return
        }

        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))

