// ==UserScript==
// @name         AutoAcc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://store.steampowered.com/*
// @match        https://store.steampowered.com/join/completesignup*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //https://store.steampowered.com/?created_account=1&snr=1_join_completesignup__64
    //var joinForm = document.querySelector('.join_form');
    //var gToken = document.createElement('textarea');
    //gToken.id='gt';
    //gToken.style='width: 444px; height: 100px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px;';
    var ccase = setInterval(function(){
        if(document.querySelector('#reenter_email')){
            document.querySelector('#reenter_email').value=document.querySelector('#email').value;
        }
        if(document.querySelector('#i_agree_check')){
            document.querySelector('#i_agree_check').checked=true;
            document.querySelector('#ssa_box').hide();
        }
        if(document.querySelector('#reenter_password') && document.querySelector('#accountname').value.length > 0){
            document.querySelector('#password').type = "text";
            document.querySelector('#reenter_password').type = "text";
            document.querySelector('#password').value = "pubg.0" + document.querySelector('#accountname').value.split('pubg')[1];
            document.querySelector('#reenter_password').value = document.querySelector('#password').value;
            //if(document.querySelector('#reenter_password').value.length > 0){
            //    clearInterval(ccase);
            //}
        }

          if(window.location.href.indexOf('created_account=1')>0){
//            window.location.href='https://store.steampowered.com/account/registerkey?l=schinese';
//            //window.location.href='https://store.steampowered.com/account/registerkey';
              //clearInterval(ccase);
          }
    },100);
})();
