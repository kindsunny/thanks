window.basic = {
    "title": "김병선 ♥ 정다정 감사장",
    "groom": {
        "name": "김병선",
        "first_name": "병선",
        "parents": {
            "father": {
                "name": "김용표"
            },
            "mother": {
                "name": "이향희"
            }
        }
    },
    "bride": {
        "name": "정다정",
        "first_name": "다정",
        "parents": {
            "father": {
                "name": "정영기"
            },
            "mother": {
                "name": "이애순"
            }
        }
    },
    "link": "https://kindsunny.github.io/thanks",
    "kakao": {
        "description": "특별한 날, 소중한 시간을\n함께해주셔서 감사드립니다.",
        "button": "모바일 감사장 보기",
        "img": "https://github.com/kindsunny/thanks/blob/main/img/main/main.jpg?raw=true"
    },
    "info": {
        "greeting": "저희 자녀의 결혼식에\n" +
            "바쁘신 가운데에도 잊지 않으시고\n" +
            "축복과 격려를 하여 주신데\n" +
            "진심으로 감사를 드리오며\n" +
            "그 은혜 깊이 간직하겠습니다.\n" +
            "\n" +
            "마땅히 찾아 뵙고\n" +
            "인사드리는 것이 도리이나\n" +
            "우선 서면으로\n" +
            "감사의 말씀을 드리오니\n" +
            "너그럽게 양해해 주시기 바랍니다.\n" +
            "\n" +
            "아울러 귀댁에 건강과 행복이\n" +
            "함께 하시기를 기원합니다.",
        "greeting2": "결혼을 축하해 주신 모든 분들에게\n"+
            "진심으로 깊은 감사드립니다.\n"+
            "\n" +
            "일일이 찾아뵙고 인사드리는 것이\n"+
            "도리이오나, 글로 대신 감사드림을\n"+
            "너그럽게 이해해 주시길 부탁드립니다.\n"+
            "\n"+
            "축복해 주신 소중한 마음 잊지 않고,\n"+
            "오래오래 간직하며 행복하게 살겠습니다.\n"+
            "항상 건강하시고 행복하시길 기원합니다.",
    }
}


$(document).ready(function (){

    setText();

    new WOW().init();

});

function setText(){

    const urlParams = new URL(location.href).searchParams;
    const mode = urlParams.get('m');
    if(mode=="k"){
        $("#mode-from").html('<span class="relation mr-5">혼주 </span>\n' +
            '        <div class="name-block">\n' +
            '            <div class="txt-groom-father"></div>\n' +
            '        </div>\n' +
            '        <span class="separator">·</span>\n' +
            '        <div class="name-block">\n' +
            '            <div class="txt-groom-mother"></div>\n' +
            '        </div>');
        window.basic.link="https://kindsunny.github.io/thanks?m=k";
        $('#txt-greeting').html(window.basic.info.greeting);
    }else if(mode=="j") {
        $("#mode-from").html('<span class="relation mr-5">혼주 </span>\n' +
            '        <span class="name-block">\n' +
            '            <span class="txt-bride-father"></span>\n' +
            '        </span>\n' +
            '        <span class="separator">·</span>\n' +
            '        <span class="name-block">\n' +
            '            <span class="txt-bride-mother"></span>\n' +
            '        </span>');
        window.basic.link="https://kindsunny.github.io/thanks?m=j";
        $('#txt-greeting').html(window.basic.info.greeting);
    }else{
        $("#mode-from").html('<span class="relation">신랑 </span>\n' +
            '        <span class="name-block">\n' +
            '            <span class="txt-groom"></span>\n' +
            '        </span>\n' +
            '        <span class="relation">신부 </span>\n' +
            '        <span class="name-block">\n' +
            '            <span class="txt-bride"></span>\n' +
            '        </span>');
        $('#txt-greeting').html(window.basic.info.greeting2);
    }

    $('#txt-title').html(window.basic.title);
    $('.txt-groom').html(window.basic.groom.name);
    $('.txt-groom-first').html(window.basic.groom.first_name);
    $('.txt-groom-father').html(window.basic.groom.parents.father.name);
    $('.txt-groom-mother').html(window.basic.groom.parents.mother.name);
    $('.txt-bride').html(window.basic.bride.name);
    $('.txt-bride-first').html(window.basic.bride.first_name);
    $('.txt-bride-father').html(window.basic.bride.parents.father.name);
    $('.txt-bride-mother').html(window.basic.bride.parents.mother.name);

}

function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: window.basic.title,
            description: window.basic.kakao.description,
            imageUrl: window.basic.kakao.img,
            imageHeight: 550,
            link: {
                mobileWebUrl: window.basic.link,
                webUrl: window.basic.link,
            },
        },
        buttons: [
            {
                title: window.basic.kakao.button,
                link: {
                    mobileWebUrl: window.basic.link,
                    webUrl: window.basic.link,
                },
            },
        ],
    });
}
function copyLink(){

    let url = window.document.location.href;
    copyToClipboard(url);
    alert('병선♥다정 감사장 주소가 복사되었습니다.');
}

function copyToClipboard(val) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}


