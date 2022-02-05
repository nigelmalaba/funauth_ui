<template>

<body class="c19">
    <p class="c5"><span class="c9">Section Overview: </span></p>
    <p class="c5"><span class="c10 c15">In the previous section, we utilized Okta&rsquo;s friendly administrative
            interface to set up the custom application within your Okta Org. In this section, we will complete the
            custom application&rsquo;s Okta setup by defining the trusted origin. &nbsp;Once the trusted origin has been
            defined, &nbsp;we will modify the custom application in order to complete the integration with Okta for
            identity services.</span></p>
    <p class="c6 c12"><span class="c10 c0"></span></p>
    <p class="c12 c6"><span class="c10 c0"></span></p>
    <h2 class="c7 c17" id="h.8vh5vlhpnqc7"><span class="c9">Add the Trusted Origin</span></h2>
    <p class="c5 c7"><span class="c10 c0">By setting our Glitch URL as a Trusted Origin it will allow the Application to
            interact with Okta APIs.</span></p>
    <ol class="c3 lst-kix_po66l9ph1282-1 start" start="1">
        <li class="c2 li-bullet-0"><span class="c0">From your Okta Admin Dashboard, navigate to Security &gt; API &gt;
                Trusted Origins &gt; click &ldquo;Add Origin&rdquo;</span></li>
    </ol>
    <ol class="c3 lst-kix_po66l9ph1282-2 start" start="1">
        <li class="c12 c14 li-bullet-1"><span class="c0">Enter name: funAuth</span></li>
        <li class="c12 c14 li-bullet-1"><span class="c0">Origin URL: Populate the Application URL from the funAuth
                Worksheet</span></li>
        <li class="c12 c14 li-bullet-1"><span class="c0">Type: Check CORS and Redirect</span></li>
    </ol>
    <p class="c8"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 434.00px; height: 265.00px;"><img
                alt="" src="../assets/challenge-one_Step-3images/image1.png"
                style="width: 434.00px; height: 265.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c3 lst-kix_po66l9ph1282-2" start="4">
        <li class="c12 c14 li-bullet-2"><span class="c10 c0">Click Save</span></li>
    </ol>
    <p class="c6 c11"><span class="c0 c10"></span></p>
    <p class="c5"><span class="c15">Learn more about the following topics mentioned in this section:</span></p>
    <p class="c5"><span class="c13"><a class="c16"
                href="https://www.google.com/url?q=https://help.okta.com/en/prod/Content/Topics/Security/API.htm&amp;sa=D&amp;source=editors&amp;ust=1644016906138454&amp;usg=AOvVaw0viwkRAhnlYzkNWX5bO4DZ">Trusted
                Origins</a></span></p>
    <p class="c5 c6"><span class="c9"></span></p>
    <p class="c5 c6"><span class="c9"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c5 c6"><span class="c9"></span></p>
    <p class="c6 c18"><span class="c1"></span></p>

    <button @click='goToSectionTwo'> Back to Section 2 </button>
<button style="float:right" @click='goToSectionFour'> Go to Section 4 </button>

</body>



</template>

<script>
export default {
  name: 'funauthSectionThree',
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
     goToSectionTwo() {
    this.$router.push('/funauthSectionTwo');
  },
    goToSectionFour(){
        this.$router.push('/funauthSectionFour');
    }
  }
}
</script>

<style scoped>
        @import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98');

        ol.lst-kix_po66l9ph1282-3.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-3 0
        }

        ol.lst-kix_po66l9ph1282-5.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-5 0
        }

        ol.lst-kix_po66l9ph1282-1 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-0 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-3 {
            list-style-type: none
        }

        .lst-kix_po66l9ph1282-8>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-8
        }

        ol.lst-kix_po66l9ph1282-2 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-5 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-4 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-7 {
            list-style-type: none
        }

        .lst-kix_po66l9ph1282-8>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-8, lower-roman) ". "
        }

        .lst-kix_po66l9ph1282-5>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-5
        }

        ol.lst-kix_po66l9ph1282-6 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-0.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-0 0
        }

        .lst-kix_po66l9ph1282-2>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-2
        }

        ol.lst-kix_po66l9ph1282-8.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-8 0
        }

        .lst-kix_po66l9ph1282-0>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-0
        }

        .lst-kix_po66l9ph1282-3>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-3, decimal) ". "
        }

        ol.lst-kix_po66l9ph1282-4.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-4 0
        }

        .lst-kix_po66l9ph1282-6>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-6
        }

        .lst-kix_po66l9ph1282-0>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-0, decimal) ". "
        }

        .lst-kix_po66l9ph1282-4>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-4, lower-latin) ". "
        }

        li.li-bullet-1:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        .lst-kix_po66l9ph1282-7>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-7, lower-latin) ". "
        }

        ol.lst-kix_po66l9ph1282-8 {
            list-style-type: none
        }

        ol.lst-kix_po66l9ph1282-2.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-2 0
        }

        .lst-kix_po66l9ph1282-5>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-5, lower-roman) ". "
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

        .lst-kix_po66l9ph1282-6>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-6, decimal) ". "
        }

        .lst-kix_po66l9ph1282-3>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-3
        }

        ol.lst-kix_po66l9ph1282-6.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-6 0
        }

        ol.lst-kix_po66l9ph1282-7.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-7 0
        }

        ol.lst-kix_po66l9ph1282-1.start {
            counter-reset: lst-ctn-kix_po66l9ph1282-1 0
        }

        .lst-kix_po66l9ph1282-1>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-1
        }

        .lst-kix_po66l9ph1282-4>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-4
        }

        .lst-kix_po66l9ph1282-1>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-1, lower-latin) ". "
        }

        .lst-kix_po66l9ph1282-2>li:before {
            content: ""counter(lst-ctn-kix_po66l9ph1282-2, lower-roman) ". "
        }

        .lst-kix_po66l9ph1282-7>li {
            counter-increment: lst-ctn-kix_po66l9ph1282-7
        }

        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c2 {
            margin-left: 72pt;
            padding-top: 0pt;
            padding-left: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
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

        .c11 {
            margin-left: 72pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c17 {
            padding-top: 2pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c1 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Arial";
            font-style: normal
        }

        .c8 {
            margin-left: 135pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c13 {
            -webkit-text-decoration-skip: none;
            color: #1155cc;
            font-weight: 400;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            font-size: 13pt;
            font-family: "Calibri"
        }

        .c9 {
            color: #2e75b5;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 13pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c5 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c18 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c12 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c10 {
            color: #000000;
            text-decoration: none;
            vertical-align: baseline;
            font-style: normal
        }

        .c15 {
            font-weight: 400;
            font-size: 13pt;
            font-family: "Calibri"
        }

        .c0 {
            font-size: 12pt;
            font-family: "Calibri";
            font-weight: 400
        }

        .c19 {
            background-color: #ffffff;
            max-width: 468pt;
            padding: 72pt 72pt 72pt 72pt
        }

        .c16 {
            color: inherit;
            text-decoration: inherit
        }

        .c3 {
            padding: 0;
            margin: 0
        }

        .c14 {
            margin-left: 117pt;
            padding-left: -9pt
        }

        .c6 {
            height: 11pt
        }

        .c7 {
            text-indent: 36pt
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