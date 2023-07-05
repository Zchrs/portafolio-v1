import { BrowserRouter } from "react-router-dom";

export const routes = [
  {
    component: () => import("src/views/home/HomeScreen.jsx"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/"),
      },
      {
        path: "/about",
        name: "Profile",
        component: () => import("@/views/profile/ServicesScreen.jsx"),
      },
      {
        path: "/services",
        name: "services",
        component: () => import("@/views/profile/paymentMethod/NewPayment.vue"),
      },
      {
        path: "payment/new-payment/:uuid",
        name: "New-Payment-Method",
        component: () =>
          import("@/views/profile/paymentMethod/NewPaymentMethod.vue"),
        props: true,
      },
      {
        path: "/programsCode",
        name: "ProgramsCode",
        component: () => import("@/views/portalIb/ProgramsCode.vue"),
      },
      {
        path: "/partnecode",
        name: "Partnecode",
        component: () => import("@/views/portalIb/PartnerCode.vue"),
      },
      {
        path: "",
        name: "portalIb",
        component: () => import("@/views/portalIb/Index.vue"),
        children: [
          {
            path: "/portalIb",
            name: "portalIb-links",
            component: () => import("@/views/portalIb/Links.vue"),
          },
          {
            path: "/portalIbmaterials",
            name: "portalIb-materials",
            component: () => import("@/views/portalIb/Materials.vue"),
          },
          {
            path: "/portalIb/detail",
            name: "portalIb-material-detail",
            component: () => import("@/views/portalIb/MaterialDetail.vue"),
          },
          {
            path: "/portalIbclients",
            name: "portalIb clients",
            component: () => import("@/views/portalIb/Clients.vue"),
          },
          {
            path: "/portalIbprograms",
            name: "portalIb IB programs",
            component: () => import("@/views/portalIb/Programs.vue"),
          },
          {
            path: "/portalIb/newaccount",
            name: "Portal-IB",
            component: () =>
              import("@/views/portalIb/CreatePartnerAccount.vue"),
          },
          {
            path: "/portalIbreports",
            name: "portalIb reports",
            component: () => import("@/views/portalIb/Reports.vue"),
          },
          {
            path: "/portalIbaccounts",
            name: "portalIb-accounts",
            component: () => import("@/views/portalIb/Accounts.vue"),
          },
          {
            path: "/partnerAccount",
            name: "PartnerAccount",
            component: () => import("@/views/portalIb/PartnerAccount.vue"),
          },
          {
            path: "/partnerCode",
            name: "PartnerCode",
            component: () => import("@/views/portalIb/PartnerCode.vue"),
          },
        ],
      },
      /* {
        path: '/invest',
        name: 'Invest',
        component: () => import('@/views/invest/Invest.vue'),
      },
      {
        path: '/amountInvest',
        name: 'amountInvest',
        component: () => import('@/views/invest/AmountInvest.vue'),
      }, */
      {
        path: "/pamm",
        name: "Pamm",
        component: () => import("@/views/pamm/Index.vue"),
      },
      {
        path: "pamm/request",
        name: "Request-Pamm",
        component: () => import("@/views/pamm/RequestPamm.vue"),
      },
      {
        path: "pamm/connect/:uuid",
        name: "Connect-Pamm",
        component: () => import("@/views/pamm/ConnectPamm.vue"),
        props: true,
      },
      {
        path: "pamm/detail/:uuid",
        name: "My-Pamm",
        component: () => import("@/views/pamm/tabs/MyPamm.vue"),
        props: true,
      },
    ],
  },
];
