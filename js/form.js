'use strict';

{
  function check() {
    let flag = 0;
    const getForm = document.forms[0];
    if(getForm.elements[0].value === "") {
      flag = 1;
    } else if(getForm.elements[1].value === "") {
      flag =1;
    } else if(!getForm.elements["color"].checked) {
      flag = 1;
    } else if(!getForm.elements["lunguage"].checked) {
      flag = 1;
    } else if (!getForm.elements["programming"].selected) {
      flag = 1;
    }
    document.querySelector("button").addEventListener("click", () => {
      if(flag = 1) {
        window.alert("必須項目を入力してください");
      } else {
        window.alert("フォームが送信されました。");
      }
    })
  }
  check();
}