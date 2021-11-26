function cleanUpIndex() {
    elements = document.querySelectorAll('.contact');

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
};

function createSingleIndex(contact) {

    let main = document.querySelectorAll('.main');

    let createA = document.createElement('a');
    let createDiv = document.createElement('div');
    let createP = document.createElement('p')

    createP.append(contact.name);
    createDiv.appendChild(createP);
    createDiv.classList.add("contact");

    createA.appendChild(createDiv);
    createA.href = "page3.html";

    main[0].appendChild(createA);
};

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
];

function renderIndex(contact) {

    let main = document.querySelectorAll('.main');
       
    for (let i = 0; i < contact.length; i++) {
        let createA = document.createElement('a');
        let createDiv = document.createElement('div');
        let createP = document.createElement('p');

        createP.append(contact[i].name);
        createDiv.appendChild(createP);
        createDiv.classList.add("contact");

        createA.appendChild(createDiv);
        createA.href = "page3.html";

        main[0].appendChild(createA);
    }
};



function cleanUpView() {
    let contactinfo = document.querySelectorAll('.contactinfo');
    contactinfo[0].remove();    
}

function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    
    let divInfo = document.createElement('div');
    let divName = document.createElement('div');
    let createImg = document.createElement('img');
    let divEmail = document.createElement('div');
    let divPhone = document.createElement('div');
    let divAddress = document.createElement('div');
    let divButtons = document.createElement('div');
    let buttonEdit = document.createElement('button')
    let buttonClose = document.createElement('button')

    createImg.src = './img/profile.jpg';
    createImg.classList.add('profilepic');
    createImg.alt = 'Profile Picture';

    divName.append(contact.name);
    divName.classList.add('contactname');

    divInfo.classList.add('contactinfo');

    divName.appendChild(createImg);
    divInfo.appendChild(divName);
    main.appendChild(divInfo);

    divEmail.append('email: ', contact.email);
    divEmail.classList.add('contactemail');

    divInfo.appendChild(divEmail);

    divPhone.append('cell: ', contact.phone);
    divPhone.classList.add('contactphone');

    divInfo.appendChild(divPhone);

    divAddress.append('address: ', contact.address);
    divAddress.classList.add('contactaddress');

    divInfo.appendChild(divAddress);

    buttonEdit.classList.add('button');
    buttonEdit.classList.add('edit');
    buttonEdit.value = 'Edit';
    buttonEdit.append('Edit');

    buttonClose.classList.add('button');
    buttonClose.classList.add('close');
    buttonClose.value = 'Close';
    buttonClose.append('Close');

    divButtons.classList.add('buttons');
    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonClose);

    divInfo.appendChild(divButtons);

}




function cleanUpCreate() {
    let contactedit = document.querySelectorAll(".contactedit")

    contactedit[0].remove()
}

function renderCreate(contact) {
    let main = document.querySelectorAll(".main")

    let contactEdit = document.createElement("div");
    contactEdit.classList.add("contactedit")

    let contactImg = document.createElement("div");
    contactImg.classList.add("contactimg")

    let profilePic = document.createElement("img");
    profilePic.classList.add("profilepic");
    profilePic.src = "./img/profile.jpg";
    profilePic.alt = "Profile picture";
    contactImg.appendChild(profilePic);

    let form = document.createElement("form");

    let inputContainer1 = document.createElement("div");
    inputContainer1.classList.add("inputcontainer");
    form.appendChild(inputContainer1)

    let contactName = document.createElement("input")
    contactName.type = "text";
    contactName.id = "contactname";
    contactName.name = "contactname";
    contactName.placeholder = "Contact Name";
    contactName.value = contact.name;
    inputContainer1.appendChild(contactName);

    let extraNameField = document.createElement("button")
    extraNameField.classList.add("extrafield");
    extraNameField.id = "extranamefield";
    extraNameField.name = "extranamefield";
    extraNameField.append("+");
    inputContainer1.appendChild(extraNameField);

    let inputContainer2 = document.createElement("div");
    inputContainer2.classList.add("inputcontainer");
    form.appendChild(inputContainer2);

    let contactPhone = document.createElement("input");
    contactPhone.type = "tel";
    contactPhone.id = "contactphone";
    contactPhone.name = "contactphone";
    contactPhone.placeholder ="Contact Phone";
    contactPhone.value = contact.phone;
    inputContainer2.appendChild(contactPhone);

    let extraPhoneField = document.createElement("button")
    extraPhoneField.classList.add("extrafield");
    extraPhoneField.id = "extraphonefield";
    extraPhoneField.name = "extraphonefield";
    extraPhoneField.append("+");
    inputContainer2.appendChild(extraPhoneField);


    let inputContainer3 = document.createElement("div");
    inputContainer3.classList.add("inputcontainer");
    form.appendChild(inputContainer3);

    let contactAddress = document.createElement("input");
    contactAddress.type = "text";
    contactAddress.id = "contactaddress";
    contactAddress.name = "contactaddress";
    contactAddress.placeholder = "Contact Address";
    contactAddress.value = contact.address;
    inputContainer3.appendChild(contactAddress);

    let extraAddressField = document.createElement("button");
    extraAddressField.classList.add("extrafield");
    extraAddressField.id = "extraaddressfield";
    extraAddressField.name = "extraaddressfield";
    extraAddressField.append("+");
    inputContainer3.appendChild(extraAddressField);

    let inputContainer4 = document.createElement("div");
    inputContainer4.classList.add("inputcontainer");
    form.appendChild(inputContainer4);

    let contactEmail = document.createElement("input")
    contactEmail.type = "email";
    contactEmail.id = "contactemail";
    contactEmail.name = "contactemail";
    contactEmail.placeholder = "Contact Email";
    contactEmail.value = contact.email;
    inputContainer4.appendChild(contactEmail);

    let extrafield4 = document.createElement("button");
    extrafield4.classList.add("extrafield");
    extrafield4.id = "extraemailfield";
    extrafield4.name = "extraemailfield";
    extrafield4.append("+");
    inputContainer4.appendChild(extrafield4);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    form.appendChild(buttons);

    let buttonSave = document.createElement("button");
    buttonSave.classList.add("button");
    buttonSave.classList.add("save");
    buttonSave.type = "submit";
    buttonSave.id = "savecontact";
    buttonSave.name = "savecontact";
    buttonSave.append("Save Contact");
    buttons.appendChild(buttonSave);

    let buttonCancel = document.createElement("button");
    buttonCancel.type = "reset";
    buttonCancel.classList.add("button");
    buttonCancel.classList.add("save");
    buttonCancel.id = "cancel";
    buttonCancel.name = "cancel"
    buttonCancel.value = "Close";
    buttonCancel.append("Cancel");
    buttons.appendChild(buttonCancel);

    contactEdit.appendChild(contactImg);
    contactEdit.appendChild(form);

    main[0].appendChild(contactEdit);
}