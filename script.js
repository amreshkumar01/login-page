const singUpButton=document.getElementById('signUpButton');
const singInButton=document.getElementById('signInButton');
const singInFormButton=document.getElementById('signIn');
const singUpFormButton=document.getElementById('signUp');

singUpButton.addEventListener('click' ,function(){
    singInFormButton.style.display="none";
    singUpFormButton.style.display="block";
});

singInButton.addEventListener('click',function(){
    singInFormButton.style.display="block";
    singUpFormButton.style.display="none";
});
 
 
 
 