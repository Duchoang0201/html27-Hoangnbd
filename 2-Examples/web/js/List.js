window.onload = function (e) {
  $.get("./header.html", function (data, status){
      $("header").html(data);
  });
}  
function getListUsers() {
  let userList = " https://636b8f56ad62451f9fb53c68.mockapi.io/Users ";
  let data = {
    name: "Hang",
  };
  fetch(userList, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      _renderListUser(data);
     
      // data?.map((user) => addRowJs(user));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postUser() {
  let userList = " https://636b8f56ad62451f9fb53c68.mockapi.io/Users ";
  const data = {
    name: "Manhph",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
  };
  fetch(userList, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}
function updateUser() {
    let userList = " https://636b8f56ad62451f9fb53c68.mockapi.io/Users/12 ";
    const data = {
      name: "Manhph",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
    };
    fetch(userList, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // function deleteUser(id) {
  //   let userList = ` https://636b8f56ad62451f9fb53c68.mockapi.io/Users/${user.id}`;
    
  //   fetch( userList, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // data?.map((user) => addRowJs(user));
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }
  function deleteUserAPI(id) {
    console.log("deleteUserAPI", id);
    fetch("https://636b8f56ad62451f9fb53c68.mockapi.io/Users/${user.id}" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resetTbody()
        getListUsers();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function _renderListUser(listUser) {
    let contentBody = ``;
    listUser.map( (user) => {
      contentBody += `<tr class="">
                  <td scope="row">${user.name}</td>
                  <td>${user.avatar}</td>
                  <td>
                    <a href="./detail.html?id=${user.id}">Go to Detail</a>
                    <button onclick="handeDetail(${user.id})">Detail</button>  
                    <button onclick="handeDelete(${user.id})">Delte</button>  
                  </td>
                </tr>`
    });
    let res = `
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${contentBody}
        </tbody>
      </table>
    `;

    let elm = document.getElementById("results");
    elm.innerHTML = res;
  }
    function handeDelete(userId) {
      console.log("handeDelete", userId);
      fetch("https://636b8f56ad62451f9fb53c68.mockapi.io/Users/" + userId, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getListUsers(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    function handeDetail(userId) {
      console.log('Clicked detail', userId);
      let newUrl = "./detail.html?id=" + userId;
      window.location.href = newUrl
    }