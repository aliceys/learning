const ul = document.querySelector('.list')


const list = [{
    name: '胡总要',
    sex: '女',
    age: 4
}, {
    name: '超伟',
    sex: '男',
    age: 4
}, {
    name: '强哥',
    sex: '男',
    age: 16
}, {
    name: '小黄鸡',
    sex: '女',
    age: 16
}, {
    name: '梅大师',
    sex: '男',
    age: 20
}, {
    name: '扬起帆',
    sex: '男女',
    age: 20
}]
for (let i = 0; i < list.length; i++) {
    if (list[i].age >= 18) {
        console.log(list[i].name + '成年了')
    } else if (list[i].age >= 14) {
        console.log(list[i].name + '青年了')
    } else {
        console.log(list[i].name + '幼年')
    }
}