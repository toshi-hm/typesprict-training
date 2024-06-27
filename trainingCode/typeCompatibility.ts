type Sometype = {message: string}

function showMessage(obj: Sometype): void {
    console.log(obj.message)
}

showMessage({message: "Hello"})
showMessage(new Error("error"))
