//to call api and get data
/* fetch("https://610b207652d56400176b0111.mockapi.io/api/work/User")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
//to post data on api
fetch("https://610b207652d56400176b0111.mockapi.io/api/work/User", {
  method: "POST",
  body: JSON.stringify({
    fname: "kushi",
    lname: "patel",
    age: 35,
    empid: "empid 51",
    id: "51",
  }),
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
 */
//to edit data

fetch("https://610b207652d56400176b0111.mockapi.io/api/work/User/5", {
  method: "PUT",
  body: JSON.stringify({
    fname: "ANKIT",
    lname: "patel",
    age: 35,
    empid: "empid 5",
    id: "50",
  }),
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//to delete data

fetch("https://610b207652d56400176b0111.mockapi.io/api/work/User/49", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
