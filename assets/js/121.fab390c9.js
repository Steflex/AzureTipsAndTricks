(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{420:function(e,t,a){"use strict";a.r(t);var o=a(43),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=I9fx5bFMYjQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=62&t=43s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to query Azure Storage logs in Azure Monitor Log Analytics"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/log-query-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of log queries in Azure Monitor"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"query-azure-storage-analytics-logs-in-azure-log-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-azure-storage-analytics-logs-in-azure-log-analytics","aria-hidden":"true"}},[e._v("#")]),e._v(" Query Azure Storage analytics logs in Azure Log Analytics")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/storage?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),a("OutboundLink")],1),e._v(" is one of the fundamental services in Azure that you probably use for a lot of different things in your applications. In Azure Storage, you can enable diagnostics logs, to be able to understand which operations where executed against the items in your storage account and how that went.")]),e._v(" "),a("p",[e._v("You can visualize the diagnostics logs in the "),a("strong",[e._v("Metrics")]),e._v(" menu of Azure Storage. This enables you to create charts from the metrics in the diagnostics logs. This is great, however, there isn't a way to query the data to actually analyze the logs out-of-the-box. We can use a slightly more complicated solution to query the diagnostics logs, by loading them into Azure Log Analytics. Let's take a look at how to do that.")]),e._v(" "),a("h4",{attrs:{id:"_1-enable-azure-storage-diagnostics-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-enable-azure-storage-diagnostics-logs","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Enable Azure Storage Diagnostics logs")]),e._v(" "),a("p",[e._v("To capture diagnostics from Azure Storage, we first need to enable diagnostic logging. This is very easy to do.")]),e._v(" "),a("ol",[a("li",[e._v("In The Azure portal, in your Azure Storage account, go to the "),a("strong",[e._v("Diagnostic logs (classic)")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Per storage service that you want to enable diagnostics for (Blob, File, Table or Queue), turn the "),a("strong",[e._v("Status")]),e._v(" to "),a("strong",[e._v("On")])]),e._v(" "),a("li",[e._v("Choose which metric you want to log and if and when you want to delete the log data (note that it doesn't cost anything to store diagnostic log data)")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Save")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/EnableStorageMetrics.png")}}),e._v(" "),a("p",[e._v("(Enable Azure Storage diagnostic logs in the Azure portal)")]),e._v(" "),a("p",[e._v("You can now see the logs in the "),a("a",{attrs:{href:"https://azure.microsoft.com/features/storage-explorer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Explorer"),a("OutboundLink")],1),e._v(". For instance, when you've enabled logging for Blobs, the logs will appear in a $logs container and are organized in folders that represent the log date. When you drill down on them and open a log file, you can see that each log entry is written as a separate line and that its values are separated by semicolons.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/LogsInstorageExplorer.png")}}),e._v(" "),a("p",[e._v("(Blob storage diagnostic logs in the Azure Storage Explorer)")]),e._v(" "),a("h4",{attrs:{id:"_2-create-a-log-analytics-workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-log-analytics-workspace","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Create a Log analytics workspace")]),e._v(" "),a("p",[e._v("Now that we have logs in Azure Storage, let's create a Log Analytics workspace to load them into and query them.")]),e._v(" "),a("ol",[a("li",[e._v('In the Azure portal, click on the "'),a("strong",[e._v("Create a new resource")]),e._v('" button (the green plus sign in the top-left corner)')]),e._v(" "),a("li",[e._v("Search for "),a("strong",[e._v('"log analytics"')])]),e._v(" "),a("li",[e._v("The search results will now show "),a("strong",[e._v("Log Analytics workspace")]),e._v(". Click on it and click on "),a("strong",[e._v("Create")])]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Create Log Analytics workspace")]),e._v(" blade shows up\n"),a("ol",[a("li",[e._v("Fill in the name of a new or existing "),a("strong",[e._v("OMS workspace")]),e._v(" (Log Analytics is part of the Operating Management Suite, or OMS)")]),e._v(" "),a("li",[e._v("Pick or create a "),a("strong",[e._v("Resource group")])]),e._v(" "),a("li",[e._v("Pick a "),a("strong",[e._v("Location")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("OK")]),e._v(" to create the Log Analytics workspace")])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/LogsInstorageExplorer.png")}}),e._v(" "),a("p",[e._v("(Create a new Log Analytics workspace in the Azure portal)")]),e._v(" "),a("h4",{attrs:{id:"_3-load-the-azure-storage-diagnostic-logs-into-log-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-load-the-azure-storage-diagnostic-logs-into-log-analytics","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Load the Azure Storage diagnostic logs into Log Analytics")]),e._v(" "),a("p",[e._v("Azure Log Analytics is a place where you can connect all sorts of services and diagnostic sources to, in order to monitor and analyze them. Out-of-the-box, you can connect most Azure resources to Log Analytics, including Azure Storage. However, at the time of writing this post, there is no out-of-the-box option to load the diagnostics logs into Log Analytics, so we have to do that ourselves.")]),e._v(" "),a("p",[e._v("We can load custom data into Log Analytics using the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/log-analytics/log-analytics-data-collector-api?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Data Collector API"),a("OutboundLink")],1),e._v(". But before we do, we need to convert the diagnostic logs into JSON format, as that is what the API expects. Luckily, there is a PowerShell script that we can use for that. "),a("a",{attrs:{href:"https://github.com/Azure/azure-docs-powershell-samples/blob/master/storage/post-storage-logs-to-log-analytics/PostStorageLogs2LogAnalytics.ps1?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("This PowerShell script"),a("OutboundLink")],1),e._v(" downloads the logs from Azure Storage, converts them into JSON and uploads them to Azure Log Analytics.")]),e._v(" "),a("p",[e._v("Before you execute the PowerShell script, you need to fill in the parameters that it needs. The script explains in detail what you need to fill in. You can execute the script locally or in the "),a("a",{attrs:{href:"https://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),a("OutboundLink")],1),e._v(". You can use the Azure Cloud Shell from any OS, including from Mac OS, you just need a browser and an Azure subscription. And once you do, it starts downloading the logs, converting them into JSON and uploading them. This can take a while, depending on how many log files you have.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/ExecutePowerShellScript.png")}}),e._v(" "),a("p",[e._v("(Execute the PowerShell script)")]),e._v(" "),a("h4",{attrs:{id:"_4-query-the-diagnostic-data-in-azure-log-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-query-the-diagnostic-data-in-azure-log-analytics","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Query the diagnostic data in Azure Log Analytics")]),e._v(" "),a("p",[e._v("Now that all of the data is in Azure Log Analytics, you can take advantage of its ability to query data.")]),e._v(" "),a("ol",[a("li",[e._v("In the Azure portal, in your Azure Log Analytics workspace, click on the "),a("strong",[e._v("Logs")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Here, you can create queries that analyze logs within Log Analytics. Our custom logs are saved in the "),a("strong",[e._v("MyStorageLogs1_CL")]),e._v(" log stream. Create a query like this:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MyStorageLogs1_CL \n| where request_start_time_t > datetime("2019-11-21")\n| where request_start_time_t < datetime("2019-11-23")\n| where request_status_s != "Success"\n| project request_start_time_t, request_status_s, operation_type_s, request_url_s \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("This query gets all of the operations that weren't successful within a certain time slot.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Click "),a("strong",[e._v("Run")]),e._v(" to get the results")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/QueryLogs.png")}}),e._v(" "),a("p",[e._v("(Query log data in Azure Log Analytics in the Azure portal)")]),e._v(" "),a("p",[e._v("You can see the results as a list or render them into a chart (which requires you to include other columns in the results, like a number of total requests).")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Azure Storage diagnostic logs contain a lot of valuable information, which isn't easy to extract without the right tools. When you use the querying capabilities of Azure Log Analytics, you can get valuable insights about Azure Storage, which you wouldn't get otherwise. Unfortunately, loading the storage logs into Log Analytics is a bit clumsy and requires a custom script. In the future, the logs might be a first-class citizen that can be connected to Log Analytics directly. For now, just follow the steps above. You can also automate running the script, by running it, let's say, every 24 hours using an Azure Logic App, so that you have the latest logs in Log Analytics every day. Go and try it out!")])])},[],!1,null,null,null);t.default=r.exports}}]);