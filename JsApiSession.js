const filepath = "https://610b207652d56400176b0111.mockapi.io/api/work/User";
DisplayData(filepath);
async function DisplayData(file) {
  let x = await fetch(file);
  let mytext = await x.text();
  sessionStorage.setItem("virtualjs", mytext);
  await SetParameter();
  await operation("A", 0);
  await operation("E", 49);
  await operation("D", 49);
}

function SetParameter() {
  debugger;
  const dis_data = JSON.parse(sessionStorage.getItem("virtualjs"));
  let column = Object.keys(dis_data["0"]).length;
  let row = Object.keys(dis_data).length;
  //let headerdata = Object.keys(virtual_data["0"]);
  let all_value = retval(dis_data);
  console.log(all_value);
  createtable(column, row, all_value);
}
// to get all value from object
function retval(obj) {
  debugger;
  let val = [];
  for (let x in obj) {
    val.push(Object.values(obj[x]));
  }
  return val;
}
//create dynamically table.

function createtable(collen, rowlen, header_data) {
  debugger;
  let body1 = document.getElementById("dvtable");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  //create row loop
  for (let x = 0; x < rowlen; x++) {
    let row = document.createElement("tr");
    //create cell loop
    for (let y = 0; y < collen; y++) {
      let cell = document.createElement("td");
      let text = document.createTextNode(header_data[x][y]);
      cell.appendChild(text);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  body1.appendChild(table);
}

// create function operation add ,delete ,edit

function operation(op, id) {
  debugger;
  const data = JSON.parse(sessionStorage.getItem("virtualjs"));
  if (op == "A") {
    let Add_key = Object.keys(data).length - 1 + 1;
    Object.defineProperty(data, Add_key, {
      value: {
        fname: "kushi",
        lname: "patel",
        age: 35,
        empid: "empid" + " " + (Add_key + 1),
        id: Add_key + 1,
      },
    });
  } else if (op == "E") {
    let editkey = id - 1;
    Object.defineProperty(data, editkey, {
      value: {
        fname: "ankit",
        lname: "patel",
        age: 35,
        empid: "empid" + " " + id,
        id: id.toString(),
      },
    });
  } else if (op == "D") {
    let del_key = id - 1;
    delete data[del_key];
  }
  sessionStorage.setItem("virtualjs", JSON.stringify(data));
  const trydata = sessionStorage.getItem("virtualjs");
  console.log(JSON.parse(trydata));
  SetParameter();
}
