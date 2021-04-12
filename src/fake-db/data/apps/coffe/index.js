import mock from '@/fake-db/mock.js'

// Contact
const data = {
    cups: [
        {
            coffeCup: '濃縮',
            count: 5,
        },
        {
            coffeCup: '雙倍濃縮',
            count: 10,
        },
        {
            coffeCup: '美式',
            count: 3,
        },
        {
            coffeCup: '雙倍美式',
            count: 2,
        },
    ],
    coffeRecordLists: [
        {

            'time': '18:10',
            'img': 'http://10.112.10.69:1500/static/img/Phil.jpg',
            'name': '123',
            'coffe': '雙倍美式',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-2.jpg'),
            'name': '123',
            'coffe': '美式',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
            'name': '123',
            'coffe': '美式',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-4.jpg'),
            'name': '123',
            'coffe': '雙倍濃縮',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-5.jpg'),
            'name': '123',
            'coffe': '濃縮',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-6.jpg'),
            'name': '123',
            'coffe': '雙倍濃縮',

        },
        {

            'time': '18:10',
            'img': require('@/assets/images/portrait/small/avatar-s-7.jpg'),
            'name': '123',
            'coffe': '濃縮',
        },
    ],
    weekCoffeLists: [
        {

            'img': require('@/assets/images/portrait/small/avatar-s-1.jpg'),
            'name': '123',
            'count': 1,

        },
        {

            'img': require('@/assets/images/portrait/small/avatar-s-2.jpg'),
            'name': '123',
            'count': 12,

        },
        {

            'img': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
            'name': '123',
            'count': 20,

        },
        {

            'img': require('@/assets/images/portrait/small/avatar-s-4.jpg'),
            'name': '123',
            'count': 5,

        },
    ],
    sewingLists: [

        {
            lineNo: 'Line 001',
            machines: [
                {
                    machineNo: 'SB20001',
                    userStatus: 'out',
                    machineStatus: 'on',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20002',
                    userStatus: 'in',
                    machineStatus: 'on',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20003',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20004',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20005',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20006',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20007',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20008',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20009',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20010',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
            ],
        },
        {
            lineNo: 'Line 002',
            machines: [
                {
                    machineNo: 'SB20011',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20012',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20013',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20014',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20015',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20016',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20017',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20018',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20019',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
                {
                    machineNo: 'SB20020',
                    userStatus: 'out',
                    machineStatus: 'off',
                    user: null,
                    checkTime: null,
                },
            ],
        },
    ],
    as: [
        {

            inTime: '18:10',
            outTime: '18:10',
            img: require('@/assets/images/employee/41dc7f39.jpg'),
            // img: require("@/assets/images/Sewing-M-icons/41dc7f39.jpg"),
            user: '123',


        },

    ],
    productLists: [

        {
            lineNo: 'Line 001',
            machineNo: 'SB20001',
            project: 'X1',
            target: [10, 20],
            actuality: [10, 10],
            usedUser: ['aaa', 'bbb'],
        },
        {
            lineNo: 'Line 001',
            machineNo: 'SB20002',
            project: 'X1',
            target: [20, 20],
            actuality: [30, 10],
            usedUser: ['ccc', 'ddd'],
        },
        {
            lineNo: 'Line 001',
            machineNo: 'SB20003',
            project: 'X2',
            target: [10, 20],
            actuality: [10, 10],
            usedUser: ['eee', 'fff'],
        },
        {
            lineNo: 'Line 002',
            machineNo: 'SB20004',
            project: 'X2',
            target: [10, 20],
            actuality: [10, 10],
            usedUser: ['ggg', 'hhh'],
        },
        {
            lineNo: 'Line 002',
            machineNo: 'SB20002',
            project: 'X2',
            target: [10, 20],
            actuality: [10, 10],
            usedUser: ['iii', 'jjj'],
        },
    ],
    coffeDonut: { 1: 20, 2: 1, 6: 30, 7: 8 },


}

// GET : Get All Contacts
mock.onGet('/api/apps/coffe/cups').reply(() => {
    return [200, data.cups]
})

// GET : Get All Chats
mock.onGet('/api/apps/coffe/coffeRecordLists').reply(() => {
    return [200, data.coffeRecordLists]
})
// GET : Get All CoffeCountLists
mock.onGet('/api/apps/coffe/weekCoffeLists').reply(() => {
    return [200, data.weekCoffeLists]
})
// GET : Get Coffe Donut
mock.onGet('/api/apps/coffe/donut').reply(() => {
    return [200, data.coffeDonut]
})


// POST : Add new Item
mock.onPost('/api/apps/coffe/recordLists/').reply((request) => {

    // Get event from post data
    const item = JSON.parse(request.data).item

    const length = data.recordLists.length
    let lastIndex = 0
    if (length) {
        lastIndex = data.recordLists[length - 1].id
    }
    item.id = lastIndex + 1

    data.recordLists.push(item)

    return [201, { id: item.id }]
})

// GET : Get All Contacts
mock.onGet('/api/apps/sewing/sewingLists').reply(() => {
    return [200, data.sewingLists]
})
// GET : Get All Chats
mock.onGet('/api/apps/coffe/sewingRecordLists').reply(() => {
    return [200, data.sewingRecordLists]
})
// GET : Get All Chats
mock.onGet('/api/apps/sewing/productLists').reply(() => {
    return [200, data.productLists]
})

