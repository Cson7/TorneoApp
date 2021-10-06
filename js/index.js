      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBGNGHhakvRsTvv1B3W2FVT9aL50qbDVwU",
        authDomain: "torneo-7242d.firebaseapp.com",
        databaseURL: "https://torneo-7242d-default-rtdb.firebaseio.com/",
        projectId: "torneo-7242d",
        storageBucket: "torneo-7242d.appspot.com",
        messagingSenderId: "1078577811472",
        appId: "1:1078577811472:web:abf535390138ab6e4b3a95"
      };
      firebase.initializeApp(firebaseConfig);
      var database = firebase.database();

    firebase.database().ref('/Torneos/')
    .on('value', function(snapshot){
        var html="";
        var tablap= document.getElementById("tablapersonalizada");
        snapshot.forEach(function(e){
            var elemento=e.val();
            html +=`
            <tr style=" border: black 1px solid">
            <th style=" border: black 1px solid"> ${elemento.nombre}</th>
            <th style=" border: black 1px solid"> ${elemento.descripcion}</th>
            <th style=" border: black 1px solid"> ${elemento.cantidadRegistrados}</th>
            <th style=" border: black 1px solid"> ${elemento.correoOrganizador}</th>
            <button style=" border: black 1px solid"> VER </button>
            <button style=" border: black 1px solid">VER </button>
            </tr>
            `
        })
        tablap.innerHTML=html;
    })