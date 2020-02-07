// const arr = [
//     { tag: name, regex: /^\d{3}$/i, text: name.value },
//     { tag: email, regex: /^\d{3}$/i, text: email.value },
//     { tag: ccNumber, regex: /^\d{16}$/i, text: ccnumber.value },
//     { tag: zip, regex: /^\d{3}$/i, text: zip.value },
//     { tag: cvv, regex: /^\d{3}$/i, text: cvv.value }
// ];

// const arr = [
//     { title: "name", regex: /^\d{3}$/i, text: name.value }
//     // { title: "email", regex: /^\d{3}$/i, text: email.value },
//     // { title: "ccNumber", regex: /^\d{16}$/i, text: ccnumber.value },
//     // { title: "zip", regex: /^\d{3}$/i, text: zip.value },
//     // { title: cvv, regex: /^\d{3}$/i, text: cvv.value }
// ];

const nameO = { title: name, regex: /^\d{3}$/i, text: name.value };
for (let i = 0; i < nameO.length; i++) {
    console.log(nameO[i]);
}
