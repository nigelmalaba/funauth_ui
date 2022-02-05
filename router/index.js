import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import { navigationGuard } from '@okta/okta-vue'
import HomeComponent from '@/components/Home'
import LoginComponent from '@/components/Login'
import ProfileComponent from '@/components/Profile'
import MessagesComponent from '@/components/Messages'
import FunauthComponent from '@/components/funauthOverview'
import FunauthSectionOneComponent from '@/components/funauthChallengeOne_Step1'
import FunauthSectionTwoComponent from '@/components/funauthChallengeOne_Step2'
import FunauthSectionThreeComponent from '@/components/funauthChallengeOne_Step3'
import FunauthSectionFourComponent from '@/components/funauthChallengeOne_Step4'
import FunauthSectionFiveComponent from '@/components/funauthChallengeOne_Step5'
import FunauthChallengeTwoComponent from '@/components/challenge-two_step-0_overview'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/funauth',
      component:FunauthComponent
    },
    {
      path: '/funauthSectionOne',
      component: FunauthSectionOneComponent
    },
    {
      path: '/funauthSectionTwo',
      component: FunauthSectionTwoComponent
    },
    {
      path: '/funauthSectionThree',
      component: FunauthSectionThreeComponent
    },
    {
      path: '/funauthSectionFour',
      component: FunauthSectionFourComponent
    },
    {
      path: '/funauthSectionFive',
      component: FunauthSectionFiveComponent
    },
    {
      path: '/funauthChallengeTwo',
      component: FunauthChallengeTwoComponent
    },
    {
      path: '/funauthSectionThree',
      component: FunauthSectionOneComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: ProfileComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messages',
      component: MessagesComponent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(navigationGuard)

export default router
