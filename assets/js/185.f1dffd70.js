(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{465:function(e,t,o){"use strict";o.r(t);var n=o(43),r=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=23kFf-GnJoc&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=24?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Clone Web Apps Using Azure App Services"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"cloning-web-apps-using-and-azure-app-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloning-web-apps-using-and-azure-app-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Cloning Web Apps Using and Azure App Services")]),e._v(" "),o("p",[e._v("Keep in mind that this feature is only available to apps hosted on Premium App Service Plans - Thanks to "),o("strong",[e._v("Mike Kauspedas")]),e._v(" for reminding me!")]),e._v(" "),o("p",[o("strong",[e._v("Cloning")]),e._v(" is the ability to clone an existing Web App to a newly created app that is often in a different region. This will enable customers to deploy a number of apps across different regions quickly and easily.")]),e._v(" "),o("p",[o("strong",[e._v("Scenario:")]),e._v(" A company has an existing web app in "),o("strong",[e._v("West US")]),e._v(", they would like to clone the app to "),o("strong",[e._v("East US")]),e._v(" to serve folks that live on that site with better performance such as latency.")]),e._v(" "),o("p",[e._v("In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),o("strong",[e._v("Development Tools")]),e._v(" then you will see "),o("strong",[e._v("Clone App")]),e._v(". Open it and you'll see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/cloneazure1.png")}}),e._v(" "),o("p",[e._v("Ensure you give it an:")]),e._v(" "),o("ul",[o("li",[e._v("App Name - something unique as this site will live in something.azurewebsites.net")]),e._v(" "),o("li",[e._v("Resource Group - Create a new one or use an existing on")]),e._v(" "),o("li",[e._v("Give it a App Service Plan/Location - This is a good time to associate a new plan that will determine the location, features, cost and compute resources associated with your app.")])]),e._v(" "),o("p",[o("strong",[e._v("Hold Up")]),e._v(" Besides changing the location, this is also a great time to determine the plan needed. You might not need all the horsepower to serve this site if you expect very low traffic in that region.")]),e._v(" "),o("ul",[o("li",[e._v("Clone Settings - e clone will copy the content and certificates of your app into a newly created application. You can also copy things like "),o("strong",[e._v("App Settings")]),e._v(", "),o("strong",[e._v("Connection Strings")]),e._v(", "),o("strong",[e._v("Deployment Source")]),e._v(", and "),o("strong",[e._v("Custom Domains")]),e._v(".")])]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/cloneazure2.png")}}),e._v(" "),o("ul",[o("li",[e._v("Application Insights - You can turn it on or off to help you detech and diagnose issues with .NET apps.")])]),e._v(" "),o("p",[e._v("Finally, there is "),o("strong",[e._v("Automation Options")]),e._v(" which brings you to the "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-group-template-deploy?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Resource Manager"),o("OutboundLink")],1),e._v(" templates that are so valuable.")]),e._v(" "),o("p",[o("strong",[e._v("What is a Azure Resource Manager again?")]),e._v(" Azure Resource Manager enables you to work with the resources in your solution as a group. You can deploy, update, or delete all the resources for your solution in a single, coordinated operation. You use a template for deployment and that template can work for different environments such as testing, staging, and production. Resource Manager provides security, auditing, and tagging features to help you manage your resources after deployment. "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Once everything is setup then press "),o("strong",[e._v("Create")]),e._v(" and you'll see the "),o("strong",[e._v("Deployment in Progress")]),e._v(" begin. You can click on it while deploying to see details as shown below:")])])},[],!1,null,null,null);t.default=r.exports}}]);