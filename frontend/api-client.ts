const BASE_URL = "http://localhost:5000/api";

const registerUser = async (userData: {
  name: string;
  email: string;
  role: string;
}) => {
  console.log("Registering user with data:", userData);
  const response = await fetch(`${BASE_URL}/user/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

const fetchAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/user`);

  return response.json();
};

export { registerUser, fetchAllUsers };
