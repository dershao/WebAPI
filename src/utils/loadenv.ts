function loadenv(): void {
    if (process.env.NODE_ENV !== "production") {
        require("dotenv").load();
    }
}

export = {loadenv: loadenv}
