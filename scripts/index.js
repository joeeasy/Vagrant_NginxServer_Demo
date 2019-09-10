/*
====================
ABOUT THIS SOLUTION
====================
Ceasar Cipher Also known as the ​ shift cipher​ , ​ it is a type of encryption technique in which each letter in
the plaintext is replaced by a letter some fixed number of positions down the alphabet.
For example, for a shift number of 3, D would be replaced by A and E would be B. For
further information, visit ​ link​ .
*/

// Application controller
const app = {};


// Shift cipher function declaration
app.ceaserCipher = () => {

//   Str to be encrypted || decrypted
  let  plainText = document.getElementById('cipher-textarea'),
      cipherLabel = document.getElementById('cipherLabel');
  
  let text = '';
  
  let shiftPos = 0;
  
  let result = document.getElementById('js__cipher__content');

  
//   prevent form submitting by default
  let form = document.getElementById('cipherForm');
      form.addEventListener('submit', (e) => e.preventDefault());
  
//   Buttons declarations
  let encryptBtn = document.getElementById('encrypt'),
      decryptBtn = document.getElementById('decrypt');
  
//   Trigger the encryption process once the button is clicked
  encryptBtn.addEventListener('click', (e) => {
    text = plainText.value;
    shiftPos = -5;
    if(text.trim() !== '') {
      encryptStr(text, shiftPos);
      cipherLabel.textContent = '* Cipher';
      cipherLabel.style.color = '#333333';
      plainText.style.borderBottomColor = '#333333';
      form.reset();
      console.log('It is working')
    }
    else {
      cipherLabel.textContent = '* Please type something on the box';
      cipherLabel.style.color = 'red';
      plainText.style.borderBottomColor = 'red';
    }
  });
  
//   Triggers the decryption process once the button is clicked
  decryptBtn.addEventListener('click', (e) => {
//     Text from input
    text = plainText.value;
//     to decrypt shift the cipher 5 steps forward
    shiftPos = 5;
    if(text.trim() !== '') {
      decryptStr(text, shiftPos);
      cipherLabel.textContent = '* Cipher';
      cipherLabel.style.color = '#333333';
      plainText.style.borderBottomColor = '#333333';
      form.reset();
      console.log('It is working')
    }
    else {
      cipherLabel.textContent = '* Please type something on the box';
      cipherLabel.style.color = 'red';
      plainText.style.borderBottomColor = 'red';
    }
  })
  
//   Encryption 
  const encryptStr = (str, shift) =>  encryption(str, shift, 'Encrypted');
  
//   Decrypts string
  
  const decryptStr = (str, shift) => encryption(str, shift, 'Decryted');
  
  
// Generate encryption
  const encryption = (str, shiftAmount, type) => {
    console.log(shiftAmount, "from cipher")
    // Wrap the amount
    if (shiftAmount < 0)
      return encryption(str, (shiftAmount + 26), type);

    // Make an output variable
    let output = '';

    // Go through each character
    for (let i = 0; i < str.length; i ++) {

      // Get the character we'll be appending
      let c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {

        // Get its code
        let code = str.charCodeAt(i);

        // Uppercase letters
        if ((code >= 65) && (code <= 90)) {
          c = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
        }

        // Lowercase letters
        else if ((code >= 97) && (code <= 122)) {
          c = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
        }

      }

      // Append encrypted or decrypt ciphers
      output += c;

    }

    // display chiper on the dom
    return result.textContent = `${type}: "${output}"`;

    
  }
}