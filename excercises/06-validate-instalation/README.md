# `06` Validate your installation

If you have already managed to view your website you are ready to validate your installation. This step is to run a verification script to validate what is requested in this practice, to do this follow these steps:

## 1. Enable the public port

So that learnpack can receive the information that will be sent from your machine, it is necessary to enable the public access of the port, that for security is private by default.

To do this select the "Ports" tab in the bottom panel of codespace, there you will see the ports that are being used. You need to publish port `3001` and to do this right click on the port, go to the `Port Visibility` menu and select the `Public` option.

![Public port](../../.learn/assets/public-ports.png)

## 2. Run the validation script `validate-wordpress-site.sh`.

Once you have run the script to see it work, and added it to the cron jobs, it is time to validate.

On the desktop of your Debian machine you will get a folder called `cybersecurity-scripts` and inside it a folder corresponding to the `03-servers` module. Inside this folder you must execute with bash the script `validate-wordpress-site.sh`. When executing it you will be asked for the learnpack address that you can see in the `url.txt` file of this repository.

If everything goes well, in the terminal you will see a message confirming that the data was sent.

## 3. Run the test

Once the script is successfully executed, you will be able to run the test to validate your Windows installation in VirtualBox.

![Script Windows](../../.learn/assets/script-test.png)

## 4. You're done!

If you passed the tests, you have now deployed a Wordpress site on a Debian server. This way you can experiment with scenarios that test your cybersecurity and event monitoring skills.

If you have any problems don't hesitate to ask a mentor or the other support channels offered by 4Geeks.