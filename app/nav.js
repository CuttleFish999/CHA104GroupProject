// 會員系統
const NumberSystem_Arr = [
    "註冊",
    "登入",
    "忘記密碼",
    "資料修改",
    "加入收藏",
    "瀏覽過的物件",
    "合約查詢",
    "會員認證",
    "討論區",
];

const NumberSystem_LinksArr = [
    "Register",
    "Log In",
    "Forgot Password",
    "Edit Profile",
    "Add to Favorites",
    "Recently Viewed Items",
    "Contract Inquiry",
    "Member Verification",
    "Discussion Forum"
];

const NumberSystem = document.getElementById('NumberSystem');

NumberSystem.addEventListener('click', function () {
    addElementEvent(NumberSystem_Arr,NumberSystem ,NumberSystem_LinksArr);
});

// 新增元素<a>事件
let elementsAdded = false;
function addElementEvent(arr, SuperFa, linksArr) {
    const existingElements = document.querySelectorAll('.added-element');

    if (elementsAdded) {
        existingElements.forEach((element, index) => {
            element.style.opacity = 0;
            element.addEventListener('transitionend', () => {
                element.remove();
            });
        });
    } else {
        const container = document.createElement('div');
        for (let i = arr.length; i >= 0; i--) {
            const newElement = document.createElement('a');
            newElement.textContent = arr[i];
            newElement.classList.add('added-element');
            newElement.href = `/link/${SuperFa.innerText}/${linksArr[i]}`;
            // SuperFa.insertAdjacentElement('afterend', newElement);
            
            container.append(newElement); 
           
            
            setTimeout(() => {
                newElement.style.opacity = 1;
            }, 10 * i);
        }
        SuperFa.append(container); 
    }

    elementsAdded = !elementsAdded;
}