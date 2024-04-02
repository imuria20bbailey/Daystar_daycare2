// import {babyDummyData} from "./js/babiesdata.js"; // Corrected import path

// const babyList = document.getElementById('babies-list');

     
//     babyDummyData.babies.forEach(baby =>{
//            const babyDataLi = document.createElement('tbody');
//             babyDataLi.innerHTML = `
//             <h5>B.Name: ${baby.name}</h5>
//             <p>Gender: ${baby.gender}</p>
//             <p>Age: ${baby.age}</p>
//             <p>Location: ${baby.location}</p>
//             <p>Person who brought the baby: ${baby.personbroughtBy}</p>
//             <p>Time of arrival: ${baby.timeofArrival}</p>
//             <p>Parents Names: ${baby.parentsName}</p>
//             <p>Fees in Ugx: ${baby.feesInUgx}</p>
//             <p>Period of stay: ${baby.periodOfStay}</p>
//             <p>Baby Number: ${baby.babyNumber}</p>
//             `;
//             // Append baby data to the babyList
//             babyList.appendChild(babyDataLi);
//         });
    
const userForm = document.getElementById('userForm');

    // Function to handle form submission
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;
        const location = document.getElementById('location').value;
        const nameOfPerson = document.getElementById('nameOfPerson ').value;
        const timeOfArrival = document.getElementById('timeOfArrival').value;
        const parentsName = document.getElementById('parentsName').value;
        const fees = document.getElementById('fees').value;
        const periodOfStay = document.getElementById('periodOfStay').value;
        const babyNumber = document.getElementById('babyNumber').value; 

        // Create user object
        const newUser = {
            name: name,
            gender: gender,
            age: age,
            location:location,
            nameOfPerson: nameOfPerson,
            timeOfArrival:timeOfArrival,
            parentsName: parentsName,
            fees:fees,
            periodOfStay:periodOfStay,
            babyNumber:babyNumber
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Add new user to the list
        users.push(newUser);
        console.log(newUser);

        // Store updated users list in localStorage
        localStorage.setItem('users', JSON.stringify(users));

        
        // Redirect to display page
        //window.location.href = "baby-registration.html";
    });


    
 // Function to delete user entry
    function deleteUser(index) {
        // Retrieve users data from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Remove user entry from localStorage
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
// Remove user entry from the page
        const userContainer = document.getElementById('userContainer');
        userContainer.removeChild(userContainer.childNodes[index]);
// Update indices of user entries after deletion
        const userInfos = document.querySelectorAll('.user-info');
        userInfos.forEach((userInfo, i) => {
            userInfo.querySelector('button.delete').setAttribute('onclick', `deleteUser(${i})`);
            userInfo.querySelector('button.edit').setAttribute('onclick', `editUser(${i})`);
        });


}

    // Function to edit user entry
    function editUser(index) {
        console.log("Edit user with index", index);
    }


    // Retrieve users data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userContainer = document.getElementById('userContainer');


    // Display user information
    users.forEach((user, index) => {
        const userInfo = document.createElement('tbody');
        userInfo.userContainer.add('user-info');
        userInfo.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Location:</strong> ${user.location}</p>
            <p><strong>Name of Person:</strong> ${user.nameOfPerson}</p>
            <p><strong>Time of Arrival:</strong> ${user.timeOfArrival}</p>
            <p><strong>Parents Name:</strong> ${user.parentsName}</p>
            <p><strong>Fees:</strong> ${user.fees}</p>
            <p><strong>Period of stay:</strong> ${user.periodOfStay}</p>
            <p><strong>Baby name:</strong> ${user.babyNumber}</p>
            <button class="edit" onclick="editUser(${index})">Edit</button>
            <button class="delete" onclick="deleteUser(${index})">Delete</button>
        `;
        userContainer.appendChild(userInfo);
    });
























