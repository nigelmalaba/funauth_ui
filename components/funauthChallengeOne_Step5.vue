<template>

<body class="c15">
    <p class="c11"><span class="c10 c12">Section Overview: </span></p>
    <p class="c11"><span class="c10">In the previous section, we modified the custom application in order to complete
            the integration with Okta for identity services. &nbsp;In this section, we will test our custom application
            and validate that your test user can authenticate successfully.</span></p>
    <p class="c8 c14"><span class="c2"></span></p>
    <p class="c14 c8"><span class="c2"></span></p>
    <p class="c14"><span class="c10 c17">Show Off</span></p>
    <ol class="c6 lst-kix_ay14ggtqmlzj-1 start" start="1">
        <li class="c4 li-bullet-0"><span class="c2">Launch a new browser profile or incognito tab</span></li>
    </ol>
    <ol class="c6 lst-kix_ay14ggtqmlzj-2 start" start="1">
        <li class="c3 li-bullet-1"><span class="c2">MUST be a different browser session than the one you have been using
                for the Okta Admin portal. </span></li>
    </ol>
    <ol class="c6 lst-kix_ay14ggtqmlzj-1" start="2">
        <li class="c4 li-bullet-0"><span class="c2">Go to the Application URL from the funAuth Worksheet</span></li>
    </ol>
    <ol class="c6 lst-kix_ay14ggtqmlzj-2 start" start="1">
        <li class="c3 li-bullet-1"><span class="c2">Login with the test user created in previous steps.</span></li>
        <li class="c3 li-bullet-1"><span class="c2">Go to the funAuth Worksheet and copy the &ldquo;Test user&rdquo; for
                the Username and &ldquo;Test user&rsquo;s password&rdquo; for the Password.</span></li>
    </ol>
    <p class="c11 c18"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 480.50px; height: 594.50px;"><img
                alt="" src="../assets/challenge-one_Step-5images/image2.png"
                style="width: 480.50px; height: 594.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <ol class="c6 lst-kix_ay14ggtqmlzj-1" start="3">
        <li class="c4 li-bullet-0"><span class="c2">If successful, you will see your tokens. Detailed information on
                tokens can be found in the glossary tab.</span></li>
    </ol>
    <ol class="c6 lst-kix_ay14ggtqmlzj-2 start" start="1">
        <li class="c11 c13 li-bullet-1"><span class="c2">ID Token:</span></li>
    </ol>
    <p class="c5"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 479.50px; height: 251.51px;"><img
                alt="" src="../assets/challenge-one_Step-5images/image3.png"
                style="width: 479.50px; height: 251.51px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c6 lst-kix_ay14ggtqmlzj-2" start="2">
        <li class="c11 c13 li-bullet-1"><span class="c2">Access Token:</span></li>
    </ol>
    <p class="c5"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 482.01px; height: 220.15px;"><img
                alt="" src="../assets/challenge-one_Step-5images/image1.png"
                style="width: 482.01px; height: 220.15px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c5 c8"><span class="c2"></span></p>
    <h1 class="c1" id="h.6p60023y7rsm"><span class="c2">Learn more about the following topics mentioned in this
            section:</span></h1>
    <p class="c11"><span class="c7"><a class="c19"
                href="https://www.google.com/url?q=https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1&amp;sa=D&amp;source=editors&amp;ust=1644017235126247&amp;usg=AOvVaw1VkweBxa9O_-lpD-KQU1hE">Identity,
                Claims, &amp; Tokens &ndash; An OpenID Connect Primer</a></span></p>
    <p class="c11 c8"><span class="c2"></span></p>
    <p class="c8 c16"><span class="c9"></span></p>

<button @click='goToSectionFour'> Back to Section 4 </button>
<button @click='goToHome' style="float:right"> Home </button>
</body>

</template>

<script>
export default {
  name: 'funauthSectionFive',
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
     goToSectionFour() {
    this.$router.push('/funauthSectionFour')
  },
  goToHome(){
      this.$router.push('/')
  }
}
}
</script>


<style scoped>

@import url('https://themes.googleusercontent.com/fonts/css?kit=wAPX1HepqA24RkYW1AuHYA');

ol.lst-kix_ay14ggtqmlzj-6.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-6 0
}

ol.lst-kix_ay14ggtqmlzj-1.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-1 0
}

ol.lst-kix_ay14ggtqmlzj-4.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-4 0
}

.lst-kix_ay14ggtqmlzj-5>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-5
}

.lst-kix_ay14ggtqmlzj-8>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-8
}

.lst-kix_ay14ggtqmlzj-0>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-0
}

ol.lst-kix_ay14ggtqmlzj-3 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-2 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-1 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-2.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-2 0
}

ol.lst-kix_ay14ggtqmlzj-0 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-7 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-6 {
    list-style-type: none
}

ol.lst-kix_ay14ggtqmlzj-5 {
    list-style-type: none
}

.lst-kix_ay14ggtqmlzj-8>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-8, lower-roman) ". "
}

ol.lst-kix_ay14ggtqmlzj-4 {
    list-style-type: none
}

.lst-kix_ay14ggtqmlzj-7>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-7, lower-latin) ". "
}

ol.lst-kix_ay14ggtqmlzj-7.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-7 0
}

ol.lst-kix_ay14ggtqmlzj-8 {
    list-style-type: none
}

.lst-kix_ay14ggtqmlzj-5>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-5, lower-roman) ". "
}

.lst-kix_ay14ggtqmlzj-6>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-6, decimal) ". "
}

.lst-kix_ay14ggtqmlzj-1>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-1
}

.lst-kix_ay14ggtqmlzj-3>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-3, decimal) ". "
}

.lst-kix_ay14ggtqmlzj-4>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-4
}

ol.lst-kix_ay14ggtqmlzj-0.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-0 0
}

.lst-kix_ay14ggtqmlzj-7>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-7
}

.lst-kix_ay14ggtqmlzj-0>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-0, decimal) ". "
}

.lst-kix_ay14ggtqmlzj-4>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-4, lower-latin) ". "
}

li.li-bullet-1:before {
    margin-left: -9pt;
    white-space: nowrap;
    display: inline-block;
    min-width: 9pt
}

.lst-kix_ay14ggtqmlzj-1>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-1, decimal) ". "
}

li.li-bullet-0:before {
    margin-left: -18pt;
    white-space: nowrap;
    display: inline-block;
    min-width: 18pt
}

.lst-kix_ay14ggtqmlzj-2>li:before {
    content: ""counter(lst-ctn-kix_ay14ggtqmlzj-2, lower-latin) ". "
}

ol.lst-kix_ay14ggtqmlzj-5.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-5 0
}

.lst-kix_ay14ggtqmlzj-2>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-2
}

.lst-kix_ay14ggtqmlzj-3>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-3
}

.lst-kix_ay14ggtqmlzj-6>li {
    counter-increment: lst-ctn-kix_ay14ggtqmlzj-6
}

ol.lst-kix_ay14ggtqmlzj-8.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-8 0
}

ol.lst-kix_ay14ggtqmlzj-3.start {
    counter-reset: lst-ctn-kix_ay14ggtqmlzj-3 0
}

ol {
    margin: 0;
    padding: 0
}

table td,
table th {
    padding: 0
}

.c0 {
    margin-left: 36pt;
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left;
    height: 11pt
}

.c3 {
    margin-left: 117pt;
    padding-top: 0pt;
    padding-left: -9pt;
    padding-bottom: 0pt;
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c4 {
    margin-left: 72pt;
    padding-top: 0pt;
    padding-left: 0pt;
    padding-bottom: 0pt;
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c9 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 11pt;
    font-family: "Arial";
    font-style: normal
}

.c14 {
    margin-left: 36pt;
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.0791666666666666;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c7 {
    -webkit-text-decoration-skip: none;
    color: #1155cc;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    font-size: 13pt;
    font-family: "Calibri"
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

.c1 {
    padding-top: 12pt;
    padding-bottom: 0pt;
    line-height: 1.0791666666666666;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c5 {
    margin-left: 90pt;
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c11 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c16 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.15;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c12 {
    color: #2e75b5;
    text-decoration: none;
    vertical-align: baseline;
    font-style: normal
}

.c10 {
    font-size: 13pt;
    font-family: "Calibri";
    font-weight: 400
}

.c15 {
    background-color: #ffffff;
    max-width: 468pt;
    padding: 72pt 72pt 72pt 72pt
}

.c13 {
    margin-left: 99pt;
    padding-left: -9pt
}

.c6 {
    padding: 0;
    margin: 0
}

.c19 {
    color: inherit;
    text-decoration: inherit
}

.c17 {
    color: #2e75b5
}

.c8 {
    height: 11pt
}

.c18 {
    margin-left: 99pt
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
    text-align: left;
}

</style>