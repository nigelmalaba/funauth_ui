<template>
    <body>      
    <p class="c1"><span class="c7 c21">Section Overview: </span></p>
    <p class="c1"><span class="c16">In this first section of Challenge 1, we will deploy a custom application utilizing
            the Glitch platform that will ultimately be integrated with Okta for identity services. &nbsp;Once the
            custom application has been deployed in Glitch, &nbsp;we will leverage Okta&rsquo;s friendly administrative
            interface to set up the custom application in your Okta Org. &nbsp;</span></p>
    <p class="c1 c12"><span class="c16"></span></p>
    <p class="c1 c12"><span class="c16"></span></p>
    <p class="c1 c23"><span class="c7">Setup Demo Glitch Application</span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-1 start" start="1">
        <li class="c1 c8 li-bullet-0"><span class="c2">Ensure that you are logged into Glitch</span></li>
        <li class="c1 c8 li-bullet-0"><span class="c15">Go to </span><span class="c15 c17"><a class="c10"
                    href="https://www.google.com/url?q=https://glitch.com/~fun-auth-ux-template&amp;sa=D&amp;source=editors&amp;ust=1644014469813728&amp;usg=AOvVaw35hdWOy0JWxQidX41VbUFS">https://glitch.com/~fun-auth-ux-template</a></span>
        </li>
        <li class="c1 c8 li-bullet-0"><span class="c2">Click &ldquo;View Source&rdquo;</span></li>
        <li class="c1 c8 li-bullet-0"><span class="c2">Remix the project</span></li>
    </ol>
    <ol class="c4 lst-kix_qobjbxhad1in-2 start" start="1">
        <li class="c0 li-bullet-1"><span class="c2">On the &ldquo;fun-auth-ux-template&rdquo; click the down arrow to
                see options</span></li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 300.50px; height: 163.82px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image7.png"
                style="width: 300.50px; height: 163.82px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-2" start="2">
        <li class="c0 li-bullet-2"><span class="c2">Choose &ldquo;Remix Project&rdquo;</span></li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 192.00px; height: 198.30px;"><img
                alt="Graphical user interface, text, application, chat or text message

Description automatically generated" src="../assets/challenge-one_step-1-images/image10.png"
                style="width: 192.00px; height: 198.30px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-2" start="3">
        <li class="c0 li-bullet-2"><span class="c2">It will remix the project to your account, give it a new randomly
                generated name, and Glitch URL. For example:</span></li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 192.00px; height: 38.40px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image5.png"
                style="width: 192.00px; height: 38.40px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-2" start="4">
        <li class="c0 li-bullet-1"><span class="c15">(</span><span class="c15 c20">Optional</span><span class="c15">)
                Change the name of your Glitch Application</span></li>
    </ol>
    <ol class="c4 lst-kix_qobjbxhad1in-3 start" start="1">
        <li class="c1 c3 li-bullet-0"><span class="c2">Use the drop down by the name &gt; click the name and type the
                new desired name. </span></li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 266.00px; height: 129.00px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image2.png"
                style="width: 266.00px; height: 129.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-1" start="5">
        <li class="c1 c8 li-bullet-0"><span class="c2">Launch the remixed Glitch application</span></li>
    </ol>
    <ol class="c4 lst-kix_qobjbxhad1in-2 start" start="1">
        <li class="c0 li-bullet-1"><span class="c2">Click the &ldquo;Show&rdquo; dropdown and click &ldquo;In a new
                Window&rdquo;</span></li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 261.00px; height: 180.00px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image1.png"
                style="width: 261.00px; height: 180.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-2" start="2">
        <li class="c0 li-bullet-2"><span class="c2">You will see the application, which has no login...for now.</span>
        </li>
    </ol>
    <p class="c1 c6"><span
            style="overflow: hidden; display: inline-block; margin: -0.00px 0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 460.54px; height: 228.00px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image6.png"
                style="width: 460.54px; height: 228.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c2"><br></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-1" start="6">
        <li class="c1 c8 li-bullet-0"><span class="c2">Copy the URL of your glitch application from your browser</span>
        </li>
    </ol>
    <p class="c1 c13"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 489.00px; height: 109.00px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image8.png"
                style="width: 489.00px; height: 109.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c2"><br><br><br></span></p>
    <p class="c1 c11"><span class="c2"></span></p>
    <p class="c1 c11"><span class="c2"><br></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-1" start="7">
        <li class="c1 c8 li-bullet-0"><span class="c2">Paste the URL into the &ldquo;Application URL&rdquo; field in the
                funAuth Worksheet (worksheet.txt)</span></li>
    </ol>
    <p class="c1 c13"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 555.50px; height: 126.53px;"><img
                alt="" src="../assets/challenge-one_step-1-images/image3.png"
                style="width: 555.50px; height: 126.53px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span><span class="c2"><br><br></span></p>
    <ol class="c4 lst-kix_qobjbxhad1in-1" start="8">
        <li class="c1 c8 li-bullet-0"><span class="c2">Congratulations, you&rsquo;ve completed this section of the
                challenge! </span></li>
    </ol>
    <p class="c1 c12"><span class="c2"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c1 c12"><span class="c7 c21"></span></p>
    <p class="c12 c14"><span class="c5"></span></p>

    <button @click="goToChallengeOneOverview()"> Back To Overview</button>
    <button style="float:right" @click="goToSectionTwo()"> Go to Challenge One Section 2  </button>
</body>

</template>



<script>
/*import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})*/

export default {
  name: 'funauthSectionOne',
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
     goToChallengeOneOverview() {
    this.$router.push('/funauth');
  },
    goToSectionTwo(){
        this.$router.push('/funauthSectionTwo');
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
            min-width: 18pt;
            font-size: 15pt
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
            padding: 0
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
            text-align: left
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
            font-size: 11pt;
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