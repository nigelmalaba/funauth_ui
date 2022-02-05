<template>

  <body class="c18">
    <p class="c10"><span class="c8">Section Overview: </span></p>
    <p class="c10">
      <span class="c2 c17"
        >In the previous section, we deployed a custom application in the Glitch
        platform that will ultimately be integrated with Okta for identity
        services. In this section, we will utilize Okta&rsquo;s friendly
        administrative interface to set up the custom application within Okta
        itself. &nbsp;Once the custom application has been set up in your Okta
        Org, &nbsp;we will complete the Okta setup by defining a trusted origin
        within Okta.</span
      >
    </p>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <h2 class="c20" id="h.1t3h5sf">
      <span class="c8">Setup funAuth Application in Okta</span>
    </h2>
    <ol class="c3 lst-kix_fniiq6en71ez-0 start" start="1">
      <li class="c16 c21 c22 li-bullet-0">
        <span class="c2 c1">Open the Okta Admin Portal</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-1 start" start="1">
      <li class="c22 c11 li-bullet-0">
        <span class="c2 c1"
          >Copy your Okta Org URL from the funAuth Worksheet</span
        >
      </li>
      <li class="c22 c11 li-bullet-0">
        <span class="c2 c1"
          >Paste the URL in a new browser tab, and click enter</span
        >
      </li>
      <li class="c22 c11 li-bullet-0">
        <span class="c1 c2"
          >Login with Admin email and Admin password from the funAuth
          Worksheet</span
        >
      </li>
    </ol>
    <p class="c13 c16"><span class="c2 c1"></span></p>
    <ol class="c3 lst-kix_fniiq6en71ez-0" start="2">
      <li class="c10 c16 c21 li-bullet-0">
        <span class="c2 c1"
          >Create OpenID Connect Single Page Application (SPA)</span
        >
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-1 start" start="1">
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1"
          >From the Nav Menu on the left, expand Applications and select
          Applications</span
        >
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 234.00px; height: 276.00px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image6.png"
          style="width: 234.00px; height: 276.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-1" start="2">
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1">Click &ldquo;Create App Integration&rdquo; </span>
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 178.00px; height: 70.00px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image9.png"
          style="width: 178.00px; height: 70.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-1" start="3">
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1">Select &ldquo;OIDC - OpenID Connect&rdquo; </span>
      </li>
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1">Select &ldquo;Single Page Application&rdquo;</span>
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 392.50px; height: 340.90px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image11.png"
          style="width: 392.50px; height: 340.90px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-1" start="5">
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1">Click &ldquo;Next&rdquo;</span>
      </li>
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1"
          >Enter Application Details (see screenshot below for examples)</span
        >
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-2 start" start="1">
      <li class="c10 c12 li-bullet-1">
        <span class="c2 c1">General Settings:</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c1">App Integration Name: </span
        ><span class="c2 c6">funAuth</span>
      </li>
      <li class="c0 li-bullet-0">
        <span class="c1">Logo:</span><span class="c2 c6">&nbsp;blank</span>
      </li>
      <li class="c0 li-bullet-0"><span class="c2 c1">Grant type:</span></li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-4 start" start="1">
      <li class="c5 li-bullet-0">
        <span class="c1">&ldquo;Authorization Code&rdquo; = </span
        ><span class="c6">Checked </span><span class="c1">&#9989; </span>
      </li>
      <li class="c5 li-bullet-0">
        <span class="c1">&ldquo;Refresh Token&rdquo; = </span
        ><span class="c6">Unchecked</span>
      </li>
      <li class="c5 li-bullet-0">
        <span class="c1">&ldquo;Implicit (hybrid)&rdquo; = </span
        ><span class="c2 c6">Unchecked</span>
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 408.50px; height: 198.01px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image8.png"
          style="width: 408.50px; height: 198.01px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""/></span

      ><span class="c2 c6"><br /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="2">
      <li class="c10 c12 li-bullet-2">
        <span class="c2 c1">Sign-in redirect URIs</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c2 c1">Click &ldquo;+ Add URI&rdquo;</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-4 start" start="1">
      <li class="c5 li-bullet-0">
        <span class="c2 c6"
          >Populate the Application URL from the funAuth Worksheet</span
        >
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 520.50px; height: 127.23px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image7.png"
          style="width: 520.50px; height: 127.23px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""/></span

      ><span class="c2 c6"><br /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="3">
      <li class="c10 c12 li-bullet-2">
        <span class="c2 c1">Sign-out redirect URIs: </span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c2 c1">Click &ldquo;+ Add URI&rdquo;</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-4 start" start="1">
      <li class="c5 li-bullet-0">
        <span class="c2 c6"
          >Populate the Application URL from the funAuth Worksheet</span
        >
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 521.50px; height: 119.51px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image2.png"
          style="width: 521.50px; height: 119.51px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""/></span

      ><span class="c2 c6"><br /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="4">
      <li class="c10 c12 li-bullet-2">
        <span class="c2 c1">Trusted Origins:</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c1">Base URIs - </span
        ><span class="c2 c6">leave blank</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="5">
      <li class="c10 c12 li-bullet-2">
        <span class="c2 c1">Assignments:</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c1">&ldquo;Controlled Access&rdquo; = </span
        ><span class="c2 c6">Limit access to selected groups</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-4 start" start="1">
      <li class="c5 li-bullet-0">
        <span class="c1"
          >In the &ldquo;Selected groups&rdquo; search box that appears, start
          typing &ldquo;</span
        ><span class="c6">funAuth</span
        ><span class="c2 c1"
          >&rdquo; and select the funAuth group you created in your Getting
          Started steps.</span
        >
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3" start="2">
      <li class="c0 li-bullet-0">
        <span class="c1">Note: The </span><span class="c6">funAuth</span
        ><span class="c1">&nbsp;Group is now assigned to the </span
        ><span class="c6">funAuth</span
        ><span class="c1">&nbsp;application. Any user in the </span
        ><span class="c6">funAuth</span
        ><span class="c1">&nbsp;Group will be granted access to the </span
        ><span class="c6">funAuth</span
        ><span class="c2 c1">&nbsp;application. </span>
      </li>
    </ol>
    <p class="c7">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 498.50px; height: 191.09px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image5.png"
          style="width: 498.50px; height: 191.09px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""/></span

      ><span class="c2 c6"><br /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="6">
      <li class="c10 c12 li-bullet-2">
        <span class="c2 c1">Click Save<br /></span>
      </li>
    </ol>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <ol class="c3 lst-kix_fniiq6en71ez-1" start="7">
      <li class="c10 c11 li-bullet-0">
        <span class="c1"
          >After clicking Save, you will be redirected to the app&rsquo;s </span
        ><span class="c6">General</span
        ><span class="c2 c1"
          >&nbsp;settings tab of the new funAuth Application.
        </span>
      </li>
      <li class="c10 c11 li-bullet-0">
        <span class="c2 c1"
          >There are a few settings we need to change now:
        </span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-2 start" start="1">
      <li class="c10 c12 li-bullet-1">
        <span class="c2 c1"
          >On the right of the &ldquo;General Settings&rdquo; box, click
          &ldquo;Edit&rdquo;
        </span>
      </li>
    </ol>
    <p class="c10 c14">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 462.50px; height: 95.71px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image3.png"
          style="width: 462.50px; height: 95.71px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="2">
      <li class="c10 c12 li-bullet-2">
        <span class="c1">Under &ldquo;User Consent&rdquo;, </span
        ><span class="c6">uncheck</span
        ><span class="c2 c1"
          >&nbsp;the &ldquo;Require Consent&rdquo; option</span
        >
      </li>
    </ol>
    <p class="c10 c14">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 446.81px; height: 166.31px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image4.png"
          style="width: 446.81px; height: 166.31px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="3">
      <li class="c10 c12 li-bullet-1">
        <span class="c2 c1"
          >Scroll to the bottom of the page, and click &ldquo;Save&rdquo;
        </span>
      </li>
    </ol>
    <p class="c7 c15"><span class="c2 c1"></span></p>
    <ol class="c3 lst-kix_fniiq6en71ez-2" start="4">
      <li class="c10 c12 li-bullet-2">
        <span class="c1">From this same page, copy the </span
        ><span class="c2 c6">Client ID</span>
      </li>
    </ol>
    <ol class="c3 lst-kix_fniiq6en71ez-3 start" start="1">
      <li class="c0 li-bullet-0">
        <span class="c2 c1"
          >Click the Copy button to the right of the Client ID. &nbsp;</span
        >
      </li>
    </ol>
    <p class="c10 c14">
      <span class="c1">&nbsp; &nbsp; &nbsp; </span
      ><span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 434.78px; height: 198.03px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image10.png"
          style="width: 434.78px; height: 198.03px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c3 lst-kix_fniiq6en71ez-3" start="2">
      <li class="c0 li-bullet-0">
        <span class="c2 c1">Paste the Client ID in the funAuth Worksheet</span>
      </li>
    </ol>
    <p class="c10 c14">
      <span class="c1">&nbsp; &nbsp; &nbsp;</span
      ><span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 297.50px; height: 68.04px;"
        ><img
          alt=""
          src="../assets/challenge-one_Step-2_images/image1.png"
          style="width: 297.50px; height: 68.04px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <p class="c10 c15"><span class="c2 c1"></span></p>
    <ol class="c3 lst-kix_fniiq6en71ez-3" start="3">
      <li class="c0 li-bullet-0">
        <span class="c2 c1">Save your funAuth Worksheet file. </span>
      </li>
    </ol>
    <p class="c10 c15 c16"><span class="c2 c1"></span></p>
    <p class="c13 c23"><span class="c2 c1"></span></p>
    <p class="c13"><span class="c2 c1"></span></p>
    <p class="c13"><span class="c2 c1"></span></p>
    <p class="c10">
      <span class="c2 c17"
        >Learn more about the following topics mentioned in this section:</span
      >
    </p>
    <p class="c10">
      <span class="c9"
        ><a
          class="c4"
          href="https://www.google.com/url?q=https://developer.okta.com/docs/concepts/oauth-openid/&amp;sa=D&amp;source=editors&amp;ust=1644014620827154&amp;usg=AOvVaw39_ulJ779QPS0YhCE2zyNr"
          >OAuth 2.0 and OpenID Connect Overview</a
        ></span
      >
    </p>
    <p class="c10">
      <span class="c9"
        ><a
          class="c4"
          href="https://www.google.com/url?q=https://help.okta.com/en/prod/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm&amp;sa=D&amp;source=editors&amp;ust=1644014620827568&amp;usg=AOvVaw0VjvQ9DWFNQxtsU1ShpZ78"
          >Create an OIDC Application in Okta</a
        ></span
      >
    </p>
    <p class="c10">
      <span class="c9"
        ><a
          class="c4"
          href="https://www.google.com/url?q=https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1&amp;sa=D&amp;source=editors&amp;ust=1644014620827925&amp;usg=AOvVaw0WEKXsbvmbDxHoviGzqa5h"
          >Identity, Claims, &amp; Tokens &ndash; An OpenID Connect Primer</a
        ></span
      >
    </p>
    <p class="c10 c15"><span class="c8"></span></p>
    <hr style="page-break-before:always;display:none;" />
    <p class="c10 c15"><span class="c2 c19"></span></p>

<button @click='goToSectionOne'> Back to Section 1 </button>
<button style="float:right" @click='goToSectionThree'> Go to Section 3 </button>

  </body>
</template>

<script>
export default {
  name: 'funauthSectionTwo',
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
     goToSectionOne() {
    this.$router.push('/funauthSectionOne');
  },
    goToSectionThree(){
        this.$router.push('/funauthSectionThree');
    }
  }
}
</script>




<style scoped>
      @import url("https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98");

      .lst-kix_fniiq6en71ez-8 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-8, lower-roman) ". ";
      }

      .lst-kix_fniiq6en71ez-2 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-2;
      }

      .lst-kix_fniiq6en71ez-7 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-7, lower-latin) ". ";
      }

      ol.lst-kix_fniiq6en71ez-3.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-3 0;
      }

      .lst-kix_fniiq6en71ez-4 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-4, lower-latin) ". ";
      }

      .lst-kix_fniiq6en71ez-5 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-5, lower-roman) ". ";
      }

      ol.lst-kix_fniiq6en71ez-8.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-8 0;
      }

      .lst-kix_fniiq6en71ez-6 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-6, decimal) ". ";
      }

      .lst-kix_fniiq6en71ez-7 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-7;
      }

      ol.lst-kix_fniiq6en71ez-1 {
        list-style-type: none;
      }

      .lst-kix_fniiq6en71ez-0 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-0, decimal) ". ";
      }

      ol.lst-kix_fniiq6en71ez-0 {
        list-style-type: none;
      }

      .lst-kix_fniiq6en71ez-1 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-1, lower-latin) ". ";
      }

      ol.lst-kix_fniiq6en71ez-1.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-1 0;
      }

      .lst-kix_fniiq6en71ez-3 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-3, decimal) ". ";
      }

      .lst-kix_fniiq6en71ez-0 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-0;
      }

      .lst-kix_fniiq6en71ez-2 > li:before {
        content: "" counter(lst-ctn-kix_fniiq6en71ez-2, lower-roman) ". ";
      }

      .lst-kix_fniiq6en71ez-3 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-3;
      }

      ol.lst-kix_fniiq6en71ez-6.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-6 0;
      }

      .lst-kix_fniiq6en71ez-6 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-6;
      }

      li.li-bullet-1:before {
        margin-left: -9pt;
        white-space: nowrap;
        display: inline-block;
        min-width: 9pt;
      }

      ol.lst-kix_fniiq6en71ez-8 {
        list-style-type: none;
      }

      ol.lst-kix_fniiq6en71ez-7 {
        list-style-type: none;
      }

      ol.lst-kix_fniiq6en71ez-6 {
        list-style-type: none;
      }

      ol.lst-kix_fniiq6en71ez-4.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-4 0;
      }

      ol.lst-kix_fniiq6en71ez-5 {
        list-style-type: none;
      }

      ol.lst-kix_fniiq6en71ez-4 {
        list-style-type: none;
      }

      li.li-bullet-0:before {
        margin-left: -18pt;
        white-space: nowrap;
        display: inline-block;
        min-width: 18pt;
      }

      li.li-bullet-2:before {
        margin-left: -9pt;
        white-space: nowrap;
        display: inline-block;
        min-width: 9pt;
      }

      ol.lst-kix_fniiq6en71ez-3 {
        list-style-type: none;
      }

      ol.lst-kix_fniiq6en71ez-2 {
        list-style-type: none;
      }

      .lst-kix_fniiq6en71ez-1 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-1;
      }

      .lst-kix_fniiq6en71ez-4 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-4;
      }

      ol.lst-kix_fniiq6en71ez-0.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-0 0;
      }

      ol.lst-kix_fniiq6en71ez-7.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-7 0;
      }

      ol.lst-kix_fniiq6en71ez-5.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-5 0;
      }

      .lst-kix_fniiq6en71ez-8 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-8;
      }

      ol.lst-kix_fniiq6en71ez-2.start {
        counter-reset: lst-ctn-kix_fniiq6en71ez-2 0;
      }

      .lst-kix_fniiq6en71ez-5 > li {
        counter-increment: lst-ctn-kix_fniiq6en71ez-5;
      }

      ol {
        margin: 0;
        padding: 0;
      }

      table td,
      table th {
        padding: 0;
      }

      .c0 {
        margin-left: 180pt;
        padding-top: 0pt;
        padding-left: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c20 {
        padding-top: 2pt;
        text-indent: 36pt;
        padding-bottom: 0pt;
        line-height: 1;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c5 {
        margin-left: 216pt;
        padding-top: 0pt;
        padding-left: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c13 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.0791666666666666;
        orphans: 2;
        widows: 2;
        text-align: left;
        height: 11pt;
      }

      .c8 {
        color: #2e75b5;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 13pt;
        font-family: "Calibri";
        font-style: normal;
      }

      .c9 {
        -webkit-text-decoration-skip: none;
        color: #1155cc;
        font-weight: 400;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        font-size: 13pt;
        font-family: "Calibri";
      }

      .c7 {
        margin-left: 144pt;
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c10 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c22 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.0791666666666666;
        orphans: 2;
        widows: 2;
        text-align: left;
      }

      .c2 {
        color: #000000;
        text-decoration: none;
        vertical-align: baseline;
        font-style: normal;
      }

      .c1 {
        font-size: 12pt;
        font-family: "Calibri";
        font-weight: 400;
      }

      .c19 {
        font-weight: 400;
        font-size: 11pt;
        font-family: "Arial";
      }

      .c6 {
        font-size: 12pt;
        font-family: "Calibri";
        font-weight: 700;
      }

      .c17 {
        font-weight: 400;
        font-size: 13pt;
        font-family: "Calibri";
      }

      .c18 {
        background-color: #ffffff;
        max-width: 468pt;
        padding: 72pt 72pt 72pt 72pt;
      }

      .c4 {
        color: inherit;
        text-decoration: inherit;
      }

      .c3 {
        padding: 0;
        margin: 0;
      }

      .c12 {
        margin-left: 153pt;
        padding-left: -9pt;
      }

      .c11 {
        margin-left: 108pt;
        padding-left: 0pt;
      }

      .c14 {
        margin-left: 180pt;
      }

      .c23 {
        margin-left: 108pt;
      }

      .c15 {
        height: 11pt;
      }

      .c16 {
        margin-left: 72pt;
      }

      .c21 {
        padding-left: 0pt;
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
        text-align: left;
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
        text-align: left;
      }

      li {
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }

      p {
        margin: 0;
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
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
        text-align: left;
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
        text-align: left;
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
        text-align: left;
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
        text-align: left;
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
        text-align: left;
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
  
