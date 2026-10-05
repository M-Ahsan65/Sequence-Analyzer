function analyzeDNA() {

    let sequence = document.getElementById("dnaSequence").value;

    // Remove spaces and convert to uppercase
    sequence = sequence.replace(/\s/g, "").toUpperCase();

    // Check if sequence is empty
    if (sequence.length === 0) {
        document.getElementById("message").textContent =
            "Please enter a DNA sequence.";

        return;
    }

    // Check for invalid DNA characters
    if (!/^[ATGC]+$/.test(sequence)) {

        document.getElementById("message").textContent =
            "Invalid DNA sequence! Use only A, T, G and C.";

        return;
    }

    // Count nucleotides
    let A = (sequence.match(/A/g) || []).length;
    let T = (sequence.match(/T/g) || []).length;
    let G = (sequence.match(/G/g) || []).length;
    let C = (sequence.match(/C/g) || []).length;

    // Calculate length
    let length = sequence.length;

    // Calculate percentages
    let gcContent = ((G + C) / length) * 100;
    let atContent = ((A + T) / length) * 100;

    // Display results
    document.getElementById("length").textContent = length;

    document.getElementById("adenine").textContent = A;

    document.getElementById("thymine").textContent = T;

    document.getElementById("guanine").textContent = G;

    document.getElementById("cytosine").textContent = C;

    document.getElementById("gcContent").textContent =
        gcContent.toFixed(2) + "%";

    document.getElementById("atContent").textContent =
        atContent.toFixed(2) + "%";

    document.getElementById("message").textContent =
        "DNA sequence analyzed successfully!";
}