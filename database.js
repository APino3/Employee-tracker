import mysql from "mysql2/promise";

// create the connection to database
async function getConnection() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employee_tracker",
    password: "root123",
  });
}

export async function getEmployees() {
  const connection = await getConnection();
  // simple query
  const [rows, fields] = await connection.execute("SELECT * FROM `employee`");
  return rows;
}

export async function getRoles() {
  const connection = await getConnection();
  // simple query
  const [rows, fields] = await connection.execute("SELECT * FROM `role`");
  return rows;
}

export async function getDepartments() {
  const connection = await getConnection();
  // simple query
  const [rows, fields] = await connection.execute("SELECT * FROM `department`");
  return rows;
}
