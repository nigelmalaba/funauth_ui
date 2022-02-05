<template>

<body class="c21">
    <p class="c8"><span class="c3">Section Overview: </span></p>
    <p class="c8"><span class="c17">In the previous section, we completed the custom application&rsquo;s Okta setup by
            defining the trusted origin. &nbsp;In this section, &nbsp;we will modify the custom application in order to
            complete the integration with Okta for identity services. &nbsp;Once the custom application has been
            modified for integration with Okta for identity services, we will test our custom application and validate
            that your test user can authenticate successfully.</span></p>
    <p class="c9 c16"><span class="c1"></span></p>
    <p class="c16 c9"><span class="c1"></span></p>
    <h2 class="c10" id="h.lnxbz9"><span class="c3">Setup Application Login</span></h2>
    <p class="c19"><span class="c1">In Glitch, go to the source code page of your glitch application and click
            index.html</span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-1 start" start="1">
        <li class="c7 li-bullet-0"><span class="c1">Go to the code in &ldquo;Step 1: Set up the widget&rdquo; which
                starts at line 72</span></li>
    </ol>
    <p class="c14"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 617.50px; height: 113.18px;"><img
                alt="" src="../assets/challenge-one_Step-4images/image1.png"
                style="width: 617.50px; height: 113.18px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-2 start" start="1">
        <li class="c6 li-bullet-1"><span class="c11">Update baseURL: &nbsp;Populate the Okta Org from the funAuth
                Worksheet (line 74)</span></li>
    </ol>
    <p class="c5"><span class="c0">baseUrl: &#39;&lt;Okta Org URL Here e.g.
            https://myoktaorg.oktapreview.com&gt;&#39;,</span></p>
    <p class="c5"><span class="c1">Updated to </span></p>
    <p class="c5"><span class="c0">baseUrl: &#39;https://www-paltry-book-threatening.oktapreview.com&#39;,</span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-2" start="2">
        <li class="c6 li-bullet-1"><span class="c11">Update clientId: Populate the Client ID from the funAuth Worksheet
                (line 75)</span></li>
    </ol>
    <p class="c5"><span class="c0">clientId: &#39;&lt;Okta OIDC App Client Id&gt;&#39;,</span></p>
    <p class="c5"><span class="c1">Updated to</span></p>
    <p class="c5"><span class="c0">clientId: &#39;0oaw8zu19odr0Y0d80h7&#39;,</span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-2" start="3">
        <li class="c6 li-bullet-1"><span class="c11">Update redirectUri: Populate the Application URL from the funAuth
                Worksheet (line 76)</span></li>
    </ol>
    <p class="c5"><span class="c0">redirectUri: &#39;&lt;Glitch App Homepage e.g.
            https://fun-auth-ux-template.glitch.me&gt;&#39;,</span></p>
    <p class="c5"><span class="c1">Updated to</span></p>
    <p class="c5"><span class="c0">redirectUri: &#39;https://funauth-example.glitch.me/,</span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-2" start="4">
        <li class="c6 li-bullet-1"><span class="c11">Update issuer: Populate the Default Authorization Server Issuer URL
                from the funAuth Worksheet (line 78)</span></li>
    </ol>
    <p class="c5"><span class="c0">issuer: &#39;&lt;Okta Authorization Server Issuer URL e.g.
            https://myoktaorg.oktapreview.com/oauth2/default&gt;&#39;</span></p>
    <p class="c5"><span class="c1">Updated to </span></p>
    <p class="c5"><span class="c0">issuer:
            &#39;https://www-paltry-book-threatening.oktapreview.com/oauth2/default&#39;</span></p>
    <ol class="c2 lst-kix_1tm7y4myrjfq-2" start="5">
        <li class="c6 li-bullet-1"><span class="c1">Complete! You&rsquo;ve finished the &ldquo;Set Up the Okta Hosted
                Sign-in Widget&rdquo; section</span></li>
    </ol>
    <p class="c15"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 553.63px; height: 130.03px;"><img
                alt="" src="../assets/challenge-one_Step-4images/image2.png"
                style="width: 553.63px; height: 130.03px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c8 c9"><span class="c3"></span></p>
    <p class="c8"><span class="c17">Learn more about the following topics mentioned in this section:</span></p>
    <p class="c8"><span class="c18"><a class="c12"
                href="https://www.google.com/url?q=https://developer.okta.com/code/javascript/okta_sign-in_widget/&amp;sa=D&amp;source=editors&amp;ust=1644017099067424&amp;usg=AOvVaw02v7RqRgYKKyt5x4gWGwpn">Okta
                Sign-In Widget Guide</a></span></p>
    <p class="c8"><span class="c13"><a class="c12"
                href="https://www.google.com/url?q=https://developer.okta.com/live-widget/&amp;sa=D&amp;source=editors&amp;ust=1644017099068559&amp;usg=AOvVaw2iegOoBDebZd2EuMZXyhGe">Real-time
                Okta&rsquo;s Sign-In Widget Demonstration</a></span></p>
    <p class="c8 c9"><span class="c3"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c8 c9"><span class="c3"></span></p>
    <p class="c9 c20"><span class="c22"></span></p>

<button @click='goToSectionThree'> Back to Section 3 </button>
<button style="float:right" @click='goToSectionFive'> Go to Section 5 </button>

</body>

</template>

<script>
export default {
  name: 'funauthSectionFour',
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
     goToSectionThree() {
    this.$router.push('/funauthSectionThree');
  },
    goToSectionFive(){
        this.$router.push('/funauthSectionFive');
    }
  }
}
</script>

<style scoped>
        @import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLcWpXo_CmM6erK5IinBZ-8N8u45WU12y72TEk3aAZtZE');

        .lst-kix_1tm7y4myrjfq-0>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-0, decimal) ". "
        }

        .lst-kix_1tm7y4myrjfq-3>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-3
        }

        .lst-kix_1tm7y4myrjfq-6>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-6
        }

        .lst-kix_1tm7y4myrjfq-0>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-0
        }

        .lst-kix_1tm7y4myrjfq-1>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-1, lower-latin) ". "
        }

        ol.lst-kix_1tm7y4myrjfq-7.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-7 0
        }

        .lst-kix_1tm7y4myrjfq-2>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-2, lower-roman) ". "
        }

        ol.lst-kix_1tm7y4myrjfq-2.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-2 0
        }

        .lst-kix_1tm7y4myrjfq-8>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-8, lower-roman) ". "
        }

        .lst-kix_1tm7y4myrjfq-7>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-7, lower-latin) ". "
        }

        .lst-kix_1tm7y4myrjfq-6>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-6, decimal) ". "
        }

        .lst-kix_1tm7y4myrjfq-4>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-4, lower-latin) ". "
        }

        .lst-kix_1tm7y4myrjfq-3>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-3, decimal) ". "
        }

        .lst-kix_1tm7y4myrjfq-5>li:before {
            content: ""counter(lst-ctn-kix_1tm7y4myrjfq-5, lower-roman) ". "
        }

        ol.lst-kix_1tm7y4myrjfq-4.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-4 0
        }

        ol.lst-kix_1tm7y4myrjfq-4 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-1.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-1 0
        }

        ol.lst-kix_1tm7y4myrjfq-5 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-6 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-7 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-0 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-1 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-2 {
            list-style-type: none
        }

        ol.lst-kix_1tm7y4myrjfq-3 {
            list-style-type: none
        }

        li.li-bullet-1:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        ol.lst-kix_1tm7y4myrjfq-6.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-6 0
        }

        .lst-kix_1tm7y4myrjfq-7>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-7
        }

        .lst-kix_1tm7y4myrjfq-2>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-2
        }

        ol.lst-kix_1tm7y4myrjfq-8 {
            list-style-type: none
        }

        .lst-kix_1tm7y4myrjfq-4>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-4
        }

        li.li-bullet-0:before {
            margin-left: -18pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 18pt
        }

        .lst-kix_1tm7y4myrjfq-1>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-1
        }

        ol.lst-kix_1tm7y4myrjfq-5.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-5 0
        }

        .lst-kix_1tm7y4myrjfq-5>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-5
        }

        ol.lst-kix_1tm7y4myrjfq-3.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-3 0
        }

        ol.lst-kix_1tm7y4myrjfq-0.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-0 0
        }

        ol.lst-kix_1tm7y4myrjfq-8.start {
            counter-reset: lst-ctn-kix_1tm7y4myrjfq-8 0
        }

        .lst-kix_1tm7y4myrjfq-8>li {
            counter-increment: lst-ctn-kix_1tm7y4myrjfq-8
        }

        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c13 {
            background-color: #ffffff;
            -webkit-text-decoration-skip: none;
            color: #1155cc;
            font-weight: 400;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            font-size: 12pt;
            font-family: "Roboto"
        }

        .c7 {
            margin-left: 72pt;
            padding-top: 0pt;
            padding-left: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c6 {
            margin-left: 117pt;
            padding-top: 0pt;
            padding-left: -9pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c15 {
            margin-left: 72pt;
            padding-top: 0pt;
            text-indent: 36pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c10 {
            padding-top: 2pt;
            text-indent: 36pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c19 {
            padding-top: 0pt;
            text-indent: 36pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c22 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
        }

        .c18 {
            -webkit-text-decoration-skip: none;
            color: #1155cc;
            font-weight: 400;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            font-size: 13pt;
            font-family: "Calibri"
        }

        .c14 {
            margin-left: 108pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c17 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 13pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c16 {
            margin-left: 72pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c0 {
            color: #ff0000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: italic
        }

        .c5 {
            margin-left: 144pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c3 {
            color: #2e75b5;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 13pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c1 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c4 {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c20 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c8 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c21 {
            background-color: #ffffff;
            max-width: 468pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .c11 {
            font-size: 12pt;
            font-family: "Calibri";
            font-weight: 400
        }

        .c2 {
            padding: 0;
            margin: 0
        }

        .c12 {
            color: inherit;
            text-decoration: inherit
        }

        .c9 {
            height: 11pt
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
            font-size: 11pt;
            font-family: "Arial"
        }

        h1 {
            padding-top: 20pt;
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