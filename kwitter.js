const firebaseConfig = {
  apiKey: "AIzaSyBuo7WXoCukbjJ1Y5y9bRUHGG2TJdVzNus",
  authDomain: "kwitter-e6eba.firebaseapp.com",
  projectId: "kwitter-e6eba",
  storageBucket: "kwitter-e6eba.appspot.com",
  messagingSenderId: "635086258743",
  appId: "1:635086258743:web:558711a64509bd0d0d35b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name",user_name)
  window.location="kwitter_room.html"
}
