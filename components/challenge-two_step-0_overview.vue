<template>
    

<body class="c75">
    <div>
        <p class="c6"><span class="c2"></span></p>
    </div>
    <p class="c6"><span class="c2"></span></p>
    <p class="c24"><span class="c55 c3">funAuth</span></p>
    <p class="c24"><span class="c84">An Okta Developer Experience</span></p>
    <p class="c24 c48"><span class="c3 c51"></span></p>
    <p class="c24"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 444.00px; height: 444.00px;"><img
                alt="Icon

Description automatically generated" src="images-challenge-two/johnny-five.png"
                style="width: 444.00px; height: 444.00px; margin-left: -0.00px; margin-top: -0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c24 c48"><span class="c73 c3 c56 c78"></span></p>
    <h1 class="c60" id="h.hu5ww5q0ff89"><span>Challenge 2 Overview</span><span class="c30 c18">&nbsp; &ndash; Protect the
            API</span></h1>
    <p class="c9"><span class="c2">This challenge will use a custom Authorization Server for minting tokens while
            leveraging an inline token hook to add additional information to the token. &nbsp;This demonstrates how
            it&rsquo;s possible to decorate a token with additional information from an external source (i.e. outside of
            Okta). This additional information from an external source will also be used to determine which endpoints a
            user can access. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
    <p class="c6"><span class="c2"></span></p>
    <p class="c9"><span class="c2">There are 3 API endpoints that have varying levels of access but have no fear, by the
            end of the funAuth Challenge you can access them all. </span></p>
    <p class="c24"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 474.63px; height: 299.15px;"><img
                alt="" src="images-challenge-two/challenge-two-diagram1.png"
                style="width: 474.63px; height: 299.15px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c24"><span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 373.00px; height: 392.18px;"><img
                alt="" src="images-challenge-two/challenge-two-diagram2.png"
                style="width: 373.00px; height: 392.18px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title=""></span></p>
    <p class="c6"><span class="c17 c18"></span></p>
    <button style="float:right" @click = 'goToSection3'> Go To Challenge Two Section 2 </button>
    <button style="float:right" @click = 'goToSection1'> Back to Section 1 </button>
</body>

</template>

<script>
export default {
  name: 'funauthChallengeTwo',
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
    this.$router.push('/funauth');
  }
  }
}
</script>



<style scoped>
    /*<meta content="text/html; charset=UTF-8" http-equiv="content-type">*/
        @import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLcWpXo_CmM6erK5IinBZ-8N8u45WU12y72TEk3aAZtZE');

        .lst-kix_list_33-5>li {
            counter-increment: lst-ctn-kix_list_33-5
        }

        ol.lst-kix_list_7-0 {
            list-style-type: none
        }

        .lst-kix_list_2-1>li {
            counter-increment: lst-ctn-kix_list_2-1
        }

        .lst-kix_list_21-8>li {
            counter-increment: lst-ctn-kix_list_21-8
        }

        ol.lst-kix_list_33-5.start {
            counter-reset: lst-ctn-kix_list_33-5 0
        }

        ol.lst-kix_list_9-0.start {
            counter-reset: lst-ctn-kix_list_9-0 0
        }

        ol.lst-kix_list_30-0.start {
            counter-reset: lst-ctn-kix_list_30-0 0
        }

        ol.lst-kix_list_13-4.start {
            counter-reset: lst-ctn-kix_list_13-4 0
        }

        .lst-kix_list_30-6>li {
            counter-increment: lst-ctn-kix_list_30-6
        }

        .lst-kix_list_13-0>li {
            counter-increment: lst-ctn-kix_list_13-0
        }

        ol.lst-kix_list_20-2.start {
            counter-reset: lst-ctn-kix_list_20-2 0
        }

        .lst-kix_list_5-0>li {
            counter-increment: lst-ctn-kix_list_5-0
        }

        ol.lst-kix_list_2-3.start {
            counter-reset: lst-ctn-kix_list_2-3 0
        }

        ol.lst-kix_list_7-5 {
            list-style-type: none
        }

        ol.lst-kix_list_7-6 {
            list-style-type: none
        }

        ol.lst-kix_list_7-7 {
            list-style-type: none
        }

        ol.lst-kix_list_7-8 {
            list-style-type: none
        }

        ol.lst-kix_list_7-1 {
            list-style-type: none
        }

        ol.lst-kix_list_7-2 {
            list-style-type: none
        }

        ol.lst-kix_list_7-3 {
            list-style-type: none
        }

        ol.lst-kix_list_7-4 {
            list-style-type: none
        }

        ol.lst-kix_list_23-2.start {
            counter-reset: lst-ctn-kix_list_23-2 0
        }

        ol.lst-kix_list_5-3.start {
            counter-reset: lst-ctn-kix_list_5-3 0
        }

        .lst-kix_list_4-3>li {
            counter-increment: lst-ctn-kix_list_4-3
        }

        ol.lst-kix_list_17-1.start {
            counter-reset: lst-ctn-kix_list_17-1 0
        }

        .lst-kix_list_35-7>li {
            counter-increment: lst-ctn-kix_list_35-7
        }

        .lst-kix_list_24-7>li {
            counter-increment: lst-ctn-kix_list_24-7
        }

        .lst-kix_list_29-8>li {
            counter-increment: lst-ctn-kix_list_29-8
        }

        ol.lst-kix_list_30-5.start {
            counter-reset: lst-ctn-kix_list_30-5 0
        }

        .lst-kix_list_18-8>li {
            counter-increment: lst-ctn-kix_list_18-8
        }

        ol.lst-kix_list_8-8.start {
            counter-reset: lst-ctn-kix_list_8-8 0
        }

        ol.lst-kix_list_26-7.start {
            counter-reset: lst-ctn-kix_list_26-7 0
        }

        .lst-kix_list_7-2>li {
            counter-increment: lst-ctn-kix_list_7-2
        }

        .lst-kix_list_32-8>li {
            counter-increment: lst-ctn-kix_list_32-8
        }

        .lst-kix_list_24-7>li:before {
            content: ""counter(lst-ctn-kix_list_24-7, lower-latin) ". "
        }

        ol.lst-kix_list_16-5 {
            list-style-type: none
        }

        ol.lst-kix_list_16-6 {
            list-style-type: none
        }

        .lst-kix_list_1-4>li {
            counter-increment: lst-ctn-kix_list_1-4
        }

        .lst-kix_list_24-8>li:before {
            content: ""counter(lst-ctn-kix_list_24-8, lower-roman) ". "
        }

        ol.lst-kix_list_16-7 {
            list-style-type: none
        }

        ol.lst-kix_list_16-8 {
            list-style-type: none
        }

        ol.lst-kix_list_1-6.start {
            counter-reset: lst-ctn-kix_list_1-6 0
        }

        ol.lst-kix_list_16-1 {
            list-style-type: none
        }

        ol.lst-kix_list_9-5.start {
            counter-reset: lst-ctn-kix_list_9-5 0
        }

        ol.lst-kix_list_16-2 {
            list-style-type: none
        }

        ol.lst-kix_list_16-3 {
            list-style-type: none
        }

        ol.lst-kix_list_16-4 {
            list-style-type: none
        }

        .lst-kix_list_24-2>li:before {
            content: ""counter(lst-ctn-kix_list_24-2, lower-roman) ". "
        }

        ol.lst-kix_list_16-0 {
            list-style-type: none
        }

        ol.lst-kix_list_20-7.start {
            counter-reset: lst-ctn-kix_list_20-7 0
        }

        .lst-kix_list_24-3>li:before {
            content: ""counter(lst-ctn-kix_list_24-3, decimal) ". "
        }

        .lst-kix_list_24-4>li:before {
            content: ""counter(lst-ctn-kix_list_24-4, lower-latin) ". "
        }

        ol.lst-kix_list_34-2.start {
            counter-reset: lst-ctn-kix_list_34-2 0
        }

        .lst-kix_list_9-4>li {
            counter-increment: lst-ctn-kix_list_9-4
        }

        .lst-kix_list_24-5>li:before {
            content: ""counter(lst-ctn-kix_list_24-5, lower-roman) ". "
        }

        .lst-kix_list_24-6>li:before {
            content: ""counter(lst-ctn-kix_list_24-6, decimal) ". "
        }

        ol.lst-kix_list_16-4.start {
            counter-reset: lst-ctn-kix_list_16-4 0
        }

        ol.lst-kix_list_14-1.start {
            counter-reset: lst-ctn-kix_list_14-1 0
        }

        .lst-kix_list_23-6>li:before {
            content: ""counter(lst-ctn-kix_list_23-6, decimal) ". "
        }

        .lst-kix_list_6-5>li {
            counter-increment: lst-ctn-kix_list_6-5
        }

        ol.lst-kix_list_27-6 {
            list-style-type: none
        }

        ol.lst-kix_list_27-5 {
            list-style-type: none
        }

        .lst-kix_list_23-3>li:before {
            content: ""counter(lst-ctn-kix_list_23-0, decimal) ". "
        }

        .lst-kix_list_23-7>li:before {
            content: ""counter(lst-ctn-kix_list_23-7, lower-latin) ". "
        }

        ol.lst-kix_list_27-8 {
            list-style-type: none
        }

        ol.lst-kix_list_27-7 {
            list-style-type: none
        }

        .lst-kix_list_23-2>li:before {
            content: ""counter(lst-ctn-kix_list_23-2, lower-roman) ". "
        }

        ol.lst-kix_list_27-2 {
            list-style-type: none
        }

        ol.lst-kix_list_23-7.start {
            counter-reset: lst-ctn-kix_list_23-7 0
        }

        ol.lst-kix_list_27-1 {
            list-style-type: none
        }

        ol.lst-kix_list_27-4 {
            list-style-type: none
        }

        ol.lst-kix_list_27-3 {
            list-style-type: none
        }

        .lst-kix_list_23-0>li:before {
            content: ""counter(lst-ctn-kix_list_23-0, decimal) ". "
        }

        .lst-kix_list_23-8>li:before {
            content: ""counter(lst-ctn-kix_list_23-8, lower-roman) ". "
        }

        .lst-kix_list_3-6>li {
            counter-increment: lst-ctn-kix_list_3-6
        }

        .lst-kix_list_23-1>li:before {
            content: ""counter(lst-ctn-kix_list_23-1, lower-latin) ". "
        }

        ol.lst-kix_list_27-0 {
            list-style-type: none
        }

        .lst-kix_list_24-1>li:before {
            content: ""counter(lst-ctn-kix_list_24-1, lower-latin) ". "
        }

        .lst-kix_list_2-8>li {
            counter-increment: lst-ctn-kix_list_2-8
        }

        .lst-kix_list_24-0>li:before {
            content: ""counter(lst-ctn-kix_list_24-0, decimal) ". "
        }

        ol.lst-kix_list_26-2.start {
            counter-reset: lst-ctn-kix_list_26-2 0
        }

        .lst-kix_list_23-4>li:before {
            content: ""counter(lst-ctn-kix_list_23-4, lower-latin) ". "
        }

        .lst-kix_list_23-5>li:before {
            content: ""counter(lst-ctn-kix_list_23-5, lower-roman) ". "
        }

        .lst-kix_list_22-2>li:before {
            content: ""counter(lst-ctn-kix_list_22-2, lower-roman) ") "
        }

        .lst-kix_list_22-6>li:before {
            content: ""counter(lst-ctn-kix_list_22-6, decimal) ". "
        }

        ol.lst-kix_list_31-2.start {
            counter-reset: lst-ctn-kix_list_31-2 0
        }

        .lst-kix_list_8-6>li {
            counter-increment: lst-ctn-kix_list_8-6
        }

        .lst-kix_list_22-0>li:before {
            content: ""counter(lst-ctn-kix_list_22-0, decimal) ". "
        }

        .lst-kix_list_22-8>li:before {
            content: ""counter(lst-ctn-kix_list_22-8, lower-roman) ". "
        }

        ol.lst-kix_list_4-6.start {
            counter-reset: lst-ctn-kix_list_4-6 0
        }

        ol.lst-kix_list_9-7 {
            list-style-type: none
        }

        ol.lst-kix_list_22-5.start {
            counter-reset: lst-ctn-kix_list_22-5 0
        }

        ol.lst-kix_list_9-8 {
            list-style-type: none
        }

        ol.lst-kix_list_3-0.start {
            counter-reset: lst-ctn-kix_list_3-0 0
        }

        ol.lst-kix_list_9-3 {
            list-style-type: none
        }

        ol.lst-kix_list_9-4 {
            list-style-type: none
        }

        .lst-kix_list_5-7>li {
            counter-increment: lst-ctn-kix_list_5-7
        }

        ol.lst-kix_list_9-5 {
            list-style-type: none
        }

        ol.lst-kix_list_34-7.start {
            counter-reset: lst-ctn-kix_list_34-7 0
        }

        ol.lst-kix_list_9-6 {
            list-style-type: none
        }

        ol.lst-kix_list_9-0 {
            list-style-type: none
        }

        ol.lst-kix_list_9-1 {
            list-style-type: none
        }

        .lst-kix_list_22-4>li:before {
            content: "("counter(lst-ctn-kix_list_22-4, lower-latin) ") "
        }

        ol.lst-kix_list_9-2 {
            list-style-type: none
        }

        ol.lst-kix_list_32-8.start {
            counter-reset: lst-ctn-kix_list_32-8 0
        }

        ol.lst-kix_list_25-5.start {
            counter-reset: lst-ctn-kix_list_25-5 0
        }

        ol.lst-kix_list_29-2.start {
            counter-reset: lst-ctn-kix_list_29-2 0
        }

        .lst-kix_list_25-5>li:before {
            content: ""counter(lst-ctn-kix_list_25-5, lower-roman) ". "
        }

        .lst-kix_list_25-7>li:before {
            content: ""counter(lst-ctn-kix_list_25-7, lower-latin) ". "
        }

        .lst-kix_list_3-5>li {
            counter-increment: lst-ctn-kix_list_3-5
        }

        ol.lst-kix_list_18-3.start {
            counter-reset: lst-ctn-kix_list_18-3 0
        }

        ol.lst-kix_list_1-1.start {
            counter-reset: lst-ctn-kix_list_1-1 0
        }

        ol.lst-kix_list_24-4.start {
            counter-reset: lst-ctn-kix_list_24-4 0
        }

        ol.lst-kix_list_18-7 {
            list-style-type: none
        }

        ol.lst-kix_list_18-8 {
            list-style-type: none
        }

        ol.lst-kix_list_33-0.start {
            counter-reset: lst-ctn-kix_list_33-0 0
        }

        ol.lst-kix_list_18-3 {
            list-style-type: none
        }

        ol.lst-kix_list_18-4 {
            list-style-type: none
        }

        ol.lst-kix_list_18-5 {
            list-style-type: none
        }

        .lst-kix_list_6-4>li {
            counter-increment: lst-ctn-kix_list_6-4
        }

        ol.lst-kix_list_18-6 {
            list-style-type: none
        }

        ol.lst-kix_list_18-0 {
            list-style-type: none
        }

        ol.lst-kix_list_27-4.start {
            counter-reset: lst-ctn-kix_list_27-4 0
        }

        ol.lst-kix_list_18-1 {
            list-style-type: none
        }

        ol.lst-kix_list_18-2 {
            list-style-type: none
        }

        .lst-kix_list_9-3>li {
            counter-increment: lst-ctn-kix_list_9-3
        }

        ol.lst-kix_list_15-2.start {
            counter-reset: lst-ctn-kix_list_15-2 0
        }

        ol.lst-kix_list_2-8.start {
            counter-reset: lst-ctn-kix_list_2-8 0
        }

        ol.lst-kix_list_7-6.start {
            counter-reset: lst-ctn-kix_list_7-6 0
        }

        ol.lst-kix_list_29-8 {
            list-style-type: none
        }

        ol.lst-kix_list_29-7 {
            list-style-type: none
        }

        ol.lst-kix_list_15-3.start {
            counter-reset: lst-ctn-kix_list_15-3 0
        }

        ol.lst-kix_list_29-4 {
            list-style-type: none
        }

        ol.lst-kix_list_29-3 {
            list-style-type: none
        }

        ol.lst-kix_list_29-6 {
            list-style-type: none
        }

        ol.lst-kix_list_29-5 {
            list-style-type: none
        }

        ol.lst-kix_list_29-0 {
            list-style-type: none
        }

        ol.lst-kix_list_5-8.start {
            counter-reset: lst-ctn-kix_list_5-8 0
        }

        ol.lst-kix_list_29-2 {
            list-style-type: none
        }

        ol.lst-kix_list_29-1 {
            list-style-type: none
        }

        .lst-kix_list_1-3>li {
            counter-increment: lst-ctn-kix_list_1-3
        }

        ol.lst-kix_list_12-2.start {
            counter-reset: lst-ctn-kix_list_12-2 0
        }

        ol.lst-kix_list_6-0.start {
            counter-reset: lst-ctn-kix_list_6-0 0
        }

        .lst-kix_list_4-2>li {
            counter-increment: lst-ctn-kix_list_4-2
        }

        ol.lst-kix_list_3-1 {
            list-style-type: none
        }

        .lst-kix_list_24-8>li {
            counter-increment: lst-ctn-kix_list_24-8
        }

        ol.lst-kix_list_3-2 {
            list-style-type: none
        }

        ol.lst-kix_list_3-3 {
            list-style-type: none
        }

        ol.lst-kix_list_3-4.start {
            counter-reset: lst-ctn-kix_list_3-4 0
        }

        ol.lst-kix_list_19-0.start {
            counter-reset: lst-ctn-kix_list_19-0 0
        }

        .lst-kix_list_5-1>li {
            counter-increment: lst-ctn-kix_list_5-1
        }

        ol.lst-kix_list_3-4 {
            list-style-type: none
        }

        ol.lst-kix_list_21-3.start {
            counter-reset: lst-ctn-kix_list_21-3 0
        }

        ol.lst-kix_list_3-0 {
            list-style-type: none
        }

        ol.lst-kix_list_34-6 {
            list-style-type: none
        }

        ol.lst-kix_list_34-5 {
            list-style-type: none
        }

        ol.lst-kix_list_34-8 {
            list-style-type: none
        }

        .lst-kix_list_7-1>li {
            counter-increment: lst-ctn-kix_list_7-1
        }

        ol.lst-kix_list_34-7 {
            list-style-type: none
        }

        ol.lst-kix_list_34-2 {
            list-style-type: none
        }

        ol.lst-kix_list_25-6.start {
            counter-reset: lst-ctn-kix_list_25-6 0
        }

        ol.lst-kix_list_34-1 {
            list-style-type: none
        }

        ol.lst-kix_list_34-4 {
            list-style-type: none
        }

        ol.lst-kix_list_34-3 {
            list-style-type: none
        }

        ol.lst-kix_list_34-0 {
            list-style-type: none
        }

        .lst-kix_list_21-8>li:before {
            content: ""counter(lst-ctn-kix_list_21-8, lower-roman) ". "
        }

        ol.lst-kix_list_32-4.start {
            counter-reset: lst-ctn-kix_list_32-4 0
        }

        .lst-kix_list_16-0>li {
            counter-increment: lst-ctn-kix_list_16-0
        }

        .lst-kix_list_26-5>li:before {
            content: ""counter(lst-ctn-kix_list_26-5, lower-roman) ". "
        }

        .lst-kix_list_8-0>li {
            counter-increment: lst-ctn-kix_list_8-0
        }

        ol.lst-kix_list_18-2.start {
            counter-reset: lst-ctn-kix_list_18-2 0
        }

        ol.lst-kix_list_3-5 {
            list-style-type: none
        }

        ol.lst-kix_list_3-6 {
            list-style-type: none
        }

        .lst-kix_list_26-8>li:before {
            content: ""counter(lst-ctn-kix_list_26-8, lower-roman) ". "
        }

        ol.lst-kix_list_3-7 {
            list-style-type: none
        }

        ol.lst-kix_list_3-8 {
            list-style-type: none
        }

        .lst-kix_list_21-0>li:before {
            content: ""counter(lst-ctn-kix_list_21-0, decimal) ". "
        }

        .lst-kix_list_26-1>li:before {
            content: ""counter(lst-ctn-kix_list_26-1, lower-latin) ". "
        }

        .lst-kix_list_13-1>li {
            counter-increment: lst-ctn-kix_list_13-1
        }

        .lst-kix_list_21-1>li:before {
            content: ""counter(lst-ctn-kix_list_21-1, lower-latin) ". "
        }

        ol.lst-kix_list_15-8.start {
            counter-reset: lst-ctn-kix_list_15-8 0
        }

        .lst-kix_list_34-3>li {
            counter-increment: lst-ctn-kix_list_34-3
        }

        .lst-kix_list_26-4>li:before {
            content: ""counter(lst-ctn-kix_list_26-4, lower-latin) ". "
        }

        .lst-kix_list_21-5>li:before {
            content: ""counter(lst-ctn-kix_list_21-5, lower-roman) ". "
        }

        .lst-kix_list_21-4>li:before {
            content: ""counter(lst-ctn-kix_list_21-4, lower-latin) ". "
        }

        .lst-kix_list_26-0>li:before {
            content: ""counter(lst-ctn-kix_list_26-0, decimal) ". "
        }

        .lst-kix_list_31-4>li {
            counter-increment: lst-ctn-kix_list_31-4
        }

        ol.lst-kix_list_7-2.start {
            counter-reset: lst-ctn-kix_list_7-2 0
        }

        .lst-kix_list_31-2>li {
            counter-increment: lst-ctn-kix_list_31-2
        }

        ol.lst-kix_list_19-5.start {
            counter-reset: lst-ctn-kix_list_19-5 0
        }

        ol.lst-kix_list_12-5 {
            list-style-type: none
        }

        ol.lst-kix_list_12-6 {
            list-style-type: none
        }

        ol.lst-kix_list_12-7 {
            list-style-type: none
        }

        ol.lst-kix_list_12-8 {
            list-style-type: none
        }

        ol.lst-kix_list_12-1 {
            list-style-type: none
        }

        ol.lst-kix_list_12-2 {
            list-style-type: none
        }

        ol.lst-kix_list_12-3 {
            list-style-type: none
        }

        .lst-kix_list_35-8>li {
            counter-increment: lst-ctn-kix_list_35-8
        }

        ol.lst-kix_list_12-4 {
            list-style-type: none
        }

        ol.lst-kix_list_26-3.start {
            counter-reset: lst-ctn-kix_list_26-3 0
        }

        ol.lst-kix_list_12-0 {
            list-style-type: none
        }

        ol.lst-kix_list_27-8.start {
            counter-reset: lst-ctn-kix_list_27-8 0
        }

        .lst-kix_list_21-0>li {
            counter-increment: lst-ctn-kix_list_21-0
        }

        .lst-kix_list_25-1>li:before {
            content: ""counter(lst-ctn-kix_list_25-1, lower-latin) ". "
        }

        .lst-kix_list_25-0>li:before {
            content: ""counter(lst-ctn-kix_list_25-0, decimal) ". "
        }

        ol.lst-kix_list_31-1.start {
            counter-reset: lst-ctn-kix_list_31-1 0
        }

        ol.lst-kix_list_7-1.start {
            counter-reset: lst-ctn-kix_list_7-1 0
        }

        ol.lst-kix_list_23-6 {
            list-style-type: none
        }

        ol.lst-kix_list_23-5 {
            list-style-type: none
        }

        ol.lst-kix_list_23-8 {
            list-style-type: none
        }

        ol.lst-kix_list_23-7 {
            list-style-type: none
        }

        ol.lst-kix_list_23-2 {
            list-style-type: none
        }

        .lst-kix_list_16-7>li {
            counter-increment: lst-ctn-kix_list_16-7
        }

        ol.lst-kix_list_21-4.start {
            counter-reset: lst-ctn-kix_list_21-4 0
        }

        ol.lst-kix_list_23-1 {
            list-style-type: none
        }

        ol.lst-kix_list_23-4 {
            list-style-type: none
        }

        ol.lst-kix_list_23-3 {
            list-style-type: none
        }

        .lst-kix_list_27-7>li {
            counter-increment: lst-ctn-kix_list_27-7
        }

        ol.lst-kix_list_23-0 {
            list-style-type: none
        }

        ol.lst-kix_list_20-6.start {
            counter-reset: lst-ctn-kix_list_20-6 0
        }

        .lst-kix_list_13-8>li {
            counter-increment: lst-ctn-kix_list_13-8
        }

        .lst-kix_list_34-1>li {
            counter-increment: lst-ctn-kix_list_34-1
        }

        .lst-kix_list_2-2>li {
            counter-increment: lst-ctn-kix_list_2-2
        }

        ol.lst-kix_list_4-7.start {
            counter-reset: lst-ctn-kix_list_4-7 0
        }

        .lst-kix_list_16-5>li {
            counter-increment: lst-ctn-kix_list_16-5
        }

        ol.lst-kix_list_5-0 {
            list-style-type: none
        }

        .lst-kix_list_3-7>li {
            counter-increment: lst-ctn-kix_list_3-7
        }

        ol.lst-kix_list_5-1 {
            list-style-type: none
        }

        .lst-kix_list_26-2>li {
            counter-increment: lst-ctn-kix_list_26-2
        }

        .lst-kix_list_22-5>li:before {
            content: "("counter(lst-ctn-kix_list_22-5, lower-roman) ") "
        }

        ol.lst-kix_list_5-2 {
            list-style-type: none
        }

        .lst-kix_list_21-2>li {
            counter-increment: lst-ctn-kix_list_21-2
        }

        .lst-kix_list_22-1>li:before {
            content: ""counter(lst-ctn-kix_list_22-1, lower-latin) ". "
        }

        .lst-kix_list_20-2>li {
            counter-increment: lst-ctn-kix_list_20-2
        }

        .lst-kix_list_27-4>li:before {
            content: ""counter(lst-ctn-kix_list_27-4, lower-latin) ". "
        }

        ol.lst-kix_list_15-7.start {
            counter-reset: lst-ctn-kix_list_15-7 0
        }

        .lst-kix_list_6-6>li {
            counter-increment: lst-ctn-kix_list_6-6
        }

        .lst-kix_list_23-3>li {
            counter-increment: lst-ctn-kix_list_23-3
        }

        .lst-kix_list_13-6>li {
            counter-increment: lst-ctn-kix_list_13-6
        }

        ol.lst-kix_list_14-6.start {
            counter-reset: lst-ctn-kix_list_14-6 0
        }

        ol.lst-kix_list_5-7 {
            list-style-type: none
        }

        ol.lst-kix_list_5-8 {
            list-style-type: none
        }

        ol.lst-kix_list_26-8.start {
            counter-reset: lst-ctn-kix_list_26-8 0
        }

        .lst-kix_list_19-6>li {
            counter-increment: lst-ctn-kix_list_19-6
        }

        ol.lst-kix_list_5-3 {
            list-style-type: none
        }

        .lst-kix_list_8-7>li {
            counter-increment: lst-ctn-kix_list_8-7
        }

        ol.lst-kix_list_5-4 {
            list-style-type: none
        }

        .lst-kix_list_27-0>li:before {
            content: ""counter(lst-ctn-kix_list_27-0, decimal) ". "
        }

        ol.lst-kix_list_5-5 {
            list-style-type: none
        }

        ol.lst-kix_list_5-6 {
            list-style-type: none
        }

        .lst-kix_list_20-4>li {
            counter-increment: lst-ctn-kix_list_20-4
        }

        .lst-kix_list_9-5>li {
            counter-increment: lst-ctn-kix_list_9-5
        }

        .lst-kix_list_5-8>li {
            counter-increment: lst-ctn-kix_list_5-8
        }

        .lst-kix_list_27-0>li {
            counter-increment: lst-ctn-kix_list_27-0
        }

        ol.lst-kix_list_19-4.start {
            counter-reset: lst-ctn-kix_list_19-4 0
        }

        .lst-kix_list_32-0>li {
            counter-increment: lst-ctn-kix_list_32-0
        }

        ol.lst-kix_list_33-6.start {
            counter-reset: lst-ctn-kix_list_33-6 0
        }

        ol.lst-kix_list_20-1.start {
            counter-reset: lst-ctn-kix_list_20-1 0
        }

        .lst-kix_list_25-4>li:before {
            content: ""counter(lst-ctn-kix_list_25-4, lower-latin) ". "
        }

        ol.lst-kix_list_2-2.start {
            counter-reset: lst-ctn-kix_list_2-2 0
        }

        .lst-kix_list_19-4>li {
            counter-increment: lst-ctn-kix_list_19-4
        }

        .lst-kix_list_35-1>li {
            counter-increment: lst-ctn-kix_list_35-1
        }

        .lst-kix_list_24-1>li {
            counter-increment: lst-ctn-kix_list_24-1
        }

        .lst-kix_list_25-8>li:before {
            content: ""counter(lst-ctn-kix_list_25-8, lower-roman) ". "
        }

        ol.lst-kix_list_25-1.start {
            counter-reset: lst-ctn-kix_list_25-1 0
        }

        ol.lst-kix_list_14-7 {
            list-style-type: none
        }

        ol.lst-kix_list_14-8 {
            list-style-type: none
        }

        ol.lst-kix_list_26-6.start {
            counter-reset: lst-ctn-kix_list_26-6 0
        }

        ol.lst-kix_list_14-3 {
            list-style-type: none
        }

        ol.lst-kix_list_21-8.start {
            counter-reset: lst-ctn-kix_list_21-8 0
        }

        ol.lst-kix_list_14-4 {
            list-style-type: none
        }

        ol.lst-kix_list_14-5 {
            list-style-type: none
        }

        ol.lst-kix_list_14-6 {
            list-style-type: none
        }

        .lst-kix_list_15-2>li {
            counter-increment: lst-ctn-kix_list_15-2
        }

        .lst-kix_list_34-8>li {
            counter-increment: lst-ctn-kix_list_34-8
        }

        ol.lst-kix_list_14-0 {
            list-style-type: none
        }

        .lst-kix_list_22-5>li {
            counter-increment: lst-ctn-kix_list_22-5
        }

        ol.lst-kix_list_14-1 {
            list-style-type: none
        }

        .lst-kix_list_27-5>li {
            counter-increment: lst-ctn-kix_list_27-5
        }

        ol.lst-kix_list_14-2 {
            list-style-type: none
        }

        .lst-kix_list_20-5>li:before {
            content: ""counter(lst-ctn-kix_list_20-5, lower-roman) ". "
        }

        .lst-kix_list_28-8>li:before {
            content: ""counter(lst-ctn-kix_list_28-8, lower-roman) ". "
        }

        .lst-kix_list_20-1>li:before {
            content: ""counter(lst-ctn-kix_list_20-1, decimal) ". "
        }

        .lst-kix_list_12-3>li {
            counter-increment: lst-ctn-kix_list_12-3
        }

        .lst-kix_list_24-6>li {
            counter-increment: lst-ctn-kix_list_24-6
        }

        .lst-kix_list_17-3>li {
            counter-increment: lst-ctn-kix_list_17-3
        }

        ol.lst-kix_list_8-4.start {
            counter-reset: lst-ctn-kix_list_8-4 0
        }

        .lst-kix_list_28-4>li:before {
            content: ""counter(lst-ctn-kix_list_28-4, lower-latin) ". "
        }

        ol.lst-kix_list_3-5.start {
            counter-reset: lst-ctn-kix_list_3-5 0
        }

        .lst-kix_list_21-7>li {
            counter-increment: lst-ctn-kix_list_21-7
        }

        ol.lst-kix_list_25-0.start {
            counter-reset: lst-ctn-kix_list_25-0 0
        }

        ol.lst-kix_list_25-8 {
            list-style-type: none
        }

        .lst-kix_list_28-3>li {
            counter-increment: lst-ctn-kix_list_28-3
        }

        ol.lst-kix_list_25-7 {
            list-style-type: none
        }

        .lst-kix_list_35-6>li {
            counter-increment: lst-ctn-kix_list_35-6
        }

        ol.lst-kix_list_25-4 {
            list-style-type: none
        }

        ol.lst-kix_list_25-3 {
            list-style-type: none
        }

        ol.lst-kix_list_13-0.start {
            counter-reset: lst-ctn-kix_list_13-0 0
        }

        .lst-kix_list_14-4>li {
            counter-increment: lst-ctn-kix_list_14-4
        }

        ol.lst-kix_list_25-6 {
            list-style-type: none
        }

        ol.lst-kix_list_25-5 {
            list-style-type: none
        }

        ol.lst-kix_list_32-3.start {
            counter-reset: lst-ctn-kix_list_32-3 0
        }

        ol.lst-kix_list_25-0 {
            list-style-type: none
        }

        ol.lst-kix_list_25-2 {
            list-style-type: none
        }

        ol.lst-kix_list_25-1 {
            list-style-type: none
        }

        .lst-kix_list_25-4>li {
            counter-increment: lst-ctn-kix_list_25-4
        }

        .lst-kix_list_18-1>li {
            counter-increment: lst-ctn-kix_list_18-1
        }

        ol.lst-kix_list_8-3.start {
            counter-reset: lst-ctn-kix_list_8-3 0
        }

        .lst-kix_list_11-5>li {
            counter-increment: lst-ctn-kix_list_11-5
        }

        ol.lst-kix_list_14-5.start {
            counter-reset: lst-ctn-kix_list_14-5 0
        }

        .lst-kix_list_28-0>li:before {
            content: ""counter(lst-ctn-kix_list_28-0, decimal) ". "
        }

        .lst-kix_list_32-7>li {
            counter-increment: lst-ctn-kix_list_32-7
        }

        .lst-kix_list_27-8>li:before {
            content: ""counter(lst-ctn-kix_list_27-8, lower-roman) ". "
        }

        ol.lst-kix_list_20-3.start {
            counter-reset: lst-ctn-kix_list_20-3 0
        }

        .lst-kix_list_29-1>li {
            counter-increment: lst-ctn-kix_list_29-1
        }

        .lst-kix_list_4-1>li {
            counter-increment: lst-ctn-kix_list_4-1
        }

        ol.lst-kix_list_32-7.start {
            counter-reset: lst-ctn-kix_list_32-7 0
        }

        .lst-kix_list_19-1>li:before {
            content: ""counter(lst-ctn-kix_list_19-1, lower-latin) ". "
        }

        .lst-kix_list_19-4>li:before {
            content: ""counter(lst-ctn-kix_list_19-4, lower-latin) ". "
        }

        .lst-kix_list_27-8>li {
            counter-increment: lst-ctn-kix_list_27-8
        }

        .lst-kix_list_31-5>li {
            counter-increment: lst-ctn-kix_list_31-5
        }

        .lst-kix_list_19-3>li:before {
            content: ""counter(lst-ctn-kix_list_19-3, decimal) ". "
        }

        .lst-kix_list_15-0>li {
            counter-increment: lst-ctn-kix_list_15-0
        }

        ol.lst-kix_list_24-5.start {
            counter-reset: lst-ctn-kix_list_24-5 0
        }

        ol.lst-kix_list_6-6.start {
            counter-reset: lst-ctn-kix_list_6-6 0
        }

        .lst-kix_list_32-6>li {
            counter-increment: lst-ctn-kix_list_32-6
        }

        ol.lst-kix_list_29-6.start {
            counter-reset: lst-ctn-kix_list_29-6 0
        }

        .lst-kix_list_11-0>li {
            counter-increment: lst-ctn-kix_list_11-0
        }

        ol.lst-kix_list_1-5.start {
            counter-reset: lst-ctn-kix_list_1-5 0
        }

        ol.lst-kix_list_9-6.start {
            counter-reset: lst-ctn-kix_list_9-6 0
        }

        ol.lst-kix_list_16-3.start {
            counter-reset: lst-ctn-kix_list_16-3 0
        }

        ol.lst-kix_list_27-5.start {
            counter-reset: lst-ctn-kix_list_27-5 0
        }

        ol.lst-kix_list_22-4.start {
            counter-reset: lst-ctn-kix_list_22-4 0
        }

        .lst-kix_list_22-7>li {
            counter-increment: lst-ctn-kix_list_22-7
        }

        ol.lst-kix_list_4-5.start {
            counter-reset: lst-ctn-kix_list_4-5 0
        }

        .lst-kix_list_26-7>li {
            counter-increment: lst-ctn-kix_list_26-7
        }

        .lst-kix_list_33-7>li {
            counter-increment: lst-ctn-kix_list_33-7
        }

        ol.lst-kix_list_11-2.start {
            counter-reset: lst-ctn-kix_list_11-2 0
        }

        .lst-kix_list_5-2>li {
            counter-increment: lst-ctn-kix_list_5-2
        }

        .lst-kix_list_19-6>li:before {
            content: ""counter(lst-ctn-kix_list_19-6, decimal) ". "
        }

        .lst-kix_list_17-2>li {
            counter-increment: lst-ctn-kix_list_17-2
        }

        ol.lst-kix_list_8-7.start {
            counter-reset: lst-ctn-kix_list_8-7 0
        }

        .lst-kix_list_32-2>li {
            counter-increment: lst-ctn-kix_list_32-2
        }

        .lst-kix_list_28-5>li {
            counter-increment: lst-ctn-kix_list_28-5
        }

        ol.lst-kix_list_31-8 {
            list-style-type: none
        }

        .lst-kix_list_20-5>li {
            counter-increment: lst-ctn-kix_list_20-5
        }

        ol.lst-kix_list_31-5 {
            list-style-type: none
        }

        ol.lst-kix_list_31-4 {
            list-style-type: none
        }

        ol.lst-kix_list_31-7 {
            list-style-type: none
        }

        ol.lst-kix_list_35-0.start {
            counter-reset: lst-ctn-kix_list_35-0 0
        }

        ol.lst-kix_list_31-6 {
            list-style-type: none
        }

        ol.lst-kix_list_31-1 {
            list-style-type: none
        }

        ol.lst-kix_list_31-0 {
            list-style-type: none
        }

        ol.lst-kix_list_31-3 {
            list-style-type: none
        }

        ol.lst-kix_list_31-2 {
            list-style-type: none
        }

        .lst-kix_list_22-0>li {
            counter-increment: lst-ctn-kix_list_22-0
        }

        ol.lst-kix_list_24-0.start {
            counter-reset: lst-ctn-kix_list_24-0 0
        }

        .lst-kix_list_18-3>li {
            counter-increment: lst-ctn-kix_list_18-3
        }

        ol.lst-kix_list_33-4.start {
            counter-reset: lst-ctn-kix_list_33-4 0
        }

        ol.lst-kix_list_35-7.start {
            counter-reset: lst-ctn-kix_list_35-7 0
        }

        .lst-kix_list_21-6>li {
            counter-increment: lst-ctn-kix_list_21-6
        }

        ol.lst-kix_list_1-0.start {
            counter-reset: lst-ctn-kix_list_1-0 0
        }

        .lst-kix_list_18-0>li:before {
            content: ""counter(lst-ctn-kix_list_18-0, decimal) ". "
        }

        ol.lst-kix_list_13-3.start {
            counter-reset: lst-ctn-kix_list_13-3 0
        }

        .lst-kix_list_3-0>li {
            counter-increment: lst-ctn-kix_list_3-0
        }

        .lst-kix_list_18-2>li:before {
            content: ""counter(lst-ctn-kix_list_18-2, lower-roman) ". "
        }

        .lst-kix_list_26-0>li {
            counter-increment: lst-ctn-kix_list_26-0
        }

        ol.lst-kix_list_4-0.start {
            counter-reset: lst-ctn-kix_list_4-0 0
        }

        li.li-bullet-2:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        ol.lst-kix_list_27-0.start {
            counter-reset: lst-ctn-kix_list_27-0 0
        }

        .lst-kix_list_27-4>li {
            counter-increment: lst-ctn-kix_list_27-4
        }

        ol.lst-kix_list_11-7.start {
            counter-reset: lst-ctn-kix_list_11-7 0
        }

        ol.lst-kix_list_14-2.start {
            counter-reset: lst-ctn-kix_list_14-2 0
        }

        .lst-kix_list_16-1>li {
            counter-increment: lst-ctn-kix_list_16-1
        }

        .lst-kix_list_30-4>li {
            counter-increment: lst-ctn-kix_list_30-4
        }

        .lst-kix_list_27-1>li {
            counter-increment: lst-ctn-kix_list_27-1
        }

        .lst-kix_list_25-2>li {
            counter-increment: lst-ctn-kix_list_25-2
        }

        .lst-kix_list_27-1>li:before {
            content: ""counter(lst-ctn-kix_list_27-1, decimal) ". "
        }

        .lst-kix_list_27-3>li:before {
            content: ""counter(lst-ctn-kix_list_27-3, decimal) ". "
        }

        .lst-kix_list_17-5>li {
            counter-increment: lst-ctn-kix_list_17-5
        }

        ol.lst-kix_list_9-4.start {
            counter-reset: lst-ctn-kix_list_9-4 0
        }

        .lst-kix_list_21-3>li {
            counter-increment: lst-ctn-kix_list_21-3
        }

        .lst-kix_list_18-8>li:before {
            content: ""counter(lst-ctn-kix_list_18-8, lower-roman) ". "
        }

        ol.lst-kix_list_27-3.start {
            counter-reset: lst-ctn-kix_list_27-3 0
        }

        .lst-kix_list_17-6>li {
            counter-increment: lst-ctn-kix_list_17-6
        }

        ol.lst-kix_list_30-1.start {
            counter-reset: lst-ctn-kix_list_30-1 0
        }

        ol.lst-kix_list_4-3.start {
            counter-reset: lst-ctn-kix_list_4-3 0
        }

        .lst-kix_list_10-7>li:before {
            content: "o  "
        }

        .lst-kix_list_7-8>li {
            counter-increment: lst-ctn-kix_list_7-8
        }

        .lst-kix_list_20-1>li {
            counter-increment: lst-ctn-kix_list_20-1
        }

        .lst-kix_list_10-5>li:before {
            content: "\0025aa  "
        }

        ol.lst-kix_list_13-5.start {
            counter-reset: lst-ctn-kix_list_13-5 0
        }

        ol.lst-kix_list_18-6.start {
            counter-reset: lst-ctn-kix_list_18-6 0
        }

        .lst-kix_list_29-3>li {
            counter-increment: lst-ctn-kix_list_29-3
        }

        ol.lst-kix_list_20-8 {
            list-style-type: none
        }

        ol.lst-kix_list_13-8.start {
            counter-reset: lst-ctn-kix_list_13-8 0
        }

        ol.lst-kix_list_20-5 {
            list-style-type: none
        }

        ol.lst-kix_list_20-4 {
            list-style-type: none
        }

        ol.lst-kix_list_20-7 {
            list-style-type: none
        }

        .lst-kix_list_11-7>li {
            counter-increment: lst-ctn-kix_list_11-7
        }

        ol.lst-kix_list_20-6 {
            list-style-type: none
        }

        ol.lst-kix_list_20-1 {
            list-style-type: none
        }

        .lst-kix_list_9-2>li:before {
            content: ""counter(lst-ctn-kix_list_9-2, lower-roman) ". "
        }

        ol.lst-kix_list_20-0 {
            list-style-type: none
        }

        ol.lst-kix_list_20-3 {
            list-style-type: none
        }

        ol.lst-kix_list_20-2 {
            list-style-type: none
        }

        ol.lst-kix_list_14-0.start {
            counter-reset: lst-ctn-kix_list_14-0 0
        }

        .lst-kix_list_12-5>li {
            counter-increment: lst-ctn-kix_list_12-5
        }

        .lst-kix_list_5-5>li {
            counter-increment: lst-ctn-kix_list_5-5
        }

        .lst-kix_list_31-1>li {
            counter-increment: lst-ctn-kix_list_31-1
        }

        .lst-kix_list_9-0>li:before {
            content: ""counter(lst-ctn-kix_list_9-0, decimal) ". "
        }

        .lst-kix_list_16-8>li {
            counter-increment: lst-ctn-kix_list_16-8
        }

        ol.lst-kix_list_24-3.start {
            counter-reset: lst-ctn-kix_list_24-3 0
        }

        ol.lst-kix_list_33-7 {
            list-style-type: none
        }

        ol.lst-kix_list_33-6 {
            list-style-type: none
        }

        ol.lst-kix_list_33-8 {
            list-style-type: none
        }

        ol.lst-kix_list_33-3 {
            list-style-type: none
        }

        .lst-kix_list_23-5>li {
            counter-increment: lst-ctn-kix_list_23-5
        }

        ol.lst-kix_list_33-2 {
            list-style-type: none
        }

        .lst-kix_list_11-3>li:before {
            content: ""counter(lst-ctn-kix_list_11-3, decimal) ". "
        }

        ol.lst-kix_list_33-5 {
            list-style-type: none
        }

        ol.lst-kix_list_33-4 {
            list-style-type: none
        }

        ol.lst-kix_list_18-4.start {
            counter-reset: lst-ctn-kix_list_18-4 0
        }

        .lst-kix_list_6-3>li {
            counter-increment: lst-ctn-kix_list_6-3
        }

        ol.lst-kix_list_33-1 {
            list-style-type: none
        }

        ol.lst-kix_list_1-3.start {
            counter-reset: lst-ctn-kix_list_1-3 0
        }

        ol.lst-kix_list_33-0 {
            list-style-type: none
        }

        ol.lst-kix_list_29-1.start {
            counter-reset: lst-ctn-kix_list_29-1 0
        }

        .lst-kix_list_20-4>li:before {
            content: ""counter(lst-ctn-kix_list_20-4, lower-latin) ". "
        }

        ol.lst-kix_list_1-2.start {
            counter-reset: lst-ctn-kix_list_1-2 0
        }

        .lst-kix_list_29-1>li:before {
            content: ""counter(lst-ctn-kix_list_29-1, lower-latin) ") "
        }

        ol.lst-kix_list_22-7.start {
            counter-reset: lst-ctn-kix_list_22-7 0
        }

        .lst-kix_list_20-2>li:before {
            content: ""counter(lst-ctn-kix_list_20-2, lower-roman) ". "
        }

        ol.lst-kix_list_6-1.start {
            counter-reset: lst-ctn-kix_list_6-1 0
        }

        .lst-kix_list_29-3>li:before {
            content: "("counter(lst-ctn-kix_list_29-3, decimal) ") "
        }

        .lst-kix_list_9-8>li:before {
            content: ""counter(lst-ctn-kix_list_9-8, lower-roman) ". "
        }

        ul.lst-kix_list_10-0 {
            list-style-type: none
        }

        ol.lst-kix_list_16-8.start {
            counter-reset: lst-ctn-kix_list_16-8 0
        }

        .lst-kix_list_28-6>li {
            counter-increment: lst-ctn-kix_list_28-6
        }

        ol.lst-kix_list_33-1.start {
            counter-reset: lst-ctn-kix_list_33-1 0
        }

        .lst-kix_list_28-7>li:before {
            content: ""counter(lst-ctn-kix_list_28-7, lower-latin) ". "
        }

        ul.lst-kix_list_10-8 {
            list-style-type: none
        }

        ul.lst-kix_list_10-7 {
            list-style-type: none
        }

        .lst-kix_list_4-8>li {
            counter-increment: lst-ctn-kix_list_4-8
        }

        .lst-kix_list_1-7>li:before {
            content: ""counter(lst-ctn-kix_list_1-7, lower-latin) ". "
        }

        ul.lst-kix_list_10-6 {
            list-style-type: none
        }

        ul.lst-kix_list_10-5 {
            list-style-type: none
        }

        ul.lst-kix_list_10-4 {
            list-style-type: none
        }

        ul.lst-kix_list_10-3 {
            list-style-type: none
        }

        .lst-kix_list_1-5>li:before {
            content: ""counter(lst-ctn-kix_list_1-5, lower-roman) ". "
        }

        ul.lst-kix_list_10-2 {
            list-style-type: none
        }

        .lst-kix_list_28-5>li:before {
            content: ""counter(lst-ctn-kix_list_28-5, lower-roman) ". "
        }

        ul.lst-kix_list_10-1 {
            list-style-type: none
        }

        ol.lst-kix_list_24-2.start {
            counter-reset: lst-ctn-kix_list_24-2 0
        }

        ol.lst-kix_list_9-1.start {
            counter-reset: lst-ctn-kix_list_9-1 0
        }

        .lst-kix_list_5-6>li {
            counter-increment: lst-ctn-kix_list_5-6
        }

        ol.lst-kix_list_22-6.start {
            counter-reset: lst-ctn-kix_list_22-6 0
        }

        .lst-kix_list_2-1>li:before {
            content: ""counter(lst-ctn-kix_list_2-1, lower-latin) ". "
        }

        .lst-kix_list_19-8>li {
            counter-increment: lst-ctn-kix_list_19-8
        }

        .lst-kix_list_2-3>li:before {
            content: ""counter(lst-ctn-kix_list_2-3, decimal) ". "
        }

        .lst-kix_list_11-8>li {
            counter-increment: lst-ctn-kix_list_11-8
        }

        .lst-kix_list_35-3>li:before {
            content: "("counter(lst-ctn-kix_list_35-3, decimal) ") "
        }

        ol.lst-kix_list_24-8.start {
            counter-reset: lst-ctn-kix_list_24-8 0
        }

        .lst-kix_list_30-4>li:before {
            content: ""counter(lst-ctn-kix_list_30-4, lower-latin) ". "
        }

        .lst-kix_list_20-8>li {
            counter-increment: lst-ctn-kix_list_20-8
        }

        .lst-kix_list_35-6>li:before {
            content: ""counter(lst-ctn-kix_list_35-6, decimal) ". "
        }

        .lst-kix_list_9-1>li {
            counter-increment: lst-ctn-kix_list_9-1
        }

        .lst-kix_list_3-2>li:before {
            content: ""counter(lst-ctn-kix_list_3-2, lower-roman) ". "
        }

        .lst-kix_list_26-7>li:before {
            content: ""counter(lst-ctn-kix_list_26-7, lower-latin) ". "
        }

        .lst-kix_list_8-1>li:before {
            content: ""counter(lst-ctn-kix_list_8-1, lower-latin) ". "
        }

        ol.lst-kix_list_1-8.start {
            counter-reset: lst-ctn-kix_list_1-8 0
        }

        .lst-kix_list_6-0>li {
            counter-increment: lst-ctn-kix_list_6-0
        }

        .lst-kix_list_3-5>li:before {
            content: ""counter(lst-ctn-kix_list_3-5, lower-roman) ". "
        }

        .lst-kix_list_18-0>li {
            counter-increment: lst-ctn-kix_list_18-0
        }

        .lst-kix_list_30-7>li:before {
            content: ""counter(lst-ctn-kix_list_30-7, lower-latin) ". "
        }

        ol.lst-kix_list_30-8.start {
            counter-reset: lst-ctn-kix_list_30-8 0
        }

        ol.lst-kix_list_11-5.start {
            counter-reset: lst-ctn-kix_list_11-5 0
        }

        .lst-kix_list_11-1>li {
            counter-increment: lst-ctn-kix_list_11-1
        }

        .lst-kix_list_8-6>li:before {
            content: ""counter(lst-ctn-kix_list_8-6, decimal) ". "
        }

        .lst-kix_list_26-2>li:before {
            content: ""counter(lst-ctn-kix_list_26-2, lower-roman) ". "
        }

        .lst-kix_list_21-6>li:before {
            content: ""counter(lst-ctn-kix_list_21-6, decimal) ". "
        }

        ol.lst-kix_list_16-6.start {
            counter-reset: lst-ctn-kix_list_16-6 0
        }

        ol.lst-kix_list_22-1.start {
            counter-reset: lst-ctn-kix_list_22-1 0
        }

        ol.lst-kix_list_35-3.start {
            counter-reset: lst-ctn-kix_list_35-3 0
        }

        ol.lst-kix_list_16-0.start {
            counter-reset: lst-ctn-kix_list_16-0 0
        }

        ol.lst-kix_list_4-2.start {
            counter-reset: lst-ctn-kix_list_4-2 0
        }

        .lst-kix_list_33-4>li {
            counter-increment: lst-ctn-kix_list_33-4
        }

        .lst-kix_list_21-3>li:before {
            content: ""counter(lst-ctn-kix_list_21-3, decimal) ". "
        }

        ol.lst-kix_list_27-2.start {
            counter-reset: lst-ctn-kix_list_27-2 0
        }

        ol.lst-kix_list_18-7.start {
            counter-reset: lst-ctn-kix_list_18-7 0
        }

        .lst-kix_list_25-5>li {
            counter-increment: lst-ctn-kix_list_25-5
        }

        ol.lst-kix_list_30-2.start {
            counter-reset: lst-ctn-kix_list_30-2 0
        }

        ol.lst-kix_list_11-6.start {
            counter-reset: lst-ctn-kix_list_11-6 0
        }

        .lst-kix_list_4-4>li {
            counter-increment: lst-ctn-kix_list_4-4
        }

        ol.lst-kix_list_29-4.start {
            counter-reset: lst-ctn-kix_list_29-4 0
        }

        ol.lst-kix_list_6-4.start {
            counter-reset: lst-ctn-kix_list_6-4 0
        }

        .lst-kix_list_17-1>li:before {
            content: ""counter(lst-ctn-kix_list_17-1, lower-latin) ". "
        }

        .lst-kix_list_25-3>li:before {
            content: ""counter(lst-ctn-kix_list_25-3, decimal) ". "
        }

        .lst-kix_list_31-8>li {
            counter-increment: lst-ctn-kix_list_31-8
        }

        .lst-kix_list_32-3>li {
            counter-increment: lst-ctn-kix_list_32-3
        }

        ol.lst-kix_list_4-1.start {
            counter-reset: lst-ctn-kix_list_4-1 0
        }

        .lst-kix_list_16-2>li:before {
            content: ""counter(lst-ctn-kix_list_16-2, lower-roman) ". "
        }

        ol.lst-kix_list_27-1.start {
            counter-reset: lst-ctn-kix_list_27-1 0
        }

        .lst-kix_list_26-6>li {
            counter-increment: lst-ctn-kix_list_26-6
        }

        .lst-kix_list_16-5>li:before {
            content: ""counter(lst-ctn-kix_list_16-5, lower-roman) ". "
        }

        .lst-kix_list_15-3>li {
            counter-increment: lst-ctn-kix_list_15-3
        }

        ol.lst-kix_list_22-2.start {
            counter-reset: lst-ctn-kix_list_22-2 0
        }

        ol.lst-kix_list_30-3.start {
            counter-reset: lst-ctn-kix_list_30-3 0
        }

        .lst-kix_list_30-7>li {
            counter-increment: lst-ctn-kix_list_30-7
        }

        ol.lst-kix_list_11-0.start {
            counter-reset: lst-ctn-kix_list_11-0 0
        }

        ol.lst-kix_list_18-8.start {
            counter-reset: lst-ctn-kix_list_18-8 0
        }

        ol.lst-kix_list_29-3.start {
            counter-reset: lst-ctn-kix_list_29-3 0
        }

        .lst-kix_list_16-4>li {
            counter-increment: lst-ctn-kix_list_16-4
        }

        .lst-kix_list_3-3>li {
            counter-increment: lst-ctn-kix_list_3-3
        }

        ol.lst-kix_list_6-3.start {
            counter-reset: lst-ctn-kix_list_6-3 1
        }

        ol.lst-kix_list_35-8.start {
            counter-reset: lst-ctn-kix_list_35-8 0
        }

        ol.lst-kix_list_16-5.start {
            counter-reset: lst-ctn-kix_list_16-5 0
        }

        .lst-kix_list_17-6>li:before {
            content: ""counter(lst-ctn-kix_list_17-6, decimal) ". "
        }

        ol.lst-kix_list_35-5.start {
            counter-reset: lst-ctn-kix_list_35-5 0
        }

        ol.lst-kix_list_16-2.start {
            counter-reset: lst-ctn-kix_list_16-2 0
        }

        .lst-kix_list_2-6>li:before {
            content: ""counter(lst-ctn-kix_list_2-6, decimal) ". "
        }

        .lst-kix_list_14-5>li {
            counter-increment: lst-ctn-kix_list_14-5
        }

        .lst-kix_list_7-5>li:before {
            content: ""counter(lst-ctn-kix_list_7-5, lower-roman) ". "
        }

        .lst-kix_list_19-5>li {
            counter-increment: lst-ctn-kix_list_19-5
        }

        .lst-kix_list_27-6>li:before {
            content: ""counter(lst-ctn-kix_list_27-6, decimal) ". "
        }

        .lst-kix_list_28-2>li {
            counter-increment: lst-ctn-kix_list_28-2
        }

        .lst-kix_list_22-7>li:before {
            content: ""counter(lst-ctn-kix_list_22-7, lower-latin) ". "
        }

        .lst-kix_list_23-2>li {
            counter-increment: lst-ctn-kix_list_23-2
        }

        ol.lst-kix_list_30-4.start {
            counter-reset: lst-ctn-kix_list_30-4 0
        }

        ol.lst-kix_list_11-1.start {
            counter-reset: lst-ctn-kix_list_11-1 0
        }

        .lst-kix_list_30-0>li {
            counter-increment: lst-ctn-kix_list_30-0
        }

        ol.lst-kix_list_35-2.start {
            counter-reset: lst-ctn-kix_list_35-2 0
        }

        .lst-kix_list_18-5>li:before {
            content: ""counter(lst-ctn-kix_list_18-5, lower-roman) ". "
        }

        .lst-kix_list_34-7>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) "."counter(lst-ctn-kix_list_34-4, decimal) "."counter(lst-ctn-kix_list_34-5, decimal) "."counter(lst-ctn-kix_list_34-6, decimal) "."counter(lst-ctn-kix_list_34-7, decimal) ". "
        }

        .lst-kix_list_13-6>li:before {
            content: ""counter(lst-ctn-kix_list_13-6, decimal) ". "
        }

        .lst-kix_list_6-7>li {
            counter-increment: lst-ctn-kix_list_6-7
        }

        .lst-kix_list_26-3>li {
            counter-increment: lst-ctn-kix_list_26-3
        }

        .lst-kix_list_1-7>li {
            counter-increment: lst-ctn-kix_list_1-7
        }

        .lst-kix_list_15-6>li:before {
            content: ""counter(lst-ctn-kix_list_15-6, decimal) ". "
        }

        .lst-kix_list_7-5>li {
            counter-increment: lst-ctn-kix_list_7-5
        }

        .lst-kix_list_11-4>li {
            counter-increment: lst-ctn-kix_list_11-4
        }

        ol.lst-kix_list_24-7.start {
            counter-reset: lst-ctn-kix_list_24-7 0
        }

        .lst-kix_list_29-0>li {
            counter-increment: lst-ctn-kix_list_29-0
        }

        .lst-kix_list_22-4>li {
            counter-increment: lst-ctn-kix_list_22-4
        }

        .lst-kix_list_31-3>li:before {
            content: ""counter(lst-ctn-kix_list_31-3, decimal) ". "
        }

        .lst-kix_list_10-2>li:before {
            content: "\0025aa  "
        }

        ol.lst-kix_list_6-8.start {
            counter-reset: lst-ctn-kix_list_6-8 0
        }

        .lst-kix_list_13-7>li {
            counter-increment: lst-ctn-kix_list_13-7
        }

        ol.lst-kix_list_1-7.start {
            counter-reset: lst-ctn-kix_list_1-7 0
        }

        .lst-kix_list_20-7>li:before {
            content: ""counter(lst-ctn-kix_list_20-7, lower-latin) ". "
        }

        ol.lst-kix_list_6-5.start {
            counter-reset: lst-ctn-kix_list_6-5 0
        }

        .lst-kix_list_4-6>li:before {
            content: ""counter(lst-ctn-kix_list_4-6, decimal) ". "
        }

        ol.lst-kix_list_29-8.start {
            counter-reset: lst-ctn-kix_list_29-8 0
        }

        .lst-kix_list_25-6>li:before {
            content: ""counter(lst-ctn-kix_list_25-6, decimal) ". "
        }

        ol.lst-kix_list_29-5.start {
            counter-reset: lst-ctn-kix_list_29-5 0
        }

        .lst-kix_list_34-2>li {
            counter-increment: lst-ctn-kix_list_34-2
        }

        ol.lst-kix_list_6-7.start {
            counter-reset: lst-ctn-kix_list_6-7 0
        }

        .lst-kix_list_12-2>li {
            counter-increment: lst-ctn-kix_list_12-2
        }

        .lst-kix_list_9-5>li:before {
            content: ""counter(lst-ctn-kix_list_9-5, lower-roman) ". "
        }

        .lst-kix_list_29-6>li:before {
            content: ""counter(lst-ctn-kix_list_29-6, decimal) ". "
        }

        ol.lst-kix_list_22-0.start {
            counter-reset: lst-ctn-kix_list_22-0 0
        }

        .lst-kix_list_24-0>li {
            counter-increment: lst-ctn-kix_list_24-0
        }

        .lst-kix_list_33-3>li:before {
            content: "("counter(lst-ctn-kix_list_33-3, decimal) ") "
        }

        .lst-kix_list_12-2>li:before {
            content: ""counter(lst-ctn-kix_list_12-2, lower-roman) ". "
        }

        .lst-kix_list_11-6>li:before {
            content: ""counter(lst-ctn-kix_list_11-6, decimal) ". "
        }

        .lst-kix_list_32-7>li:before {
            content: ""counter(lst-ctn-kix_list_32-7, lower-latin) ". "
        }

        ol.lst-kix_list_30-6.start {
            counter-reset: lst-ctn-kix_list_30-6 0
        }

        ol.lst-kix_list_11-3.start {
            counter-reset: lst-ctn-kix_list_11-3 0
        }

        .lst-kix_list_1-2>li:before {
            content: ""counter(lst-ctn-kix_list_1-2, lower-roman) ". "
        }

        .lst-kix_list_1-0>li {
            counter-increment: lst-ctn-kix_list_1-0
        }

        ol.lst-kix_list_16-1.start {
            counter-reset: lst-ctn-kix_list_16-1 0
        }

        ol.lst-kix_list_35-4.start {
            counter-reset: lst-ctn-kix_list_35-4 0
        }

        li.li-bullet-0:before {
            margin-left: -18pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 18pt
        }

        ol.lst-kix_list_29-7.start {
            counter-reset: lst-ctn-kix_list_29-7 0
        }

        .lst-kix_list_35-0>li {
            counter-increment: lst-ctn-kix_list_35-0
        }

        .lst-kix_list_18-7>li {
            counter-increment: lst-ctn-kix_list_18-7
        }

        .lst-kix_list_29-7>li {
            counter-increment: lst-ctn-kix_list_29-7
        }

        ol.lst-kix_list_11-4.start {
            counter-reset: lst-ctn-kix_list_11-4 0
        }

        ol.lst-kix_list_30-7.start {
            counter-reset: lst-ctn-kix_list_30-7 0
        }

        .lst-kix_list_28-2>li:before {
            content: ""counter(lst-ctn-kix_list_28-2, lower-roman) ". "
        }

        .lst-kix_list_14-1>li:before {
            content: ""counter(lst-ctn-kix_list_14-1, lower-latin) ". "
        }

        .lst-kix_list_14-3>li:before {
            content: ""counter(lst-ctn-kix_list_14-3, decimal) ". "
        }

        ol.lst-kix_list_15-6 {
            list-style-type: none
        }

        .lst-kix_list_25-8>li {
            counter-increment: lst-ctn-kix_list_25-8
        }

        ol.lst-kix_list_15-7 {
            list-style-type: none
        }

        ol.lst-kix_list_15-8 {
            list-style-type: none
        }

        .lst-kix_list_14-0>li:before {
            content: ""counter(lst-ctn-kix_list_14-0, decimal) ". "
        }

        .lst-kix_list_14-4>li:before {
            content: ""counter(lst-ctn-kix_list_14-4, lower-latin) ". "
        }

        ol.lst-kix_list_15-2 {
            list-style-type: none
        }

        ol.lst-kix_list_15-3 {
            list-style-type: none
        }

        ol.lst-kix_list_15-4 {
            list-style-type: none
        }

        ol.lst-kix_list_18-5.start {
            counter-reset: lst-ctn-kix_list_18-5 0
        }

        .lst-kix_list_14-5>li:before {
            content: ""counter(lst-ctn-kix_list_14-5, lower-roman) ". "
        }

        .lst-kix_list_14-7>li:before {
            content: ""counter(lst-ctn-kix_list_14-7, lower-latin) ". "
        }

        ol.lst-kix_list_15-5 {
            list-style-type: none
        }

        .lst-kix_list_6-1>li {
            counter-increment: lst-ctn-kix_list_6-1
        }

        ol.lst-kix_list_15-0 {
            list-style-type: none
        }

        .lst-kix_list_14-6>li:before {
            content: ""counter(lst-ctn-kix_list_14-6, decimal) ". "
        }

        ol.lst-kix_list_15-1 {
            list-style-type: none
        }

        .lst-kix_list_17-0>li {
            counter-increment: lst-ctn-kix_list_17-0
        }

        ol.lst-kix_list_7-4.start {
            counter-reset: lst-ctn-kix_list_7-4 0
        }

        .lst-kix_list_9-0>li {
            counter-increment: lst-ctn-kix_list_9-0
        }

        .lst-kix_list_34-6>li {
            counter-increment: lst-ctn-kix_list_34-6
        }

        ol.lst-kix_list_25-3.start {
            counter-reset: lst-ctn-kix_list_25-3 0
        }

        ol.lst-kix_list_11-8.start {
            counter-reset: lst-ctn-kix_list_11-8 0
        }

        .lst-kix_list_14-2>li:before {
            content: ""counter(lst-ctn-kix_list_14-2, lower-roman) ". "
        }

        ol.lst-kix_list_32-1.start {
            counter-reset: lst-ctn-kix_list_32-1 0
        }

        .lst-kix_list_20-7>li {
            counter-increment: lst-ctn-kix_list_20-7
        }

        ol.lst-kix_list_26-7 {
            list-style-type: none
        }

        ol.lst-kix_list_35-6.start {
            counter-reset: lst-ctn-kix_list_35-6 0
        }

        ol.lst-kix_list_26-6 {
            list-style-type: none
        }

        ol.lst-kix_list_26-8 {
            list-style-type: none
        }

        ol.lst-kix_list_26-3 {
            list-style-type: none
        }

        ol.lst-kix_list_12-0.start {
            counter-reset: lst-ctn-kix_list_12-0 0
        }

        ol.lst-kix_list_26-2 {
            list-style-type: none
        }

        ol.lst-kix_list_26-5 {
            list-style-type: none
        }

        ol.lst-kix_list_28-3.start {
            counter-reset: lst-ctn-kix_list_28-3 0
        }

        ol.lst-kix_list_26-4 {
            list-style-type: none
        }

        ol.lst-kix_list_26-1 {
            list-style-type: none
        }

        ol.lst-kix_list_26-0 {
            list-style-type: none
        }

        .lst-kix_list_32-2>li:before {
            content: ""counter(lst-ctn-kix_list_32-2, lower-roman) ". "
        }

        .lst-kix_list_32-1>li:before {
            content: ""counter(lst-ctn-kix_list_32-1, decimal) ". "
        }

        .lst-kix_list_32-3>li:before {
            content: ""counter(lst-ctn-kix_list_32-3, decimal) ". "
        }

        ol.lst-kix_list_21-6.start {
            counter-reset: lst-ctn-kix_list_21-6 0
        }

        ol.lst-kix_list_3-7.start {
            counter-reset: lst-ctn-kix_list_3-7 0
        }

        .lst-kix_list_28-7>li {
            counter-increment: lst-ctn-kix_list_28-7
        }

        .lst-kix_list_14-8>li:before {
            content: ""counter(lst-ctn-kix_list_14-8, lower-roman) ". "
        }

        .lst-kix_list_31-7>li {
            counter-increment: lst-ctn-kix_list_31-7
        }

        .lst-kix_list_32-0>li:before {
            content: ""counter(lst-ctn-kix_list_32-0, decimal) ". "
        }

        .lst-kix_list_3-2>li {
            counter-increment: lst-ctn-kix_list_3-2
        }

        ol.lst-kix_list_15-5.start {
            counter-reset: lst-ctn-kix_list_15-5 0
        }

        .lst-kix_list_5-0>li:before {
            content: ""counter(lst-ctn-kix_list_5-0, decimal) ". "
        }

        ol.lst-kix_list_6-0 {
            list-style-type: none
        }

        .lst-kix_list_14-8>li {
            counter-increment: lst-ctn-kix_list_14-8
        }

        ol.lst-kix_list_22-3.start {
            counter-reset: lst-ctn-kix_list_22-3 0
        }

        ol.lst-kix_list_6-1 {
            list-style-type: none
        }

        .lst-kix_list_5-4>li {
            counter-increment: lst-ctn-kix_list_5-4
        }

        ol.lst-kix_list_24-6.start {
            counter-reset: lst-ctn-kix_list_24-6 0
        }

        .lst-kix_list_5-3>li:before {
            content: ""counter(lst-ctn-kix_list_5-3, decimal) ". "
        }

        .lst-kix_list_5-2>li:before {
            content: ""counter(lst-ctn-kix_list_5-2, lower-roman) ". "
        }

        .lst-kix_list_8-3>li {
            counter-increment: lst-ctn-kix_list_8-3
        }

        .lst-kix_list_5-1>li:before {
            content: ""counter(lst-ctn-kix_list_5-1, lower-latin) ". "
        }

        ol.lst-kix_list_18-0.start {
            counter-reset: lst-ctn-kix_list_18-0 0
        }

        .lst-kix_list_5-7>li:before {
            content: ""counter(lst-ctn-kix_list_5-7, lower-latin) ". "
        }

        .lst-kix_list_5-6>li:before {
            content: ""counter(lst-ctn-kix_list_5-6, decimal) ". "
        }

        .lst-kix_list_5-8>li:before {
            content: ""counter(lst-ctn-kix_list_5-8, lower-roman) ". "
        }

        ol.lst-kix_list_6-6 {
            list-style-type: none
        }

        ol.lst-kix_list_6-7 {
            list-style-type: none
        }

        .lst-kix_list_5-4>li:before {
            content: ""counter(lst-ctn-kix_list_5-4, lower-latin) ". "
        }

        ol.lst-kix_list_6-8 {
            list-style-type: none
        }

        .lst-kix_list_5-5>li:before {
            content: ""counter(lst-ctn-kix_list_5-5, lower-roman) ". "
        }

        ol.lst-kix_list_6-2 {
            list-style-type: none
        }

        ol.lst-kix_list_6-3 {
            list-style-type: none
        }

        ol.lst-kix_list_6-4 {
            list-style-type: none
        }

        ol.lst-kix_list_6-5 {
            list-style-type: none
        }

        ol.lst-kix_list_12-5.start {
            counter-reset: lst-ctn-kix_list_12-5 0
        }

        .lst-kix_list_6-1>li:before {
            content: ""counter(lst-ctn-kix_list_6-1, lower-latin) ". "
        }

        .lst-kix_list_6-3>li:before {
            content: ""counter(lst-ctn-kix_list_6-0, decimal) ". "
        }

        ol.lst-kix_list_32-6.start {
            counter-reset: lst-ctn-kix_list_32-6 0
        }

        .lst-kix_list_6-8>li {
            counter-increment: lst-ctn-kix_list_6-8
        }

        .lst-kix_list_6-0>li:before {
            content: ""counter(lst-ctn-kix_list_6-0, decimal) ". "
        }

        .lst-kix_list_6-4>li:before {
            content: ""counter(lst-ctn-kix_list_6-4, lower-latin) ". "
        }

        ol.lst-kix_list_14-8.start {
            counter-reset: lst-ctn-kix_list_14-8 0
        }

        .lst-kix_list_6-2>li:before {
            content: ""counter(lst-ctn-kix_list_6-2, lower-roman) ". "
        }

        ol.lst-kix_list_15-0.start {
            counter-reset: lst-ctn-kix_list_15-0 0
        }

        ol.lst-kix_list_35-1.start {
            counter-reset: lst-ctn-kix_list_35-1 0
        }

        .lst-kix_list_2-5>li {
            counter-increment: lst-ctn-kix_list_2-5
        }

        ol.lst-kix_list_3-2.start {
            counter-reset: lst-ctn-kix_list_3-2 0
        }

        .lst-kix_list_6-8>li:before {
            content: ""counter(lst-ctn-kix_list_6-8, lower-roman) ". "
        }

        .lst-kix_list_6-5>li:before {
            content: ""counter(lst-ctn-kix_list_6-5, lower-roman) ". "
        }

        .lst-kix_list_6-7>li:before {
            content: ""counter(lst-ctn-kix_list_6-7, lower-latin) ". "
        }

        .lst-kix_list_6-6>li:before {
            content: ""counter(lst-ctn-kix_list_6-6, decimal) ". "
        }

        ol.lst-kix_list_17-8 {
            list-style-type: none
        }

        ol.lst-kix_list_27-6.start {
            counter-reset: lst-ctn-kix_list_27-6 0
        }

        .lst-kix_list_7-4>li:before {
            content: ""counter(lst-ctn-kix_list_7-4, lower-latin) ". "
        }

        .lst-kix_list_7-6>li:before {
            content: ""counter(lst-ctn-kix_list_7-6, decimal) ". "
        }

        ol.lst-kix_list_17-4 {
            list-style-type: none
        }

        .lst-kix_list_18-5>li {
            counter-increment: lst-ctn-kix_list_18-5
        }

        ol.lst-kix_list_19-7.start {
            counter-reset: lst-ctn-kix_list_19-7 0
        }

        ol.lst-kix_list_17-5 {
            list-style-type: none
        }

        .lst-kix_list_15-5>li {
            counter-increment: lst-ctn-kix_list_15-5
        }

        ol.lst-kix_list_17-6 {
            list-style-type: none
        }

        ol.lst-kix_list_6-2.start {
            counter-reset: lst-ctn-kix_list_6-2 0
        }

        ol.lst-kix_list_24-1.start {
            counter-reset: lst-ctn-kix_list_24-1 0
        }

        ol.lst-kix_list_17-7 {
            list-style-type: none
        }

        ol.lst-kix_list_17-0 {
            list-style-type: none
        }

        .lst-kix_list_22-2>li {
            counter-increment: lst-ctn-kix_list_22-2
        }

        ol.lst-kix_list_17-1 {
            list-style-type: none
        }

        ol.lst-kix_list_17-2 {
            list-style-type: none
        }

        ol.lst-kix_list_17-3 {
            list-style-type: none
        }

        .lst-kix_list_7-2>li:before {
            content: ""counter(lst-ctn-kix_list_7-2, lower-roman) ". "
        }

        .lst-kix_list_7-6>li {
            counter-increment: lst-ctn-kix_list_7-6
        }

        .lst-kix_list_27-2>li {
            counter-increment: lst-ctn-kix_list_27-2
        }

        ol.lst-kix_list_22-8.start {
            counter-reset: lst-ctn-kix_list_22-8 0
        }

        .lst-kix_list_31-0>li {
            counter-increment: lst-ctn-kix_list_31-0
        }

        .lst-kix_list_34-8>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) "."counter(lst-ctn-kix_list_34-4, decimal) "."counter(lst-ctn-kix_list_34-5, decimal) "."counter(lst-ctn-kix_list_34-6, decimal) "."counter(lst-ctn-kix_list_34-7, decimal) "."counter(lst-ctn-kix_list_34-8, decimal) ". "
        }

        .lst-kix_list_31-0>li:before {
            content: ""counter(lst-ctn-kix_list_31-0, decimal) ". "
        }

        .lst-kix_list_12-6>li {
            counter-increment: lst-ctn-kix_list_12-6
        }

        .lst-kix_list_24-3>li {
            counter-increment: lst-ctn-kix_list_24-3
        }

        .lst-kix_list_13-7>li:before {
            content: ""counter(lst-ctn-kix_list_13-7, lower-latin) ". "
        }

        ol.lst-kix_list_34-4.start {
            counter-reset: lst-ctn-kix_list_34-4 0
        }

        ol.lst-kix_list_23-0.start {
            counter-reset: lst-ctn-kix_list_23-0 0
        }

        .lst-kix_list_7-8>li:before {
            content: ""counter(lst-ctn-kix_list_7-8, lower-roman) ". "
        }

        .lst-kix_list_15-6>li {
            counter-increment: lst-ctn-kix_list_15-6
        }

        .lst-kix_list_4-7>li {
            counter-increment: lst-ctn-kix_list_4-7
        }

        .lst-kix_list_15-5>li:before {
            content: ""counter(lst-ctn-kix_list_15-5, lower-roman) ". "
        }

        ol.lst-kix_list_2-5.start {
            counter-reset: lst-ctn-kix_list_2-5 0
        }

        ol.lst-kix_list_28-8 {
            list-style-type: none
        }

        .lst-kix_list_31-6>li:before {
            content: ""counter(lst-ctn-kix_list_31-6, decimal) ". "
        }

        .lst-kix_list_31-8>li:before {
            content: ""counter(lst-ctn-kix_list_31-8, lower-roman) ". "
        }

        ol.lst-kix_list_26-0.start {
            counter-reset: lst-ctn-kix_list_26-0 0
        }

        .lst-kix_list_13-4>li {
            counter-increment: lst-ctn-kix_list_13-4
        }

        .lst-kix_list_9-8>li {
            counter-increment: lst-ctn-kix_list_9-8
        }

        ol.lst-kix_list_28-5 {
            list-style-type: none
        }

        ol.lst-kix_list_28-4 {
            list-style-type: none
        }

        .lst-kix_list_27-3>li {
            counter-increment: lst-ctn-kix_list_27-3
        }

        ol.lst-kix_list_28-7 {
            list-style-type: none
        }

        ol.lst-kix_list_28-6 {
            list-style-type: none
        }

        ol.lst-kix_list_28-1 {
            list-style-type: none
        }

        ol.lst-kix_list_28-0 {
            list-style-type: none
        }

        .lst-kix_list_4-1>li:before {
            content: ""counter(lst-ctn-kix_list_4-1, lower-latin) ". "
        }

        .lst-kix_list_31-2>li:before {
            content: ""counter(lst-ctn-kix_list_31-2, lower-roman) ". "
        }

        .lst-kix_list_31-4>li:before {
            content: ""counter(lst-ctn-kix_list_31-4, lower-latin) ". "
        }

        ol.lst-kix_list_28-3 {
            list-style-type: none
        }

        ol.lst-kix_list_28-2 {
            list-style-type: none
        }

        .lst-kix_list_15-7>li:before {
            content: ""counter(lst-ctn-kix_list_15-7, lower-latin) ". "
        }

        .lst-kix_list_17-7>li {
            counter-increment: lst-ctn-kix_list_17-7
        }

        ol.lst-kix_list_33-3.start {
            counter-reset: lst-ctn-kix_list_33-3 0
        }

        .lst-kix_list_4-3>li:before {
            content: ""counter(lst-ctn-kix_list_4-3, decimal) ". "
        }

        .lst-kix_list_4-5>li:before {
            content: ""counter(lst-ctn-kix_list_4-5, lower-roman) ". "
        }

        .lst-kix_list_1-8>li {
            counter-increment: lst-ctn-kix_list_1-8
        }

        .lst-kix_list_15-1>li:before {
            content: ""counter(lst-ctn-kix_list_15-1, lower-latin) ". "
        }

        .lst-kix_list_24-4>li {
            counter-increment: lst-ctn-kix_list_24-4
        }

        ol.lst-kix_list_1-4.start {
            counter-reset: lst-ctn-kix_list_1-4 0
        }

        .lst-kix_list_33-1>li {
            counter-increment: lst-ctn-kix_list_33-1
        }

        .lst-kix_list_15-3>li:before {
            content: ""counter(lst-ctn-kix_list_15-3, decimal) ". "
        }

        .lst-kix_list_22-1>li {
            counter-increment: lst-ctn-kix_list_22-1
        }

        ol.lst-kix_list_4-4.start {
            counter-reset: lst-ctn-kix_list_4-4 0
        }

        .lst-kix_list_16-2>li {
            counter-increment: lst-ctn-kix_list_16-2
        }

        .lst-kix_list_33-2>li {
            counter-increment: lst-ctn-kix_list_33-2
        }

        .lst-kix_list_30-2>li {
            counter-increment: lst-ctn-kix_list_30-2
        }

        ol.lst-kix_list_9-2.start {
            counter-reset: lst-ctn-kix_list_9-2 0
        }

        .lst-kix_list_20-0>li {
            counter-increment: lst-ctn-kix_list_20-0
        }

        ol.lst-kix_list_16-7.start {
            counter-reset: lst-ctn-kix_list_16-7 0
        }

        .lst-kix_list_11-2>li {
            counter-increment: lst-ctn-kix_list_11-2
        }

        .lst-kix_list_32-4>li:before {
            content: ""counter(lst-ctn-kix_list_32-4, lower-latin) ". "
        }

        .lst-kix_list_19-2>li {
            counter-increment: lst-ctn-kix_list_19-2
        }

        .lst-kix_list_26-5>li {
            counter-increment: lst-ctn-kix_list_26-5
        }

        .lst-kix_list_33-8>li {
            counter-increment: lst-ctn-kix_list_33-8
        }

        .lst-kix_list_33-4>li:before {
            content: "("counter(lst-ctn-kix_list_33-4, lower-latin) ") "
        }

        .lst-kix_list_30-3>li {
            counter-increment: lst-ctn-kix_list_30-3
        }

        .lst-kix_list_12-3>li:before {
            content: ""counter(lst-ctn-kix_list_12-3, decimal) ". "
        }

        ol.lst-kix_list_8-8 {
            list-style-type: none
        }

        ol.lst-kix_list_31-4.start {
            counter-reset: lst-ctn-kix_list_31-4 0
        }

        .lst-kix_list_12-1>li:before {
            content: ""counter(lst-ctn-kix_list_12-1, lower-latin) ". "
        }

        .lst-kix_list_32-6>li:before {
            content: ""counter(lst-ctn-kix_list_32-6, decimal) ". "
        }

        ol.lst-kix_list_8-4 {
            list-style-type: none
        }

        ol.lst-kix_list_8-5 {
            list-style-type: none
        }

        .lst-kix_list_33-0>li:before {
            content: ""counter(lst-ctn-kix_list_33-0, decimal) ") "
        }

        .lst-kix_list_33-2>li:before {
            content: ""counter(lst-ctn-kix_list_33-2, lower-roman) ") "
        }

        ol.lst-kix_list_8-6 {
            list-style-type: none
        }

        ol.lst-kix_list_8-7 {
            list-style-type: none
        }

        .lst-kix_list_16-3>li {
            counter-increment: lst-ctn-kix_list_16-3
        }

        .lst-kix_list_32-8>li:before {
            content: ""counter(lst-ctn-kix_list_32-8, lower-roman) ". "
        }

        ol.lst-kix_list_8-0 {
            list-style-type: none
        }

        .lst-kix_list_23-6>li {
            counter-increment: lst-ctn-kix_list_23-6
        }

        ol.lst-kix_list_8-1 {
            list-style-type: none
        }

        .lst-kix_list_13-3>li {
            counter-increment: lst-ctn-kix_list_13-3
        }

        ol.lst-kix_list_13-6.start {
            counter-reset: lst-ctn-kix_list_13-6 0
        }

        ol.lst-kix_list_8-2 {
            list-style-type: none
        }

        ol.lst-kix_list_25-8.start {
            counter-reset: lst-ctn-kix_list_25-8 0
        }

        ol.lst-kix_list_8-3 {
            list-style-type: none
        }

        .lst-kix_list_34-0>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) ". "
        }

        .lst-kix_list_14-1>li {
            counter-increment: lst-ctn-kix_list_14-1
        }

        .lst-kix_list_21-4>li {
            counter-increment: lst-ctn-kix_list_21-4
        }

        .lst-kix_list_13-3>li:before {
            content: ""counter(lst-ctn-kix_list_13-3, decimal) ". "
        }

        .lst-kix_list_34-4>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) "."counter(lst-ctn-kix_list_34-4, decimal) ". "
        }

        .lst-kix_list_35-3>li {
            counter-increment: lst-ctn-kix_list_35-3
        }

        .lst-kix_list_28-0>li {
            counter-increment: lst-ctn-kix_list_28-0
        }

        .lst-kix_list_34-6>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) "."counter(lst-ctn-kix_list_34-4, decimal) "."counter(lst-ctn-kix_list_34-5, decimal) "."counter(lst-ctn-kix_list_34-6, decimal) ". "
        }

        .lst-kix_list_13-5>li:before {
            content: ""counter(lst-ctn-kix_list_13-5, lower-roman) ". "
        }

        .lst-kix_list_12-5>li:before {
            content: ""counter(lst-ctn-kix_list_12-5, lower-roman) ". "
        }

        ol.lst-kix_list_28-8.start {
            counter-reset: lst-ctn-kix_list_28-8 0
        }

        ol.lst-kix_list_13-7.start {
            counter-reset: lst-ctn-kix_list_13-7 0
        }

        .lst-kix_list_18-4>li {
            counter-increment: lst-ctn-kix_list_18-4
        }

        .lst-kix_list_12-7>li:before {
            content: ""counter(lst-ctn-kix_list_12-7, lower-latin) ". "
        }

        .lst-kix_list_29-4>li {
            counter-increment: lst-ctn-kix_list_29-4
        }

        .lst-kix_list_33-6>li:before {
            content: ""counter(lst-ctn-kix_list_33-6, decimal) ". "
        }

        ol.lst-kix_list_21-1.start {
            counter-reset: lst-ctn-kix_list_21-1 0
        }

        .lst-kix_list_32-4>li {
            counter-increment: lst-ctn-kix_list_32-4
        }

        .lst-kix_list_33-8>li:before {
            content: ""counter(lst-ctn-kix_list_33-8, lower-roman) ". "
        }

        ol.lst-kix_list_29-0.start {
            counter-reset: lst-ctn-kix_list_29-0 0
        }

        .lst-kix_list_34-2>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) ". "
        }

        .lst-kix_list_25-1>li {
            counter-increment: lst-ctn-kix_list_25-1
        }

        .lst-kix_list_13-1>li:before {
            content: ""counter(lst-ctn-kix_list_13-1, lower-latin) ". "
        }

        .lst-kix_list_32-5>li {
            counter-increment: lst-ctn-kix_list_32-5
        }

        .lst-kix_list_34-5>li {
            counter-increment: lst-ctn-kix_list_34-5
        }

        .lst-kix_list_30-5>li:before {
            content: ""counter(lst-ctn-kix_list_30-5, lower-roman) ". "
        }

        .lst-kix_list_22-8>li {
            counter-increment: lst-ctn-kix_list_22-8
        }

        .lst-kix_list_35-0>li:before {
            content: ""counter(lst-ctn-kix_list_35-0, decimal) ") "
        }

        .lst-kix_list_35-1>li:before {
            content: ""counter(lst-ctn-kix_list_35-1, lower-latin) ". "
        }

        .lst-kix_list_35-4>li:before {
            content: "("counter(lst-ctn-kix_list_35-4, lower-latin) ") "
        }

        .lst-kix_list_35-5>li:before {
            content: "("counter(lst-ctn-kix_list_35-5, lower-roman) ") "
        }

        ol.lst-kix_list_11-6 {
            list-style-type: none
        }

        ol.lst-kix_list_11-7 {
            list-style-type: none
        }

        .lst-kix_list_28-8>li {
            counter-increment: lst-ctn-kix_list_28-8
        }

        ol.lst-kix_list_11-8 {
            list-style-type: none
        }

        ol.lst-kix_list_33-2.start {
            counter-reset: lst-ctn-kix_list_33-2 0
        }

        .lst-kix_list_1-1>li {
            counter-increment: lst-ctn-kix_list_1-1
        }

        .lst-kix_list_30-1>li:before {
            content: ""counter(lst-ctn-kix_list_30-1, lower-latin) ". "
        }

        ol.lst-kix_list_11-2 {
            list-style-type: none
        }

        ol.lst-kix_list_11-3 {
            list-style-type: none
        }

        ol.lst-kix_list_2-6.start {
            counter-reset: lst-ctn-kix_list_2-6 0
        }

        .lst-kix_list_3-0>li:before {
            content: ""counter(lst-ctn-kix_list_3-0, decimal) ". "
        }

        ol.lst-kix_list_11-4 {
            list-style-type: none
        }

        ol.lst-kix_list_11-5 {
            list-style-type: none
        }

        ol.lst-kix_list_20-5.start {
            counter-reset: lst-ctn-kix_list_20-5 0
        }

        .lst-kix_list_30-2>li:before {
            content: ""counter(lst-ctn-kix_list_30-2, decimal) ". "
        }

        ol.lst-kix_list_13-1.start {
            counter-reset: lst-ctn-kix_list_13-1 0
        }

        ol.lst-kix_list_11-0 {
            list-style-type: none
        }

        ol.lst-kix_list_11-1 {
            list-style-type: none
        }

        .lst-kix_list_4-0>li {
            counter-increment: lst-ctn-kix_list_4-0
        }

        .lst-kix_list_31-6>li {
            counter-increment: lst-ctn-kix_list_31-6
        }

        .lst-kix_list_3-4>li:before {
            content: ""counter(lst-ctn-kix_list_3-4, lower-latin) ". "
        }

        .lst-kix_list_3-3>li:before {
            content: ""counter(lst-ctn-kix_list_3-3, decimal) ". "
        }

        .lst-kix_list_8-0>li:before {
            content: ""counter(lst-ctn-kix_list_8-0, decimal) ". "
        }

        .lst-kix_list_30-6>li:before {
            content: ""counter(lst-ctn-kix_list_30-6, decimal) ". "
        }

        .lst-kix_list_8-7>li:before {
            content: ""counter(lst-ctn-kix_list_8-7, lower-latin) ". "
        }

        .lst-kix_list_3-8>li:before {
            content: ""counter(lst-ctn-kix_list_3-8, lower-roman) ". "
        }

        ol.lst-kix_list_22-7 {
            list-style-type: none
        }

        .lst-kix_list_8-3>li:before {
            content: ""counter(lst-ctn-kix_list_8-3, decimal) ". "
        }

        ol.lst-kix_list_22-6 {
            list-style-type: none
        }

        ol.lst-kix_list_22-8 {
            list-style-type: none
        }

        ol.lst-kix_list_22-3 {
            list-style-type: none
        }

        .lst-kix_list_3-7>li:before {
            content: ""counter(lst-ctn-kix_list_3-7, lower-latin) ". "
        }

        ol.lst-kix_list_22-2 {
            list-style-type: none
        }

        ol.lst-kix_list_22-5 {
            list-style-type: none
        }

        .lst-kix_list_8-4>li:before {
            content: ""counter(lst-ctn-kix_list_8-4, lower-latin) ". "
        }

        ol.lst-kix_list_22-4 {
            list-style-type: none
        }

        .lst-kix_list_19-1>li {
            counter-increment: lst-ctn-kix_list_19-1
        }

        ol.lst-kix_list_22-1 {
            list-style-type: none
        }

        ol.lst-kix_list_22-0 {
            list-style-type: none
        }

        ol.lst-kix_list_8-5.start {
            counter-reset: lst-ctn-kix_list_8-5 0
        }

        ol.lst-kix_list_26-4.start {
            counter-reset: lst-ctn-kix_list_26-4 0
        }

        .lst-kix_list_17-1>li {
            counter-increment: lst-ctn-kix_list_17-1
        }

        .lst-kix_list_35-8>li:before {
            content: ""counter(lst-ctn-kix_list_35-8, lower-roman) ". "
        }

        .lst-kix_list_11-1>li:before {
            content: ""counter(lst-ctn-kix_list_11-1, lower-latin) ". "
        }

        ol.lst-kix_list_31-0.start {
            counter-reset: lst-ctn-kix_list_31-0 0
        }

        .lst-kix_list_11-0>li:before {
            content: ""counter(lst-ctn-kix_list_11-0, decimal) ". "
        }

        ol.lst-kix_list_9-3.start {
            counter-reset: lst-ctn-kix_list_9-3 2
        }

        .lst-kix_list_8-8>li:before {
            content: ""counter(lst-ctn-kix_list_8-8, lower-roman) ". "
        }

        .lst-kix_list_35-4>li {
            counter-increment: lst-ctn-kix_list_35-4
        }

        .lst-kix_list_16-8>li:before {
            content: ""counter(lst-ctn-kix_list_16-8, lower-roman) ". "
        }

        ol.lst-kix_list_2-2 {
            list-style-type: none
        }

        ol.lst-kix_list_2-3 {
            list-style-type: none
        }

        .lst-kix_list_16-7>li:before {
            content: ""counter(lst-ctn-kix_list_16-7, lower-latin) ". "
        }

        ol.lst-kix_list_2-4 {
            list-style-type: none
        }

        ol.lst-kix_list_2-5 {
            list-style-type: none
        }

        .lst-kix_list_17-8>li {
            counter-increment: lst-ctn-kix_list_17-8
        }

        ol.lst-kix_list_35-8 {
            list-style-type: none
        }

        ol.lst-kix_list_2-0 {
            list-style-type: none
        }

        ol.lst-kix_list_2-1 {
            list-style-type: none
        }

        .lst-kix_list_4-8>li:before {
            content: ""counter(lst-ctn-kix_list_4-8, lower-roman) ". "
        }

        ol.lst-kix_list_35-5 {
            list-style-type: none
        }

        .lst-kix_list_21-5>li {
            counter-increment: lst-ctn-kix_list_21-5
        }

        ol.lst-kix_list_35-4 {
            list-style-type: none
        }

        .lst-kix_list_14-2>li {
            counter-increment: lst-ctn-kix_list_14-2
        }

        ol.lst-kix_list_20-0.start {
            counter-reset: lst-ctn-kix_list_20-0 0
        }

        .lst-kix_list_17-0>li:before {
            content: ""counter(lst-ctn-kix_list_17-0, decimal) ". "
        }

        .lst-kix_list_4-7>li:before {
            content: ""counter(lst-ctn-kix_list_4-7, lower-latin) ". "
        }

        ol.lst-kix_list_35-7 {
            list-style-type: none
        }

        ol.lst-kix_list_35-6 {
            list-style-type: none
        }

        ol.lst-kix_list_35-1 {
            list-style-type: none
        }

        ol.lst-kix_list_35-0 {
            list-style-type: none
        }

        ol.lst-kix_list_35-3 {
            list-style-type: none
        }

        ol.lst-kix_list_35-2 {
            list-style-type: none
        }

        .lst-kix_list_16-0>li:before {
            content: ""counter(lst-ctn-kix_list_16-0, decimal) ". "
        }

        ol.lst-kix_list_4-8.start {
            counter-reset: lst-ctn-kix_list_4-8 0
        }

        .lst-kix_list_8-4>li {
            counter-increment: lst-ctn-kix_list_8-4
        }

        .lst-kix_list_16-4>li:before {
            content: ""counter(lst-ctn-kix_list_16-4, lower-latin) ". "
        }

        ol.lst-kix_list_3-3.start {
            counter-reset: lst-ctn-kix_list_3-3 0
        }

        .lst-kix_list_16-3>li:before {
            content: ""counter(lst-ctn-kix_list_16-3, decimal) ". "
        }

        ol.lst-kix_list_2-6 {
            list-style-type: none
        }

        ol.lst-kix_list_2-7 {
            list-style-type: none
        }

        ol.lst-kix_list_2-8 {
            list-style-type: none
        }

        .lst-kix_list_11-3>li {
            counter-increment: lst-ctn-kix_list_11-3
        }

        ol.lst-kix_list_18-1.start {
            counter-reset: lst-ctn-kix_list_18-1 0
        }

        .lst-kix_list_30-1>li {
            counter-increment: lst-ctn-kix_list_30-1
        }

        .lst-kix_list_17-7>li:before {
            content: ""counter(lst-ctn-kix_list_17-7, lower-latin) ". "
        }

        ol.lst-kix_list_8-6.start {
            counter-reset: lst-ctn-kix_list_8-6 0
        }

        .lst-kix_list_17-8>li:before {
            content: ""counter(lst-ctn-kix_list_17-8, lower-roman) ". "
        }

        .lst-kix_list_33-0>li {
            counter-increment: lst-ctn-kix_list_33-0
        }

        .lst-kix_list_17-3>li:before {
            content: ""counter(lst-ctn-kix_list_17-3, decimal) ". "
        }

        .lst-kix_list_17-4>li:before {
            content: ""counter(lst-ctn-kix_list_17-4, lower-latin) ". "
        }

        ol.lst-kix_list_8-0.start {
            counter-reset: lst-ctn-kix_list_8-0 0
        }

        .lst-kix_list_7-0>li:before {
            content: ""counter(lst-ctn-kix_list_7-0, decimal) ". "
        }

        ol.lst-kix_list_27-7.start {
            counter-reset: lst-ctn-kix_list_27-7 0
        }

        ol.lst-kix_list_19-6.start {
            counter-reset: lst-ctn-kix_list_19-6 0
        }

        ol.lst-kix_list_9-7.start {
            counter-reset: lst-ctn-kix_list_9-7 0
        }

        ol.lst-kix_list_13-8 {
            list-style-type: none
        }

        .lst-kix_list_2-4>li:before {
            content: ""counter(lst-ctn-kix_list_2-4, lower-latin) ". "
        }

        .lst-kix_list_2-8>li:before {
            content: ""counter(lst-ctn-kix_list_2-8, lower-roman) ". "
        }

        ol.lst-kix_list_13-4 {
            list-style-type: none
        }

        ol.lst-kix_list_13-5 {
            list-style-type: none
        }

        ol.lst-kix_list_13-6 {
            list-style-type: none
        }

        ol.lst-kix_list_13-7 {
            list-style-type: none
        }

        ol.lst-kix_list_13-0 {
            list-style-type: none
        }

        ol.lst-kix_list_13-1 {
            list-style-type: none
        }

        ol.lst-kix_list_13-2 {
            list-style-type: none
        }

        ol.lst-kix_list_13-3 {
            list-style-type: none
        }

        .lst-kix_list_7-3>li:before {
            content: ""counter(lst-ctn-kix_list_7-3, decimal) ". "
        }

        .lst-kix_list_10-0>li:before {
            content: "\0025cf  "
        }

        ol.lst-kix_list_21-7.start {
            counter-reset: lst-ctn-kix_list_21-7 0
        }

        .lst-kix_list_9-7>li {
            counter-increment: lst-ctn-kix_list_9-7
        }

        .lst-kix_list_13-8>li:before {
            content: ""counter(lst-ctn-kix_list_13-8, lower-roman) ". "
        }

        .lst-kix_list_31-1>li:before {
            content: ""counter(lst-ctn-kix_list_31-1, lower-latin) ". "
        }

        .lst-kix_list_18-3>li:before {
            content: ""counter(lst-ctn-kix_list_18-3, decimal) ". "
        }

        .lst-kix_list_18-7>li:before {
            content: ""counter(lst-ctn-kix_list_18-7, lower-latin) ". "
        }

        .lst-kix_list_18-6>li {
            counter-increment: lst-ctn-kix_list_18-6
        }

        ol.lst-kix_list_3-8.start {
            counter-reset: lst-ctn-kix_list_3-8 0
        }

        .lst-kix_list_7-7>li:before {
            content: ""counter(lst-ctn-kix_list_7-7, lower-latin) ". "
        }

        ol.lst-kix_list_8-1.start {
            counter-reset: lst-ctn-kix_list_8-1 0
        }

        .lst-kix_list_15-4>li:before {
            content: ""counter(lst-ctn-kix_list_15-4, lower-latin) ". "
        }

        ol.lst-kix_list_19-1.start {
            counter-reset: lst-ctn-kix_list_19-1 0
        }

        .lst-kix_list_31-5>li:before {
            content: ""counter(lst-ctn-kix_list_31-5, lower-roman) ". "
        }

        ol.lst-kix_list_24-8 {
            list-style-type: none
        }

        .lst-kix_list_10-4>li:before {
            content: "o  "
        }

        .lst-kix_list_10-8>li:before {
            content: "\0025aa  "
        }

        ol.lst-kix_list_20-4.start {
            counter-reset: lst-ctn-kix_list_20-4 0
        }

        ol.lst-kix_list_24-5 {
            list-style-type: none
        }

        .lst-kix_list_4-0>li:before {
            content: ""counter(lst-ctn-kix_list_4-0, decimal) ". "
        }

        ol.lst-kix_list_24-4 {
            list-style-type: none
        }

        ol.lst-kix_list_24-7 {
            list-style-type: none
        }

        ol.lst-kix_list_25-2.start {
            counter-reset: lst-ctn-kix_list_25-2 0
        }

        .lst-kix_list_15-0>li:before {
            content: ""counter(lst-ctn-kix_list_15-0, decimal) ". "
        }

        .lst-kix_list_15-8>li:before {
            content: ""counter(lst-ctn-kix_list_15-8, lower-roman) ". "
        }

        ol.lst-kix_list_24-6 {
            list-style-type: none
        }

        ol.lst-kix_list_24-1 {
            list-style-type: none
        }

        ol.lst-kix_list_14-3.start {
            counter-reset: lst-ctn-kix_list_14-3 0
        }

        ol.lst-kix_list_24-0 {
            list-style-type: none
        }

        ol.lst-kix_list_24-3 {
            list-style-type: none
        }

        .lst-kix_list_15-7>li {
            counter-increment: lst-ctn-kix_list_15-7
        }

        ol.lst-kix_list_24-2 {
            list-style-type: none
        }

        .lst-kix_list_4-4>li:before {
            content: ""counter(lst-ctn-kix_list_4-4, lower-latin) ". "
        }

        .lst-kix_list_9-3>li:before {
            content: ""counter(lst-ctn-kix_list_9-3, decimal) ". "
        }

        ol.lst-kix_list_7-0.start {
            counter-reset: lst-ctn-kix_list_7-0 0
        }

        ol.lst-kix_list_32-5.start {
            counter-reset: lst-ctn-kix_list_32-5 0
        }

        .lst-kix_list_12-8>li {
            counter-increment: lst-ctn-kix_list_12-8
        }

        ol.lst-kix_list_13-2.start {
            counter-reset: lst-ctn-kix_list_13-2 0
        }

        ol.lst-kix_list_4-0 {
            list-style-type: none
        }

        ol.lst-kix_list_4-1 {
            list-style-type: none
        }

        ol.lst-kix_list_4-2 {
            list-style-type: none
        }

        ol.lst-kix_list_4-3 {
            list-style-type: none
        }

        ol.lst-kix_list_33-7.start {
            counter-reset: lst-ctn-kix_list_33-7 0
        }

        ol.lst-kix_list_14-4.start {
            counter-reset: lst-ctn-kix_list_14-4 0
        }

        .lst-kix_list_9-7>li:before {
            content: ""counter(lst-ctn-kix_list_9-7, lower-latin) ". "
        }

        .lst-kix_list_2-4>li {
            counter-increment: lst-ctn-kix_list_2-4
        }

        .lst-kix_list_29-4>li:before {
            content: "("counter(lst-ctn-kix_list_29-4, lower-latin) ") "
        }

        .lst-kix_list_29-8>li:before {
            content: ""counter(lst-ctn-kix_list_29-8, lower-roman) ". "
        }

        ol.lst-kix_list_3-6.start {
            counter-reset: lst-ctn-kix_list_3-6 0
        }

        ol.lst-kix_list_32-2.start {
            counter-reset: lst-ctn-kix_list_32-2 0
        }

        .lst-kix_list_32-5>li:before {
            content: ""counter(lst-ctn-kix_list_32-5, lower-roman) ". "
        }

        .lst-kix_list_11-4>li:before {
            content: ""counter(lst-ctn-kix_list_11-4, lower-latin) ". "
        }

        .lst-kix_list_12-4>li:before {
            content: ""counter(lst-ctn-kix_list_12-4, lower-latin) ". "
        }

        .lst-kix_list_5-3>li {
            counter-increment: lst-ctn-kix_list_5-3
        }

        .lst-kix_list_29-0>li:before {
            content: ""counter(lst-ctn-kix_list_29-0, decimal) ") "
        }

        ol.lst-kix_list_4-8 {
            list-style-type: none
        }

        .lst-kix_list_7-4>li {
            counter-increment: lst-ctn-kix_list_7-4
        }

        .lst-kix_list_33-1>li:before {
            content: ""counter(lst-ctn-kix_list_33-1, lower-latin) ") "
        }

        ol.lst-kix_list_19-2.start {
            counter-reset: lst-ctn-kix_list_19-2 0
        }

        .lst-kix_list_1-0>li:before {
            content: ""counter(lst-ctn-kix_list_1-0, decimal) ". "
        }

        .lst-kix_list_11-8>li:before {
            content: ""counter(lst-ctn-kix_list_11-8, lower-roman) ". "
        }

        ol.lst-kix_list_4-4 {
            list-style-type: none
        }

        ol.lst-kix_list_4-5 {
            list-style-type: none
        }

        ol.lst-kix_list_2-0.start {
            counter-reset: lst-ctn-kix_list_2-0 0
        }

        .lst-kix_list_12-0>li:before {
            content: ""counter(lst-ctn-kix_list_12-0, decimal) ". "
        }

        ol.lst-kix_list_4-6 {
            list-style-type: none
        }

        ol.lst-kix_list_4-7 {
            list-style-type: none
        }

        .lst-kix_list_1-4>li:before {
            content: ""counter(lst-ctn-kix_list_1-4, lower-latin) ". "
        }

        .lst-kix_list_13-0>li:before {
            content: ""counter(lst-ctn-kix_list_13-0, decimal) ". "
        }

        .lst-kix_list_1-6>li {
            counter-increment: lst-ctn-kix_list_1-6
        }

        .lst-kix_list_13-4>li:before {
            content: ""counter(lst-ctn-kix_list_13-4, lower-latin) ". "
        }

        .lst-kix_list_34-5>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) "."counter(lst-ctn-kix_list_34-4, decimal) "."counter(lst-ctn-kix_list_34-5, decimal) ". "
        }

        ol.lst-kix_list_26-5.start {
            counter-reset: lst-ctn-kix_list_26-5 0
        }

        ol.lst-kix_list_19-3.start {
            counter-reset: lst-ctn-kix_list_19-3 0
        }

        .lst-kix_list_33-5>li:before {
            content: "("counter(lst-ctn-kix_list_33-5, lower-roman) ") "
        }

        .lst-kix_list_2-0>li:before {
            content: ""counter(lst-ctn-kix_list_2-0, decimal) ". "
        }

        ol.lst-kix_list_2-1.start {
            counter-reset: lst-ctn-kix_list_2-1 0
        }

        .lst-kix_list_4-5>li {
            counter-increment: lst-ctn-kix_list_4-5
        }

        ol.lst-kix_list_33-8.start {
            counter-reset: lst-ctn-kix_list_33-8 0
        }

        ol.lst-kix_list_9-8.start {
            counter-reset: lst-ctn-kix_list_9-8 0
        }

        .lst-kix_list_1-8>li:before {
            content: ""counter(lst-ctn-kix_list_1-8, lower-roman) ". "
        }

        .lst-kix_list_34-1>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) ". "
        }

        .lst-kix_list_12-8>li:before {
            content: ""counter(lst-ctn-kix_list_12-8, lower-roman) ". "
        }

        .lst-kix_list_8-2>li {
            counter-increment: lst-ctn-kix_list_8-2
        }

        .lst-kix_list_19-0>li:before {
            content: ""counter(lst-ctn-kix_list_19-0, decimal) ". "
        }

        ol.lst-kix_list_17-7.start {
            counter-reset: lst-ctn-kix_list_17-7 0
        }

        ol.lst-kix_list_12-6.start {
            counter-reset: lst-ctn-kix_list_12-6 0
        }

        .lst-kix_list_23-8>li {
            counter-increment: lst-ctn-kix_list_23-8
        }

        .lst-kix_list_8-1>li {
            counter-increment: lst-ctn-kix_list_8-1
        }

        .lst-kix_list_35-5>li {
            counter-increment: lst-ctn-kix_list_35-5
        }

        ol.lst-kix_list_30-6 {
            list-style-type: none
        }

        ol.lst-kix_list_8-2.start {
            counter-reset: lst-ctn-kix_list_8-2 0
        }

        ol.lst-kix_list_26-1.start {
            counter-reset: lst-ctn-kix_list_26-1 0
        }

        .lst-kix_list_19-2>li:before {
            content: ""counter(lst-ctn-kix_list_19-2, lower-roman) ". "
        }

        ol.lst-kix_list_30-5 {
            list-style-type: none
        }

        ol.lst-kix_list_21-0.start {
            counter-reset: lst-ctn-kix_list_21-0 0
        }

        ol.lst-kix_list_30-8 {
            list-style-type: none
        }

        ol.lst-kix_list_3-1.start {
            counter-reset: lst-ctn-kix_list_3-1 0
        }

        ol.lst-kix_list_30-7 {
            list-style-type: none
        }

        ol.lst-kix_list_30-2 {
            list-style-type: none
        }

        ol.lst-kix_list_30-1 {
            list-style-type: none
        }

        ol.lst-kix_list_30-4 {
            list-style-type: none
        }

        ol.lst-kix_list_30-3 {
            list-style-type: none
        }

        ol.lst-kix_list_30-0 {
            list-style-type: none
        }

        .lst-kix_list_7-0>li {
            counter-increment: lst-ctn-kix_list_7-0
        }

        .lst-kix_list_19-0>li {
            counter-increment: lst-ctn-kix_list_19-0
        }

        .lst-kix_list_29-6>li {
            counter-increment: lst-ctn-kix_list_29-6
        }

        ol.lst-kix_list_31-3.start {
            counter-reset: lst-ctn-kix_list_31-3 0
        }

        .lst-kix_list_2-3>li {
            counter-increment: lst-ctn-kix_list_2-3
        }

        ol.lst-kix_list_19-8.start {
            counter-reset: lst-ctn-kix_list_19-8 0
        }

        .lst-kix_list_1-2>li {
            counter-increment: lst-ctn-kix_list_1-2
        }

        .lst-kix_list_19-8>li:before {
            content: ""counter(lst-ctn-kix_list_19-8, lower-roman) ". "
        }

        ol.lst-kix_list_14-7.start {
            counter-reset: lst-ctn-kix_list_14-7 0
        }

        ol.lst-kix_list_20-8.start {
            counter-reset: lst-ctn-kix_list_20-8 0
        }

        .lst-kix_list_19-5>li:before {
            content: ""counter(lst-ctn-kix_list_19-5, lower-roman) ". "
        }

        ol.lst-kix_list_34-8.start {
            counter-reset: lst-ctn-kix_list_34-8 0
        }

        .lst-kix_list_19-7>li:before {
            content: ""counter(lst-ctn-kix_list_19-7, lower-latin) ". "
        }

        .lst-kix_list_9-2>li {
            counter-increment: lst-ctn-kix_list_9-2
        }

        ol.lst-kix_list_23-8.start {
            counter-reset: lst-ctn-kix_list_23-8 0
        }

        .lst-kix_list_24-5>li {
            counter-increment: lst-ctn-kix_list_24-5
        }

        ol.lst-kix_list_17-2.start {
            counter-reset: lst-ctn-kix_list_17-2 0
        }

        .lst-kix_list_13-2>li {
            counter-increment: lst-ctn-kix_list_13-2
        }

        ol.lst-kix_list_21-5.start {
            counter-reset: lst-ctn-kix_list_21-5 0
        }

        .lst-kix_list_19-7>li {
            counter-increment: lst-ctn-kix_list_19-7
        }

        .lst-kix_list_14-3>li {
            counter-increment: lst-ctn-kix_list_14-3
        }

        ol.lst-kix_list_15-6.start {
            counter-reset: lst-ctn-kix_list_15-6 0
        }

        .lst-kix_list_25-6>li {
            counter-increment: lst-ctn-kix_list_25-6
        }

        .lst-kix_list_12-1>li {
            counter-increment: lst-ctn-kix_list_12-1
        }

        ol.lst-kix_list_31-8.start {
            counter-reset: lst-ctn-kix_list_31-8 0
        }

        .lst-kix_list_18-1>li:before {
            content: ""counter(lst-ctn-kix_list_18-1, lower-latin) ". "
        }

        .lst-kix_list_33-3>li {
            counter-increment: lst-ctn-kix_list_33-3
        }

        ol.lst-kix_list_25-4.start {
            counter-reset: lst-ctn-kix_list_25-4 0
        }

        .lst-kix_list_23-4>li {
            counter-increment: lst-ctn-kix_list_23-4
        }

        ol.lst-kix_list_23-1.start {
            counter-reset: lst-ctn-kix_list_23-1 0
        }

        ol.lst-kix_list_32-0.start {
            counter-reset: lst-ctn-kix_list_32-0 0
        }

        .lst-kix_list_23-1>li {
            counter-increment: lst-ctn-kix_list_23-1
        }

        ol.lst-kix_list_34-3.start {
            counter-reset: lst-ctn-kix_list_34-3 0
        }

        ol.lst-kix_list_2-4.start {
            counter-reset: lst-ctn-kix_list_2-4 0
        }

        .lst-kix_list_34-4>li {
            counter-increment: lst-ctn-kix_list_34-4
        }

        ol.lst-kix_list_1-3 {
            list-style-type: none
        }

        ol.lst-kix_list_1-4 {
            list-style-type: none
        }

        .lst-kix_list_2-7>li:before {
            content: ""counter(lst-ctn-kix_list_2-7, lower-latin) ". "
        }

        .lst-kix_list_2-7>li {
            counter-increment: lst-ctn-kix_list_2-7
        }

        .lst-kix_list_24-2>li {
            counter-increment: lst-ctn-kix_list_24-2
        }

        ol.lst-kix_list_1-5 {
            list-style-type: none
        }

        ol.lst-kix_list_1-6 {
            list-style-type: none
        }

        ol.lst-kix_list_1-0 {
            list-style-type: none
        }

        .lst-kix_list_2-5>li:before {
            content: ""counter(lst-ctn-kix_list_2-5, lower-roman) ". "
        }

        ol.lst-kix_list_1-1 {
            list-style-type: none
        }

        ol.lst-kix_list_1-2 {
            list-style-type: none
        }

        ol.lst-kix_list_17-0.start {
            counter-reset: lst-ctn-kix_list_17-0 0
        }

        ol.lst-kix_list_32-8 {
            list-style-type: none
        }

        ol.lst-kix_list_32-7 {
            list-style-type: none
        }

        .lst-kix_list_27-5>li:before {
            content: ""counter(lst-ctn-kix_list_27-5, lower-roman) ". "
        }

        ol.lst-kix_list_32-4 {
            list-style-type: none
        }

        ol.lst-kix_list_32-3 {
            list-style-type: none
        }

        ol.lst-kix_list_32-6 {
            list-style-type: none
        }

        ol.lst-kix_list_32-5 {
            list-style-type: none
        }

        ol.lst-kix_list_32-0 {
            list-style-type: none
        }

        .lst-kix_list_22-3>li {
            counter-increment: lst-ctn-kix_list_22-3
        }

        .lst-kix_list_18-6>li:before {
            content: ""counter(lst-ctn-kix_list_18-6, decimal) ". "
        }

        ol.lst-kix_list_32-2 {
            list-style-type: none
        }

        .lst-kix_list_14-6>li {
            counter-increment: lst-ctn-kix_list_14-6
        }

        ol.lst-kix_list_32-1 {
            list-style-type: none
        }

        .lst-kix_list_10-1>li:before {
            content: "o  "
        }

        .lst-kix_list_18-4>li:before {
            content: ""counter(lst-ctn-kix_list_18-4, lower-latin) ". "
        }

        ol.lst-kix_list_15-1.start {
            counter-reset: lst-ctn-kix_list_15-1 0
        }

        ol.lst-kix_list_15-4.start {
            counter-reset: lst-ctn-kix_list_15-4 0
        }

        .lst-kix_list_7-7>li {
            counter-increment: lst-ctn-kix_list_7-7
        }

        ol.lst-kix_list_1-7 {
            list-style-type: none
        }

        ol.lst-kix_list_1-8 {
            list-style-type: none
        }

        li.li-bullet-1:before {
            margin-left: -9pt;
            white-space: nowrap;
            display: inline-block;
            min-width: 9pt
        }

        .lst-kix_list_10-3>li:before {
            content: "\0025cf  "
        }

        .lst-kix_list_15-4>li {
            counter-increment: lst-ctn-kix_list_15-4
        }

        .lst-kix_list_2-6>li {
            counter-increment: lst-ctn-kix_list_2-6
        }

        ol.lst-kix_list_7-3.start {
            counter-reset: lst-ctn-kix_list_7-3 0
        }

        .lst-kix_list_34-0>li {
            counter-increment: lst-ctn-kix_list_34-0
        }

        .lst-kix_list_28-1>li {
            counter-increment: lst-ctn-kix_list_28-1
        }

        .lst-kix_list_26-4>li {
            counter-increment: lst-ctn-kix_list_26-4
        }

        ol.lst-kix_list_5-7.start {
            counter-reset: lst-ctn-kix_list_5-7 0
        }

        ol.lst-kix_list_28-7.start {
            counter-reset: lst-ctn-kix_list_28-7 0
        }

        .lst-kix_list_20-8>li:before {
            content: ""counter(lst-ctn-kix_list_20-8, lower-roman) ". "
        }

        .lst-kix_list_3-4>li {
            counter-increment: lst-ctn-kix_list_3-4
        }

        .lst-kix_list_29-7>li:before {
            content: ""counter(lst-ctn-kix_list_29-7, lower-latin) ". "
        }

        .lst-kix_list_20-0>li:before {
            content: ""counter(lst-ctn-kix_list_20-0, decimal) ". "
        }

        .lst-kix_list_29-5>li:before {
            content: "("counter(lst-ctn-kix_list_29-5, lower-roman) ") "
        }

        .lst-kix_list_9-6>li:before {
            content: ""counter(lst-ctn-kix_list_9-6, decimal) ". "
        }

        .lst-kix_list_9-4>li:before {
            content: ""counter(lst-ctn-kix_list_9-4, lower-latin) ". "
        }

        .lst-kix_list_30-8>li {
            counter-increment: lst-ctn-kix_list_30-8
        }

        ol.lst-kix_list_34-5.start {
            counter-reset: lst-ctn-kix_list_34-5 0
        }

        .lst-kix_list_20-6>li:before {
            content: ""counter(lst-ctn-kix_list_20-6, decimal) ". "
        }

        .lst-kix_list_23-0>li {
            counter-increment: lst-ctn-kix_list_23-0
        }

        ol.lst-kix_list_12-1.start {
            counter-reset: lst-ctn-kix_list_12-1 0
        }

        .lst-kix_list_11-5>li:before {
            content: ""counter(lst-ctn-kix_list_11-5, lower-roman) ". "
        }

        ol.lst-kix_list_21-2.start {
            counter-reset: lst-ctn-kix_list_21-2 0
        }

        .lst-kix_list_20-6>li {
            counter-increment: lst-ctn-kix_list_20-6
        }

        .lst-kix_list_1-1>li:before {
            content: ""counter(lst-ctn-kix_list_1-1, lower-latin) ". "
        }

        .lst-kix_list_11-7>li:before {
            content: ""counter(lst-ctn-kix_list_11-7, lower-latin) ". "
        }

        ol.lst-kix_list_25-7.start {
            counter-reset: lst-ctn-kix_list_25-7 0
        }

        .lst-kix_list_8-5>li {
            counter-increment: lst-ctn-kix_list_8-5
        }

        .lst-kix_list_1-3>li:before {
            content: ""counter(lst-ctn-kix_list_1-3, decimal) ". "
        }

        ol.lst-kix_list_34-6.start {
            counter-reset: lst-ctn-kix_list_34-6 0
        }

        .lst-kix_list_28-3>li:before {
            content: ""counter(lst-ctn-kix_list_28-3, decimal) ". "
        }

        ol.lst-kix_list_21-8 {
            list-style-type: none
        }

        ol.lst-kix_list_21-7 {
            list-style-type: none
        }

        ol.lst-kix_list_2-7.start {
            counter-reset: lst-ctn-kix_list_2-7 0
        }

        ol.lst-kix_list_21-4 {
            list-style-type: none
        }

        ol.lst-kix_list_21-3 {
            list-style-type: none
        }

        ol.lst-kix_list_21-6 {
            list-style-type: none
        }

        .lst-kix_list_14-7>li {
            counter-increment: lst-ctn-kix_list_14-7
        }

        ol.lst-kix_list_21-5 {
            list-style-type: none
        }

        ol.lst-kix_list_21-0 {
            list-style-type: none
        }

        ol.lst-kix_list_7-5.start {
            counter-reset: lst-ctn-kix_list_7-5 0
        }

        ol.lst-kix_list_21-2 {
            list-style-type: none
        }

        ol.lst-kix_list_31-5.start {
            counter-reset: lst-ctn-kix_list_31-5 0
        }

        ol.lst-kix_list_21-1 {
            list-style-type: none
        }

        .lst-kix_list_25-7>li {
            counter-increment: lst-ctn-kix_list_25-7
        }

        .lst-kix_list_27-7>li:before {
            content: ""counter(lst-ctn-kix_list_27-7, lower-latin) ". "
        }

        .lst-kix_list_28-1>li:before {
            content: ""counter(lst-ctn-kix_list_28-1, upper-latin) ". "
        }

        ol.lst-kix_list_19-6 {
            list-style-type: none
        }

        ol.lst-kix_list_19-7 {
            list-style-type: none
        }

        .lst-kix_list_35-2>li:before {
            content: ""counter(lst-ctn-kix_list_35-2, lower-roman) ") "
        }

        ol.lst-kix_list_19-8 {
            list-style-type: none
        }

        .lst-kix_list_3-1>li {
            counter-increment: lst-ctn-kix_list_3-1
        }

        .lst-kix_list_30-3>li:before {
            content: ""counter(lst-ctn-kix_list_30-3, decimal) ". "
        }

        ol.lst-kix_list_19-2 {
            list-style-type: none
        }

        ol.lst-kix_list_19-3 {
            list-style-type: none
        }

        ol.lst-kix_list_34-0.start {
            counter-reset: lst-ctn-kix_list_34-0 0
        }

        .lst-kix_list_26-8>li {
            counter-increment: lst-ctn-kix_list_26-8
        }

        ol.lst-kix_list_19-4 {
            list-style-type: none
        }

        ol.lst-kix_list_19-5 {
            list-style-type: none
        }

        .lst-kix_list_30-8>li:before {
            content: ""counter(lst-ctn-kix_list_30-8, lower-roman) ". "
        }

        .lst-kix_list_35-7>li:before {
            content: ""counter(lst-ctn-kix_list_35-7, lower-latin) ". "
        }

        ol.lst-kix_list_19-0 {
            list-style-type: none
        }

        .lst-kix_list_30-5>li {
            counter-increment: lst-ctn-kix_list_30-5
        }

        ol.lst-kix_list_19-1 {
            list-style-type: none
        }

        ol.lst-kix_list_7-7.start {
            counter-reset: lst-ctn-kix_list_7-7 0
        }

        .lst-kix_list_3-1>li:before {
            content: ""counter(lst-ctn-kix_list_3-1, lower-latin) ". "
        }

        .lst-kix_list_26-6>li:before {
            content: ""counter(lst-ctn-kix_list_26-6, decimal) ". "
        }

        .lst-kix_list_14-0>li {
            counter-increment: lst-ctn-kix_list_14-0
        }

        ol.lst-kix_list_17-4.start {
            counter-reset: lst-ctn-kix_list_17-4 0
        }

        .lst-kix_list_33-6>li {
            counter-increment: lst-ctn-kix_list_33-6
        }

        .lst-kix_list_8-2>li:before {
            content: ""counter(lst-ctn-kix_list_8-2, lower-roman) ". "
        }

        ol.lst-kix_list_31-6.start {
            counter-reset: lst-ctn-kix_list_31-6 0
        }

        .lst-kix_list_12-0>li {
            counter-increment: lst-ctn-kix_list_12-0
        }

        ol.lst-kix_list_12-3.start {
            counter-reset: lst-ctn-kix_list_12-3 0
        }

        .lst-kix_list_21-2>li:before {
            content: ""counter(lst-ctn-kix_list_21-2, lower-roman) ". "
        }

        .lst-kix_list_8-5>li:before {
            content: ""counter(lst-ctn-kix_list_8-5, lower-roman) ". "
        }

        .lst-kix_list_15-1>li {
            counter-increment: lst-ctn-kix_list_15-1
        }

        .lst-kix_list_2-0>li {
            counter-increment: lst-ctn-kix_list_2-0
        }

        ol.lst-kix_list_28-0.start {
            counter-reset: lst-ctn-kix_list_28-0 0
        }

        .lst-kix_list_26-3>li:before {
            content: ""counter(lst-ctn-kix_list_26-3, decimal) ". "
        }

        .lst-kix_list_3-6>li:before {
            content: ""counter(lst-ctn-kix_list_3-6, decimal) ". "
        }

        .lst-kix_list_21-7>li:before {
            content: ""counter(lst-ctn-kix_list_21-7, lower-latin) ". "
        }

        .lst-kix_list_11-2>li:before {
            content: ""counter(lst-ctn-kix_list_11-2, lower-roman) ". "
        }

        ol.lst-kix_list_5-0.start {
            counter-reset: lst-ctn-kix_list_5-0 0
        }

        ol.lst-kix_list_31-7.start {
            counter-reset: lst-ctn-kix_list_31-7 0
        }

        ol.lst-kix_list_12-4.start {
            counter-reset: lst-ctn-kix_list_12-4 0
        }

        .lst-kix_list_16-6>li:before {
            content: ""counter(lst-ctn-kix_list_16-6, decimal) ". "
        }

        .lst-kix_list_35-2>li {
            counter-increment: lst-ctn-kix_list_35-2
        }

        .lst-kix_list_25-2>li:before {
            content: ""counter(lst-ctn-kix_list_25-2, lower-roman) ". "
        }

        .lst-kix_list_18-2>li {
            counter-increment: lst-ctn-kix_list_18-2
        }

        .lst-kix_list_29-5>li {
            counter-increment: lst-ctn-kix_list_29-5
        }

        .lst-kix_list_22-6>li {
            counter-increment: lst-ctn-kix_list_22-6
        }

        ol.lst-kix_list_5-6.start {
            counter-reset: lst-ctn-kix_list_5-6 0
        }

        .lst-kix_list_16-1>li:before {
            content: ""counter(lst-ctn-kix_list_16-1, lower-latin) ". "
        }

        .lst-kix_list_7-3>li {
            counter-increment: lst-ctn-kix_list_7-3
        }

        .lst-kix_list_25-0>li {
            counter-increment: lst-ctn-kix_list_25-0
        }

        .lst-kix_list_19-3>li {
            counter-increment: lst-ctn-kix_list_19-3
        }

        ol.lst-kix_list_28-6.start {
            counter-reset: lst-ctn-kix_list_28-6 0
        }

        ol.lst-kix_list_7-8.start {
            counter-reset: lst-ctn-kix_list_7-8 0
        }

        ol.lst-kix_list_28-5.start {
            counter-reset: lst-ctn-kix_list_28-5 0
        }

        .lst-kix_list_12-4>li {
            counter-increment: lst-ctn-kix_list_12-4
        }

        .lst-kix_list_23-7>li {
            counter-increment: lst-ctn-kix_list_23-7
        }

        .lst-kix_list_12-7>li {
            counter-increment: lst-ctn-kix_list_12-7
        }

        .lst-kix_list_17-2>li:before {
            content: ""counter(lst-ctn-kix_list_17-2, lower-roman) ". "
        }

        .lst-kix_list_34-7>li {
            counter-increment: lst-ctn-kix_list_34-7
        }

        ol.lst-kix_list_5-5.start {
            counter-reset: lst-ctn-kix_list_5-5 0
        }

        .lst-kix_list_30-0>li:before {
            content: ""counter(lst-ctn-kix_list_30-0, decimal) ". "
        }

        ol.lst-kix_list_17-3.start {
            counter-reset: lst-ctn-kix_list_17-3 0
        }

        .lst-kix_list_17-5>li:before {
            content: ""counter(lst-ctn-kix_list_17-5, lower-roman) ". "
        }

        .lst-kix_list_6-2>li {
            counter-increment: lst-ctn-kix_list_6-2
        }

        .lst-kix_list_27-2>li:before {
            content: ""counter(lst-ctn-kix_list_27-2, lower-latin) ". "
        }

        .lst-kix_list_22-3>li:before {
            content: "("counter(lst-ctn-kix_list_22-3, decimal) ") "
        }

        .lst-kix_list_13-5>li {
            counter-increment: lst-ctn-kix_list_13-5
        }

        .lst-kix_list_7-1>li:before {
            content: ""counter(lst-ctn-kix_list_7-1, lower-latin) ". "
        }

        .lst-kix_list_9-6>li {
            counter-increment: lst-ctn-kix_list_9-6
        }

        .lst-kix_list_29-2>li {
            counter-increment: lst-ctn-kix_list_29-2
        }

        ol.lst-kix_list_28-4.start {
            counter-reset: lst-ctn-kix_list_28-4 0
        }

        ol.lst-kix_list_23-3.start {
            counter-reset: lst-ctn-kix_list_23-3 1
        }

        ol.lst-kix_list_5-4.start {
            counter-reset: lst-ctn-kix_list_5-4 0
        }

        .lst-kix_list_20-3>li {
            counter-increment: lst-ctn-kix_list_20-3
        }

        ol.lst-kix_list_5-1.start {
            counter-reset: lst-ctn-kix_list_5-1 0
        }

        .lst-kix_list_25-3>li {
            counter-increment: lst-ctn-kix_list_25-3
        }

        .lst-kix_list_16-6>li {
            counter-increment: lst-ctn-kix_list_16-6
        }

        .lst-kix_list_11-6>li {
            counter-increment: lst-ctn-kix_list_11-6
        }

        ol.lst-kix_list_28-1.start {
            counter-reset: lst-ctn-kix_list_28-1 0
        }

        .lst-kix_list_31-7>li:before {
            content: ""counter(lst-ctn-kix_list_31-7, lower-latin) ". "
        }

        ol.lst-kix_list_17-8.start {
            counter-reset: lst-ctn-kix_list_17-8 0
        }

        ol.lst-kix_list_34-1.start {
            counter-reset: lst-ctn-kix_list_34-1 0
        }

        .lst-kix_list_3-8>li {
            counter-increment: lst-ctn-kix_list_3-8
        }

        .lst-kix_list_4-6>li {
            counter-increment: lst-ctn-kix_list_4-6
        }

        .lst-kix_list_1-5>li {
            counter-increment: lst-ctn-kix_list_1-5
        }

        ol.lst-kix_list_17-5.start {
            counter-reset: lst-ctn-kix_list_17-5 0
        }

        .lst-kix_list_28-4>li {
            counter-increment: lst-ctn-kix_list_28-4
        }

        ol.lst-kix_list_23-6.start {
            counter-reset: lst-ctn-kix_list_23-6 0
        }

        .lst-kix_list_17-4>li {
            counter-increment: lst-ctn-kix_list_17-4
        }

        .lst-kix_list_4-2>li:before {
            content: ""counter(lst-ctn-kix_list_4-2, decimal) ". "
        }

        .lst-kix_list_15-2>li:before {
            content: ""counter(lst-ctn-kix_list_15-2, lower-roman) ". "
        }

        .lst-kix_list_26-1>li {
            counter-increment: lst-ctn-kix_list_26-1
        }

        .lst-kix_list_10-6>li:before {
            content: "\0025cf  "
        }

        .lst-kix_list_9-1>li:before {
            content: ""counter(lst-ctn-kix_list_9-1, lower-latin) ". "
        }

        ol.lst-kix_list_12-7.start {
            counter-reset: lst-ctn-kix_list_12-7 0
        }

        .lst-kix_list_15-8>li {
            counter-increment: lst-ctn-kix_list_15-8
        }

        .lst-kix_list_31-3>li {
            counter-increment: lst-ctn-kix_list_31-3
        }

        ol.lst-kix_list_12-8.start {
            counter-reset: lst-ctn-kix_list_12-8 0
        }

        .lst-kix_list_20-3>li:before {
            content: ""counter(lst-ctn-kix_list_20-3, decimal) ". "
        }

        .lst-kix_list_27-6>li {
            counter-increment: lst-ctn-kix_list_27-6
        }

        .lst-kix_list_29-2>li:before {
            content: ""counter(lst-ctn-kix_list_29-2, lower-roman) ") "
        }

        ol.lst-kix_list_23-5.start {
            counter-reset: lst-ctn-kix_list_23-5 0
        }

        .lst-kix_list_21-1>li {
            counter-increment: lst-ctn-kix_list_21-1
        }

        .lst-kix_list_8-8>li {
            counter-increment: lst-ctn-kix_list_8-8
        }

        ol.lst-kix_list_17-6.start {
            counter-reset: lst-ctn-kix_list_17-6 0
        }

        .lst-kix_list_28-6>li:before {
            content: ""counter(lst-ctn-kix_list_28-6, decimal) ". "
        }

        .lst-kix_list_1-6>li:before {
            content: ""counter(lst-ctn-kix_list_1-6, decimal) ". "
        }

        ol.lst-kix_list_28-2.start {
            counter-reset: lst-ctn-kix_list_28-2 0
        }

        .lst-kix_list_33-7>li:before {
            content: ""counter(lst-ctn-kix_list_33-7, lower-latin) ". "
        }

        .lst-kix_list_12-6>li:before {
            content: ""counter(lst-ctn-kix_list_12-6, decimal) ". "
        }

        ol.lst-kix_list_23-4.start {
            counter-reset: lst-ctn-kix_list_23-4 0
        }

        .lst-kix_list_34-3>li:before {
            content: ""counter(lst-ctn-kix_list_34-0, decimal) "."counter(lst-ctn-kix_list_34-1, decimal) "."counter(lst-ctn-kix_list_34-2, decimal) "."counter(lst-ctn-kix_list_34-3, decimal) ". "
        }

        .lst-kix_list_2-2>li:before {
            content: ""counter(lst-ctn-kix_list_2-2, lower-roman) ". "
        }

        .lst-kix_list_13-2>li:before {
            content: ""counter(lst-ctn-kix_list_13-2, lower-roman) ". "
        }

        .lst-kix_list_32-1>li {
            counter-increment: lst-ctn-kix_list_32-1
        }

        ol.lst-kix_list_5-2.start {
            counter-reset: lst-ctn-kix_list_5-2 0
        }

        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c38 {
            padding-top: 2pt;
            text-indent: 36pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c63 {
            padding-top: 2pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 13pt
        }

        .c5 {
            margin-left: 72pt;
            padding-top: 0pt;
            padding-left: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c13 {
            margin-left: 117pt;
            padding-top: 0pt;
            padding-left: -9pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c28 {
            padding-top: 12pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 16pt
        }

        .c15 {
            color: #212126;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c53 {
            margin-left: 18pt;
            padding-top: 3pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c1 {
            color: #0563c1;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c60 {
            padding-top: 12pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c69 {
            padding-top: 2pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c16 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 12pt
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

        .c6 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left;
            height: 12pt
        }

        .c11 {
            margin-left: 36pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c19 {
            margin-left: 180pt;
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c25 {
            padding-top: 0pt;
            padding-left: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c68 {
            padding-top: 2pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c35 {
            padding-top: 12pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c24 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .c62 {
            padding-top: 10pt;
            padding-bottom: 4pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c64 {
            padding-top: 10pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c55 {
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 48pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c77 {
            padding-top: 4pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c51 {
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 24pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c30 {
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 16pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c17 {
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 13pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c36 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c50 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .c9 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c59 {
            text-decoration: none;
            vertical-align: baseline;
            font-size: 11pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c54 {
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: italic
        }

        .c65 {
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Yu Mincho";
            font-style: normal
        }

        .c23 {
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12pt;
            font-family: "Calibri";
            font-style: normal
        }

        .c52 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.1500000000000001;
            text-align: left
        }

        .c73 {
            vertical-align: baseline;
            font-family: "Calibri";
            font-style: normal
        }

        .c42 {
            text-decoration-skip-ink: none;
            -webkit-text-decoration-skip: none;
            text-decoration: underline
        }

        .c75 {
            background-color: #ffffff;
            max-width: 540pt;
            padding: 14.4pt 36pt 14.4pt 36pt
        }

        .c39 {
            margin-left: 117pt;
            padding-left: -9pt
        }

        .c4 {
            padding: 0;
            margin: 0
        }

        .c80 {
            text-decoration: none;
            font-size: 14pt
        }

        .c78 {
            text-decoration: none;
            font-size: 36pt
        }

        .c47 {
            margin-left: 153pt;
            padding-left: -9pt
        }

        .c29 {
            color: #ff0000;
            font-weight: 400
        }

        .c10 {
            color: inherit;
            text-decoration: inherit
        }

        .c26 {
            margin-left: 144pt;
            padding-left: 0pt
        }

        .c44 {
            margin-left: 99pt;
            padding-left: -9pt
        }

        .c61 {
            background-color: #ffffff;
            font-family: "Roboto"
        }

        .c0 {
            color: #0563c1;
            font-weight: 700
        }

        .c40 {
            color: #242729;
            font-weight: 400
        }

        .c14 {
            margin-left: 180pt;
            padding-left: 0pt
        }

        .c57 {
            font-size: 11pt;
            font-family: "Arial"
        }

        .c58 {
            margin-left: 216pt
        }

        .c49 {
            text-indent: 36pt
        }

        .c34 {
            margin-left: 72pt
        }

        .c82 {
            color: #212126
        }

        .c43 {
            margin-left: 135pt
        }

        .c32 {
            margin-left: 144pt
        }

        .c66 {
            color: #ff0000
        }

        .c22 {
            margin-left: 180pt
        }

        .c31 {
            margin-left: 90pt
        }

        .c8 {
            font-weight: 700
        }

        .c67 {
            color: #0070c0
        }

        .c74 {
            height: 16pt
        }

        .c7 {
            font-size: 22pt
        }

        .c79 {
            font-size: 11pt
        }

        .c71 {
            font-size: 10.5pt
        }

        .c12 {
            margin-left: 108pt
        }

        .c3 {
            color: #000000
        }

        .c21 {
            color: #ff9900
        }

        .c48 {
            height: 12pt
        }

        .c76 {
            color: #2f3f4a
        }

        .c33 {
            padding-left: 0pt
        }

        .c70 {
            margin-left: 99pt
        }

        .c84 {
            font-size: 36pt
        }

        .c20 {
            color: #0563c1
        }

        .c46 {
            color: #1155cc
        }

        .c56 {
            font-weight: 400
        }

        .c18 {
            color: #2e75b5
        }

        .c37 {
            font-size: 13pt
        }

        .c72 {
            color: #090909
        }

        .c27 {
            margin-left: 36pt
        }

        .c83 {
            font-size: 12pt
        }

        .c81 {
            margin-left: 18pt
        }

        .c45 {
            margin-left: 126pt
        }

        .c41 {
            margin-left: 54pt
        }

        .title {
            padding-top: 0pt;
            color: #000000;
            font-size: 28pt;
            padding-bottom: 0pt;
            font-family: "Calibri";
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .subtitle {
            padding-top: 18pt;
            color: #666666;
            font-size: 24pt;
            padding-bottom: 4pt;
            font-family: "Georgia";
            line-height: 1.0;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        li {
            color: #000000;
            font-size: 12pt;
            font-family: "Calibri"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 12pt;
            font-family: "Calibri"
        }

        h1 {
            padding-top: 12pt;
            color: #2e75b5;
            font-size: 16pt;
            padding-bottom: 0pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 2pt;
            color: #2e75b5;
            font-size: 13pt;
            padding-bottom: 0pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 2pt;
            color: #1e4d78;
            font-size: 12pt;
            padding-bottom: 0pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 2pt;
            color: #2e75b5;
            font-size: 12pt;
            padding-bottom: 0pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 11pt;
            color: #000000;
            font-weight: 700;
            font-size: 11pt;
            padding-bottom: 2pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 10pt;
            color: #000000;
            font-weight: 700;
            font-size: 10pt;
            padding-bottom: 2pt;
            font-family: "Calibri";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }
    </style>