function dropHandler(event) {
    console.log('File(s) dropped');
    event.preventDefault();

    if (event.dataTransfer.items) {
        [...event.dataTransfer.items].forEach((item, i) => {
            if (item.kind === 'file') {
                const file = item.getAsFile();
                console.log(`file[${i}] name = ${file.name}`);
                console.log(file);
            }
        })
    } else {
        [...event.dataTransfer.files].forEach((item, i) => {
            console.log(`file[${i}] name = ${file.name}`);
        })
    }
}

function dragOverHandler(event) {
    event.preventDefault();
}