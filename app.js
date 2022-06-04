function onSignIn(googleUser) {
    var win = window.open('http://stackoverflow.com/', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
    var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr('src',profile.getImageUrl());
  $(".data").css("display","block");
  $(".g-signin2").css("display","none");

  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('User signed out.');
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
  
    });
  }