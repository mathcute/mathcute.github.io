function processText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === 'encrypt') {
        result = encrypt(inputText);
    } else {
        result = decrypt(inputText);
    }

    document.getElementById('outputText').value = result;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
