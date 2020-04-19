(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{549:function(e,r,a){"use strict";a.r(r);var s=a(43),n=Object(s.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("👊 that ⭐️ button on the official "),a("a",{attrs:{href:"https://github.com/Microsoft/AzureTipsAndTricks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repo"),a("OutboundLink")],1),e._v(" to stay up to date.")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/terraform/terraform-vm-msi?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform Image from Azure Marketplace"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This post was brought to you by "),a("strong",[a("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),a("OutboundLink")],1)]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"prebuilt-terraform-image-to-automate-infrastructure-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prebuilt-terraform-image-to-automate-infrastructure-deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" Prebuilt Terraform Image to automate Infrastructure Deployment")]),e._v(" "),a("p",[e._v("Microsoft continues to expand support for  Infrastructure Automation with the launch of a fully configured version of "),a("a",{attrs:{href:"https://www.terraform.io?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),a("OutboundLink")],1),e._v(" in Azure Marketplace. This enables easier adoption for users looking to use Terraform as their primary provisioning tool.")]),e._v(" "),a("p",[e._v("The list includes")]),e._v(" "),a("ul",[a("li",[e._v("Terraform (latest)")]),e._v(" "),a("li",[e._v("Azure CLI 2.0")]),e._v(" "),a("li",[e._v("Managed Service Identity (MSI) VM Extension")])]),e._v(" "),a("p",[e._v("In few simple steps, we will learn to provision an Ubuntu VM and allows us to automate the infrastructure deployment  using Terraform.")]),e._v(" "),a("h4",{attrs:{id:"_1-in-the-azure-portal-go-to-create-a-resource-and-search-for-terraform-in-the-search-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-in-the-azure-portal-go-to-create-a-resource-and-search-for-terraform-in-the-search-box","aria-hidden":"true"}},[e._v("#")]),e._v(' 1. In the Azure portal, go to + Create a resource and search for "terraform" in the search box.')]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/tf-step1.jpg")}}),e._v(" "),a("h4",{attrs:{id:"_2-select-terraform-and-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-select-terraform-and-create","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Select Terraform and Create")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/tf-step2.jpg")}}),e._v(" "),a("h4",{attrs:{id:"_3-complete-the-provisioning-wizard-and-buy-the-virtual-machine-from-azure-marketplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-complete-the-provisioning-wizard-and-buy-the-virtual-machine-from-azure-marketplace","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Complete the provisioning wizard and Buy the virtual machine from Azure marketplace.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/tf-step3.jpg")}}),e._v(" "),a("h4",{attrs:{id:"_4-the-terraform-vm-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-the-terraform-vm-image","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. The Terraform VM image:")]),e._v(" "),a("ul",[a("li",[e._v("Creates a VM with system-assigned identity that's based on the Ubuntu 16.04 LTS image.")]),e._v(" "),a("li",[e._v("Installs the MSI extension on the VM to allow OAuth tokens to be issued for Azure resources.")]),e._v(" "),a("li",[e._v("Assigns RBAC permissions to the managed identity, granting owner rights for the resource group.")]),e._v(" "),a("li",[e._v("Creates a Terraform template folder (tfTemplate).\nPre-configures a Terraform remote state with the Azure back end.")])]),e._v(" "),a("h4",{attrs:{id:"_5-ssh-to-the-vm-and-run-the-below-script-in-your-home-directory-tfenv-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-ssh-to-the-vm-and-run-the-below-script-in-your-home-directory-tfenv-sh","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. SSH to the VM and run the below script in your home directory"),a("code",[e._v("~ . ~/tfEnv.sh")])]),e._v(" "),a("p",[e._v("This script uses az CLI to authenticate with Azure and assign the virtual machine Managed Identity contributor permission on your subscription. You can verify this by going in to the VM's Identity page under Settings")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/tf-step4.jpg")}}),e._v(" "),a("h4",{attrs:{id:"_6-create-a-file-named-azurevm-tf-and-copy-the-following-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-a-file-named-azurevm-tf-and-copy-the-following-code","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. Create a file named "),a("code",[e._v("azurevm.tf")]),e._v(" and copy the following code.")]),e._v(" "),a("p",[e._v("Note: SSH key data is provided in the ssh_keys section. Provide a valid public SSH key in the key_data field.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Create a resource group if it doesn’t exist\nresource "azurerm_resource_group" "myterraformgroup" {\n    name     = "myResourceGroup"\n    location = "eastus"\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Create virtual network\nresource "azurerm_virtual_network" "myterraformnetwork" {\n    name                = "myVnet"\n    address_space       = ["10.0.0.0/16"]\n    location            = "eastus"\n    resource_group_name = "${azurerm_resource_group.myterraformgroup.name}"\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Create subnet\nresource "azurerm_subnet" "myterraformsubnet" {\n    name                 = "mySubnet"\n    resource_group_name  = "${azurerm_resource_group.myterraformgroup.name}"\n    virtual_network_name = "${azurerm_virtual_network.myterraformnetwork.name}"\n    address_prefix       = "10.0.1.0/24"\n}\n\n# Create public IPs\nresource "azurerm_public_ip" "myterraformpublicip" {\n    name                         = "myPublicIP"\n    location                     = "eastus"\n    resource_group_name          = "${azurerm_resource_group.myterraformgroup.name}"\n    allocation_method            = "Dynamic"\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Create Network Security Group and rule\nresource "azurerm_network_security_group" "myterraformnsg" {\n    name                = "myNetworkSecurityGroup"\n    location            = "eastus"\n    resource_group_name = "${azurerm_resource_group.myterraformgroup.name}"\n    \n    security_rule {\n        name                       = "SSH"\n        priority                   = 1001\n        direction                  = "Inbound"\n        access                     = "Allow"\n        protocol                   = "Tcp"\n        source_port_range          = "*"\n        destination_port_range     = "22"\n        source_address_prefix      = "*"\n        destination_address_prefix = "*"\n    }\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Create network interface\nresource "azurerm_network_interface" "myterraformnic" {\n    name                      = "myNIC"\n    location                  = "eastus"\n    resource_group_name       = "${azurerm_resource_group.myterraformgroup.name}"\n    network_security_group_id = "${azurerm_network_security_group.myterraformnsg.id}"\n\n    ip_configuration {\n        name                          = "myNicConfiguration"\n        subnet_id                     = "${azurerm_subnet.myterraformsubnet.id}"\n        private_ip_address_allocation = "Dynamic"\n        public_ip_address_id          = "${azurerm_public_ip.myterraformpublicip.id}"\n    }\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Generate random text for a unique storage account name\nresource "random_id" "randomId" {\n    keepers = {\n        # Generate a new ID only when a new resource group is defined\n        resource_group = "${azurerm_resource_group.myterraformgroup.name}"\n    }\n    \n    byte_length = 8\n}\n\n# Create storage account for boot diagnostics\nresource "azurerm_storage_account" "mystorageaccount" {\n    name                        = "diag${random_id.randomId.hex}"\n    resource_group_name         = "${azurerm_resource_group.myterraformgroup.name}"\n    location                    = "eastus"\n    account_tier                = "Standard"\n    account_replication_type    = "LRS"\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n\n# Create virtual machine\nresource "azurerm_virtual_machine" "myterraformvm" {\n    name                  = "myVM"\n    location              = "eastus"\n    resource_group_name   = "${azurerm_resource_group.myterraformgroup.name}"\n    network_interface_ids = ["${azurerm_network_interface.myterraformnic.id}"]\n    vm_size               = "Standard_DS1_v2"\n\n    storage_os_disk {\n        name              = "myOsDisk"\n        caching           = "ReadWrite"\n        create_option     = "FromImage"\n        managed_disk_type = "Premium_LRS"\n    }\n\n    storage_image_reference {\n        publisher = "Canonical"\n        offer     = "UbuntuServer"\n        sku       = "16.04.0-LTS"\n        version   = "latest"\n    }\n\n    os_profile {\n        computer_name  = "myvm"\n        admin_username = "azureuser"\n    }\n\n    os_profile_linux_config {\n        disable_password_authentication = true\n        ssh_keys {\n            path     = "/home/azureuser/.ssh/authorized_keys"\n            key_data = "ssh-rsa AAAAB3Nz{snip}hwhqT9h"\n        }\n    }\n\n    boot_diagnostics {\n        enabled = "true"\n        storage_uri = "${azurerm_storage_account.mystorageaccount.primary_blob_endpoint}"\n    }\n\n    tags = {\n        environment = "Terraform Demo"\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br"),a("span",{staticClass:"line-number"},[e._v("89")]),a("br"),a("span",{staticClass:"line-number"},[e._v("90")]),a("br"),a("span",{staticClass:"line-number"},[e._v("91")]),a("br"),a("span",{staticClass:"line-number"},[e._v("92")]),a("br"),a("span",{staticClass:"line-number"},[e._v("93")]),a("br"),a("span",{staticClass:"line-number"},[e._v("94")]),a("br"),a("span",{staticClass:"line-number"},[e._v("95")]),a("br"),a("span",{staticClass:"line-number"},[e._v("96")]),a("br"),a("span",{staticClass:"line-number"},[e._v("97")]),a("br"),a("span",{staticClass:"line-number"},[e._v("98")]),a("br"),a("span",{staticClass:"line-number"},[e._v("99")]),a("br"),a("span",{staticClass:"line-number"},[e._v("100")]),a("br"),a("span",{staticClass:"line-number"},[e._v("101")]),a("br"),a("span",{staticClass:"line-number"},[e._v("102")]),a("br"),a("span",{staticClass:"line-number"},[e._v("103")]),a("br"),a("span",{staticClass:"line-number"},[e._v("104")]),a("br"),a("span",{staticClass:"line-number"},[e._v("105")]),a("br"),a("span",{staticClass:"line-number"},[e._v("106")]),a("br"),a("span",{staticClass:"line-number"},[e._v("107")]),a("br"),a("span",{staticClass:"line-number"},[e._v("108")]),a("br"),a("span",{staticClass:"line-number"},[e._v("109")]),a("br"),a("span",{staticClass:"line-number"},[e._v("110")]),a("br"),a("span",{staticClass:"line-number"},[e._v("111")]),a("br"),a("span",{staticClass:"line-number"},[e._v("112")]),a("br"),a("span",{staticClass:"line-number"},[e._v("113")]),a("br"),a("span",{staticClass:"line-number"},[e._v("114")]),a("br"),a("span",{staticClass:"line-number"},[e._v("115")]),a("br"),a("span",{staticClass:"line-number"},[e._v("116")]),a("br"),a("span",{staticClass:"line-number"},[e._v("117")]),a("br"),a("span",{staticClass:"line-number"},[e._v("118")]),a("br"),a("span",{staticClass:"line-number"},[e._v("119")]),a("br"),a("span",{staticClass:"line-number"},[e._v("120")]),a("br"),a("span",{staticClass:"line-number"},[e._v("121")]),a("br"),a("span",{staticClass:"line-number"},[e._v("122")]),a("br"),a("span",{staticClass:"line-number"},[e._v("123")]),a("br"),a("span",{staticClass:"line-number"},[e._v("124")]),a("br"),a("span",{staticClass:"line-number"},[e._v("125")]),a("br"),a("span",{staticClass:"line-number"},[e._v("126")]),a("br"),a("span",{staticClass:"line-number"},[e._v("127")]),a("br"),a("span",{staticClass:"line-number"},[e._v("128")]),a("br"),a("span",{staticClass:"line-number"},[e._v("129")]),a("br"),a("span",{staticClass:"line-number"},[e._v("130")]),a("br"),a("span",{staticClass:"line-number"},[e._v("131")]),a("br"),a("span",{staticClass:"line-number"},[e._v("132")]),a("br"),a("span",{staticClass:"line-number"},[e._v("133")]),a("br"),a("span",{staticClass:"line-number"},[e._v("134")]),a("br"),a("span",{staticClass:"line-number"},[e._v("135")]),a("br"),a("span",{staticClass:"line-number"},[e._v("136")]),a("br"),a("span",{staticClass:"line-number"},[e._v("137")]),a("br"),a("span",{staticClass:"line-number"},[e._v("138")]),a("br"),a("span",{staticClass:"line-number"},[e._v("139")]),a("br"),a("span",{staticClass:"line-number"},[e._v("140")]),a("br"),a("span",{staticClass:"line-number"},[e._v("141")]),a("br"),a("span",{staticClass:"line-number"},[e._v("142")]),a("br"),a("span",{staticClass:"line-number"},[e._v("143")]),a("br"),a("span",{staticClass:"line-number"},[e._v("144")]),a("br"),a("span",{staticClass:"line-number"},[e._v("145")]),a("br"),a("span",{staticClass:"line-number"},[e._v("146")]),a("br"),a("span",{staticClass:"line-number"},[e._v("147")]),a("br"),a("span",{staticClass:"line-number"},[e._v("148")]),a("br"),a("span",{staticClass:"line-number"},[e._v("149")]),a("br"),a("span",{staticClass:"line-number"},[e._v("150")]),a("br"),a("span",{staticClass:"line-number"},[e._v("151")]),a("br")])]),a("h4",{attrs:{id:"build-and-deploy-the-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy-the-infrastructure","aria-hidden":"true"}},[e._v("#")]),e._v(" Build and deploy the infrastructure")]),e._v(" "),a("p",[e._v("With your Terraform template created, the first step is to initialize Terraform. This step ensures that Terraform has all the prerequisites to build your template in Azure.")]),e._v(" "),a("p",[a("code",[e._v("terraform init")])]),e._v(" "),a("p",[e._v("The next step is to have Terraform review and validate the template. This step compares the requested resources to the state information saved by Terraform and then outputs the planned execution. Resources are not created in Azure.")]),e._v(" "),a("p",[a("code",[e._v("terraform plan")])]),e._v(" "),a("p",[e._v("After you execute the previous command, you should see something like  below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Refreshing Terraform state in-memory prior to plan...\nThe refreshed state will be used to calculate this plan, but will not be\npersisted to local or remote state storage.\n...\n\nNote: You didn’t specify an “-out” parameter to save this plan, so when\n“apply” is called, Terraform can’t guarantee this is what will execute.\n  + azurerm_resource_group.myterraform\n      <snip>\n  + azurerm_virtual_network.myterraformnetwork\n      <snip>\n  + azurerm_network_interface.myterraformnic\n      <snip>\n  + azurerm_network_security_group.myterraformnsg\n      <snip>\n  + azurerm_public_ip.myterraformpublicip\n      <snip>\n  + azurerm_subnet.myterraformsubnet\n      <snip>\n  + azurerm_virtual_machine.myterraformvm\n      <snip>\nPlan: 7 to add, 0 to change, 0 to destroy.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("h4",{attrs:{id:"_7-if-everything-looks-correct-and-you-are-ready-to-build-the-infrastructure-in-azure-apply-the-template-in-terraform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-if-everything-looks-correct-and-you-are-ready-to-build-the-infrastructure-in-azure-apply-the-template-in-terraform","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. If everything looks correct and you are ready to build the infrastructure in Azure, apply the template in Terraform:")]),e._v(" "),a("p",[a("code",[e._v("terraform apply")])]),e._v(" "),a("h4",{attrs:{id:"_8-once-you-are-done-you-can-destroy-the-resources-by-executing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-once-you-are-done-you-can-destroy-the-resources-by-executing","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. Once you are done, you can destroy the resources by executing")]),e._v(" "),a("p",[a("code",[e._v("terraform destroy")])]),e._v(" "),a("h4",{attrs:{id:"_9-you-are-free-to-stop-the-vm-if-you-wish-to-save-money-on-compute-costs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-you-are-free-to-stop-the-vm-if-you-wish-to-save-money-on-compute-costs","aria-hidden":"true"}},[e._v("#")]),e._v(" 9. You are free to stop the VM if you wish to save money on Compute costs.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("The Terraform Marketplace image makes it easy for users to get started using Terraform on Azure, without having to install and configure Terraform manually. There are no software charges for this Terraform VM image. You pay only the Azure Compute usage fees that are assessed based on the size of the virtual machine that's provisioned.  We encourage you to give it a try and share your experience with us.")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/terraform-providers/terraform-provider-azurerm?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform Azure examples"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/terraform?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform on Azure documentation"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.terraform.io/docs/providers/azurerm/index.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform Azure Provider"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);r.default=n.exports}}]);