const firebaseConfig = {
      apiKey: "AIzaSyBpOfcTjL086LHONAH6BH6JzLygCbodVkg",
      authDomain: "kwitter-c6201.firebaseapp.com",
      projectId: "kwitter-c6201",
      storageBucket: "kwitter-c6201.appspot.com",
      messagingSenderId: "132892883558",
      appId: "1:132892883558:web:48ea9a186bfeb37808cba7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
