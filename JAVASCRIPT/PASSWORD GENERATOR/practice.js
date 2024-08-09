function generatePassword(){
    const numericCount = 4;
    const capitalCount = 2;
    const specialCount = 4;
    const smallCount = 6;

    const numerics = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specials = "!@#$%^&*()_+{}:<>?|[];\',./`~'";
    const smalls = "abcdefghijklmnopqrstuvwxyz";

    let passwordArray = [];

        // Generate random numerics:
        for(i=0;i<numericCount;i++){
            passwordArray.push(numerics[Math.floor(Math.random() * numerics.length)])
        }

        // Generate random capital letters:
        for(i=0;i<capitalCount;i++){
            passwordArray.push(characters[Math.floor(Math.random() * characters.length)])
        }
        // Generate random special characters:
        for(i=0;i<specialCount;i++){
            passwordArray.push(specials[Math.floor(Math.random() * specials.length)])
        }
        for(i=0;i<smallCount;i++){
            passwordArray.push(smalls[Math.floor(Math.random() * smalls.length)])
        }

        // Shuffle the array to randomize the order of characters:
        passwordArray.sort(()=>Math.random() - 0.5);

        // Join the array to form the final password:
        const generatedPassword = passwordArray.join("");

        // Display the password:
        document.getElementById("generatedPassword").value = generatedPassword;
}