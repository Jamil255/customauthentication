function signup() {
  let username = document.getElementById('username')
  let useremail = document.getElementById('useremail')
  let userpassword = document.getElementById('userpassword')
  let userObj = {
    name: username.value,
    email: useremail.value,
    password: userpassword.value,
  }
  if (
    !username.value  &&
    !useremail.value  &&
    !userpassword.value 
  ) {
    alert('missing input field')
  } else {
    let getUser = localStorage.getItem('user')
    // /getuser  in string
    console.log(getUser)
    if (getUser === null) {
      localStorage.setItem('user', JSON.stringify([userObj]))
      alert('user successfully signup')
      location.href = './login.html'
    } else {
      let userParse = JSON.parse(getUser)
      //**string convert  into object*/
      console.log(userParse)
      let emailCheck = userParse.find(function (value, index) {
        // value and index ar//
        // console.log("value",value.email, index)
        if (value.email === userObj.email) {
          return true
        }
      })
      //object //
      console.log(emailCheck)
      if (emailCheck === undefined) {
        userParse.push(userObj)
        localStorage.setItem('user', JSON.stringify(userParse))
        alert('user successfully signup')
     location.assign("./login.html")
      } else {
        alert('email address already exists!')
      }
    }
  }
}

// <!----------login---------------->
function login() {
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    if (!email || !password) {
        alert("missing email or password")
        return
    }
    let userCollection = JSON.parse(localStorage.getItem("user"))
    //userCollection get the user from localStorage//
    console.log(userCollection)
    let userExists = userCollection.find(function (value, index) {
        console.log(value, index)
        if (value.email == email.value && value.password == password.value) {
            return true
        }
    })
    if (!userExists) {
        alert("invalid  username or password")
    }
    else {
        alert("user successfully login")
        localStorage.setItem("userLogin", JSON.stringify(userExists))
        location.replace("./dashboard.html")
    }
}
userdetails = null
function isUserLogin(){
    let getUser = JSON.parse(localStorage.getItem("user"))
    console.log("getuser", getUser)
    if (getUser == null) {
        userdetails=getUser
    location.replace("./signup.html")
        
    }

}

function loadAuthScreen() {
    let getUser = JSON.parse(localStorage.getItem("userLogin"))
    console.log("getuser", getUser);
    if (getUser!==null) {
        location.replace("./dashborad.html")
    }
}
// localStorage.clear();