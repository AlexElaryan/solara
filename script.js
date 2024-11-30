// contact regex --start--

let phoneInp = document.querySelector('.contact-phone-input');
let phoneReg = /^[0-9\-\+]*$/;

phoneInp.oninput = (e) => {
    if (!phoneReg.test(phoneInp.value)) {
        phoneInp.value = phoneInp.value.slice(0, -1); 
    } 
};

// contact regex --end--