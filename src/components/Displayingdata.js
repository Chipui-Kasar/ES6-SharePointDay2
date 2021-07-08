import React from "react";

function Displayingdata() {
  const employees = [
    { name: "John", age: 50, address: "USA", exp: 5 },
    { name: "Aurora", age: 23, address: "Russia", exp: 7 },
    { name: "Mike", age: 26, address: "Philippine", exp: 2 },
    { name: "Smith", age: 38, address: "USA", exp: 3 },
    { name: "Chotta Bheem", age: 10, address: "India", exp: 1 },
  ];

  const fruits = [
    { name: "Apple", available: 20 },
    { name: "Mango", available: 50 },
    { name: "PineApple", available: 15 },
    { name: "Jackfruit", available: 5 },
  ];

  var totalFruits = fruits
    .map(fruitnumber => fruitnumber.available)
    .reduce((acc, total) => acc + total, 0);

  const mobileBrands = ["Asus", "Apple", "Redmi", "Samsung", "Huawei"];

  return (
    <div>
      <div className="container-fluid">
        <h1 className="mb-5">Fetching the data from array of object</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="text-center">
              <h4 className="text-primary ">Displaying All the Data</h4>
            </div>
            <div className="row text-left">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{employee.name}</td>
                      <td>{employee.age}</td>
                      <td>{employee.address}</td>
                      <td>{employee.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* First Column Ends here */}

          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="text-center">
              <h4 className="text-success ">Filtering the Data</h4>
            </div>
            <div className="row text-left">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Exp</th>
                  </tr>
                </thead>
                <tbody>
                  {employees
                    .filter(specific => specific.address === "USA")
                    .map((filteredAddress, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{filteredAddress.name}</td>
                        <td>{filteredAddress.age}</td>
                        <td>{filteredAddress.address}</td>
                        <td>{filteredAddress.exp}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div className="text-center">
              <h4 className="text-danger ">Using Reduce Method</h4>
            </div>
            <div className="row text-left">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {fruits.map((fruit, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{fruit.name}</td>
                      <td>{fruit.available}</td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan="2">
                      <b>Total No of fruits available</b>
                    </td>
                    <td>
                      <b>{totalFruits}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>Display Array List</h4>

          {mobileBrands.forEach(function (brand, index) {
            console.log(index, brand);
            return (
              <div key={index}>
                <label>{index}</label>
                <p>{brand}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Displayingdata;
