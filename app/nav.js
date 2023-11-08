// 會員系統
const NumberSystem_Arr = [
    "註冊會員",
    "忘記密碼",
    "會員登入",
    "會員登出",
];

const NumberSystem_LinksArr = [
    "RegisterMember.html",
    "ForgotPassword.html",
    "MemberLogin.html",
    "MemberLogout.html"
];

const NumberSystem = document.getElementById('NumberSystem');
let numberSystemAdded = false;

NumberSystem.addEventListener('mouseover', function () {
    if (!numberSystemAdded) {
        addElementEvent(NumberSystem_Arr, NumberSystem, NumberSystem_LinksArr);
        numberSystemAdded = true;
    }
});

// 成為房東
const BecomeALandlord_Arr = [
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

const BecomeALandlord_LinksArr = [
    "Register",
    "Log In",
    "Forgot Password",
    "Edit Profile",
    "Add to Favorites",
    "Recently Viewed Listings",
    "Contract Inquiries",
    "Member Verification",
    "Discussion Forum",
    "Become a Landlord",
];

const BecomeALandlord = document.getElementById('BecomeALandlord');
let landlordAdded = false;

BecomeALandlord.addEventListener('mouseover', function () {
    if (!landlordAdded) {
        addElementEvent(BecomeALandlord_Arr, BecomeALandlord, BecomeALandlord_LinksArr);
        landlordAdded = true;
    }
});

// 新增元素<a>事件
function addElementEvent(arr, SuperFa, linksArr) {
    const container = document.createElement('div');
    container.style.background = '#aaa';

    for (let i = arr.length - 1; i >= 0; i--) {
        const newElement = document.createElement('a');
        newElement.textContent = arr[i];
        newElement.classList.add('dropdown-content');
        newElement.href = `/link/${SuperFa.innerText}/${linksArr[i]}`;
        container.style.borderTop = '1px solid #000';
        container.append(newElement);

        setTimeout(() => {
            newElement.style.opacity = 1;
        }, 10 * (arr.length - i));
    }

    SuperFa.append(container);
}
