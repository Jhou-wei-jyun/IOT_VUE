/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: null,
    name: '針車機',
    // tag: '1',
    // tagColor: 'warning',
    icon: require('@/assets/images/sidebar-icons/icon17.svg'),
    customIcon: true,
    i18n: '針車機',
    submenu: [
      {
        url: '/sweing/listview',
        name: '機台清單',
        slug: 'sewing-list-view',
        i18n: '機台清單'
      },
    ]
  },
  {
    url: null,
    name: '咖啡機',
    icon: require('@/assets/images/sidebar-icons/icon18.svg'),
    customIcon: true,
    i18n: '咖啡機',
    submenu: [
      {
        url: '/dashboard/coffe',
        name: '一覽',
        slug: 'dashboard-coffe',
        i18n: '一覽'
      },
      {
        url: '/coffe/statistics',
        name: '統計',
        slug: 'coffe-statistics'
        ,
        i18n: '統計'
      },
    ]
  },
]
