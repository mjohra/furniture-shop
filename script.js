//signup name validate
    var uname=document.getElementById('uname');
    uname.addEventListener('keyup', checkunamevalidity);

    function checkunamevalidity(e){
        var unameval=uname.value;
        var validformat =  /^[A-Za-z]+$/;

        if(validformat.test(unameval)){
            uname.classList.add('is-valid');
            uname.classList.remove('is-invalid');
        }
        else{
            uname.classList.add('is-invalid');
            uname.classList.remove('is-valid');
        }
      }

//signup email validate

var inputEmail4=document.getElementById('inputEmail4');
inputEmail4.addEventListener('keyup', checkemailvalidity);

function checkemailvalidity(e){
    var unameval=inputEmail4.value;
    var validformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(validformat.test(unameval)){
        inputEmail4.classList.add('is-valid');
        inputEmail4.classList.remove('is-invalid');
    }
    else{
        inputEmail4.classList.add('is-invalid');
        inputEmail4.classList.remove('is-valid');
    }
  }



//////password check

var inputPassword4=document.getElementById('inputPassword4');
inputPassword4.addEventListener('keyup', checkemailvalidity);

function checkemailvalidity(e){
    var unameval=inputPassword4.value;
    var validformat =  /^[A-Za-z]\w{7,14}$/;

    if(validformat.test(unameval)){
        inputPassword4.classList.add('is-valid');
        inputPassword4.classList.remove('is-invalid');
    }
    else{
        inputPassword4.classList.add('is-invalid');
        inputPassword4.classList.remove('is-valid');
    }
  }






///////////////zip code
  var inputZip=document.getElementById('inputZip');
  inputZip.addEventListener('keyup', checkemailvalidity);

  function checkemailvalidity(e){
      var unameval=inputZip.value;
      var validformat =  /^[0-9]{4}$/;

      if(validformat.test(unameval)){
        inputZip.classList.add('is-valid');
        inputZip.classList.remove('is-invalid');
      }
      else{
          inputZip.classList.add('is-invalid');
          inputZip.classList.remove('is-valid');
      }
    }








/////////loginEmail&pass

    var exampleInputEmail1=document.getElementById('exampleInputEmail1');
    exampleInputEmail1.addEventListener('keyup', checkemailvalidity);

    function checkemailvalidity(e){
        var unameval=exampleInputEmail1.value;
        var validformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(validformat.test(unameval)){
            exampleInputEmail1.classList.add('is-valid');
            exampleInputEmail1.classList.remove('is-invalid');
        }
        else{
            exampleInputEmail1.classList.add('is-invalid');
            exampleInputEmail1.classList.remove('is-valid');
        }
      }



    //////password check

    var exampleInputPassword1=document.getElementById('exampleInputPassword1');
    exampleInputPassword1.addEventListener('keyup', checkemailvalidity);

    function checkemailvalidity(e){
        var unameval=exampleInputPassword1.value;
        var validformat =  /^[A-Za-z]\w{7,14}$/;

        if(validformat.test(unameval)){
            exampleInputPassword1.classList.add('is-valid');
            exampleInputPassword1.classList.remove('is-invalid');
        }
        else{
            exampleInputPassword1.classList.add('is-invalid');
            exampleInputPassword1.classList.remove('is-valid');
        }
      }



///////searchfield



var sf=document.getElementById('sf');
var sform=document.getElementById('sform');
sf.addEventListener('keyup', checkemailvalidity);
sform.addEventListener('keyup', checksearch);

function checkemailvalidity(e){
    var unameval=sf.value;
    var validformat =  /^[A-Za-z-9]{3,}$/;

    if(validformat.test(unameval)){
        sf.classList.add('is-valid');
        sf.classList.remove('is-invalid');
        return true;
    }
    else{
        sf.classList.add('is-invalid');
        sf.classList.remove('is-valid');
        return true;
    }
  }

  function checksearch(e){
      if(!checkemailvalidity())
      {
        e.preventDefault();
      }
    }
