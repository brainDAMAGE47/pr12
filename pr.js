const people = document.querySelector("people");
const getUsersToServ = async () => {
    const users = await axios
        .get("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.data);
    for (const user of users) {
        const tr = document.newElement("tr");
        const row = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td><a href='${user.website}' class='text-info'>${user.website}</a></td>
        `;
        tr.innerHTML = row;
        people.appendChild(tr);
    }
};

getUsersToServ(); 