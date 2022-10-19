const $ = document.querySelector.bind(document);
let number = 0;
let text = 'Không có đâu bạn ạ!!! ấn vào mắt';

const date = new Date(Date.now())

$('.main_btn > button:nth-child(1)').onclick = () => {
    $('.u-oa').classList.add('active');
    hiddenUoa();
} 

function hiddenUoa () {
    setTimeout(() => {
        $('.u-oa').classList.remove('active');
        $('.u-oa-2').classList.add('active');
        $('.main_btn > button:nth-child(1)').style.display = 'none';
        $('.main_btn > button:nth-child(2)').style.display = 'block';
    },3000)
}

$('.main_btn > button:nth-child(2)').onclick = () => {
    $('.u-oa-2').classList.remove('active');
    $('.qua').classList.add('active');
}

$('.hoi_ty').onclick = () => {
    $('.qua').classList.remove('active');
    $('.cau_hoi').classList.add('active');
}

$('.khong').onclick = (e) => {
    number++;
    const top = Math.round(Math.random() * 500);
    const left = Math.round(Math.random() * 800);

    e.target.style.position = 'absolute';
    e.target.style.top = top + 'px';
    e.target.style.left = left + 'px';
    bocuocdi(number);
}

function bocuocdi(number) {
    if(number == 5) {
        alert(text);
        number = 0;
    }
}

$('.co').onclick = () => {
    alert('Đồng ý rồi nhé!!! yêu em 3000');
    $('.khong').style.display = 'none';
    $('.main_btn > button:nth-child(2)').innerHTML = 'Yêu em 3000';
    $('.main_btn > button:nth-child(2)').style.pointerEvents = 'none';
    setTimeout(() => {
        $('.cau_hoi').classList.remove('active');
    },3000)
}
