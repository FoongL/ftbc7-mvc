const signUpButton = document.getElementById("signUpSubmit");

signUpButton.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("I have been clicked");

  const name = document.getElementById("signUpName").value;
  const password = document.getElementById("signUpPassword").value;

  if (!name || !password) {
    alert("fill our the dang form");
    return;
  }

  const body = { name, password };
  try{
  const userToken = await axios.post("/users/signUp", body);

  console.log(userToken);

  localStorage.setItem("token", userToken.data.token);
  } catch(err){

    console.log(err)
  }
});

const tokenTester = document.getElementById("tokenTester");

tokenTester.addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return alert("you do not have a token");
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try{
  const response = await axios.post("/users/test", {}, config);
  alert(response.data);
  } catch(err){
    console.log(err)
    return alert('MY TOKEN DOES NOT WORK :(')
  }
});

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
});

const tokenCheck = document.getElementById("tokenCheck");

tokenCheck.addEventListener("click", () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return alert("you do not have a token");
      }
      return alert(`You token is: ${token}`)
});
