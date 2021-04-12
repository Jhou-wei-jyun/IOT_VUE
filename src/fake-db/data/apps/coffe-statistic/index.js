import mock from '@/fake-db/mock.js'

// Contact
const data = {
    day: {
        today: 11100,
        yesterday: 150,
    },
    month: {
        cost: 1300,
        reality: 1150,
    },
    revenueComparisonLine:
    {
        'current': [
            {
                day: 1,
                price: 3100,
            },
            {
                day: 5,
                price: 1100,
            },
            {
                day: 9,
                price: 1020,
            },
            {
                day: 13,
                price: 1500,
            },
            {
                day: 17,
                price: 1000,
            },
            {
                day: 21,
                price: 1070,
            },
            {
                day: 27,
                price: 2200,
            },
            {
                day: 30,
                price: 2000,
            },
        ],
        'last': [
            {
                day: 1,
                price: 3100,
            },
            {
                day: 2,
                price: 1500,
            },
            {
                day: 9,
                price: 1110,
            },
            {
                day: 14,
                price: 1500,
            },
            {
                day: 17,
                price: 1200,
            },
            {
                day: 20,
                price: 2000,
            },
            {
                day: 26,
                price: 2200,
            },
            {
                day: 30,
                price: 200,
            },
        ],
    },
    weekStackedBar:

        [
            {
                weekday: '一',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '二',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '三',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '四',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '五',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '六',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },
            {
                weekday: '日',
                'cafe1': 3100,
                'cafe2': 3100,
                'cafe6': 3100,
                'cafe7': 3100,
            },

        ]
    // '1': [
    //     {
    //         date: '一',
    //         cup: 3100,
    //     },
    //     {
    //         date: '二',
    //         cup: 1100,
    //     },
    //     {
    //         date: '三',
    //         cup: 1020,
    //     },
    //     {
    //         date: '四',
    //         cup: 1500,
    //     },
    //     {
    //         date: '五',
    //         cup: 1000,
    //     },
    // ],
    // '2': [
    //     {
    //         date: 'ㄧ',
    //         cup: 3100,
    //     },
    //     {
    //         date: '二',
    //         cup: 1500,
    //     },
    //     {
    //         date: '三',
    //         cup: 1110,
    //     },
    //     {
    //         date: '四',
    //         cup: 1500,
    //     },
    //     {
    //         date: '五',
    //         cup: 1200,
    //     },
    // ],
    // '6': [
    //     {
    //         date: '一',
    //         cup: 3100,
    //     },
    //     {
    //         date: '二',
    //         cup: 1100,
    //     },
    //     {
    //         date: '三',
    //         cup: 1020,
    //     },
    //     {
    //         date: '四',
    //         cup: 1500,
    //     },
    //     {
    //         date: '五',
    //         cup: 1000,
    //     },
    // ],
    // '7': [
    //     {
    //         date: 'ㄧ',
    //         cup: 3100,
    //     },
    //     {
    //         date: '二',
    //         cup: 1500,
    //     },
    //     {
    //         date: '三',
    //         cup: 1110,
    //     },
    //     {
    //         date: '四',
    //         cup: 1500,
    //     },
    //     {
    //         date: '五',
    //         cup: 1200,
    //     },
    // ],


}


// GET : Get All Chats
mock.onPost('/api/apps/coffe/statistic/day').reply(() => {
    return [200, data.day]
})
// GET : Get All Chats
mock.onPost('/api/apps/coffe/statistic/month').reply(() => {
    return [200, data.month]
})
// GET : Get All Chats
mock.onPost('/api/apps/coffe/statistic/revenueComparisonLine').reply(() => {
    return [200, data.revenueComparisonLine]
})
// GET : Get All Chats
mock.onPost('/api/apps/coffe/statistic/weekStackedBar').reply(() => {
    return [200, data.weekStackedBar]
})


