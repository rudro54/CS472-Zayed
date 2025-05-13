function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = username === "user" && password === "password";
      if (isValid) {
        resolve({ token: "12345", message: "Login successful!" });
      } else {
        reject({ error: "Invalid credentials", statusCode: 401 });
      }
    }, 1000);
  });
}

function fetchUserProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "12345") {
        resolve({ name: "John Doe", email: "john@example.com" });
      } else {
        reject({ error: "Invalid token", statusCode: 403 });
      }
    }, 1000);
  });
}


async function  main(user, password){

try{
  
  let res =  await loginUser(user,password)
   console.log(res.message);   
 let profile  = await fetchUserProfile(res.token)
 console.log(`Profile Name - ${profile.name}, Email - ${profile.email}`);
}catch(e){
 console.log(e)
}

  
}


main("user", "pajjjkssword")
