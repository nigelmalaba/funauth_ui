<template>
<body class="c19">
    <h1 class="c22" id="h.aenhdmwkcdmw"><span class="c21 c24">Challenge 1 Overview &ndash; Custom Application
            Sign-on</span></h1>
    <p class="c1"><span class="c2">We will now create our own custom web application in Glitch. Our custom web
            application will use Okta&rsquo;s Sign-in widget to add an application login (authentication). &nbsp;We will
            configure/integrate the widget with your Okta Org for authentication services. </span></p>
    <p class="c1 c12"><span class="c2"></span></p>
    <p class="c1"><span class="c2">When you are done with this exercise you will have a customizable login to an OIDC
            application and the ability to view the JSON Web Tokens (JWTs) which contains the ID &amp; Access tokens
            provided by Okta to the application.</span></p>
    <p class="c18"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 307.94px; height: 391.15px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image4.png"
                style="width: 307.94px; height: 391.15px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c18"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 463.00px; height: 315.38px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image9.png"
                style="width: 463.00px; height: 315.38px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
<button style="float:right" @click = 'goToChallengeOne_One()'> Challenge One Section 1</button>

</body>

</template>




<script>


/*import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})*/

export default {
  name: 'funauth',
  data: function () {
    return {
      claims: '',
      resourceServerExamples: [
        {
          label: 'Node/Express Resource Server Example',
          url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server'
        },
        {
          label: 'Java/Spring MVC Resource Server Example',
          url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server'
        }
      ]
    }
  },
  mounted () { this.setup() },
  methods: {
    async setup () {
      if (this.authState && this.authState.isAuthenticated) {
        this.claims = await this.$auth.getUser()
      }
    },

  goToChallengeOne_One() {
    this.$router.push('/funauthSectionOne');
  }
}
}
</script>


<style scoped>
/* <meta content="text/html; charset=UTF-8" http-equiv="content-type"> */

        @import url('https://themes.googleusercontent.com/fonts/css?kit=wAPX1HepqA24RkYW1AuHYA');

        .lst-kix_qobjbxhad1in-5>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-5, lower-roman) ". "
        }

        ol.lst-kix_qobjbxhad1in-1.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-1 0
        }

        .lst-kix_qobjbxhad1in-4>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-4, lower-latin) ". "
        }

        .lst-kix_qobjbxhad1in-6>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-6, decimal) ". "
        }

        .lst-kix_qobjbxhad1in-2>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-2
        }

        ol.lst-kix_qobjbxhad1in-6.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-6 0
        }

        .lst-kix_qobjbxhad1in-2>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-2, lower-roman) ". "
        }

        .lst-kix_qobjbxhad1in-3>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-3, decimal) ". "
        }

        .lst-kix_qobjbxhad1in-4>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-4
        }

        .lst-kix_qobjbxhad1in-7>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-7
        }

        .lst-kix_qobjbxhad1in-1>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-1, lower-latin) ". "
        }

        .lst-kix_qobjbxhad1in-0>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-0, decimal) ". "
        }

        .lst-kix_qobjbxhad1in-0>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-0
        }

        ol.lst-kix_qobjbxhad1in-4.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-4 0
        }

        ol.lst-kix_qobjbxhad1in-7.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-7 0
        }

        .lst-kix_qobjbxhad1in-3>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-3
        }

        .lst-kix_qobjbxhad1in-6>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-6
        }

        li.li-bullet-1:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        ol.lst-kix_qobjbxhad1in-2.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-2 0
        }

        li.li-bullet-0:before {
            margin-left: -18pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 18pt
        }

        li.li-bullet-2:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        .lst-kix_qobjbxhad1in-1>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-1
        }

        ol.lst-kix_qobjbxhad1in-8 {
            list-style-type: none
        }

        ol.lst-kix_qobjbxhad1in-5.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-5 0
        }

        ol.lst-kix_qobjbxhad1in-3.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-3 0
        }

        ol.lst-kix_qobjbxhad1in-0 {
            list-style-type: none
        }

        ol.lst-kix_qobjbxhad1in-1 {
            list-style-type: none
        }

        .lst-kix_qobjbxhad1in-5>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-5
        }

        .lst-kix_qobjbxhad1in-8>li {
            counter-increment: lst-ctn-kix_qobjbxhad1in-8
        }

        ol.lst-kix_qobjbxhad1in-0.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-0 0
        }

        ol.lst-kix_qobjbxhad1in-2 {
            list-style-type: none
        }

        .lst-kix_qobjbxhad1in-8>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-8, lower-roman) ". "
        }

        ol.lst-kix_qobjbxhad1in-3 {
            list-style-type: none
        }

        ol.lst-kix_qobjbxhad1in-4 {
            list-style-type: none
        }

        .lst-kix_qobjbxhad1in-7>li:before {
            content: ""counter(lst-ctn-kix_qobjbxhad1in-7, lower-latin) ". "
        }

        ol.lst-kix_qobjbxhad1in-8.start {
            counter-reset: lst-ctn-kix_qobjbxhad1in-8 0
        }

        ol.lst-kix_qobjbxhad1in-5 {
            list-style-type: none
        }

        ol.lst-kix_qobjbxhad1in-6 {
            list-style-type: none
        }

        ol.lst-kix_qobjbxhad1in-7 {
            list-style-type: none
        }

        ol {
            margin: 0;
            padding: 0;
            font-size: 15pt
        }

        table td,
        table th {
            padding: 0
        }

        .c0 {
            margin-left: 117pt;
            padding-top: 0pt;
            padding-left: -9pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c16 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 13pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c5 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
        }

        .c9 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Yu Mincho";
            font-style: normal
        }

        .c2 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c22 {
            padding-top: 12pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
            font-size: 20pt
        }

        .c1 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.5;
            orphans: 2;
            widows: 2;
            text-align: left;
            font-size: 20pt;
        }

        .c18 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .c14 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c24 {
            color: #2e75b5;
            font-weight: 400;
            font-size: 16pt;
            font-family: "Calibri"
        }

        .c17 {
            -webkit-text-decoration-skip: none;
            color: #0563c1;
            text-decoration: underline;
            text-decoration-skip-ink: none
        }

        .c7 {
            font-size: 20pt;
            font-family: "Calibri";
            color: #2e75b5;
            font-weight: 400
        }

        .c19 {
            background-color: #ffffff;
            max-width: 768pt;
            /* padding: 72pt 72pt 72pt 72pt */
        }

        .c21 {
            text-decoration: none;
            vertical-align: baseline;
            font-style: normal
        }

        .c15 {
            font-size: 12pt;
            font-family: "Calibri";
            font-weight: 400
        }

        .c10 {
            color: inherit;
            text-decoration: inherit
        }

        .c11 {
            margin-left: 108pt;
            height: 11pt
        }

        .c4 {
            padding: 0;
            margin: 0
        }

        .c8 {
            margin-left: 72pt;
            padding-left: 0pt
        }

        .c3 {
            margin-left: 144pt;
            padding-left: 0pt
        }

        .c13 {
            margin-left: 108pt
        }

        .c6 {
            margin-left: 144pt
        }

        .c12 {
            height: 11pt
        }

        .c20 {
            color: #0070c0
        }

        .c23 {
            margin-left: 36pt
        }

        .title {
            padding-top: 0pt;
            color: #000000;
            font-size: 26pt;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .subtitle {
            padding-top: 0pt;
            color: #666666;
            font-size: 15pt;
            padding-bottom: 16pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        li {
            color: #000000;
            font-size: 11pt;
            font-family: "Arial"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 16pt;
            font-family: "Arial"
        }

        h1 {
            padding-top: 10pt;
            color: #000000;
            font-size: 20pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 18pt;
            color: #000000;
            font-size: 16pt;
            padding-bottom: 6pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 16pt;
            color: #434343;
            font-size: 14pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 14pt;
            color: #666666;
            font-size: 12pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 12pt;
            color: #666666;
            font-size: 11pt;
            padding-bottom: 4pt;
            font-family: "Arial";
            line-height: 1.15;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }
</style>
