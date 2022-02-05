/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

<template>
  <div id="home">
    <h1 class="ui header">Okta Customer Identity and Access Management Workshop</h1>
    <div v-if="!authState || !authState.isAuthenticated">
      <p>Welcome to the Okta Customer Identity and Access Management Workshop.</p>

      <p>In this workshop you will implement Okta identity or security services with a custom-built application. Your funAuth developer experience will include the following hands-on topics: </p> 
        <ol>
        <li>Leverage our comprehensive RESTful APIs to create identities within Okta&lsquo;s cloud directory service. </li> 
          <li> Add authentication to your custom application using Okta&lsquo;s Sign-On Widget. </li> 
          <li> Secure access to your API endpoints leveraging Okta&lsquo;s OAuth 2.0 service. </li>
          <li> Augment an OAuth token with external data using Okta&lsquo;s web hooks capabilities. </li> 
          <li> Strengthen your application security by adding Okta Multi-factor Authentication. </li>
      </ol> 
      <p>We  hope you find the funAuth Developer Workshop both helpful and entertaining. We want to make this experience as interactive and educational as possible, so feel free to ask questions throughout the session.  Your Okta hosts are available after this workshop to answer any additional questions and can even discuss your specific application requirements and use cases so don&lsquo;t hesitate to reach out. Thanks for joining us! </p>
      <!-- <p>This example shows you how to use the
        <a href="https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue">Okta Vue Library</a>
        and the
        <a href="https://github.com/okta/okta-signin-widget">Okta Sign-In Widget</a>
        to add the
        <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
        to your application.
        This combination is useful when you want to leverage the features of the Sign-In Widget, and the authentication helper components from the okta-vue module.
      </p> -->
      <router-link
        id="login-button"
        class="ui primary button"
        role="button"
        to="/login"
      >
      Login
      </router-link>
    </div>

    <div v-if="authState && authState.isAuthenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <p>
        You have successfully authenticated against your Okta org, and have been redirected back to your workshop session.
        Visit the <a href="/funauth">FunAuth Challenge</a> page to take a look at your first Challenge.
      </p>
      <h3>Next Steps</h3>
      <p>
        Complete the FunAuth Challenges below and have fun! 
      </p>
    
      <ul>
        <li> 
          <router-link to="/funauth"> FunAuth Challenge One </router-link >
          <!--a href = "../../public/challenge-one_Step-1_customApplicationSignon.html"> FunAuth Challenge One </a -->
      
        </li>
        <li>
          FunAuth Challenge Two
        </li>
        <li>
          FunAuth Challenge Three
        </li>
        <!-- <li
          v-for="(example, index) in resourceServerExamples"
          :key="index"
        >
          <a :href="example.url">{{example.label}}</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
    }
  }
}
</script>
