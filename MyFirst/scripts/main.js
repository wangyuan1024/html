let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/派大星图标.jpeg'){
        myImage.setAttribute('src','images/girl.jpeg')
    }
    else{
        myImage.setAttribute('src','images/派大星图标.jpeg')
    }
}

function setHeading(name){
    let myHeading = document.querySelector('h1')
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '! '
}

function setUserName(){
    let myName = prompt('请输入你的名字：')
    localStorage.setItem('name',myName)
    setHeading(myName)
}

let storedName = localStorage.getItem('name')
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button')
myButton.onclick = setUserName;